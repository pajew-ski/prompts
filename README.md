# prompts

A hundred prompting strategies for language models, in English and German, as one page, plus skills and agent instructions in the standard formats `SKILL.md` and `AGENTS.md`. Search, unfold, copy. One HTML file with everything in it; the sources are Markdown files from which `build.js` writes the cards into the page, and the standard files sit next to them where tools expect them.

**Site**: [pajew-ski.github.io/prompts](https://pajew-ski.github.io/prompts/)

## What is in it

A prompt is an instruction, question or input given to a person or an AI to trigger a specific action or response. A prompting strategy is a reusable pattern for one: Chain of Thought has the model write out intermediate steps, Few-Shot shows it examples, a role prompt gives it a perspective. Each card on the page is one such strategy with a sentence on what it does, tags, an explanation of where it comes from and when it helps, and an example prompt that a button copies to the clipboard.

The explanations say what a technique does and where it stops helping, including what current models change: models with built-in reasoning no longer need "think step by step", promised tips and emotional pressure are not a reliable lever, delimiters reduce prompt injection but do not prevent it. Where a technique comes from a paper, the card names it.

Three levels say how much groundwork a strategy needs: Beginner works with one sentence in the prompt, Intermediate needs some structure, Advanced relies on several steps or several prompts.

The search runs in the browser over titles, tags and text and sits at the top of the page; Enter copies the prompt of the first hit, `/` jumps into the field, Esc clears it. Clicking a tag filters by it, and a card's title is its link. Nothing is loaded later, nothing is sent.

## Skills and agents

Two more kinds of cards are prompts by the same definition, except that the agent reads them from a fixed path instead of a person pasting them. They are files in standard formats that coding agents read:

- **Skills** in the [Agent Skills format](https://agentskills.io): `skills/<name>/SKILL.md` with `name` and `description` at the top and the instructions below. Claude Code, Codex and other agents load a skill when its description matches the task. The skills here are written in German.
- **Agents** in the [AGENTS.md format](https://agents.md): `agents/<name>/AGENTS.md`, the instructions that tell a coding agent, from the root of a repository, how to work in it. They are written in English.

The card shows the file; one button copies it, another saves it under its name. The files live in the repository so tools find them at their path; the card is generated from the file. New skills and agents are added as files, see [CONTRIBUTING.md](CONTRIBUTING.md).

## Languages

The page speaks English and German. It shows German when the browser's first language is German and English otherwise; `?lang=de` or `?lang=en` overrides that. Every strategy exists as `content/de/<slug>.md` and `content/en/<slug>.md`, and the build refuses a strategy that is missing in one language or whose level or tags differ between the two.

## Running it locally

```bash
git clone https://github.com/pajew-ski/prompts.git
cd prompts
open index.html
```

The whole app is `index.html`; copy that one file anywhere and it runs. Any static host serves it as is; on GitHub Pages, from the root of `main`. The footer links adapt to a fork automatically.

The cards in the page are generated: `node build.js` writes them from `content/`, `skills/` and `agents/` into `index.html`, with no dependency beyond Node. The generated page is committed; `node build.js --check` verifies in CI that it matches its sources.

As a Home Assistant add-on, the page ships through the [Home Assistant Apps Collection](https://github.com/pajew-ski/home-assistant-apps-collection), together with its sibling apps. Every change to `index.html` on `main` becomes a new add-on version automatically.

## Contributing

A strategy is two Markdown files under `content/`, a skill or an agent its standard file; [CONTRIBUTING.md](CONTRIBUTING.md) shows all three. Everything here was built by a coding agent from [AGENTS.md](AGENTS.md), the design and behavior spec of the page. It is a sibling of [open entrainer](https://github.com/pajew-ski/open-entrainer), [open desensitizer](https://github.com/pajew-ski/open-desensitizer) and [open helix](https://github.com/pajew-ski/open-helix).

## License

[MIT](LICENSE).
