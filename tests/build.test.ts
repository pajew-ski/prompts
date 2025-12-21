import { describe, expect, test } from "bun:test";
import { exists, unlink } from "node:fs/promises";

const DIST_FILE = "./dist/index.html";

describe("Build Process", () => {
    test("Build generates index.html", async () => {
        // Run the build script
        const proc = Bun.spawn([process.argv[0] || "bun", "run", "build.ts"]);
        await proc.exited;

        expect(await exists(DIST_FILE)).toBe(true);
    });
});
