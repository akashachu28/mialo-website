import { Section, SectionHeader } from "@/components/ui";

const STEPS = [
  {
    n: "01",
    title: "Observe",
    body: "Ingest live streams and records from every operational source, on the edge or in the cloud.",
  },
  {
    n: "02",
    title: "Understand",
    body: "Fuse signals across modalities and align them with enterprise knowledge and context.",
  },
  {
    n: "03",
    title: "Act",
    body: "Surface what matters and trigger the right workflow, alert or decision automatically.",
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
        title="Every operational signal contributes to a complete picture."
        lead="Mialo fuses information from cameras, conversations, documents, IoT devices, enterprise systems and edge hardware to create a unified understanding of operations."
      />

      <div className="grid items-start gap-14 lg:grid-cols-[380px_1fr]">
        <div>
          {STEPS.map((s) => (
            <div
              key={s.n}
              className="flex gap-[18px] border-t border-line py-[22px] first:border-t-0 first:pt-0"
            >
              <span className="shrink-0 pt-0.5 font-mono text-[12px] text-ice">
                {s.n}
              </span>
              <div>
                <h3 className="font-display text-[18px] font-medium tracking-[-0.01em] text-primary">
                  {s.title}
                </h3>
                <p className="mt-1.5 text-[14px] leading-[1.6] text-muted text-pretty">
                  {s.body}
                </p>
              </div>
            </div>
          ))}
        </div>

        <div className="rounded-2xl border border-line-2 bg-panel p-7">
          <svg viewBox="0 0 620 420" className="block w-full">
            <defs>
              <radialGradient id="mialo-fusion-glow" cx="50%" cy="50%" r="50%">
                <stop offset="0%" stopColor="#6C93FF" stopOpacity="0.28" />
                <stop offset="100%" stopColor="#6C93FF" stopOpacity="0" />
              </radialGradient>
            </defs>

            <circle cx="470" cy="210" r="120" fill="url(#mialo-fusion-glow)" />

            <g stroke="#2E323B" strokeWidth="1" fill="none">
              {LINKS.map((d) => (
                <path key={d} d={d} />
              ))}
            </g>

            <g
              style={{ fontFamily: "var(--font-geist-mono), ui-monospace, monospace" }}
              fontSize="11"
              fill="#B4BAC4"
            >
              {SOURCES.map((s) => (
                <g key={s.label}>
                  <circle cx={s.x} cy={s.y} r="4" fill="#6C93FF" />
                  <text x={s.x + 14} y={s.y + 4}>
                    {s.label}
                  </text>
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

            <path d="M522 210 H 596" stroke="#2E323B" strokeWidth="1" />
            <circle cx="600" cy="210" r="3" fill="#00E599" />
            <g
              style={{ fontFamily: "var(--font-geist-mono), ui-monospace, monospace" }}
              fontSize="10"
              fill="#8A909C"
            >
              <text x="540" y="196">UNIFIED</text>
              <text x="540" y="230">UNDERSTANDING</text>
            </g>
          </svg>
        </div>
      </div>
    </Section>
  );
}
