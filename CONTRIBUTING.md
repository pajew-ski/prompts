# Mitmachen

Die Seite ist eine Datei, `index.html`. Eine Strategie ist darin ein `<article>`-Block im Container `#list`. Es gibt keinen Build und keine Abhängigkeit: Datei öffnen, Block einfügen, Datei im Browser öffnen, fertig. Skills und Agenten sind zusätzlich Dateien im Repo, siehe unten.

## Eine Strategie hinzufügen

Kopiere einen bestehenden Block und passe ihn an. Die Form:

```html
<article class="card" data-kind="strategy" id="mein-slug" data-level="Mittel" data-tags="struktur analyse" itemscope itemtype="https://schema.org/HowTo">
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

## Einen Skill hinzufügen

Ein Skill folgt dem Agent-Skills-Standard: ein Ordner `skills/<name>/` mit einer Datei `SKILL.md`.

```markdown
---
name: mein-skill
description: Was der Skill tut und wann ein Agent ihn laden soll, in einem Absatz.
license: MIT
---

# Mein Skill

Die Anleitung, die der Agent befolgt.
```

- `name` ist klein, mit Bindestrichen, höchstens 64 Zeichen, und gleich dem Ordnernamen. `description` höchstens 1024 Zeichen; sie entscheidet, ob ein Agent den Skill lädt, also steht dort der Anlass, nicht nur der Inhalt.
- Dann die Karte in `index.html`: einen bestehenden Skill-Block kopieren (`data-kind="skill"`, `id="skill-<name>"`, `data-file="skills/<name>/SKILL.md"`), Titel, Beschreibung, Schlagworte und den Link im Kopf der Details anpassen, und die ganze Datei HTML-escaped (`&lt; &gt; &amp; &quot;`) in das `pre.prompt` setzen. Karte und Datei müssen byte-gleich sein; der Check im Repo (`.github/workflows/check.yml`) prüft das bei jedem Push.

## Einen Agenten hinzufügen

Ein Agent folgt dem AGENTS.md-Standard: ein Ordner `agents/<name>/` mit einer Datei `AGENTS.md`, reines Markdown ohne Kopf, so, wie sie später im Wurzelverzeichnis eines Repos liegen soll. Die Karte in `index.html` wie beim Skill, mit `data-kind="agent"`, `id="agent-<name>"`, `data-file="agents/<name>/AGENTS.md"` und einer selbst geschriebenen Beschreibung in einem Satz.

## Prüfen

`index.html` im Browser öffnen. Die Zahl neben der Suche muss um eins gestiegen sein, die neue Karte muss über Titel, Schlagwort, Art und Stufe zu finden sein, und der Kopierknopf muss den Text liefern. Bei Skills und Agenten zusätzlich: der Knopf „Als Datei" speichert die Datei unter ihrem Namen, und der Check läuft grün. Dann ein Pull Request.

Keine urheberrechtlich geschützten Texte. Danke.
