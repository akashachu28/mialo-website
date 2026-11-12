import Image from "next/image";
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
          fontSize: "clamp(24px, 7.2vw, 50px)",
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
      <Section className="relative overflow-hidden">
        {/* Background Image */}
        <div className="absolute inset-0 z-0">
          <Image
            src="/images/network-bg.png"
            alt="Network background"
            fill
            className="object-cover"
            priority={false}
          />
          {/* Gradient overlay to blend with dark background */}
          <div 
            className="absolute inset-0"
            style={{
              background: 'radial-gradient(circle at center, rgba(8,9,11,0.95) 0%, rgba(15,23,42,0.7) 40%, transparent 70%)'
            }}
          />
          {/* Gradient overlay that transitions to dark at bottom */}
      <div 
        className="absolute inset-0 z-0"
        style={{
          background: 'linear-gradient(to bottom, transparent 0%, transparent 60%, rgba(8,9,11,0.3) 80%, rgba(8,9,11,0.7) 100%)'
        }}
      />
        </div>

        <div className="relative z-10 grid gap-12 sm:gap-16 lg:grid-cols-2 lg:gap-20">
          {/* Deploy Anywhere */}
          <div className="flex flex-col gap-6 sm:gap-8">
            <MiniHeader eyebrow="DEPLOYMENT" title="Deploy where your operations demand." />
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-4">
              {DEPLOY.map((o) => (
                <div
                  key={o.title}
                  className="flex flex-col gap-3 sm:gap-4 border border-white/10 p-4 sm:p-6  transition-all hover:border-white/30 hover:bg-white/5 group"
                  style={{
                    clipPath: "polygon(20px 0, 100% 0, 100% calc(100% - 20px), calc(100% - 20px) 100%, 0 100%, 0 20px)",
                    background: 'rgba(255, 255, 255, 0.03)',
                    backdropFilter: 'blur(12px)',
                    WebkitBackdropFilter: 'blur(12px)',
                    boxShadow: '0 8px 32px 0 rgba(0, 0, 0, 0.37)',
                  }}
                >
                  <Icon name={o.icon} size={20} strokeWidth={1.5} className="text-pista sm:w-6 sm:h-6 transition-transform group-hover:scale-110" />
                  <div className="flex flex-col gap-2">
                    <h4 
                      className="text-white"
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
                      className="text-white/70 text-pretty"
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
          <div className="flex flex-col gap-6 sm:gap-8 lg:mt-auto">
            <MiniHeader
              eyebrow="ENTERPRISE READY"
              title="Designed for enterprise scale from day one."
            />
            <div className="grid grid-cols-1 gap-x-8 sm:gap-x-12 sm:grid-cols-2">
              {ENTERPRISE.map((f, i) => (
                <div
                  key={f}
                  className={`flex items-start gap-3 border-line/30 py-3 sm:py-4 ${
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
                    className="text-white/90"
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
      <Section className="relative overflow-hidden">
        {/* Gradient overlay that transitions from dark to light */}
        <div 
          className="absolute inset-0 z-0"
          style={{
            background: 'linear-gradient(to bottom, rgba(8,9,11,0.7) 0%, rgba(8,9,11,0.3) 30%, transparent 60%)'
          }}
        />
        
        
        <div className="relative z-10 flex flex-col gap-10 sm:gap-14">
          <SectionHeader
            eyebrow="Business Outcomes"
            titlePista="Operational intelligence that delivers measurable outcomes."
          />
          <div className="grid grid-cols-2 gap-3 mt-1 sm:gap-3.5 lg:grid-cols-4">
            {OUTCOMES.map((o) => (
              <div
                key={o.label}
                className="flex flex-col items-center gap-2.5 sm:gap-3 rounded-xl border border-white/10 p-3 sm:p-5 text-center transition-all hover:border-white/30 hover:bg-white/5 group"
                style={{
                  background: 'rgba(255, 255, 255, 0.05)',
                  backdropFilter: 'blur(10px)',
                  WebkitBackdropFilter: 'blur(10px)',
                  boxShadow: '0 4px 24px 0 rgba(0, 0, 0, 0.25)',
                }}
              >
                <span 
                  className="flex h-8 w-8 sm:h-10 sm:w-10 items-center justify-center rounded-lg sm:rounded-[10px] border border-white/20 text-pista transition-all group-hover:border-pista/50 group-hover:scale-110"
                  style={{
                    background: 'rgba(255, 255, 255, 0.03)',
                    backdropFilter: 'blur(8px)',
                    WebkitBackdropFilter: 'blur(8px)',
                  }}
                >
                  <Icon name={o.icon} size={16} className="sm:w-5 sm:h-5" />
                </span>
                <span 
                  className="text-white/90"
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
