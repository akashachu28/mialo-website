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
  { icon: "shield", label: "Safer Operations" },
  { icon: "activity", label: "Higher Productivity" },
  { icon: "clock", label: "Faster Decisions" },
  { icon: "coins", label: "Reduced Costs" },
  { icon: "users", label: "Improved Customer Experience" },
  { icon: "doc", label: "Better Compliance" },
  { icon: "eye", label: "Operational Visibility" },
  { icon: "message", label: "Continuous Learning" },
];

function MiniHeader({ eyebrow, title }: { eyebrow: string; title: string }) {
  return (
    <div className="flex flex-col gap-4">
      <Eyebrow>{eyebrow}</Eyebrow>
      <h3 className="font-display text-[25px] font-medium leading-[1.2] tracking-[-0.02em] text-primary text-pretty">
        {title}
      </h3>
    </div>
  );
}

export default function PlatformSection4() {
  return (
    <>
      {/* -------- Intelligence Domains -------- */}
      {/* <Section>
        <div className="flex flex-col gap-14">
          <SectionHeader
            eyebrow="Intelligence Domains"
            title="Specialized intelligence domains. One unified platform."
          />

          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {DOMAINS.map((d) => (
              <div
                key={d.title}
                className="flex flex-col gap-4 rounded-[14px] border border-line-2 bg-raise p-6 transition-colors hover:border-line-3"
              >
                <Icon name={d.icon} size={26} strokeWidth={1.4} className="text-ice" />
                <div className="flex flex-col gap-1.5">
                  <h3 className="font-display text-[16px] font-medium tracking-[-0.01em] text-primary">
                    {d.title}
                  </h3>
                  <p className="text-[14px] leading-[1.5] text-muted text-pretty">
                    {d.body}
                  </p>
                </div>
                <ArrowLink className="mt-auto">Explore</ArrowLink>
              </div>
            ))}

            <div
              className="flex flex-col justify-between gap-4 rounded-[14px] border border-ice/30 p-6"
              style={{
                background:
                  "linear-gradient(160deg, rgba(108,147,255,0.14), transparent 60%)",
              }}
            >
              <Kicker className="text-ice">All domains</Kicker>
              <div className="flex flex-col gap-3.5">
                <p className="font-display text-[17px] font-medium tracking-[-0.01em] text-primary">
                  Seven domains, one API and one deployment model.
                </p>
                <ArrowLink>Explore all intelligence domains</ArrowLink>
              </div>
            </div>
          </div>
        </div>
      </Section> */}

      {/* -------- Deploy Anywhere + Enterprise Ready -------- */}
      <Section>
        <div className="grid gap-16 lg:grid-cols-2">
          <div className="flex flex-col gap-9">
            <MiniHeader eyebrow="Deploy Anywhere" title="Deploy where your operations demand." />
            <div className="grid grid-cols-2 gap-4">
              {DEPLOY.map((o) => (
                <div
                  key={o.title}
                  className="flex flex-col gap-3.5 rounded-xl border border-line-2 bg-raise p-5"
                >
                  <Icon name={o.icon} size={22} strokeWidth={1.4} className="text-ice" />
                  <div className="flex flex-col gap-1.5">
                    <h4 className="font-display text-[15px] font-medium text-primary">
                      {o.title}
                    </h4>
                    <p className="text-[13px] leading-[1.45] text-muted text-pretty">
                      {o.body}
                    </p>
                  </div>
                  <span className="mt-1 inline-flex items-center gap-[7px] font-mono text-[10.5px] uppercase tracking-[0.08em] text-muted">
                    <span className="h-[5px] w-[5px] shrink-0 rounded-full bg-green" />
                    {o.level}
                  </span>
                </div>
              ))}
            </div>
          </div>

          <div className="flex flex-col gap-9">
            <MiniHeader
              eyebrow="Enterprise Ready"
              title="Designed for enterprise scale from day one."
            />
            <div className="grid grid-cols-1 gap-x-10 sm:grid-cols-2">
              {ENTERPRISE.map((f, i) => (
                <div
                  key={f}
                  className={`flex items-center gap-3 border-line py-3.5 text-[14px] text-ink ${
                    i === ENTERPRISE.length - 1 ? "" : "border-b"
                  } ${i >= ENTERPRISE.length - 2 ? "sm:border-b-0" : ""}`}
                >
                  <Icon
                    name="check"
                    size={18}
                    strokeWidth={1.8}
                    className="shrink-0 text-green"
                  />
                  {f}
                </div>
              ))}
            </div>
          </div>
        </div>
      </Section>

      {/* -------- Business Outcomes -------- */}
      <Section>
        <div className="flex flex-col gap-14">
          <SectionHeader
            eyebrow="Business Outcomes"
            titlePista="Operational intelligence that delivers measurable outcomes."
          />
          <div className="grid grid-cols-2 gap-3.5 sm:grid-cols-4">
            {OUTCOMES.map((o) => (
              <div
                key={o.label}
                className="flex flex-col items-center gap-3 rounded-xl border border-line bg-raise p-5 text-center"
              >
                <span className="flex h-10 w-10 items-center justify-center rounded-[10px] border border-line-2 bg-panel text-ice">
                  <Icon name={o.icon} size={20} />
                </span>
                <span className="text-[12.5px] font-medium leading-[1.35] text-ink">
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
