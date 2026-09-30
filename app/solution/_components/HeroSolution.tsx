import Image from "next/image";
import { Container, PrimaryButton, GhostButton, Kicker } from "@/components/ui";
import { Layers, TrendingUp, Zap } from "lucide-react";

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

export default function HeroSolution() {
  return (
    <section className="relative flex min-h-[80vh] sm:h-[90vh] items-center overflow-hidden pt-24 sm:pt-28 lg:pt-40">
      {/* Video background - kept, heavily dimmed so it reads as texture on the near-black ground */}
      <div aria-hidden className="absolute inset-0">
        <div
        aria-hidden
        className="pointer-events-none absolute inset-0 opacity-20 sm:opacity-30"
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
        {/* Subtle gradient overlay */}
        <div
          className="absolute inset-0"
          style={{
            background:
              "linear-gradient(135deg, transparent 0%, rgba(8,9,11,0.3) 40%, rgba(8,9,11,0.7) 100%)",
          }}
        />
      </div>

      {/* Background image covering bottom right corner */}
      <div className="absolute bottom-0 right-0 w-full h-full sm:min-w-[80vw] pointer-events-none opacity-30 sm:opacity-40">
        <Image
          src="/images/solutionBanner.png"
          alt="Solutions background visualization"
          fill
          sizes="(max-width: 768px) 100vw, 60vw"
          className="object-contain object-bottom-right"
          priority
        />
        {/* Slight gradient overlay on top of the image */}
        <div
          className="absolute inset-0"
          style={{
            background: "linear-gradient(to bottom, rgba(8,9,11,0.6) 0%, rgba(8,9,11,0.3) 50%, transparent 100%)",
          }}
        />
      </div>

      <Container className="relative">
        <div className="flex flex-col items-center sm:items-start gap-4 sm:gap-5 md:gap-7 text-center sm:text-left px-4 sm:px-0">
          <h1 
            className="w-full max-w-full sm:max-w-[800px] md:max-w-[1080px] text-balance text-primary"
            style={{ 
              fontFamily: "var(--font-manrope), sans-serif",
              fontWeight: 400,
              fontSize: "clamp(24px, 6vw, 70px)",
              lineHeight: "clamp(1.1, 1.05, 1.05)",
              letterSpacing: "-0.045em",
            }}
          >
            Intelligence in action.
            <br />
            <span className="text-pista">Built for real-world impact.</span>
          </h1>

          <p 
            className="w-full max-w-full sm:max-w-[500px] md:max-w-[600px] text-ink text-pretty"
            style={{
              fontFamily: "var(--font-manrope), sans-serif",
              fontWeight: 400,
              fontSize: "clamp(14px, 3.5vw, 24px)",
              lineHeight: "clamp(1.5, 1.4, 1.4)",
              letterSpacing: "-0.025em",
              wordSpacing: 3,
            }}
          >
            Pre-built AI solutions powered by the Mialo Intelligence Layer that
            deliver fast time-to-value and measurable outcomes.
          </p>
        </div>

        {/* one layer, every sector */}
        <div className="mt-8 sm:mt-12 md:mt-16 mx-4 sm:mx-0 overflow-hidden rounded-xl sm:rounded-[18px] border border-line-2 bg-linear-to-b from-panel/40 to-raise/50 backdrop-blur-[2px]">
          <div className="flex items-center justify-center sm:justify-between border-b border-line px-3 py-2.5 sm:px-4 sm:py-3 md:px-5 md:py-4 lg:px-6">
            <Kicker className="text-xs sm:text-[11px]">Mialo · One Intelligence Layer</Kicker>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 border-t border-line">
            {PANEL.map((p, i) => {
              const Icon = p.icon;
              return (
                <div
                  key={p.title}
                  className={`p-4 sm:p-5 md:p-6 lg:p-7 xl:p-8 text-center sm:text-left ${
                    i > 0 ? "border-t border-line sm:border-t lg:border-t-0 lg:border-l" : ""
                  } ${
                    i === 1 ? "sm:border-l" : ""
                  }`}
                >
                  <div className="mb-2.5 sm:mb-3 md:mb-4 mx-auto sm:mx-0 inline-flex h-8 w-8 sm:h-9 sm:w-9 md:h-10 md:w-10 lg:h-11 lg:w-11 items-center justify-center rounded-lg bg-pista/10 text-pista">
                    <Icon className="h-3.5 w-3.5 sm:h-4 sm:w-4 md:h-4.5 md:w-4.5 lg:h-5 lg:w-5" strokeWidth={1.5} />
                  </div>
                  <div className="space-y-1.5 sm:space-y-2">
                    <Kicker className="text-pista text-[10px] sm:text-[11px] block">{p.title}</Kicker>
                    {/* <p className="text-xs sm:text-[13px] leading-relaxed text-muted px-1 sm:px-0">
                      {p.body}
                    </p> */}
                  </div>
                </div>
              );
            })}
          </div>

          <div className="h-1 sm:h-1.5 bg-linear-to-r from-transparent via-ice/30 to-transparent" />
        </div>
      </Container>
    </section>
  );
}