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
      <div className="flex max-w-[760px] flex-col gap-6 mb-10">
        {/* <Eyebrow>The Problem</Eyebrow> */}
        <h2 className="font-display text-[30px] font-medium leading-[1.14] tracking-[-0.025em] text-pretty sm:text-[42px] mb-6"
        style={{ 
                      fontFamily: "var(--font-manrope), sans-serif",
                      fontWeight: 400,
                      fontSize: "clamp(32px, 7.2vw, 48px)",
                      lineHeight: 1.1,
                      letterSpacing: "-0.045em"
                    }}>
          <span className="text-gray-900">
            Enterprise operations already capture everything.
          </span>{" "}
          <span className="text-ice">
            The challenge is understanding it in real time.
          </span>
        </h2>

        <div className="flex max-w-[620px] flex-col gap-4">
          <p className="text-[16px] leading-[1.62] text-gray-700 text-pretty">
            Every day, enterprises generate millions of operational signals
            through cameras, voice, documents, sensors, ERP systems and connected
            devices.
          </p>
          <p className="text-[16px] leading-[1.62] text-gray-700 text-pretty">
            Most organisations simply collect and store this information. Very
            little becomes real-time operational intelligence.
          </p>
        </div>
      </div>
{/* 
      <div className="mt-12 flex flex-wrap gap-2.5">
        {SOURCES.map((s) => (
          <span
            key={s.label}
            className="inline-flex items-center gap-2.5 rounded-full border border-line-2 bg-raise px-4 py-2 text-[13px] text-ink"
          >
            <Icon name={s.icon} size={15} className="text-ice" />
            {s.label}
          </span>
        ))}
      </div> */}

        <div 
          className="border-2 border-black bg-gray-900"
          style={{
            clipPath: "polygon(28px 0, 100% 0, 100% calc(100% - 28px), calc(100% - 28px) 100%, 0 100%, 0 28px)"
          }}
        >
          <OperationalInsightsCard />
        </div>
    </Section>
  );
}
