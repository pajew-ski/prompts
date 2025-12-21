import { serve } from "bun";
import { readdir } from "node:fs/promises";
import { join } from "node:path";

const PORT = 3000;
const ROOT = "./dist";

serve({
    port: PORT,
    async fetch(req) {
        const url = new URL(req.url);
        let path = url.pathname;

        // Default to index.html
        if (path === "/" || path === "") {
            path = "/index.html";
        }

        const filePath = join(ROOT, path);
        const file = Bun.file(filePath);

        if (await file.exists()) {
            return new Response(file);
        }

        return new Response("Not found", { status: 404 });
    },
});

console.log(`🌱 Prompts running at http://localhost:${PORT}`);
