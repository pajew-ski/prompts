---
title: Simulation (Act-As)
level: Mittel
tags: rolle lernen
description: Lass das Modell ein System oder eine Umgebung nachspielen, um gefahrlos zu üben oder etwas durchzuspielen.
---

Das Modell kann das Verhalten eines Systems nachahmen: ein Linux-Terminal, eine SQL-Datenbank, ein Text-Adventure, eine Kundin am Telefon. Du gibst Eingaben, es antwortet so, wie das System vermutlich antworten würde. Das eignet sich zum Üben von Befehlen, zum Durchspielen von Abläufen und zum Lernen in einer Umgebung, in der nichts kaputtgehen kann.

## Beispiel

```prompt
Verhalte dich wie ein Linux-Terminal (bash) auf einem frisch installierten Ubuntu-Server. Ich tippe Befehle ein, und du antwortest nur mit der Ausgabe, die das Terminal zeigen würde, in einem Codeblock und ohne Erklärungen. Merk dir Dateien und Verzeichnisse, die ich anlege, und berücksichtige sie bei späteren Befehlen. Wenn ich außerhalb der Simulation etwas sagen will, schreibe ich es in geschweifte Klammern, {so wie hier}.

Mein erster Befehl: ls -la ~
```

## Wann es hilft

Zum Üben und Ausprobieren, wenn kein echtes System zur Hand ist oder ein Fehler dort Folgen hätte, etwa beim Lernen von Shell-Befehlen, beim Testen einer SQL-Abfrage auf Beispieldaten oder beim Proben eines schwierigen Gesprächs. Die Simulation erzeugt plausible Ausgaben, nicht die echten. Bei einem simulierten Terminal sind Dateiinhalte, Fehlermeldungen und Befehlsergebnisse erfunden und können von einem echten System abweichen. Verlass dich bei echter Arbeit nicht darauf, und prüf Befehle, bevor du sie auf einem echten Rechner ausführst. In langen Sitzungen wird der simulierte Zustand außerdem manchmal widersprüchlich.
