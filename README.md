# PROMPTS

**PROMPTS** is a comprehensive collection of over 100 AI prompting strategies, curated and documented in **German**. This project serves as a high-quality resource for German-speaking users to explore, understand, and apply advanced prompting techniques for Large Language Models (LLMs).

The project is built as a static site generator using **Bun**, ensuring fast builds and a lightweight footprint. It features a semantic ontology (RDF) for machine-readability and a clean, responsive frontend for easy browsing.

## Features

- **🇩🇪 German Language Content**: All prompts and strategies are written in German, catering specifically to the DACH region and German-speaking AI enthusiasts.
- **📚 Extensive Library**: Contains 100+ distinct prompting strategies, range from basic techniques to advanced methods like *Chain-of-Thought*, *ReAct*, and *Tree of Thoughts*.
- **⚡ Fast Static Generation**: Powered by [Bun](https://bun.com), the build process parses Markdown content and generates a static HTML website instantly.
- **🕸️ Semantic Data**: Automatically generates RDF (Resource Description Framework) data, exporting the collection as Turtle `.ttl` and JSON-LD, making the strategies machine-readable and semantically linked.
- **🔍 Search & Discovery**:
    - **Search**: Real-time search by title and tags.
    - **Filtering**: Filter strategies by difficulty (Beginner, Intermediate, Advanced).
    - **Related Strategies**: Automatically suggests related prompts based on tag overlap.
- **🎨 Modern Frontend**:
    - Minimalist, distraction-free design.
    - Dark/Light mode support.
    - Tag-based navigation.

## Project Structure

- **`content/`**: The heart of the project. Contains over 100 Markdown files (`.md`), each representing a specific prompting strategy.
    - Each file includes YAML frontmatter for metadata (Title, Difficulty, Tags) and the strategy content.
- **`build.ts`**: The main build script. It reads the `content/` directory, parses Markdown and Frontmatter, and generates the `dist/` directory.
- **`rdf.ts`**: Handles the generation of semantic data (RDF/Turtle) for the collection.
- **`serve.ts`**: A simple development server to preview the static site locally.
- **`src/`**: Contains frontend assets like `template.html`, `style.css`, and `script.js`.
- **`dist/`**: The output directory where the static site is generated.

## Getting Started

### Prerequisites

- **[Bun](https://bun.com)** (v1.0 or higher) must be installed on your machine.

### Installation

Clone the repository and install dependencies:

```bash
git clone <repository-url>
cd prompts
bun install
```

### Usage

1. **Build the Project**:
   Generate the static website from the markdown content.
   ```bash
   bun run build.ts
   ```
   This will populate the `dist/` folder with `index.html`, semantic data files, and assets.

2. **Run Locally**:
   Start a local server to preview the site.
   ```bash
   bun run serve.ts
   ```
   Open your browser at `http://localhost:3000`.

## License

[MIT License](LICENSE) (or clear state if unknown)
