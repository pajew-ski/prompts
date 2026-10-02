---
title: Tabular Chain of Thought
level: Fortgeschritten
tags: reasoning struktur format
description: Das Modell rechnet eine Aufgabe in einer Tabelle durch, eine Zeile pro Schritt, und gibt dann die Antwort.
---

Bei Tabular Chain of Thought, kurz Tab-CoT (Jin & Lu, 2023), läuft das Nachdenken selbst in einer Tabelle. Jede Zeile ist ein Schritt, die Spalten halten fest, welche Teilfrage gestellt wird, wie sie bearbeitet wird und was herauskommt. Im Paper genügt dafür eine Kopfzeile mit den Spalten Schritt, Teilfrage, Vorgehen und Ergebnis, die das Modell Zeile für Zeile fortsetzt. Die Tabelle hält die Schritte kurz und zeigt, welches Zwischenergebnis in welchen Schritt eingeht.

## Beispiel

```prompt
Aufgabe: Ein Café verkauft am Montag 48 Croissants. Am Dienstag verkauft es ein Viertel mehr als am Montag, am Mittwoch 15 weniger als am Dienstag. Ein Croissant kostet 2,40 Euro. Wie viel Umsatz macht das Café an diesen drei Tagen mit Croissants?

Löse die Aufgabe in einer Markdown-Tabelle mit diesen Spalten:
| Schritt | Teilfrage | Vorgehen | Ergebnis |

Schreib eine Zeile pro Schritt und halte jede Zelle knapp. Gib nach der Tabelle die Antwort in einem Satz.
```

Erwartet: Dienstag 60, Mittwoch 45, zusammen 153 Croissants, Umsatz 367,20 Euro.

## Wann es hilft

Bei Rechenaufgaben und mehrstufigen Problemen, deren Schritte sich gleichförmig aufschreiben lassen, und wenn du Zwischenergebnisse schnell überfliegen willst. Die Tabelle ist kompakter als Chain of Thought in Fließtext. Für Probleme, die Abwägungen oder längere Begründungen brauchen, ist sie zu eng; dort passt normales Chain of Thought besser. Reasoning-Modelle denken intern ohnehin schrittweise. Bei ihnen ist die Tabelle vor allem ein Ausgabeformat, mit dem du den Rechenweg nachprüfen kannst.
