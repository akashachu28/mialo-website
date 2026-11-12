import Image from "next/image";
import { Section, SectionHeader } from "@/components/ui";
import { Eye, Brain, Zap } from "lucide-react";

const STEPS = [
  {
    n: "01",
    title: "Observe",
    subtitle: "Capture what is happening.",
    body: "Connect cameras, voice, documents, sensors, IoT devices and enterprise systems-at the edge or in the cloud.",
    icon: Eye,
  },
  {
    n: "02",
    title: "Understand",
    subtitle: "Make sense of what is happening.",
    body: "Fuse multimodal signals with enterprise knowledge, operational context and specialized AI models.",
    icon: Brain,
  },
  {
    n: "03",
    title: "Act",
    subtitle: "Turn intelligence into action.",
    body: "Identify what matters, determine the right response, and trigger recommendations, alerts and automated workflows in real time.",
    icon: Zap,
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
    <Section className="relative overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0 z-0 opacity-30">
        <Image
          src="/images/minimal-bg.png"
          alt="Background pattern"
          fill
          className="object-cover"
          priority={false}
        />
      </div>

      <div className="relative z-10">
        <SectionHeader
          className="mb-10 sm:mb-14"
          eyebrow="Multimodal Intelligence"
          title="Every operational signal"
          titleIce=" contributes to a complete picture."
          leadBlack="Every operation generates signals. Mialo turns those signals into context-aware intelligence and action."
        />

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8 lg:gap-12">
          {STEPS.map((s, index) => {
            const Icon = s.icon;
            return (
              <div
                key={s.n}
                className={`flex flex-col gap-3 sm:gap-4 ${
                  index < STEPS.length - 1 
                    ? "border-b border-gray-900 pb-6 md:border-b-0 md:pb-0 md:border-r md:pr-8 lg:pr-12" 
                    : ""
                }`}
              >
                <span className="font-mono text-base sm:text-lg text-ice">
                  {s.n}
                </span>
                <div className="flex items-start gap-3 sm:gap-4">
                  {/* Icon */}
                  <div className="flex-shrink-0 p-2 sm:p-3 rounded-lg bg-ice/10 text-ice">
                    <Icon className="w-6 h-6 sm:w-8 sm:h-8" strokeWidth={1.5} />
                  </div>
                  
                  {/* Content */}
                  <div className="flex-1">
                    <h3 
                      className="text-ice"
                      style={{ 
                        fontFamily: "var(--font-manrope), sans-serif",
                        fontWeight: 600,
                        fontSize: "clamp(20px, 4vw, 32px)",
                        lineHeight: 1.1,
                        letterSpacing: "-0.03em"
                      }}
                    >
                      {s.title}
                    </h3>
                    <h4 
                      className="text-gray-700 mt-2"
                      style={{
                        fontSize: "clamp(14px, 2.5vw, 16px)",
                        lineHeight: 1.3,
                      }}
                    >
                      {s.subtitle}
                    </h4>
                    <p 
                      className="mt-3 text-faint text-pretty"
                      style={{
                        fontSize: "clamp(13px, 2.2vw, 15px)",
                        lineHeight: 1.5,
                      }}
                    >
                      {s.body}
                    </p>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </Section>
  );
}
