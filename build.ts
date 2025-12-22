import { readdir, readFile, writeFile, mkdir, copyFile } from "fs/promises";
import { join } from "path";
import { marked } from "marked";
import yaml from "js-yaml";
import { generateRDF } from "./rdf"; // Import RDF generator

// Configuration
const CONTENT_DIR = "./content";
const DIST_DIR = "./dist";
const TEMPLATE_PATH = "./src/template.html";

interface PromptData {
    title: string;
    description: string;
    tags: string[];
    difficulty: string;
    content: string; // HTML content
    slug: string;
    bodyText: string;
}

async function build() {
    console.log("🌱 Starting build...");

    // 1. Prepare dist directory
    await mkdir(DIST_DIR, { recursive: true });

    // 2. Read template
    const template = await readFile(TEMPLATE_PATH, "utf-8");

    // 3. Process content files
    const files = await readdir(CONTENT_DIR);
    const prompts: PromptData[] = [];

    for (const file of files) {
        if (!file.endsWith(".md")) continue;

        const raw = await readFile(join(CONTENT_DIR, file), "utf-8");

        // Manual Frontmatter parsing because we want full control
        const match = raw.match(/^---\n([\s\S]+?)\n---\n([\s\S]*)$/);

        if (!match || match.length < 3) {
            console.warn(`⚠️ Skipping ${file}: No frontmatter found.`);
            continue;
        }

        const fmText = match[1] || "";
        const rawBody = match[2] || "";
        const metadata = yaml.load(fmText) as any;
        const htmlContent = await marked.parse(rawBody);

        // Smart Extraction Logic
        let bodyText = rawBody; // Default fallbock

        // 1. Try to find a code block named "text", "markdown", or just generic fences
        const codeBlockMatch = rawBody.match(/```(?:text|markdown|)\n([\s\S]+?)\n```/);

        // 2. Try to find the "Prompt:" blockquote section (standard in current files)
        const blockquoteMatch = rawBody.match(/\*\*Prompt:\*\*\s*\n((?:> .*\n?)+)/);

        if (codeBlockMatch && codeBlockMatch[1]) {
            bodyText = codeBlockMatch[1];
        } else if (blockquoteMatch && blockquoteMatch[1]) {
            // Clean up blockquote indentation
            bodyText = blockquoteMatch[1]
                .split('\n')
                .map(line => line.replace(/^>\s?/, ''))
                .join('\n')
                .trim();
        }

        prompts.push({
            ...metadata,
            content: htmlContent,
            slug: file.replace(".md", ""),
            bodyText
        });
    }

    console.log(`📄 Processed ${prompts.length} prompts.`);

    // 4. Generate HTML Content (Cards) & Related Strategies logic
    const cardsHtml = prompts.map(prompt => {
        // Simple Jaccard-like similarity (shared tags count)
        const related = prompts
            .filter(p => p.slug !== prompt.slug)
            .map(p => ({
                ...p,
                overlap: p.tags.filter(t => prompt.tags.includes(t)).length
            }))
            .filter(p => p.overlap > 0)
            .sort((a, b) => b.overlap - a.overlap)
            .slice(0, 3);

        const relatedHtml = related.length > 0 ? `
            <div class="related-strategies">
                <h4>Ähnliche Strategien:</h4>
                <ul>
                    ${related.map(r => `<li><a href="#" onclick="filterBySearch('${r.title}'); return false;">${r.title}</a></li>`).join('')}
                </ul>
            </div>
        ` : '';

        return `
        <article class="prompt-card" data-tags="${prompt.tags.join(',')}" data-title="${prompt.title.toLowerCase()}" data-copy-text="${encodeURIComponent(prompt.bodyText)}">
            <header class="card-header">
                <div class="header-top">
                    <span class="difficulty-badge ${prompt.difficulty.toLowerCase()}">${prompt.difficulty}</span>
                    <button class="copy-btn" aria-label="Prompt kopieren" title="Doppelklick auf Karte zum Kopieren">
                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                            <rect x="9" y="9" width="13" height="13" rx="2" ry="2"></rect>
                            <path d="M5 15H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h9a2 2 0 0 1 2 2v1"></path>
                        </svg>
                    </button>
                </div>
                <h2>${prompt.title}</h2>
            </header>
            <div class="card-meta">
                <!-- Meta removed -->
            </div>
            <p class="description">${prompt.description}</p>
            <div class="tags">
                ${prompt.tags.map(tag => `<span class="tag">#${tag}</span>`).join('')}
            </div>
            <details>
                <summary>Strategie anzeigen</summary>
                <div class="prompt-content markdown-body">
                    ${prompt.content}
                    ${relatedHtml}
                </div>
            </details>
        </article>
    `}).join("\n");

    // 5. Generate JSON-LD (Collection)
    const jsonLd = {
        "@context": "https://schema.org",
        "@type": "ItemList",
        "name": "Prompts",
        "description": "A collection of AI prompting strategies.",
        "itemListElement": prompts.map((prompt, index) => ({
            "@type": "ListItem",
            "position": index + 1,
            "item": {
                "@type": "CreativeWork", // Or "HowTo"
                "name": prompt.title,
                "description": prompt.description,
                "keywords": prompt.tags.join(", "),
                "text": prompt.content // Note: Maybe strip HTML for pure text representation if needed
            }
        }))
    };

    // 6. Assemble Final HTML
    const finalHtml = template
        .replace("{{TITLE}}", "Prompts")
        .replace("{{CONTENT}}", cardsHtml)
        .replace("{{JSON_LD}}", JSON.stringify(jsonLd, null, 2));

    await writeFile(join(DIST_DIR, "index.html"), finalHtml);

    // 7. Copy Assets
    try {
        await copyFile("./src/style.css", join(DIST_DIR, "style.css"));
        await copyFile("./src/script.js", join(DIST_DIR, "script.js"));
    } catch (e) {
        console.log("⚠️ CSS/JS not found yet, skipping copy.");
    }

    // 8. Generate RDF
    await generateRDF(prompts, DIST_DIR);

    console.log("✅ Build complete! Open dist/index.html");
}

build().catch(console.error);
