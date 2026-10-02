---
title: Maieutic Prompting
level: Fortgeschritten
tags: prüfung reasoning
description: Das Modell erklärt eine Aussage als wahr und als falsch und prüft, welche Erklärung ohne Widerspruch bleibt.
---

Der Name verweist auf die Mäeutik, die "Hebammenkunst" des Sokrates: Wissen durch Nachfragen ans Licht bringen. Maieutic Prompting (Jung et al., 2022) lässt das Modell für eine Aussage zwei Erklärungen erzeugen, eine dafür und eine dagegen, und fragt weiter: Was folgt aus jeder Erklärung, und passt das zusammen? Gewählt wird die Antwort, deren Erklärungen ohne Widerspruch bleiben.

Im Paper baut ein Programm daraus einen Baum von Erklärungen und löst die Widersprüche mit einem logischen Verfahren auf. Der Prompt unten bildet das in einem Durchgang nach.

## Beispiel

```prompt
Aussage: [z. B. Glas ist eine sehr zähflüssige Flüssigkeit, deshalb sind alte Kirchenfenster unten dicker.]

Prüfe diese Aussage, bevor du urteilst. Schreib zuerst die beste Erklärung dafür, dass sie wahr ist, und dann die beste Erklärung dafür, dass sie falsch ist. Leite aus jeder Erklärung zwei oder drei Folgerungen ab, die ebenfalls stimmen müssten, wenn die Erklärung richtig wäre. Prüfe diese Folgerungen: Welche sind offensichtlich falsch, und welche widersprechen sich? Entscheide danach, welche Erklärung ohne Widerspruch bleibt, und gib dein Urteil mit einer kurzen Begründung. Wenn beide Erklärungen Widersprüche enthalten, sag das, statt dich festzulegen.
```

## Wann es hilft

Bei Ja-oder-Nein-Fragen, bei denen das Modell zu schnellen oder schwankenden Antworten neigt, bei Faktenchecks von Behauptungen und bei verbreiteten Irrtümern. Die Methode prüft Widerspruchsfreiheit, nicht Wahrheit: Zwei Aussagen können gut zusammenpassen und trotzdem auf einem falschen Fakt beruhen. Für offene Fragen ohne klares Wahr oder Falsch ist sie ungeeignet.
