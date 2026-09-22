import { Section, SectionHeader, Kicker, ArrowLink, Icon, type IconName } from "@/components/ui";

const SIGNALS: { icon: IconName; label: string }[] = [
  { icon: "video", label: "Cameras" },
  { icon: "mic", label: "Voice" },
  { icon: "doc", label: "Documents" },
  { icon: "radio", label: "Sensors" },
  { icon: "server", label: "Systems" },
  { icon: "cpu", label: "Edge" },
];

const ACTIONS: { icon: IconName; label: string }[] = [
  { icon: "sparkle", label: "Insights" },
  { icon: "target", label: "Decisions" },
  { icon: "check-circle", label: "Automation" },
  { icon: "workflow", label: "Workflows" },
];

const MODELS: { icon: IconName; label: string }[] = [
  { icon: "eye", label: "Vision AI" },
  { icon: "mic", label: "Voice AI" },
  { icon: "doc", label: "Document AI" },
  { icon: "database", label: "Enterprise Knowledge" },
  { icon: "brain", label: "Reasoning" },
  { icon: "activity", label: "Operational Intelligence" },
];

function Chip({ icon, label }: { icon: IconName; label: string }) {
  return (
    <div className="flex items-center gap-2.5 rounded-[9px] border border-line-2 bg-raise px-3 py-2.5 text-[12.5px] text-ink">
      <Icon name={icon} size={16} className="shrink-0 text-ice" />
      {label}
    </div>
  );
}

function Rail() {
  return (
    <div
      className="relative hidden h-px min-w-[80px] flex-1 lg:block"
      style={{
        background:
          "linear-gradient(90deg, transparent, var(--color-line-3) 20%, var(--color-line-3) 80%, transparent)",
      }}
    >
      <span
        className="absolute top-1/2 h-1.5 w-1.5 -translate-y-1/2 rounded-full bg-green shadow-[0_0_10px_#00E599] motion-safe:animate-rail"
        style={{ left: "8%" }}
      />
    </div>
  );
}

function VRail() {
  return (
    <div className="h-6 w-px bg-linear-to-b from-line-3 to-transparent lg:hidden" />
  );
}

export default function PlatformSection2() {
  return (
    <>
      {/* -------- The Intelligence Layer -------- */}
      <Section>
        <div className="flex flex-col gap-14">
          <SectionHeader
            eyebrow="The Intelligence Layer"
            title="The missing layer between enterprise operations and intelligent action."
            lead="Mialo continuously observes operational signals, understands them using specialized AI models and enterprise knowledge, and delivers insights and automated workflows that drive real outcomes."
          />

          <div className="flex flex-col items-center gap-6 lg:grid lg:grid-cols-[1fr_auto_1fr_auto_1fr] lg:items-center lg:gap-0">
            {/* signals */}
            <div className="w-full max-w-sm lg:max-w-none">
              <Kicker className="mb-3.5 block">Operational Signals</Kicker>
              <div className="grid grid-cols-2 gap-2.5 rounded-2xl border border-line-2 bg-panel p-[18px]">
                {SIGNALS.map((s) => (
                  <Chip key={s.label} {...s} />
                ))}
              </div>
            </div>

            <Rail />
            <VRail />

            {/* core */}
            <div className="relative flex justify-center">
              <div
                className="pointer-events-none absolute h-[190px] w-[190px] rounded-full"
                style={{
                  background:
                    "radial-gradient(circle, rgba(108,147,255,0.14), transparent 70%)",
                }}
              />
              <div
                className="relative flex h-[132px] w-[132px] items-center justify-center rounded-full border border-ice/30"
                style={{
                  background:
                    "radial-gradient(circle at 50% 40%, rgba(108,147,255,0.14), transparent 70%)",
                }}
              >
                <span className="font-display text-[20px] font-medium tracking-[-0.02em] text-[#97B4FF]">
                  mialo
                </span>
              </div>
            </div>

            <Rail />
            <VRail />

            {/* actions */}
            <div className="w-full max-w-sm lg:max-w-none">
              <Kicker className="mb-3.5 block">Business Action</Kicker>
              <div className="flex flex-col gap-2.5">
                {ACTIONS.map((a) => (
                  <Chip key={a.label} {...a} />
                ))}
              </div>
            </div>
          </div>
        </div>
      </Section>

      {/* -------- How Mialo Thinks -------- */}
      <Section>
        <div className="flex flex-col gap-12">
          <SectionHeader
            eyebrow="How Mialo Thinks"
            title="Operational intelligence built on specialized AI — not just large language models."
            lead="Different operational problems require different forms of intelligence. Mialo orchestrates specialized vision, voice, document and reasoning models together, using LLMs only where they add value."
          >
            <ArrowLink>Learn more about our approach</ArrowLink>
          </SectionHeader>

          <div className="relative grid grid-cols-2 gap-x-3 gap-y-8 sm:grid-cols-3 lg:grid-cols-6">
            <div
              className="absolute left-[8%] right-[8%] top-[46px] hidden h-px lg:block"
              style={{
                background:
                  "repeating-linear-gradient(90deg, var(--color-line-3) 0 6px, transparent 6px 14px)",
              }}
            />
            {MODELS.map((m, i) => (
              <div
                key={m.label}
                className="relative flex flex-col items-center gap-3 text-center"
              >
                <span className="font-mono text-[10px] tracking-[0.1em] text-faint">
                  {String(i + 1).padStart(2, "0")}
                </span>
                <span className="flex h-11 w-11 items-center justify-center rounded-[11px] border border-ice/30 bg-ice/10 text-ice">
                  <Icon name={m.icon} size={20} />
                </span>
                <span className="text-[12px] leading-[1.35] text-ink">
                  {m.label}
                </span>
              </div>
            ))}
          </div>
        </div>
      </Section>
    </>
  );
}
