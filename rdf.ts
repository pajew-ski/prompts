import { writeFile } from "fs/promises";
import { join } from "path";

// Configuration
const BASE_URI = "http://localhost:3000/";

interface RDFPrompt {
    slug: string;
    title: string;
    description: string;
    tags: string[];
    difficulty: string;
}

export async function generateRDF(prompts: RDFPrompt[], distDir: string) {
    console.log("🕸️  Generating Semantic Ontology...");

    const ttlContent = generateTurtle(prompts);
    const jsonLdContent = generateJsonLd(prompts);

    await writeFile(join(distDir, "graph.ttl"), ttlContent);
    await writeFile(join(distDir, "graph.jsonld"), JSON.stringify(jsonLdContent, null, 2));

    console.log("✅ RDF Graphs generated (Turtle + JSON-LD)");
}

function generateTurtle(prompts: RDFPrompt[]): string {
    let ttl = `@prefix schema: <http://schema.org/> .
@prefix skos: <http://www.w3.org/2004/02/skos/core#> .
@prefix dcterms: <http://purl.org/dc/terms/> .
@prefix xsd: <http://www.w3.org/2001/XMLSchema#> .
@prefix : <${BASE_URI}> .

:PromptCollection a schema:Collection ;
    schema:name "Prompts" ;
    schema:description "A collection of curated AI prompting strategies" ;
    schema:hasPart ${prompts.map(p => `:${p.slug}`).join(", ")} .

`;

    // 1. Define Concepts (Tags)
    const allTags = new Set(prompts.flatMap(p => p.tags));
    ttl += `# --- Tags (SKOS Concepts) ---\n`;
    allTags.forEach(tag => {
        const tagSlug = tag.toLowerCase().replace(/[^a-z0-9]/g, "-");
        ttl += `:tag-${tagSlug} a skos:Concept ;
    skos:prefLabel "${tag}" ;
    skos:inScheme :PromptTaxonomy .
`;
    });

    ttl += `\n:PromptTaxonomy a skos:ConceptScheme ; skos:prefLabel "Prompting Taxonomy" .\n\n`;

    // 2. Define Prompts (TechArticles)
    ttl += `# --- Prompts (Schema.org TechArticles) ---\n`;
    prompts.forEach(p => {
        const tagSlugs = p.tags.map(t => `:tag-${t.toLowerCase().replace(/[^a-z0-9]/g, "-")}`).join(", ");

        ttl += `:${p.slug} a schema:TechArticle ;
    schema:headline "${escapeString(p.title)}" ;
    schema:description "${escapeString(p.description)}" ;
    schema:proficiencyLevel "${p.difficulty}" ;
    schema:inLanguage "de" ;
    dcterms:format "text/markdown" ;
    ${tagSlugs ? `schema:keywords ${tagSlugs} ;` : ""}
    schema:url <${BASE_URI}${p.slug}> .

`;
    });

    return ttl;
}

function generateJsonLd(prompts: RDFPrompt[]): object {
    return {
        "@context": {
            "schema": "http://schema.org/",
            "skos": "http://www.w3.org/2004/02/skos/core#",
            "dcterms": "http://purl.org/dc/terms/"
        },
        "@graph": prompts.map(p => ({
            "@id": `${BASE_URI}${p.slug}`,
            "@type": "schema:TechArticle",
            "schema:headline": p.title,
            "schema:description": p.description,
            "schema:proficiencyLevel": p.difficulty,
            "schema:keywords": p.tags
        }))
    };
}

function escapeString(str: string): string {
    return str.replace(/\\/g, '\\\\').replace(/"/g, '\\"');
}
