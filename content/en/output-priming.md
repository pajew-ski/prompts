---
title: Output Priming
level: Intermediate
tags: format style
description: Set the beginning of the answer so that format and tone are fixed from the first line.
---

A language model continues text. Real priming means the answer already begins with your text and the model writes on from there. This works wherever you control the start of the model's answer: completion APIs, and chat APIs that allow a prefilled assistant message. Not all current models support it.

In an ordinary chat window you cannot prefill the answer. The closest equivalent is asking the model to begin with a given sentence.

## Example

In a chat:

```prompt
Write a ghost story of about 300 words for teenagers.
Begin your answer with exactly this sentence and continue without any preamble:
"It was a dark and stormy night when the old caretaker saw the light burning in the basement."
```

Through an API with a prefilled answer. You write the second message yourself as the start of the model's reply:

````text
User: Write a Python script that lists all .txt files in a folder.

Assistant (prefilled):
```python
import os
````

The model continues right inside the code block and skips the introduction. In the same way, an answer that starts with `{` forces JSON to follow.

## When it helps

When an answer must have a fixed format or start without preamble, for example when another program processes it. For guaranteed valid JSON, structured outputs with a schema are the better choice where the API offers them. In a chat, asking for an opening sentence is only an instruction, not a guarantee, and is usually but not always followed.
