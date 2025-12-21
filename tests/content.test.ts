import { describe, expect, test } from "bun:test";
import { readdir, readFile } from "node:fs/promises";
import { join } from "node:path";
import yaml from "js-yaml";

const CONTENT_DIR = "./content";

describe("Content Validation", async () => {
    const files = await readdir(CONTENT_DIR);

    for (const file of files) {
        if (!file.endsWith(".md")) continue;

        test(`Validate ${file}`, async () => {
            const content = await readFile(join(CONTENT_DIR, file), "utf-8");
            const match = content.match(/^---\n([\s\S]+?)\n---\n/);

            expect(match).not.toBeNull();
            if (!match) throw new Error("No frontmatter found");
            const frontmatter = yaml.load(match[1]!) as any;

            expect(frontmatter.title).toBeString();
            expect(frontmatter.title.length).toBeGreaterThan(0);

            expect(frontmatter.description).toBeString();
            expect(frontmatter.description.length).toBeGreaterThan(0);

            expect(frontmatter.tags).toBeArray();
            expect(frontmatter.tags.length).toBeGreaterThan(0);

            expect(frontmatter.difficulty).toBeString();
            expect(["Anfänger", "Mittel", "Fortgeschritten"]).toContain(frontmatter.difficulty);

            // Enforce new format: Prompt must be in a code block
            // We strip the frontmatter to check the body
            const body = content.replace(/^---\n([\s\S]+?)\n---\n/, "");
            const hasCodeBlock = /```(?:text|markdown)\n[\s\S]+?\n```/.test(body);

            expect(hasCodeBlock).toBeTrue();
        });
    }
});
