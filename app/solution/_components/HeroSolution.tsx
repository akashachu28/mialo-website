import { Container, PrimaryButton, GhostButton } from "@/components/ui";

export default function HeroSolution() {
  return (
    <section className="relative flex min-h-[85vh] items-center overflow-hidden pt-28 pb-24 sm:pt-40">
      {/* Video background - kept, heavily dimmed so it reads as texture on the near-black ground */}
      <div aria-hidden className="absolute inset-0">
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
        {/* <div
          className="absolute inset-0"
          style={{
            background:
              "linear-gradient(90deg, var(--color-background) 0%, rgba(8,9,11,0.55) 55%, transparent 100%)",
          }}
        />
        <div
          className="absolute inset-0"
          style={{
            background:
              "linear-gradient(180deg, var(--color-background) 0%, transparent 35%, var(--color-background) 100%)",
          }}
        /> */}
      </div>

      <Container className="relative">
        <div className="flex flex-col items-start gap-7">
          {/* <span className="inline-flex items-center gap-[11px] font-mono text-[12px] font-medium uppercase tracking-[0.16em] text-[#8A909C]">
            <span className="h-1.5 w-1.5 shrink-0 bg-green shadow-[0_0_12px_rgba(0,229,153,0.7)]" />
            Solutions
          </span> */}

          <h1 className="max-w-[1080px] font-display text-[44px] font-normal leading-[1.05] tracking-[-0.03em] text-balance text-primary sm:text-[60px]"
          style={{ 
              fontFamily: "var(--font-manrope), sans-serif",
              fontWeight: 400,
              fontSize: "clamp(32px, 7.2vw, 60px)",
              lineHeight: 1.1,
              letterSpacing: "-0.045em",
            }}>
            Intelligence in action.
            <br />
            <span className="text-pista">Built for real-world impact.</span>
          </h1>

          <p className="max-w-[600px] text-[17px] leading-[1.62] text-ink text-pretty">
            Pre-built AI solutions powered by the Mialo Intelligence Layer that
            deliver fast time-to-value and measurable outcomes.
          </p>

          {/* <div className="mt-1.5 flex flex-wrap gap-3">
            <PrimaryButton>Explore all solutions</PrimaryButton>
            <GhostButton>Talk to experts</GhostButton>
          </div> */}
        </div>
      </Container>
    </section>
  );
}
