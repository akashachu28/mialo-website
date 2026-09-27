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
      {/* Background image */}
      <div 
        className="absolute inset-0 pointer-events-none opacity-40"
        style={{
          backgroundImage: "url('/images/heroCompany.png')",
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat"
        }}
      />
      {/* Gradient overlay on top of image */}
      <div 
        className="absolute inset-0 pointer-events-none"
        style={{
          background: "radial-gradient(ellipse at center, var(--color-background) 0%, transparent 90%)"
        }}
      />
      <div className="absolute left-0 bottom-0 w-full h-20 bg-linear-to-t from-background to-transparent"/>
  
      <h1
      className="mb-12 relative z-20 text-pista"
      style={{
              fontFamily: "var(--font-manrope), sans-serif",
              fontWeight: 400,
              fontSize: "clamp(32px, 7.2vw, 60px)",
              lineHeight: 0.96,
              letterSpacing: "-0.045em",
            }}>
        What is mialo?
      </h1>
      
      <div className="max-w-3xl ml-40 space-y-32 relative z-10">
        {PILLARS.map((pillar, index) => (
          <div 
            key={pillar.title} 
            className={`relative ${index === 0 ? "max-w-2xl -ml-80" : "max-w-3xl ml-40"}`}
          >
            {/* Title with Line and Dot */}
            <div className="relative mb-4 text-right">
              <h2
                className="text-white tracking-tight relative z-10"
                style={{
              fontFamily: "var(--font-manrope), sans-serif",
              fontWeight: 500,
              fontSize: "clamp(32px, 7.2vw, 60px)",
              lineHeight: 1.1,
              letterSpacing: "-0.045em",
            }}
              >
                {pillar.title}
              </h2>

              {/* Dot and Line at heading level */}
              {index === 0 ? (
                // Mission: Angled line going downward
                <div className="absolute -right-2 top-1/2 -translate-y-1/2 translate-x-full flex items-start ml-8">
                  {/* Dot */}
                  <div className="w-6 h-6 rounded-full bg-pista shrink-0 z-10 mt-0" />
                  {/* Angled line using SVG with sharp corner */}
                  <svg 
                    className="absolute left-6 top-3" 
                    width="100vw" 
                    height="150" 
                    style={{ overflow: 'visible' }}
                  >
                    <path 
                      d="M 0 0 L 500 0 L 1000 100" 
                      stroke="#C6FF6D" 
                      strokeWidth="2" 
                      fill="none"
                    />
                  </svg>
                </div>
              ) : (
                // Vision: Straight line
                <div className="absolute -right-2 top-1/2 -translate-y-1/2 translate-x-full flex items-center ml-8">
                  {/* Dot */}
                  <div className="w-6 h-6 rounded-full bg-pista shrink-0 z-10" />
                  {/* Line extending to the right edge */}
                  <div className="h-0.5 bg-pista w-screen" />
                </div>
              )}
            </div>

            {/* Description */}
            <p
              className="text-gray-400 max-w-lg ml-auto text-right"
              style={{
                fontFamily: "var(--font-manrope), sans-serif",
                fontWeight: 400,
                fontSize: "clamp(16px, 2vw, 20px)",
                lineHeight: 1.3,
                letterSpacing: "-0.01em",
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
