import { Section, SectionHeader } from "./ui";
import OperationalIntelligenceCard from "./OperationalIntelligenceCard";

export default function Section3() {
  return (
    <>
      <Section>
        <SectionHeader
          className="mb-12"
          eyebrow="How It Works"
          title="How operational intelligence works."
          lead="Every operational moment follows the same journey — from observation to understanding, intelligent decision-making and real-world action."
        />

        <div className="overflow-hidden rounded-2xl border border-line-2 bg-panel">
          <OperationalIntelligenceCard />
        </div>

        <p className="mt-12 max-w-[640px] font-display text-[22px] font-medium leading-[1.3] tracking-[-0.02em] sm:text-[26px]">
          <span className="text-faint">Recording is not understanding.</span>{" "}
          <span className="text-primary">Understanding enables action.</span>
        </p>
      </Section>

      {/* editorial beat */}
      <section className="border-t border-line py-24 text-center sm:py-28">
        <h2 className="font-display text-[38px] font-medium leading-[1.05] tracking-[-0.03em] text-balance text-primary sm:text-[56px]">
          Observe. Understand. Act.
          <br />
          <span className="text-ice">Repeat.</span>
        </h2>
        <p className="mt-6 text-[15px] text-muted">
          Turning every operational moment into better business outcomes.
        </p>
      </section>
    </>
  );
}
