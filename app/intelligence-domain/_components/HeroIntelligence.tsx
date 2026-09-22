import Image from "next/image";
import { Container, Kicker, PrimaryButton, GhostButton } from "@/components/ui";

const PILLARS = [
  {
    title: "Purpose-built models",
    body: "Specialized vision, voice, document and reasoning models — not one general model stretched thin across every problem.",
  },
  {
    title: "Real-world context",
    body: "Location, time, environment and operational state are fused into every inference, so results reflect what is actually happening.",
  },
  {
    title: "Enterprise knowledge",
    body: "Your systems, documents and policies inform every decision, keeping intelligence grounded in how your business runs.",
  },
];

export default function HeroIntelligence() {
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
            Intelligence Domains
          </span>

          <h1 className="max-w-[1080px] font-display text-[44px] font-normal leading-[1.05] tracking-[-0.03em] text-balance text-primary sm:text-[60px]">
            Specialized intelligence domains.
            <br />
            <span className="text-ice">One unified platform.</span>
          </h1>

          <p className="max-w-[620px] text-[17px] leading-[1.62] text-ink text-pretty">
            Mialo&apos;s intelligence domains bring together specialized AI
            models, real-world context and enterprise knowledge to solve
            operational challenges across the value chain.
          </p>

          <div className="mt-1.5 flex flex-wrap gap-3">
            <PrimaryButton>Explore the domains</PrimaryButton>
            <GhostButton>Talk to experts</GhostButton>
          </div>
        </div>

        {/* the intelligence layer at a glance */}
        <div className="mt-16 overflow-hidden rounded-[18px] border border-line-2 bg-linear-to-b from-panel to-raise">
          <div className="flex items-center justify-between border-b border-line px-5 py-4 sm:px-6">
            <Kicker>Mialo Intelligence Layer</Kicker>
            <Kicker className="inline-flex items-center gap-2">
              <span className="h-[7px] w-[7px] rounded-full bg-green shadow-[0_0_10px_#00E599] motion-safe:animate-blink" />
              Seven domains · Live
            </Kicker>
          </div>

          <div className="px-4 py-8 sm:px-8 sm:py-12">
            <div className="relative mx-auto aspect-[3/2] w-full max-w-[760px]">
              <Image
                src="/images/intelligenceComponent.png"
                alt="The Mialo intelligence layer — seven specialized domains feeding one unified core"
                fill
                sizes="(max-width: 820px) 90vw, 760px"
                className="object-contain"
                preload
              />
            </div>
          </div>

          <div className="grid grid-cols-1 border-t border-line sm:grid-cols-3">
            {PILLARS.map((p, i) => (
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
