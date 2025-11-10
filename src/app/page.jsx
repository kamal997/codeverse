import { Container, Heading, Highlight, Paragraph, PageHeader, Products, TechStack } from "../components";

export default function Home() {
  return (
    <Container>
      <div className="space-y-8 animate-fade-in">
        <PageHeader
          emoji="👋"
          title="Hallo! Ich bin Kamal"
          subtitle="Full-Stack-Entwickler & Digital Creator"
        />

        <div className="space-y-6 max-w-3xl">
          <div className="animate-slide-up" style={{ animationDelay: '0.3s' }}>
            <Paragraph>
              Ich bin ein leidenschaftlicher <Highlight>Full-Stack-Entwickler</Highlight> mit über 4 Jahren Freiberufserfahrung,
              derzeit studiere ich an der Fachhochschule Dortmund. Ich spezialisiere mich auf die Entwicklung moderner Web- und mobiler Anwendungen
              mit starkem Fokus auf Benutzererlebnis und sauberem Design.
            </Paragraph>
          </div>

          <div className="animate-slide-up" style={{ animationDelay: '0.4s' }}>
            <Paragraph>
              Ich liebe es, Ideen in <Highlight>funktionale und ästhetisch ansprechende digitale Produkte</Highlight> zu verwandeln,
              die echten Mehrwert für Benutzer bieten. Meine Expertise umfasst Frontend-Technologien, Backend-Entwicklung und
              die Schaffung nahtloser Benutzererlebnisse.
            </Paragraph>
          </div>

          <div className="animate-slide-up" style={{ animationDelay: '0.5s' }}>
            <Paragraph>
              Wenn ich nicht programmiere, finden Sie mich beim Entdecken neuer Technologien, beim Beitrag zu Open-Source-Projekten
              oder beim Teilen meines Wissens durch technisches Schreiben und Mentoring.
            </Paragraph>
          </div>
        </div>
      </div>

      <div className="mt-16 animate-slide-up" style={{ animationDelay: '0.6s' }}>
        <TechStack />
      </div>

      <div className="mt-20 animate-slide-up" style={{ animationDelay: '0.7s' }}>
        <Heading
          as="h2"
          className="font-black text-2xl md:text-3xl lg:text-4xl mb-8"
        >
          Ausgewählte Projekte
        </Heading>
        <Products />
      </div>
    </Container>
  );
}
