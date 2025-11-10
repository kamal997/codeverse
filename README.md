# Codeverse — persönliche Portfolio‑Website

Website mit Create React App, die Projekte, Blog, Lebenslauf und Kontaktseiten zeigt. Moderne Oberfläche und sehr gutes Verhalten auf kleinen Bildschirmen.

## Projektstruktur

- Quelle: `src/`
  - Seiten: `src/app/` mit Unterordnern wie `about/`, `blog/`, `contact/`, `projects/`, `resume/`
  - Komponenten: `src/components/` (z. B. `Products.jsx`, `Blogs.jsx`, `Sidebar.jsx`, `BlogLayout.jsx`)
  - Konstanten: `src/constants/` für Datenquellen (`products.js`, `blogs.js`, `colors.js`, ...)
  - Globale Styles: `src/app/globals.css`
  - Helfer: `src/lib/utils.js`

Das Routing wird über `src/App.jsx` gesteuert; Seiten sind unter Pfaden wie `/projects` und `/blog` erreichbar.

## Technologien

- React (Create React App)
- Tailwind CSS
- Framer Motion für Animationen
- tailwind‑merge zum sicheren Zusammenführen von Klassen

Hinweis: Falls der Fehler "Module not found: Can't resolve 'clsx'" erscheint, installiere die Abhängigkeit mit `npm install clsx` und starte neu.

## Entwicklung und Betrieb

1. Abhängigkeiten installieren:
   ```bash
   npm install
   ```
2. Dev‑Server starten:
   ```bash
   npm start
   ```
   Öffne anschließend `http://localhost:3000`.
3. Produktionsbuild erstellen:
   ```bash
   npm run build
   ```

## Inhalte verwalten (Projekte und Blog)

### Projekt hinzufügen/ändern — `src/constants/products.js`

Jedes Projekt ist ein Objekt mit folgenden Feldern:

```js
{
  href: "https://example.com/projects/aurora-analytics",
  title: "Aurora Analytics",
  description: "Kurzbeschreibung des Projekts",
  thumbnail: "/images/your-image.png" oder externer Link,
  images: ["/images/...", "https://..."],
  stack: ["React", "TailwindCSS"],
  slug: "aurora-analytics",
  content: (<div><p>Detailtext (JSX), der in der Detailseite erscheint.</p></div>)
}
```

Stelle sicher, dass `slug` eindeutig ist und zu internen Links passt.

### Blogpost hinzufügen/ändern — `src/constants/blogs.js`

Jeder Post ist ein Objekt mit:

```js
{
  slug: "designing-clean-interfaces",
  date: "2024-05-12",
  title: "Titel des Blogposts",
  description: "Kurzbeschreibung",
  image: "/images/..." oder externer Link,
  tags: ["frontend", "ux"],
  content: (<div><p>Inhalt (JSX) mit Absätzen.</p></div>)
}
```

Hinweis zu Keys: In `Blogs.jsx` werden Tag‑Keys als `tag-{slug}-{tag}` gesetzt, um Warnungen durch doppelte Keys zu vermeiden.

## Bilder und Assets

- Lege Bilder unter `public/images/` ab und nutze Pfade wie `/images/...`.
- Für Platzhalterbilder kannst du `https://picsum.photos/` verwenden (wie aktuell).

## Sidebar auf kleinen Bildschirmen

- Die Sidebar wird bei ≤ 1024px ausgeblendet und ein runder Toggle‑Button eingeblendet.
- Beim Öffnen erscheint ein klickbarer Overlay, der die Sidebar schließt; das Icon des Buttons wechselt zu `X`.
- Anpassungen und Breakpoints findest du in `src/components/Sidebar.jsx`.

## Farben und Styles

- Einheitliche Farbtokens liegen in `src/constants/colors.js`.
- Globale Styles und Tailwind‑Anpassungen sind in `src/app/globals.css`.

## Deployment

- Nach `npm run build` liegt der Produktionsbuild im Ordner `build/`.
- Für Hosting eignen sich statische Anbieter wie Netlify, Vercel oder GitHub Pages.

## Bekannte Hinweise

- Wenn Pfade oder Dateinamen geändert werden, aktualisiere die Imports in `src/App.jsx`.
- Achte bei Blog‑Tags auf eindeutige Keys, um React‑Warnungen zu vermeiden.

## Lizenz

Dieses Projekt dient als Demo und Lernressource. Keine spezifische Lizenz hinterlegt.
