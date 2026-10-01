import { Container, SectionHeader } from "./ui";
import SectorCards from "./SectorCards";

export default function Section6() {
  return (
    <section className="border-t border-line py-12 sm:py-20 lg:py-26">
      <Container>
        <div className="flex flex-col lg:flex-row gap-8 sm:gap-12 lg:gap-16">
          {/* Left sticky header */}
          <div className="lg:w-5/12 lg:sticky lg:top-34 lg:self-start text-center lg:text-left">
            <h2
              className="text-pretty mb-4 sm:mb-6"
              style={{
                fontFamily: "var(--font-manrope), sans-serif",
                fontWeight: 400,
                fontSize: "clamp(24px, 6vw, 60px)",
                lineHeight: 1,
                letterSpacing: "-0.045em",
              }}
            >
              <span className="text-gray-300">Built for the operations</span>{" "}
              <span className="text-pista">that run the world.</span>
            </h2>
            <p 
              className="text-muted text-pretty max-w-lg mx-auto lg:mx-0"
              style={{ 
                fontFamily: "var(--font-manrope), sans-serif",
                fontWeight: 400,
                fontSize: "clamp(16px, 3.5vw, 24px)",
                lineHeight: 1.4,
                letterSpacing: "-0.025em",
                wordSpacing: 2,
              }}
            >
              The same intelligence layer, tuned to the signals, constraints and
              outcomes that define each sector.
            </p>
          </div>

          {/* Right scrolling cards */}
          <div className="lg:w-7/12">
            <SectorCards />
          </div>
        </div>
      </Container>
    </section>
  );
}
