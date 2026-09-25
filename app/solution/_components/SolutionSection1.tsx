import { Section, SectionHeader, ArrowLink } from "@/components/ui";
import PulseCard from "./PulseCard";

const STATS = [
  { value: "50+", label: "Enterprises trust Mialo" },
  { value: "15+", label: "Industries impacted" },
  { value: "10M+", label: "Events analyzed daily" },
  { value: "99.9%", label: "On-premise & secure" },
];

export default function SolutionSection1() {
  return (
    <Section>
      <div className="flex flex-col gap-16">
        <div className="grid items-center gap-12 lg:grid-cols-[minmax(0,1fr)_minmax(0,1.15fr)] lg:gap-16">
          <div className="flex flex-col gap-6">
            {/* <SectionHeader
              eyebrow="How It Works"
              // title="One intelligence layer. Infinite possibilities."
              titleIce="One intelligence layer. Infinite possibilities."
              // lead="Every solution is powered by the Mialo Intelligence Layer, turning raw data into decisions and outcomes — from ingestion and AI processing to insight and impact."
            /> */}
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
            <span className="text-gray-900">
              One intelligence layer.
            </span>{" "}
            <span
              className="text-ice"
            >
              Infinite possibilities.
            </span>
          </h2>
            <p className="w-full max-w-[640px] text-[18px] leading-[1.62] text-gray-700 text-pretty"
            style={{ 
                      fontFamily: "var(--font-manrope), sans-serif",
                      fontWeight: 400,
                      fontSize: "clamp(18px, 7.2vw, 24px)",
                      lineHeight: 1.1,
                      letterSpacing: "-0.045em",
                      wordSpacing: 6,
                      // color: "white"
                    }}>
              Every solution is powered by the Mialo Intelligence Layer, turning
              raw data into decisions and outcomes — from ingestion and AI
              processing to insight and impact.{" "}
            </p>
            {/* <ArrowLink className="text-pista">Explore the architecture</ArrowLink> */}
          </div>

          <div>
            <PulseCard />
          </div>
        </div>

        <div className="grid grid-cols-2 gap-4 sm:grid-cols-4">
          {STATS.map((s) => (
            <div
              key={s.value}
              className="flex flex-col gap-2 bg-gray-900 p-6"
              style={{
                clipPath:
                  "polygon(10px 0, 100% 0, 100% calc(100% - 10px), calc(100% - 10px) 100%, 0 100%, 0 10px)",
              }}
            >
              <span className="font-display text-[30px] font-medium leading-[1.1] tracking-[-0.02em] text-pista">
                {s.value}
              </span>
              <span className="text-[13px] leading-[1.5] text-muted">
                {s.label}
              </span>
            </div>
          ))}
        </div>
      </div>
    </Section>
  );
}
