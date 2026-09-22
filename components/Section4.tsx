import { Container, SectionHeader } from "./ui";
import OperationalCards from "./OperationalCards";

export default function Section4() {
  return (
    <section className="border-t border-line py-20 sm:py-[104px]">
      <Container className="mb-14">
        <SectionHeader
          eyebrow="The Model"
          title="From operations to outcomes."
          lead="A continuous loop that senses what is happening, understands why, decides what to do, and measures the result — then improves with every cycle."
        />
      </Container>
      <OperationalCards />
    </section>
  );
}
