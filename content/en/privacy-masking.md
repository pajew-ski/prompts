---
title: Privacy Masking
level: Intermediate
tags: privacy security
description: Replace personal data with numbered placeholders before sending, and swap them back locally afterwards.
---

Before you send text containing customer data to a model, replace names, addresses, account numbers and the like with placeholders. Number them and keep them consistent: `[PERSON_1]`, `[PERSON_2]`, `[IBAN_1]`. That way the model can keep the parties apart, and the same person has the same label everywhere. The mapping from placeholder to real value stays with you, for example in a local table, and you swap the placeholders back after the answer.

## Example

```prompt
Below is a customer complaint. I have replaced personal data with numbered placeholders. Keep these placeholders unchanged in your answer so I can swap them back later.

Task: Summarize the issue in two sentences and draft a factual reply to the customer.

Text:
"Dear Sir or Madam, my name is [PERSON_1], customer number [CUSTOMER_ID_1]. On 3 March I paid invoice [INVOICE_1] for 240 euros from my account [IBAN_1]. Even so, your employee [PERSON_2] sent me a payment reminder yesterday. Please look into this and withdraw the reminder fee."
```

## When it helps

Any text with data about customers, employees or patients, especially when there is no data processing agreement with the provider. The task usually works just as well with placeholders. Masking is not complete protection, though: context can also identify a person, for example a rare job title combined with a small town. Check details like that as well and generalize them where needed.
