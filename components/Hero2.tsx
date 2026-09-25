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
      <div className="flex flex-col lg:flex-row gap-8 lg:gap-12 items-start">
        {/* Left side: Text content */}
        <div className="flex max-w-[760px] lg:max-w-[480px] flex-col gap-6 flex-shrink-0">
          {/* <Eyebrow>The Problem</Eyebrow> */}
          <h2
            className="font-display text-[30px] font-medium leading-[1.14] tracking-[-0.025em] text-pretty sm:text-[42px] mb-6"
            style={{
              fontFamily: "var(--font-manrope), sans-serif",
              fontWeight: 400,
              fontSize: "clamp(32px, 7.2vw, 60px)",
              lineHeight: 1.1,
              letterSpacing: "-0.045em",
            }}
          >
            <span className="text-gray-900">
              Your business is generating intelligence every second.
            </span>{" "}
            <span
              className="text-ice italic font-semibold"
            >
              Are you capturing it?
            </span>
          </h2>

          <div className="flex max-w-[620px] flex-col gap-4">
            <p className="text-gray-700 text-pretty"
            style={{ 
                      fontFamily: "var(--font-manrope), sans-serif",
                      fontWeight: 400,
                      fontSize: "clamp(18px, 7.2vw, 24px)",
                      lineHeight: 1.1,
                      letterSpacing: "-0.045em",
                      wordSpacing: 6,
                      // color: "white"
                    }}>
              Cameras, conversations, documents, sensors and enterprise systems
              produce millions of operational signals every day. Mialo
              transforms those signals into real-time understanding and action.
            </p>
            {/* <p className="text-[16px] leading-[1.62] text-gray-700 text-pretty">
              Most organizations simply collect and store this information. Very
              little becomes real-time operational intelligence.
            </p> */}
          </div>
        </div>

        {/* Right side: Operational Insights Card */}
        <div
          className="flex-1 border-2 border-black bg-gray-900 w-full lg:w-auto lg:max-h-[600px]"
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
