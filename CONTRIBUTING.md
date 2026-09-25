# Mitmachen

Die Seite ist eine Datei, `index.html`. Eine Strategie ist darin ein `<article>`-Block im Container `#list`. Es gibt keinen Build, keinen Ordner mit Quelldateien und keine Abhängigkeit: Datei öffnen, Block einfügen, Datei im Browser öffnen, fertig.

## Eine Strategie hinzufügen

Kopiere einen bestehenden Block und passe ihn an. Die Form:

```html
<article class="strategy" id="mein-slug" data-level="Mittel" data-tags="struktur analyse" itemscope itemtype="https://schema.org/HowTo">
  <header>
    <h3 itemprop="name"><a href="#mein-slug">Name der Strategie</a></h3>
    <span class="level">Mittel</span>
  </header>
  <p class="description" itemprop="description">Ein Satz, was die Strategie bewirkt.</p>
  <ul class="tags" itemprop="keywords"><li><button type="button" class="tag">struktur</button></li><li><button type="button" class="tag">analyse</button></li></ul>
  <details>
    <summary>Erklärung</summary>
    <p>Worum es geht.</p>
    <h4>Beispiel</h4>
    <pre class="prompt" tabindex="0">Der Prompt-Text, genau so, wie er eingefügt werden soll.</pre>
    <h4>Strategie</h4>
    <p>Wann und warum es funktioniert.</p>
  </details>
  <button type="button" class="button copy">Prompt kopieren</button>
</article>
```

Regeln:

- `id` ist der Slug: klein, mit Bindestrichen, eindeutig. Er ist zugleich der Link zur Karte (`#mein-slug`) und steht deshalb zweimal im Block.
- `data-level` und der sichtbare Text in `.level` sind dasselbe Wort, eines von `Anfänger`, `Mittel`, `Fortgeschritten`.
- Schlagworte klein, ohne Leerzeichen; in `data-tags` durch Leerzeichen getrennt und pro Schlagwort ein Chip in der Liste. Vorhandene Schlagworte wiederverwenden, denn über sie findet die Seite verwandte Strategien.
- Genau ein `pre.prompt` pro Karte. Der Inhalt ist HTML-escaped (`&lt;`, `&gt;`, `&amp;`, `&quot;`) und nicht eingerückt, weil der Knopf ihn wörtlich kopiert.
- Überschriften in der Erklärung sind `h4`. Weitere Absätze, Listen, Zitate und Tabellen sind erlaubt.
- Deutsch, schlichte Sätze, Präsens, keine Ausrufezeichen, keine Emoji.
- Die Reihenfolge der Blöcke in der Datei ist egal; die Seite sortiert nach Titel.

## Prüfen

`index.html` im Browser öffnen. Die Zahl neben der Suche muss um eins gestiegen sein, die neue Karte muss über Titel, Schlagwort und Stufe zu finden sein, und der Kopierknopf muss den Prompt-Text liefern. Dann ein Pull Request.

Keine urheberrechtlich geschützten Texte. Danke.
