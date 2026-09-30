import { Section, SectionHeader } from "@/components/ui";

const STEPS = [
  {
    n: "01",
    title: "Observe",
    subtitle: "Capture what is happening.",
    body: "Connect cameras, voice, documents, sensors, IoT devices and enterprise systems-at the edge or in the cloud.",
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
    <Section className="relative">
      <SectionHeader
        className="mb-10 sm:mb-14"
        eyebrow="Multimodal Intelligence"
        title="Every operational signal"
        titleIce=" contributes to a complete picture."
        leadBlack="Every operation generates signals. Mialo turns those signals into context-aware intelligence and action."
      />

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8 lg:gap-12">
        {STEPS.map((s, index) => (
          <div
            key={s.n}
            className={`flex flex-col gap-3 sm:gap-4 ${
              index < STEPS.length - 1 
                ? "border-b border-gray-900 pb-6 md:border-b-0 md:pb-0 md:border-r" 
                : ""
            }`}
          >
            <span className="font-mono text-base sm:text-lg text-ice">
              {s.n}
            </span>
            <div>
              <h3 
                className="text-ice text-center md:text-left"
                style={{ 
                  fontFamily: "var(--font-manrope), sans-serif",
                  fontWeight: 600,
                  fontSize: "clamp(24px, 5vw, 40px)",
                  lineHeight: 0.96,
                  letterSpacing: "-0.045em"
                }}
              >
                {s.title}
              </h3>
              <h4 
                className="text-gray-700 mt-2 text-center md:text-left"
                style={{
                  fontSize: "clamp(16px, 3vw, 20px)",
                  lineHeight: 1.2,
                }}
              >
                {s.subtitle}
              </h4>
              <p 
                className="mt-3 text-faint text-pretty text-center md:text-left"
                style={{
                  fontSize: "clamp(14px, 2.5vw, 16px)",
                  lineHeight: 1.4,
                }}
              >
                {s.body}
              </p>
            </div>
          </div>
        ))}
      </div>
    </Section>
  );
}
