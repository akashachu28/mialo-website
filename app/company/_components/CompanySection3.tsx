import { Section } from "@/components/ui";

const PILLARS: { title: string; body: string; position: "left" | "right" }[] = [
  {
    title: "MISSION",
    body: "To make enterprise operations more intelligent by turning real-world signals into timely, useful action.",
    position: "right",
  },
  {
    title: "VISION",
    body: "A future where every organization can understand what is happening across its operations and make better decisions as events unfold.",
    position: "left",
  },
];

export default function CompanySection3() {
  return (
    <Section className="py-20 sm:py-32 overflow-hidden relative">
      {/* Subtle background gradient */}
      <div 
        className="absolute inset-0 pointer-events-none"
        style={{
          background: "radial-gradient(ellipse at center, rgba(108, 147, 255, 0.05) 0%, transparent 70%)"
        }}
      />
      
      <div className="max-w-6xl mx-auto space-y-32 relative z-10">
        {PILLARS.map((pillar) => (
          <div 
            key={pillar.title} 
            className={`relative ${pillar.position === "left" ? "ml-auto max-w-3xl" : ""}`}
          >
            {/* Title with Line and Dot */}
            <div className="relative mb-8">
              <h2
                className="text-primary tracking-tight inline-block relative z-10"
                style={{
                  fontFamily: "var(--font-manrope), sans-serif",
                  fontWeight: 700,
                  fontSize: "clamp(48px, 8vw, 60px)",
                  lineHeight: 1.1,
                  letterSpacing: "-0.02em",
                }}
              >
                {pillar.title}
              </h2>

              {/* Dot and Line at heading level */}
              {pillar.position === "right" ? (
                // Mission: Dot and line on the right of heading
                <div className="absolute left-full top-1/2 -translate-y-1/2 flex items-center ml-8">
                  {/* Dot */}
                  <div className="w-6 h-6 rounded-full bg-pista flex-shrink-0 z-10" />
                  {/* Line extending to the right edge */}
                  <div className="h-[2px] bg-pista w-[100vw]" />
                </div>
              ) : (
                // Vision: Dot and line on the left of heading
                <div className="absolute right-full top-1/2 -translate-y-1/2 flex items-center mr-8 justify-end">
                  {/* Line extending to the left edge */}
                  <div className="h-[2px] bg-pista w-[100vw]" />
                  {/* Dot */}
                  <div className="w-6 h-6 rounded-full bg-pista flex-shrink-0 z-10" />
                </div>
              )}
            </div>

            {/* Description */}
            <p
              className="text-muted max-w-2xl"
              style={{
                fontFamily: "var(--font-manrope), sans-serif",
                fontWeight: 400,
                fontSize: "clamp(16px, 2vw, 30px)",
                wordSpacing: 6,
                lineHeight: 0.96,
                letterSpacing: "-0.045em",
              }}
            >
              {pillar.body}
            </p>
          </div>
        ))}
      </div>
    </Section>
  );
}
