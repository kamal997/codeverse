import { Container, PageHeader, Products} from "../../components";

export default function Projects() {
  return (
    <Container>
      <PageHeader
        emoji="⚡"
        title="Woran ich gearbeitet habe"
        subtitle="Eine Auswahl meiner Projekte und Erfahrungen"
      />
      <Products />
    </Container>
  );
}
