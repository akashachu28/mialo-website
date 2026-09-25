import { Container, SectionHeader } from "./ui";
import SectorCards from "./SectorCards";

export default function Section6() {
  return (
    <section className="border-t border-line py-20 sm:py-26">
      <Container>
        <div className="flex flex-col lg:flex-row gap-12 lg:gap-16">
          {/* Left sticky header */}
          <div className="lg:w-5/12 lg:sticky lg:top-34 lg:self-start">
            
            <h2
              className="font-display text-[30px] font-medium leading-[1.14] tracking-[-0.025em] text-pretty sm:text-[42px] mb-6"
              style={{
                fontFamily: "var(--font-manrope), sans-serif",
                fontWeight: 400,
                fontSize: "clamp(32px, 7.2vw, 60px)",
                lineHeight: 1,
                letterSpacing: "-0.045em",
              }}
            >
              <span className="text-gray-300">Built for the operations</span>{" "}
              <span className="text-pista">that run the world.</span>
            </h2>
            <p className="text-[18px] leading-[1.62] text-muted text-pretty"
            style={{ 
                      fontFamily: "var(--font-manrope), sans-serif",
                      fontWeight: 400,
                      fontSize: "clamp(18px, 7.2vw, 24px)",
                      lineHeight: 1.1,
                      letterSpacing: "-0.045em",
                      wordSpacing: 6,
                      // color: "white"
                    }}>
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
