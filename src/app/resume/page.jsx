import { Container, PageHeader, Highlight, Paragraph, WorkHistory} from "../../components";

export default function Home() {
  return (
    <Container>
      <PageHeader emoji="💼" title="Berufserfahrung" subtitle="Erfahrung und Laufbahn" />
      <Paragraph className="max-w-3xl mt-4">
        Ich bin ein Full-Stack-Entwickler, der es liebt{" "}
        <Highlight>Produkte zu entwickeln</Highlight> und Web-Apps zu erstellen, die Millionen von Menschen beeinflussen können
      </Paragraph>
      <WorkHistory />
    </Container>
  );
}
