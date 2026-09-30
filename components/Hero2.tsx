import { Section, Eyebrow, Icon, type IconName } from "./ui";
import OperationalInsightsCard from "./OperationalInsightsCard";

const SOURCES: { icon: IconName; label: string }[] = [
  { icon: "video", label: "Cameras" },
  { icon: "mic", label: "Voice" },
  { icon: "doc", label: "Documents" },
  { icon: "cpu", label: "IoT Sensors" },
  { icon: "database", label: "ERP Systems" },
];

export default function Hero2() {
  return (
    <Section>
      <div className="flex flex-col lg:flex-row gap-6 md:gap-8 lg:gap-12 items-start">
        {/* Left side: Text content */}
        <div className="flex w-full lg:max-w-[480px] flex-col gap-4 md:gap-6 flex-shrink-0 order-2 lg:order-1">
          <h2
            className="text-pretty"
            style={{
              fontFamily: "var(--font-manrope), sans-serif",
              fontWeight: 400,
              fontSize: "clamp(24px, 6vw, 60px)",
              lineHeight: 1.1,
              letterSpacing: "-0.045em",
            }}
          >
            <span className="text-gray-900">
              Your business is generating intelligence every second.
            </span>{" "}
            <span className="text-ice font-semibold">
              Are you capturing it?
            </span>
          </h2>

          <div className="flex flex-col gap-3 md:gap-4">
            <p 
              className="text-gray-700 text-pretty max-w-[620px]"
              style={{ 
                fontFamily: "var(--font-manrope), sans-serif",
                fontWeight: 400,
                fontSize: "clamp(16px, 3.5vw, 24px)",
                lineHeight: 1.4,
                letterSpacing: "-0.025em",
                wordSpacing: 2,
              }}
            >
              Cameras, conversations, documents, sensors and enterprise systems
              produce millions of operational signals every day. Mialo
              transforms those signals into real-time understanding and action.
            </p>
          </div>
        </div>

        {/* Right side: Operational Insights Card */}
        <div
          className="w-full lg:flex-1 border-2 border-black bg-gray-900 order-1 lg:order-2 max-h-[300px] md:max-h-[400px] lg:max-h-[600px]"
          style={{
            clipPath:
              "polygon(28px 0, 100% 0, 100% calc(100% - 28px), calc(100% - 28px) 100%, 0 100%, 0 28px)",
          }}
        >
          <OperationalInsightsCard />
        </div>
      </div>
    </Section>
  );
}
