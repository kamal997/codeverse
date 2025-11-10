import { Container,PageHeader, Highlight,Paragraph, Blogs } from "../../components";
import { blogs } from "../../constants/blogs";

export default function Blog() {
  return (
    <Container>
      <PageHeader
        emoji="📝"
        title="Ich schreibe über Technologie"
        subtitle="Meine Gedanken, Erfahrungen und Erkenntnisse aus der Welt der Entwicklung"
      />
      <Paragraph className="pb-10">
        Schon seit meiner <Highlight>Kindheit</Highlight> fasziniert mich die Technologie.
      </Paragraph>
      <Blogs blogs={blogs} />
    </Container>
  );
}
