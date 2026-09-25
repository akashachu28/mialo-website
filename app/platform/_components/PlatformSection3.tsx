import { Section, SectionHeader } from "@/components/ui";

const STEPS = [
  {
    n: "01",
    title: "Observe",
    subtitle: "Capture what is happening.",
    body: "Connect cameras, voice, documents, sensors, IoT devices and enterprise systems—at the edge or in the cloud.",
  },
  {
    n: "02",
    title: "Understand",
    subtitle: "Make sense of what is happening.",
    body: "Fuse multimodal signals with enterprise knowledge, operational context and specialized AI models.",
  },
  {
    n: "03",
    title: "Act",
    subtitle: "Turn intelligence into action.",
    body: "Identify what matters, determine the right response, and trigger recommendations, alerts and automated workflows in real time.",
  },
];

const SOURCES: { x: number; y: number; label: string; anchor?: "start" }[] = [
  { x: 150, y: 46, label: "Vision" },
  { x: 120, y: 112, label: "IoT / Location" },
  { x: 104, y: 178, label: "Voice" },
  { x: 104, y: 242, label: "Documents" },
  { x: 120, y: 308, label: "Sensors" },
  { x: 150, y: 374, label: "Edge Echonet" },
  { x: 300, y: 400, label: "Enterprise Systems" },
];

const LINKS = [
  "M150 46 C 300 60, 360 150, 452 196",
  "M120 112 C 280 130, 340 170, 452 200",
  "M104 178 C 260 190, 340 195, 452 206",
  "M104 242 C 260 232, 340 224, 452 214",
  "M120 308 C 280 292, 340 250, 452 220",
  "M150 374 C 300 360, 360 270, 452 224",
  "M300 400 C 360 360, 400 300, 460 250",
];

