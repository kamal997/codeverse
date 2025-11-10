import { Container, PageHeader, About } from "../../components";


export default function AboutPage() {
  return (
    <Container>
      <PageHeader emoji="💬" title="Über mich" subtitle="Entwickler, digitaler Nomade und Weltenbummler" />
      <About />
    </Container>
  );
}
