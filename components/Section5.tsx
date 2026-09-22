import { Container, SectionHeader } from "./ui";
import IntelligenceLayerCards from "./IntelligenceLayerCards";

export default function Section5() {
  return (
    <section className="border-t border-line py-20 sm:py-[104px]">
      <Container className="mb-14">
        <SectionHeader
          eyebrow="The Platform"
          title="One intelligence layer. Many operational solutions."
          lead="A single foundation for sensing, reasoning and acting — deployed the way your enterprise already works."
        />
      </Container>
      <IntelligenceLayerCards />
    </section>
  );
}
