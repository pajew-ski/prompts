---
title: Simulated RAG
level: Mittel
tags: dokumente kontext
description: Füg die passenden Unterlagen selbst in den Prompt ein und lass das Modell nur aus ihnen antworten.
---

Retrieval-Augmented Generation (RAG) heißt: Ein System sucht zu einer Frage passende Textstellen heraus und gibt sie dem Modell mit, damit es aus ihnen antwortet. Ohne ein solches System übernimmst du die Suche selbst und fügst die Unterlagen in den Prompt ein. Mit den großen Kontextfenstern aktueller Modelle kannst du oft ganze Dokumente einfügen statt einzelner Ausschnitte.

Zwei Dinge machen den Unterschied. Die Dokumente stehen vorn, die Frage am Ende. Und das Modell zitiert zuerst die relevanten Stellen und antwortet dann aus ihnen, sodass du siehst, worauf die Antwort beruht.

## Beispiel

```prompt
<dokumente>
<dokument nr="1" titel="[Titel, z. B. Bedienungsanleitung]">
[Inhalt]
</dokument>
<dokument nr="2" titel="[Titel, z. B. FAQ des Herstellers]">
[Inhalt]
</dokument>
</dokumente>

Beantworte die Frage unten nur anhand dieser Dokumente. Ich brauche eine Antwort, auf die ich mich verlassen kann, deshalb zählt nur, was dort steht, nicht dein allgemeines Wissen.

Zitiere zuerst in <zitate>-Tags wörtlich die Stellen, die für die Frage relevant sind, jeweils mit Dokumentnummer. Beantworte danach die Frage in <antwort>-Tags und stütz dich dabei nur auf diese Zitate. Wenn die Dokumente die Frage nicht beantworten, schreib: "Steht nicht in den Unterlagen."

Frage: [Deine Frage, z. B. Wie setze ich das Gerät auf die Werkseinstellungen zurück?]
```

## Wann es hilft

Bei Fragen zu Handbüchern, Verträgen, Richtlinien oder internen Dokumenten, die das Modell nicht kennt oder nicht in der aktuellen Fassung. Der Zitatschritt macht die Antwort prüfbar und senkt die Neigung, Lücken mit plausiblen Erfindungen zu füllen; ganz ausschließen kann er das nicht. Prüf die Zitate stichprobenartig im Original. Sind die Unterlagen größer als das Kontextfenster, brauchst du doch eine Vorauswahl, von Hand oder mit einer echten Suche.
