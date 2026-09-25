import { Container, Kicker, PrimaryButton, GhostButton } from "@/components/ui";

const PILLARS = [
  {
    title: "Purpose-built AI",
    body: "Specialized vision, voice, document and reasoning models designed for specific operational tasks.",
  },
  {
    title: "Real-world context",
    body: "Location, time, environment and operational state give every inference the context needed to understand what is actually happening.",
  },
  {
    title: "Enterprise knowledge",
    body: "Your systems, documents, policies and workflows ground AI in how your organization operates.",
  },
  {
    title: "Edge-native intelligence",
    body: "Run inference close to where data is generated for low-latency decisions, resilient operation and offline-capable deployments.",
  },
];

export default function HeroPlatform() {
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

      <Container className="relative">
        <div className="flex flex-col items-start gap-7">
          {/* <span className="inline-flex items-center gap-[11px] font-mono text-[12px] font-medium uppercase tracking-[0.16em] text-[#8A909C]">
            <span className="h-1.5 w-1.5 shrink-0 bg-green shadow-[0_0_12px_rgba(0,229,153,0.7)]" />
            Platform
          </span> */}

          <h1 className="max-w-[1080px] font-display text-[44px] font-normal leading-[1.05] tracking-[-0.03em] text-balance text-primary sm:text-[60px]"
          style={{ 
                      fontFamily: "var(--font-manrope), sans-serif",
                      fontWeight: 400,
                      fontSize: "clamp(44px, 7.2vw, 60px)",
                      lineHeight: 0.96,
                      letterSpacing: "-0.045em",
                      wordSpacing: 6,
                      color: "white"
                    }}>
            Intelligence Where
            <br />
            <span className="text-pista">Your Operations Happen.</span>
          </h1>

          <p className="max-w-[600px] text-ink text-pretty"
          style={{ 
                      fontFamily: "var(--font-manrope), sans-serif",
                      fontWeight: 400,
                      fontSize: "clamp(18px, 7.2vw, 24px)",
                      lineHeight: 1.1,
                      letterSpacing: "-0.045em",
                      wordSpacing: 6,
                      // color: "white"
                    }}>
            Mialo brings multimodal AI, enterprise knowledge and real-world
            context to the edge, enabling real-time insights and automated
            action - even when connectivity is limited or unavailable.
          </p>


        </div>

        {/* the intelligence layer at a glance */}
        <div className="mt-16 overflow-hidden rounded-[18px] border border-line-2 bg-linear-to-b from-panel to-raise">
          <div className="flex items-center justify-between border-b border-line px-5 py-4 sm:px-6">
            <Kicker>Mialo Intelligence Layer</Kicker>
            {/* <Kicker className="inline-flex items-center gap-2">
              <span className="h-[7px] w-[7px] rounded-full bg-green shadow-[0_0_10px_#00E599] motion-safe:animate-blink" />
              Seven domains · Live
            </Kicker> */}
          </div>

          <div className="grid grid-cols-1 border-t border-line sm:grid-cols-4">
            {PILLARS.map((p, i) => (
              <div
                key={p.title}
                className={`p-7 sm:p-8 ${
                  i > 0 ? "border-t border-line sm:border-t-0 sm:border-l" : ""
                }`}
              >
                <Kicker className="text-pista">{p.title}</Kicker>
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
