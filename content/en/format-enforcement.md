---
title: Format Enforcement (JSON Mode)
level: Intermediate
tags: format structure
description: The model returns data in a fixed, machine-readable format your code can process directly.
---

When code consumes the answer, the format has to be right every time. The most reliable route is the API: many interfaces offer structured outputs or a JSON schema mode. You pass the schema as a parameter, and the output is guaranteed to be valid JSON in that shape. If your API offers this, use it instead of a prompt.

In a chat, or without such a mode, the prompt does the job: it contains the schema, one filled-in example, and a request to return JSON only. The example shows what the values should look like, not just which fields exist.

## Example

```prompt
Analyze the customer review below and return the result as JSON. The output is read directly by a program, so return only the JSON object, with no introduction, explanation or Markdown code fence.

Shape of the output, with example values:
{
  "sentiment": "negative",
  "score": -0.6,
  "topics": ["delivery time", "packaging"]
}

Rules:
- sentiment is "positive", "negative" or "neutral".
- score is a number from -1.0 (very negative) to 1.0 (very positive).
- topics is a list of short keywords, empty if no topics are identifiable.

<review>
[Text of the review]
</review>
```

## When it helps

For extraction, classification and anything that feeds into a database, a spreadsheet or a script. Without an API mode some risk remains: parse the output in your code with a JSON parser and retry the request if parsing fails. Keep the schema flat and list the allowed values explicitly, because every free-form field is a place where the output can drift.
