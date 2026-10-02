---
title: Sandwich Prompting
level: Beginner
tags: structure documents
description: With long material, state the task briefly up front, insert the material, and repeat the key instruction at the end.
---

When a prompt contains long text, tables or code, order matters. Put the material first and the actual question with its instructions at the end. A short sentence at the start says what it is about, so the material is read with the right goal in mind. Repeat the most important instruction after the material, because it is then the last thing the model reads before answering.

## Example

```prompt
I need an SQL query for our database. The schema and the question are below.

<schema>
[database schema]
</schema>

Question: Which ten customers had the highest revenue last quarter, with name, revenue and number of orders?

Output only the SQL query as a code block, with no explanation. Use only tables and columns that appear in the schema above.
```

## When it helps

Whenever the material is long: contracts, transcripts, database schemas, entire files. A question that appears only at the start is more easily lost behind the material. Tags such as `<schema>` keep material and instructions cleanly apart. For short prompts with only a few lines of material, the order makes little difference.