export default function PlatformSection3() {
  return (
    <Section>
      <SectionHeader
        className="mb-14"
        eyebrow="Multimodal Intelligence"
        titleIce="Every operational signal contributes to a complete picture."
        leadBlack="Every operation generates signals. Mialo turns those signals into context-aware intelligence and action."
      />

      <div className="grid items-start gap-14 lg:grid-cols-[380px_1fr]">
        <div>
          {STEPS.map((s) => (
            <div
              key={s.n}
              className="flex gap-[18px] border-t border-line py-[22px] first:border-t-0 first:pt-0"
            >
              <span className="shrink-0 pt-0.5 font-mono text-[18px] text-ice">
                {s.n}
              </span>
              <div>
                <h3 className="font-display text-[24px] tracking-[-0.01em] text-ice italic"
                style={{ 
                        fontFamily: "var(--font-manrope), sans-serif",
                        fontWeight: 600,
                        fontSize: "clamp(32px, 7.2vw, 40px)",
                        lineHeight: 0.96,
                        letterSpacing: "-0.045em"
                      }}
      >
                  {s.title}
                </h3>
                <h4 className="text-gray-700 text-[20px]"
                style={{ 
                        fontFamily: "var(--font-manrope), sans-serif",
                        lineHeight: 1.1,
                        letterSpacing: "-0.045em"
                }}>
                  {s.subtitle}
                </h4>
                <p className="mt-3 text-[14px] leading-[1.6] text-faint text-pretty text-[16px]"
                style={{ 
                        fontFamily: "var(--font-manrope), sans-serif",
                        lineHeight: 0.96,
                        letterSpacing: "-0.045em"
                }}>
                  {s.body}
                </p>
              </div>
            </div>
          ))}
        </div>

        <div 
          className="relative border border-line-2 bg-background"
          style={{
            clipPath: "polygon(40px 0, 100% 0, 100% calc(100% - 40px), calc(100% - 40px) 100%, 0 100%, 0 40px)",
          }}
        >
          <div className="p-7">
          <svg viewBox="0 0 620 420" className="block w-full">
            <defs>
              <radialGradient id="mialo-fusion-glow" cx="50%" cy="50%" r="50%">
                <stop offset="0%" stopColor="#6C93FF" stopOpacity="0.28" />
                <stop offset="100%" stopColor="#6C93FF" stopOpacity="0" />
              </radialGradient>
              
              {/* Subtle ice color gradient for each line */}
              <linearGradient id="line-gradient-0" x1="0%" y1="0%" x2="100%" y2="0%">
                <stop offset="0%" stopColor="#5B82EE" stopOpacity="0.6" />
                <stop offset="100%" stopColor="#7DA4FF" stopOpacity="0.9" />
              </linearGradient>
              <linearGradient id="line-gradient-1" x1="0%" y1="0%" x2="100%" y2="0%">
                <stop offset="0%" stopColor="#5580E8" stopOpacity="0.6" />
                <stop offset="100%" stopColor="#83A6FF" stopOpacity="0.9" />
              </linearGradient>
              <linearGradient id="line-gradient-2" x1="0%" y1="0%" x2="100%" y2="0%">
                <stop offset="0%" stopColor="#4F7DE0" stopOpacity="0.6" />
                <stop offset="100%" stopColor="#89A9FF" stopOpacity="0.9" />
              </linearGradient>
              <linearGradient id="line-gradient-3" x1="0%" y1="0%" x2="100%" y2="0%">
                <stop offset="0%" stopColor="#6C93FF" stopOpacity="0.6" />
                <stop offset="100%" stopColor="#8FABFF" stopOpacity="0.9" />
              </linearGradient>
              <linearGradient id="line-gradient-4" x1="0%" y1="0%" x2="100%" y2="0%">
                <stop offset="0%" stopColor="#6089F5" stopOpacity="0.6" />
                <stop offset="100%" stopColor="#95AEFF" stopOpacity="0.9" />
              </linearGradient>
              <linearGradient id="line-gradient-5" x1="0%" y1="0%" x2="100%" y2="0%">
                <stop offset="0%" stopColor="#5886EB" stopOpacity="0.6" />
                <stop offset="100%" stopColor="#9BB1FF" stopOpacity="0.9" />
              </linearGradient>
              <linearGradient id="line-gradient-6" x1="0%" y1="0%" x2="100%" y2="0%">
                <stop offset="0%" stopColor="#7296FF" stopOpacity="0.6" />
                <stop offset="100%" stopColor="#A1B4FF" stopOpacity="0.9" />
              </linearGradient>
            </defs>

            <circle cx="470" cy="210" r="120" fill="url(#mialo-fusion-glow)" />

            {/* line color  */}
            <g strokeWidth="1.5" fill="none">
              {LINKS.map((d, i) => (
                <path key={d} d={d} stroke={`url(#line-gradient-${i})`} />
              ))}
            </g>

            <g
              style={{ fontFamily: "var(--font-geist-mono), ui-monospace, monospace" }}
              fontSize="11"
              fill="#E5E7EB"
            >
              {SOURCES.map((s) => (
                <g key={s.label}>
                  
                  <text x={s.x - 34} y={s.y + 14}>
                    {s.label}
                  </text>
                  <circle cx={s.x} cy={s.y} r="4" fill="#6C93FF" />
                </g>
              ))}
            </g>

            <circle
              cx="470"
              cy="210"
              r="52"
              fill="#0E1013"
              stroke="#6C93FF"
              strokeOpacity="0.4"
            />
            <circle
              cx="470"
              cy="210"
              r="52"
              fill="none"
              stroke="#00E599"
              strokeOpacity="0.25"
              strokeDasharray="3 5"
            />
            <text
              x="470"
              y="215"
              textAnchor="middle"
              style={{ fontFamily: "var(--font-geist-sans), sans-serif" }}
              fontSize="17"
              fontWeight="500"
              fill="#97B4FF"
            >
              mialo
            </text>

            <path d="M522 210 H 596" stroke="#6C93FF" strokeWidth="1" />
            <circle cx="600" cy="210" r="3" fill="#6C93FF" />
            <g
              style={{ fontFamily: "var(--font-geist-mono), ui-monospace, monospace" }}
              fontSize="10"
              fill="#E5E7EB"
            >
              <text x="540" y="196">UNIFIED</text>
              <text x="540" y="230">UNDERSTANDING</text>
            </g>
          </svg>
          </div>
        </div>
      </div>
    </Section>
  );
}
