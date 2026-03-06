import { serve } from "bun";
import { join } from "node:path";

const PORT = parseInt(process.env.INGRESS_PORT || "3000", 10);
const HOST = process.env.INGRESS_HOST || "0.0.0.0";
const ROOT = "./dist";

serve({
    port: PORT,
    hostname: HOST,
    async fetch(req) {
        const url = new URL(req.url);
        let path = url.pathname;

        // Strip ingress base path (X-Ingress-Path header) if present
        const ingressPath = req.headers.get("x-ingress-path");
        if (ingressPath && path.startsWith(ingressPath)) {
            path = path.slice(ingressPath.length) || "/";
        }

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

console.log(`🌱 Prompts running at http://${HOST}:${PORT}`);
