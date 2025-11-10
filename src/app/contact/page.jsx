import { Contact, Container, PageHeader, Paragraph } from "../../components";

export const metadata = {
  title: "Kontakt | Kamal Idris",
  description:
    "Kamal Idris ist ein Entwickler, Autor und Speaker. Er ist digitaler Nomade und reist um die Welt, während er remote arbeitet.",
};

export default function Projects() {
  return (
    <Container>
      <PageHeader emoji="✉️" title="Kontaktiere mich" subtitle="Schreib mir eine Nachricht – ich antworte schnell." />
      <Paragraph className="mb-10 max-w-xl">
        Erreiche mich per E-Mail oder fülle dieses Kontaktformular aus. Ich werde
        so schnell wie möglich zurückkommen - das verspreche ich.{" "}
      </Paragraph>
      <Contact />
    </Container>
  );
}
