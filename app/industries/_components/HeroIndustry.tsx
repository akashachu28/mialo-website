import Image from "next/image";
import { Container, Kicker, PrimaryButton, GhostButton } from "@/components/ui";

const PANEL = [
  {
    title: "One layer, many worlds",
    body: "The same intelligence core, tuned to the signals and constraints of each sector.",
  },
  {
    title: "Real-time by default",
    body: "Awareness of what is happening now — not a report on what happened last week.",
  },
  {
    title: "Measurable outcomes",
    body: "Safety, uptime, service levels and cost, moved in the direction that matters.",
  },
];

export default function HeroIndustry() {
  return (
    <section className="relative overflow-hidden pt-28 pb-24 sm:pt-40">
      {/* dot-grid backdrop, faded from the top */}
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 opacity-50"
        style={{
          backgroundImage:
            "linear-gradient(var(--color-line) 1px, transparent 1px), linear-gradient(90deg, var(--color-line) 1px, transparent 1px)",
          backgroundSize: "72px 72px",
          maskImage:
            "radial-gradient(ellipse 80% 60% at 50% 0%, #000 0%, transparent 75%)",
          WebkitMaskImage:
            "radial-gradient(ellipse 80% 60% at 50% 0%, #000 0%, transparent 75%)",
        }}
      />

      <Container className="relative">
        <div className="flex flex-col items-start gap-7">
          <span className="inline-flex items-center gap-[11px] font-mono text-[12px] font-medium uppercase tracking-[0.16em] text-[#8A909C]">
            <span className="h-1.5 w-1.5 shrink-0 bg-green shadow-[0_0_12px_rgba(0,229,153,0.7)]" />
            Industries
          </span>

          <h1 className="max-w-[1080px] font-display text-[44px] font-normal leading-[1.05] tracking-[-0.03em] text-balance text-primary sm:text-[60px]">
            Operational intelligence.
            <br />
            <span className="text-ice">For every industry.</span>
          </h1>

          <p className="max-w-[600px] text-[17px] leading-[1.62] text-ink text-pretty">
            Mialo&apos;s unified intelligence layer adapts to your world,
            delivering real-time awareness, smarter decisions and measurable
            impact across industries.
          </p>

          <div className="mt-1.5 flex flex-wrap gap-3">
            <PrimaryButton>See how it works</PrimaryButton>
            <GhostButton>Explore industries</GhostButton>
          </div>
        </div>

        {/* one layer, every sector */}
        <div className="mt-16 overflow-hidden rounded-[18px] border border-line-2 bg-linear-to-b from-panel to-raise">
          <div className="flex items-center justify-between border-b border-line px-5 py-4 sm:px-6">
            <Kicker>Mialo · One Intelligence Layer</Kicker>
            <Kicker className="inline-flex items-center gap-2">
              <span className="h-[7px] w-[7px] rounded-full bg-green shadow-[0_0_10px_#00E599] motion-safe:animate-blink" />
              Live
            </Kicker>
          </div>

          <div className="relative aspect-[2/1] w-full">
            <Image
              src="/images/heroSolution.png"
              alt="A connected globe with retail, manufacturing, healthcare, government, logistics and energy icons"
              fill
              sizes="(max-width: 1180px) 100vw, 1100px"
              className="object-cover"
              preload
            />
          </div>

          <div className="grid grid-cols-1 border-t border-line sm:grid-cols-3">
            {PANEL.map((p, i) => (
              <div
                key={p.title}
                className={`p-7 sm:p-8 ${
                  i > 0 ? "border-t border-line sm:border-t-0 sm:border-l" : ""
                }`}
              >
                <Kicker className="text-ice">{p.title}</Kicker>
                <p className="mt-3 text-[14px] leading-[1.6] text-muted text-pretty">
                  {p.body}
                </p>
              </div>
            ))}
          </div>

          <div className="h-1.5 bg-linear-to-r from-transparent via-ice/30 to-transparent" />
        </div>
      </Container>
    </section>
  );
}
