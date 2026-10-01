import { Section, SectionHeader, ArrowLink } from "@/components/ui";
import PulseCard from "./PulseCard";

const STATS = [
  { value: "50+", label: "Enterprises trust Mialo" },
  { value: "15+", label: "Industries impacted" },
  { value: "10M+", label: "Events analyzed daily" },
  { value: "99%", label: "On-premise & secure" },
];

export default function SolutionSection1() {
  return (
    <Section>
      <div className="flex flex-col gap-12 sm:gap-14 md:gap-16">
        <div className="grid items-center gap-8 sm:gap-10 md:gap-12 lg:grid-cols-[minmax(0,1fr)_minmax(0,1.15fr)] lg:gap-16">
          <div className="flex flex-col gap-4 sm:gap-5 md:gap-6 order-1 lg:order-1">
            <h2
              className="font-display text-2xl sm:text-3xl md:text-4xl lg:text-[42px] xl:text-[48px] font-medium leading-tight tracking-tight text-pretty mb-3 sm:mb-4 md:mb-6"
              style={{
                fontFamily: "var(--font-inter), sans-serif",
                fontWeight: 400,
                fontSize: "clamp(28px, 6vw, 60px)",
                lineHeight: "clamp(1.1, 1.05, 1)",
                letterSpacing: "-0.045em",
              }}
            >
              <span className="text-gray-900">
                One intelligence layer.
              </span>{" "}
              <span className="text-ice">
                Infinite possibilities.
              </span>
            </h2>
            <p 
              className="w-full max-w-full sm:max-w-[500px] md:max-w-[600px] lg:max-w-[640px] text-gray-700 text-pretty"
              style={{ 
                fontFamily: "var(--font-inter), sans-serif",
                fontWeight: 400,
                fontSize: "clamp(16px, 4vw, 24px)",
                lineHeight: "clamp(1.3, 1.2, 1.1)",
                letterSpacing: "-0.045em",
                wordSpacing: 6,
              }}
            >
              Every solution is powered by the Mialo Intelligence Layer, turning
              raw data into decisions and outcomes - from ingestion and AI
              processing to insight and impact.
            </p>
          </div>

          <div className="w-full flex justify-center lg:justify-end order-2 lg:order-2 overflow-hidden px-4 sm:px-0">
            <div className="w-full max-w-full sm:max-w-[500px] lg:max-w-none">
              <PulseCard />
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 gap-3 sm:grid-cols-2 sm:gap-4 lg:grid-cols-4 px-2 sm:px-0">
          {STATS.map((s) => (
            <div
              key={s.value}
              className="flex flex-col gap-1.5 sm:gap-2 bg-gray-900 p-4 sm:p-5 md:p-6"
              style={{
                clipPath:
                  "polygon(8px 0, 100% 0, 100% calc(100% - 8px), calc(100% - 8px) 100%, 0 100%, 0 8px)",
              }}
            >
              <span className="font-display text-2xl sm:text-3xl md:text-[28px] lg:text-[30px] font-medium leading-tight tracking-tight text-pista">
                {s.value}
              </span>
              <span className="text-xs sm:text-[13px] leading-relaxed text-muted">
                {s.label}
              </span>
            </div>
          ))}
        </div>
      </div>
    </Section>
  );
}
