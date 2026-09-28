import Image from "next/image";
import { Container, Kicker } from "@/components/ui";
import { Layers, Zap, TrendingUp } from "lucide-react";

const PANEL = [
  {
    title: "One layer, many worlds",
    body: "The same intelligence core, tuned to the signals and constraints of each sector.",
    icon: Layers,
  },
  {
    title: "Real-time by default",
    body: "Awareness of what is happening now - not a report on what happened last week.",
    icon: Zap,
  },
  {
    title: "Measurable outcomes",
    body: "Safety, uptime, service levels and cost, moved in the direction that matters.",
    icon: TrendingUp,
  },
];

export default function HeroIndustry() {
  return (
    <section className="relative overflow-hidden pt-28 pb-24 sm:pt-40">
      {/* dot-grid backdrop, faded from the top */}
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 opacity-30"
        style={{
          backgroundImage:
            "linear-gradient(var(--color-pista) 1px, transparent 1px), linear-gradient(90deg, var(--color-pista) 1px, transparent 1px)",
          backgroundSize: "62px 62px",
          maskImage:
            "radial-gradient(ellipse 80% 60% at 50% 0%, #000 0%, transparent 75%)",
          WebkitMaskImage:
            "radial-gradient(ellipse 80% 60% at 50% 0%, #000 0%, transparent 75%)",
        }}
      />
      
      <div className="absolute inset-0 bg-background/20" />
      
      {/* Background image covering 3/4th of width and height, bottom right corner */}
      <div className="absolute right-0 bottom-0 w-[75vw] h-[75vh] pointer-events-none opacity-50">
        <Image
          src="/images/indusBG.png"
          alt="Industries background visualization"
          fill
          sizes="75vw"
          className="object-cover"
          priority
        />
      </div>

      <Container className="relative">
        <div className="flex flex-col items-start gap-7">
          {/* <span className="inline-flex items-center gap-[11px] font-mono text-[12px] font-medium uppercase tracking-[0.16em] text-[#8A909C]">
            <span className="h-1.5 w-1.5 shrink-0 bg-green shadow-[0_0_12px_rgba(0,229,153,0.7)]" />
            Industries
          </span> */}

          <h1 className="max-w-[1080px] font-display text-[44px] font-normal leading-[1.05] tracking-[-0.03em] text-balance text-primary sm:text-[60px]"
          style={{ 
              fontFamily: "var(--font-manrope), sans-serif",
              fontWeight: 400,
              fontSize: "clamp(32px, 7.2vw, 70px)",
              lineHeight: 1.05,
              letterSpacing: "-0.045em",
            }}>
            Operational intelligence.
            <br />
            <span className="text-pista">For every industry.</span>
          </h1>

          <p className="max-w-[600px] text-[19px] leading-[1.2] text-ink text-pretty"
          style={{ 
                      fontFamily: "var(--font-manrope), sans-serif",
                      fontWeight: 400,
                      fontSize: "clamp(18px, 7.2vw, 24px)",
                      lineHeight: 1.1,
                      letterSpacing: "-0.045em",
                      wordSpacing: 6,
                    }}
                    >
            Mialo&apos;s unified intelligence layer adapts to your world,
            delivering real-time awareness, smarter decisions and measurable
            impact across industries.
          </p>

          {/* <div className="mt-1.5 flex flex-wrap gap-3">
            <PrimaryButton>See how it works</PrimaryButton>
            <GhostButton>Explore industries</GhostButton>
          </div> */}
        </div>

        {/* one layer, every sector */}
        <div className="mt-16 overflow-hidden rounded-[18px] border border-line-2 bg-linear-to-b from-panel/40 to-raise/50 backdrop-blur-[2px]">
          <div className="flex items-center justify-between border-b border-line px-5 py-4 sm:px-6">
            <Kicker>Mialo · One Intelligence Layer</Kicker>
            {/* <Kicker className="inline-flex items-center gap-2">
              <span className="h-[7px] w-[7px] rounded-full bg-green shadow-[0_0_10px_#00E599] motion-safe:animate-blink" />
              Live
            </Kicker> */}
          </div>

          <div className="grid grid-cols-1 border-t border-line sm:grid-cols-3">
            {PANEL.map((p, i) => {
              const Icon = p.icon;
              return (
                <div
                  key={p.title}
                  className={`p-7 sm:p-8 ${
                    i > 0 ? "border-t border-line sm:border-t-0 sm:border-l" : ""
                  }`}
                >
                  <div className="mb-4 mr-2 inline-flex h-11 w-11 items-center justify-center rounded-lg bg-pista/10 text-pista">
                    <Icon className="h-5 w-5" strokeWidth={1.5} />
                  </div>
                  <Kicker className="text-pista">{p.title}</Kicker>
                  {/* <p className="mt-3 text-[14px] leading-[1.6] text-muted text-pretty">
                    {p.body}
                  </p> */}
                </div>
              );
            })}
          </div>

          <div className="h-1.5 bg-linear-to-r from-transparent via-ice/30 to-transparent" />
        </div>
      </Container>
    </section>
  );
}
