// بيانات تدوينات وهمية بنفس بنية المنتجات
export const blogs = [
  {
    slug: "designing-clean-interfaces",
    date: "2024-05-12",
    title: "Saubere, skalierbare Interfaces entwerfen",
    description:
      "Einfache Prinzipien für strukturierte UIs, die wartbar und erweiterbar sind.",
    image: "https://picsum.photos/seed/blog-ui/1200/800",
    tags: ["frontend", "ux"],
    content: (
      <div>
        <p>
          Starte mit einem klaren Grid und definiere die visuelle Hierarchie über
          Farbe und Abstände. Reduziere Rauschen, indem du ähnliche Elemente
          gruppierst.
        </p>
        <p>
          Nutze wiederverwendbare Komponenten und semantische Benennungen, und
          konzentriere dich zuerst auf die wichtigsten Interaktionszustände.
        </p>
      </div>
    ),
  },
  {
    slug: "scalable-tailwind-patterns",
    date: "2024-06-03",
    title: "Skalierbare Tailwind‑Muster",
    description:
      "Utility‑Klassen organisieren und Tokens vereinheitlichen für ein leichtes Designsystem.",
    image: "https://picsum.photos/seed/blog-tailwind/1200/800",
    tags: ["tailwindcss", "css"],
    content: (
      <div>
        <p>
          Nutze CSS‑Variablen für Tokens und vermeide wiederholte, willkürliche
          Werte. Fasse Klassen in Komponenten zusammen, um Duplikate zu reduzieren.
        </p>
        <p>
          Setze Media Queries gezielt und wähle sinnvolle Breakpoints. Erhalte
          Lesbarkeit durch eine logisch strukturierte Datei‑Organisation.
        </p>
      </div>
    ),
  },
  {
    slug: "react-performance-basics",
    date: "2024-07-18",
    title: "React Performance – Grundlagen",
    description:
      "Praktische Tipps, um Re‑Renders zu reduzieren und die UI reaktiver zu machen.",
    image: "https://picsum.photos/seed/blog-react/1200/800",
    tags: ["react", "performance"],
    content: (
      <div>
        <p>
          Stabilisiere Abhängigkeiten, teile die Baumstruktur in sinnvolle Teile
          auf und nutze memo/useMemo nur dort, wo es messbar hilft.
        </p>
        <p>
          Beobachte teure Logik und setze Lazy Loading sowie Bundlesplitting ein,
          wenn es die Nutzererfahrung verbessert.
        </p>
      </div>
    ),
  },
  {
    slug: "winning-freelance-clients",
    date: "2024-08-02",
    title: "Freelance‑Kund:innen gewinnen",
    description:
      "Vertrauen aufbauen mit klarer Kommunikation, regelmäßiger Lieferung und messbaren Ergebnissen.",
    image: "https://picsum.photos/seed/blog-freelance/1200/800",
    tags: ["business", "freelance"],
    content: (
      <div>
        <p>
          Erkläre den Scope, definiere messbare Deliverables und teile den
          Fortschritt wöchentlich.
        </p>
        <p>
          Halte Erwartungen realistisch und liefere schnelle Prototypen, um
          Unsicherheiten früh zu reduzieren.
        </p>
      </div>
    ),
  },
  {
    slug: "dark-mode-principles",
    date: "2024-09-10",
    title: "Grundsätze für Dark Mode",
    description:
      "Themes umschalten, Systempräferenzen respektieren und visuelles Flackern minimieren.",
    image: "https://picsum.photos/seed/blog-dark/1200/800",
    tags: ["dark-mode", "accessibility"],
    content: (
      <div>
        <p>
          Speichere Präferenzen lokal, nutze CSS‑Variablen und setze die Theme‑Klasse
          auf Root, um Overrides zu vereinfachen.
        </p>
        <p>
          Vermeide Flashing beim Hydrieren und nutze progressive Lade‑Strategien,
          wenn nötig.
        </p>
      </div>
    ),
  },
  {
    slug: "writing-readable-css",
    date: "2024-10-01",
    title: "Lesbares CSS schreiben",
    description:
      "Einfache Strategien für Struktur, Klassennamen und bessere Wartbarkeit.",
    image: "https://picsum.photos/seed/blog-css/1200/800",
    tags: ["css", "frontend"],
    content: (
      <div>
        <p>
          Nutze eine klare Hierarchie, benenne Klassen nach ihrer Rolle und
          vermeide unnötige Komplexität.
        </p>
        <p>
          Teste Styles über mehrere Zustände und konsolidiere gemeinsame Werte
          an einem zentralen Ort.
        </p>
      </div>
    ),
  },
];