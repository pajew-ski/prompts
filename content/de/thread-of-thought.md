---
title: Thread of Thought
level: Fortgeschritten
tags: dokumente kontext
description: Lass das Modell langen, unübersichtlichen Kontext abschnittsweise durchgehen, zusammenfassen und analysieren, bevor es antwortet.
---

Thread of Thought (Zhou et al., 2023) ist für Fälle gedacht, in denen viel Kontext vorliegt, aber nur ein Teil davon zur Frage gehört, etwa mehrere abgerufene Dokumente oder ein langes Gesprächsprotokoll. Statt den Kontext auf einmal zu verarbeiten, geht das Modell ihn in überschaubaren Teilen durch, fasst jeden zusammen und prüft, was er zur Frage beiträgt. Der Auslösesatz aus dem Paper lautet übersetzt: Geh diesen Kontext in überschaubaren Teilen Schritt für Schritt durch und fasse dabei zusammen und analysiere. Ein zweiter Schritt leitet aus dieser Durchsicht die Antwort ab.

## Beispiel

```prompt
<kontext>
[Dein Kontext, z. B. mehrere Dokumente, Suchergebnisse oder ein E-Mail-Verlauf]
</kontext>

Frage: [Deine Frage]

Geh diesen Kontext in überschaubaren Teilen Schritt für Schritt durch und fasse dabei zusammen und analysiere. Notiere zu jedem Teil in ein bis zwei Sätzen, was er enthält und ob er zur Frage beiträgt. Teile, die nichts beitragen, kennzeichnest du kurz als nicht relevant.

Beantworte danach die Frage nur aus den relevanten Teilen und nenne, auf welche du dich stützt.
```

## Wann es hilft

Bei langem, gemischtem Kontext mit vielen Ablenkungen: Suchergebnisse, die nur teilweise passen, Protokolle, E-Mail-Verläufe. Die abschnittsweise Durchsicht zeigt, welche Teile das Modell für relevant hält, und das kannst du prüfen. Bei kurzem, sauberem Kontext ist der Zwischenschritt überflüssig. Bei sehr langem Kontext wird die Durchsicht selbst lang; dann lohnt es sich, vorher grob auszusortieren.
