import { Container, SectionHeader } from "./ui";
import OperationalCards from "./OperationalCards";

export default function Section4() {
  return (
    <section className="py-20 sm:py-[104px]">
      <Container>
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-start">

          {/* Left side: Cards (max 2 per row) */}
          <div className="lg:col-span-8">
            <OperationalCards />
          </div>
          {/* Right side: Heading and Description */}
          <div className="lg:col-span-4">
            <SectionHeader
              eyebrow="The Model"
              titleIce="From operations to outcomes."
            />
            <p className="w-full max-w-[640px] lg:max-w-none text-[18px] leading-[1.62] text-gray-700 mt-5 text-pretty"
            style={{ 
                          fontFamily: "var(--font-manrope), sans-serif",
                          fontWeight: 400,
                          fontSize: "clamp(18px, 7.2vw, 24px)",
                          lineHeight: 1.1,
                          letterSpacing: "-0.045em",
                          wordSpacing: 6,
                           }}>
              A continuous loop that senses what is happening, understands why, decides what to do, and measures the result — then improves with every cycle.
            </p>
          </div>

          
        </div>
      </Container>
    </section>
  );
}
