import { spawn } from "bun";

const command = process.argv[2];

const commands: Record<string, () => void> = {
    build: async () => {
        const proc = spawn(["bun", "run", "build.ts"], {
            stdout: "inherit",
            stderr: "inherit",
        });
        await proc.exited;
    },
    serve: async () => {
        const proc = spawn(["bun", "run", "serve.ts"], {
            stdout: "inherit",
            stderr: "inherit",
        });
        await proc.exited;
    },
    test: async () => {
        const proc = spawn(["bun", "test"], {
            stdout: "inherit",
            stderr: "inherit",
        });
        await proc.exited;
    },
    help: () => {
        console.log(`
Usage: bun run index.ts <command>

Commands:
  build   Generate the static site
  serve   Start the local development server
  test    Run the test suite
  help    Show this help message
        `);
    },
};

const cmd = command && Object.hasOwn(commands, command) ? commands[command] : undefined;
if (cmd) {
    cmd();
} else {
    commands.help!();
}