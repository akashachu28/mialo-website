import {
  Section,
  SectionHeader,
  Eyebrow,
  Kicker,
  ArrowLink,
  Container,
  PrimaryButton,
  GhostButton,
  Icon,
  type IconName,
} from "@/components/ui";

const DOMAINS: { icon: IconName; title: string; body: string }[] = [
  { icon: "eye", title: "Vision Intelligence", body: "See, identify and understand the physical world." },
  { icon: "mic", title: "Voice Intelligence", body: "Understand conversations and spoken events in real time." },
  { icon: "doc", title: "Document Intelligence", body: "Extract, classify and search enterprise documents." },
  { icon: "radio", title: "Broadcast Intelligence", body: "Monitor TV, radio and media streams with AI insights." },
  { icon: "ruler", title: "Measurement Intelligence", body: "Accurately measure real-world objects at scale." },
  { icon: "brain", title: "Enterprise Intelligence", body: "AI assistants, RAG and copilots for enterprise knowledge." },
  { icon: "cpu", title: "Edge Intelligence", body: "Run intelligence anywhere operations take place." },
];

const DEPLOY: { icon: IconName; title: string; body: string; level: string }[] = [
  { icon: "cpu", title: "Edge", body: "On-device inference with low latency.", level: "Edge" },
  { icon: "cloud", title: "Cloud", body: "Elastic scale with availability.", level: "Regional Edge" },
  { icon: "network", title: "Hybrid", body: "Best of edge and cloud together.", level: "Private Cloud" },
  { icon: "database", title: "Command Center", body: "Complete control within your VPC.", level: "Enterprise" },
];

const ENTERPRISE = [
  "Enterprise Security",
  "Open APIs",
  "Existing Camera Support",
  "ERP / CRM Integration",
  "Human-in-the-loop Workflows",
  "Scalable Architecture",
  "Role Based Access",
  "Observability & Monitoring",
];

const OUTCOMES: { icon: IconName; label: string }[] = [
  { icon: "shield", label: "Safe and Efficient Operations" },
  { icon: "activity", label: "Higher Productivity" },
  { icon: "clock", label: "Faster Decisions" },
  { icon: "coins", label: "Reduced Costs" },
  { icon: "users", label: "Improved Customer Experience" },
  { icon: "doc", label: "Stronger Compliance" },
  { icon: "eye", label: "Real-time Operational Visibility" },
  { icon: "message", label: "Continuous Improvement" },
];

function MiniHeader({ eyebrow, title }: { eyebrow: string; title: string }) {
  return (
    <div className="flex flex-col gap-3 sm:gap-4 text-center lg:text-left">
      <h3 
        className="text-primary text-pretty"
        style={{
          fontFamily: "var(--font-manrope), sans-serif",
          fontWeight: 500,
          fontSize: "clamp(24px, 5vw, 32px)",
          lineHeight: 0.96,
          letterSpacing: "-0.045em",
        }}
      >
        {title}
      </h3>
    </div>
  );
}

export default function PlatformSection4() {
  return (
    <>


      {/* -------- Deploy Anywhere + Enterprise Ready -------- */}
      <Section>
        <div className="grid gap-12 sm:gap-16 lg:grid-cols-2 lg:gap-20">
          {/* Deploy Anywhere */}
          <div className="flex flex-col gap-6 sm:gap-8">
            <MiniHeader eyebrow="Deploy Anywhere" title="Deploy where your operations demand." />
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-4">
              {DEPLOY.map((o) => (
                <div
                  key={o.title}
                  className="flex flex-col gap-3 sm:gap-4 border border-line-2 bg-raise p-4 sm:p-6 rounded-lg transition-all hover:border-line hover:shadow-sm"
                  style={{
                    clipPath: "polygon(12px 0, 100% 0, 100% calc(100% - 12px), calc(100% - 12px) 100%, 0 100%, 0 12px)",
                  }}
                >
                  <Icon name={o.icon} size={20} strokeWidth={1.5} className="text-pista sm:w-6 sm:h-6" />
                  <div className="flex flex-col gap-2">
                    <h4 
                      className="text-primary"
                      style={{
                        fontFamily: "var(--font-manrope), sans-serif",
                        fontWeight: 600,
                        fontSize: "clamp(14px, 3vw, 16px)",
                        lineHeight: 1.3,
                        letterSpacing: "-0.01em",
                      }}
                    >
                      {o.title}
                    </h4>
                    <p 
                      className="text-muted text-pretty"
                      style={{
                        fontFamily: "var(--font-manrope), sans-serif",
                        fontWeight: 400,
                        fontSize: "clamp(12px, 2.5vw, 14px)",
                        lineHeight: 1.5,
                        letterSpacing: "0em",
                      }}
                    >
                      {o.body}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Enterprise Ready */}
          <div className="flex flex-col gap-6 sm:gap-8">
            <MiniHeader
              eyebrow="Enterprise Ready"
              title="Designed for enterprise scale from day one."
            />
            <div className="grid grid-cols-1 gap-x-8 sm:gap-x-12 sm:grid-cols-2">
              {ENTERPRISE.map((f, i) => (
                <div
                  key={f}
                  className={`flex items-start gap-3 border-line py-3 sm:py-4 ${
                    i === ENTERPRISE.length - 1 ? "" : "border-b"
                  } ${i >= ENTERPRISE.length - 2 ? "sm:border-b-0" : ""}`}
                >
                  <Icon
                    name="check"
                    size={16}
                    strokeWidth={2}
                    className="shrink-0 text-pista mt-0.5 sm:w-5 sm:h-5"
                  />
                  <span 
                    className="text-ink"
                    style={{
                      fontFamily: "var(--font-manrope), sans-serif",
                      fontWeight: 500,
                      fontSize: "clamp(13px, 2.8vw, 15px)",
                      lineHeight: 1.5,
                      letterSpacing: "-0.01em",
                    }}
                  >
                    {f}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </Section>

      {/* -------- Business Outcomes -------- */}
      <Section>
        <div className="flex flex-col gap-10 sm:gap-14">
          <SectionHeader
            eyebrow="Business Outcomes"
            titlePista="Operational intelligence that delivers measurable outcomes."
          />
          <div className="grid grid-cols-2 gap-3 mt-1 sm:gap-3.5 lg:grid-cols-4">
            {OUTCOMES.map((o) => (
              <div
                key={o.label}
                className="flex flex-col items-center gap-2.5 sm:gap-3 rounded-xl border border-line bg-raise p-3 sm:p-5 text-center"
              >
                <span className="flex h-8 w-8 sm:h-10 sm:w-10 items-center justify-center rounded-[8px] sm:rounded-[10px] border border-line-2 bg-panel text-ice">
                  <Icon name={o.icon} size={16} className="sm:w-5 sm:h-5" />
                </span>
                <span 
                  className="text-ink"
                  style={{
                    fontFamily: "var(--font-manrope), sans-serif",
                    fontWeight: 500,
                    fontSize: "clamp(11px, 2.5vw, 14px)",
                    lineHeight: 1.4,
                    letterSpacing: "-0.01em",
                  }}
                >
                  {o.label}
                </span>
              </div>
            ))}
          </div>
        </div>
      </Section>


    </>
  );
}
