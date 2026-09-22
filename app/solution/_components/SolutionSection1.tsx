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
            <SectionHeader
              eyebrow="How It Works"
              title="One intelligence layer. Infinite possibilities."
              lead="Every solution is powered by the Mialo Intelligence Layer, turning raw data into decisions and outcomes — from ingestion and AI processing to insight and impact."
            />
            <ArrowLink>Explore the architecture</ArrowLink>
          </div>

          <div className="w-full overflow-x-auto rounded-2xl border border-line-2 bg-panel p-6 sm:p-8">
            <PulseCard />
          </div>
        </div>

        <div className="grid grid-cols-2 gap-4 sm:grid-cols-4">
          {STATS.map((s) => (
            <div
              key={s.value}
              className="flex flex-col gap-2 rounded-[14px] border border-line-2 bg-raise p-6"
            >
              <span className="font-display text-[30px] font-medium leading-[1.1] tracking-[-0.02em] text-primary">
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
