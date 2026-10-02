---
title: Constraints-Based Prompting
level: Fortgeschritten
tags: kreativität schreiben
description: Kreativität durch strenge formale Vorgaben anregen, nach dem Vorbild der Oulipo.
---

Oulipo ist eine französische Gruppe von Schriftstellern, die unter selbst gewählten formalen Zwängen schreiben. Das bekannteste Beispiel ist Georges Perecs Roman "La Disparition", der ganz ohne den Buchstaben e auskommt. Die Idee: Eine strenge Vorgabe schließt die naheliegenden Formulierungen aus und verlangt andere Lösungen. Bei Sprachmodellen führen solche Vorgaben oft weg von den gängigsten Wendungen.

## Beispiel

```prompt
Schreibe eine kurze Geschichte über einen Roboter, der seinen Dienst quittiert.

Vorgaben:
1. Genau 100 Wörter.
2. Nur Dialog, keine Erzählersätze.
3. Kein einziges Adjektiv.
4. Der Roboter sagt nie direkt, warum er geht. Der Grund soll sich aus dem Gespräch ergeben.

Prüfe am Ende jede Vorgabe und überarbeite den Text, wenn eine davon verletzt ist.
```

## Wann es hilft

Wenn Texte zu glatt und austauschbar klingen, für Schreibübungen und kreative Formate. Vorgaben zu Struktur, Perspektive oder Wortarten funktionieren zuverlässiger als Vorgaben auf Buchstabenebene. Ein Lipogramm wie "kein Wort mit e" ist für Modelle schwer, weil sie Text in Tokens verarbeiten, also in Wortstücken, nicht in einzelnen Buchstaben. Auch genaue Wortzahlen treffen sie oft nur ungefähr. Zähl nach, wenn es darauf ankommt.
