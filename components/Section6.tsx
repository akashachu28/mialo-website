import { Container, SectionHeader } from "./ui";
import SectorCards from "./SectorCards";

export default function Section6() {
  return (
    <section className="border-t border-line py-20 sm:py-[104px]">
      <Container className="mb-14">
        <SectionHeader
          eyebrow="Industries"
          title="Built for the operations that run the world."
          lead="The same intelligence layer, tuned to the signals, constraints and outcomes that define each sector."
        />
      </Container>
      <SectorCards />
    </section>
  );
}
