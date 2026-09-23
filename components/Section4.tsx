import { Container, SectionHeader } from "./ui";
import OperationalCards from "./OperationalCards";

export default function Section4() {
  return (
    <section className=" py-20 sm:py-[104px]">
      <Container className="mb-14">
        <SectionHeader
          eyebrow="The Model"
          title="From operations to outcomes."
          // lead="A continuous loop that senses what is happening, understands why, decides what to do, and measures the result — then improves with every cycle."
        />
        <p className="w-full max-w-[640px] text-[18px] leading-[1.62] text-gray-700 mt-5 text-pretty">
          A continuous loop that senses what is happening, understands why, decides what to do, and measures the result — then improves with every cycle.
        </p>
      </Container>
      <OperationalCards />
    </section>
  );
}
