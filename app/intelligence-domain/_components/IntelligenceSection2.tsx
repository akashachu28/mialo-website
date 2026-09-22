import Image from "next/image";
import {
  Section,
  SectionHeader,
  Eyebrow,
  Container,
  ArrowLink,
  PrimaryButton,
  GhostButton,
  Icon,
  type IconName,
} from "@/components/ui";

type Domain = {
  number: string;
  icon: IconName;
  title: string;
  short: string;
  body: string;
  capabilities: string[];
  image: string;
  alt: string;
};

const DOMAINS: Domain[] = [
  {
    number: "01",
    icon: "eye",
    title: "Vision Intelligence",
    short: "Vision",
    body: "Understand the world through computer vision. Detect, recognize and analyze visual data from cameras and images in real time.",
    capabilities: ["Detection & recognition", "Multi-camera tracking", "Zone & heatmap analytics"],
    image: "/images/visionIntelligence.png",
    alt: "People moving through a facility with live detection boxes and vision analytics overlays",
  },
  {
    number: "02",
    icon: "mic",
    title: "Voice Intelligence",
    short: "Voice",
    body: "Extract meaning from spoken words. Transcribe, understand and analyze voice conversations and audio signals.",
    capabilities: ["Speech-to-text", "Intent & sentiment", "Multilingual"],
    image: "/images/voiceIntelligence.png",
    alt: "A speaker profile beside a blue voice waveform being analyzed in real time",
  },
  {
    number: "03",
    icon: "doc",
    title: "Document Intelligence",
    short: "Document",
    body: "Digitize and understand documents of any kind. Extract, classify and structure information from unstructured data.",
    capabilities: ["OCR & extraction", "Classification", "Structured output"],
    image: "/images/documentIntelligence.png",
    alt: "Contracts, invoices and ID documents being scanned and turned into structured fields",
  },
  {
    number: "04",
    icon: "radio",
    title: "Broadcast Intelligence",
    short: "Broadcast",
    body: "Monitor and analyze broadcasts and media streams in real time to extract actionable insights at scale.",
    capabilities: ["Stream monitoring", "Logo & keyword detection", "Real-time alerts"],
    image: "/images/broadcastIntelligence.png",
    alt: "A control room video wall monitoring many broadcast and camera feeds at once",
  },
  {
    number: "05",
    icon: "ruler",
    title: "Measurement Intelligence",
    short: "Measurement",
    body: "Measure and quantify physical assets and environments using AI-powered measurement models.",
    capabilities: ["Dimensional capture", "Volume estimation", "Scales to fleets"],
    image: "/images/measurementIntelligence.png",
    alt: "A warehouse pallet with AI-generated dimensional measurements and environment readouts",
  },
  {
    number: "06",
    icon: "brain",
    title: "Enterprise Intelligence",
    short: "Enterprise",
    body: "Combine enterprise knowledge, context and workflows to deliver intelligent recommendations and automation.",
    capabilities: ["Knowledge retrieval", "Copilots & assistants", "Workflow context"],
    image: "/images/enterpriseIntelligence.png",
    alt: "A knowledge graph linking policies, people, systems, data and processes to shared insights",
  },
  {
    number: "07",
    icon: "cpu",
    title: "Edge Intelligence",
    short: "Edge",
    body: "Run AI models close to where data is generated. Secure, reliable and real-time intelligence at the edge.",
    capabilities: ["On-device inference", "Low latency", "Offline capable"],
    image: "/images/edgeIntelligence.png",
    alt: "An edge compute board running AI inference with live performance monitoring panels",
  },
];

function DomainRow({ domain, index }: { domain: Domain; index: number }) {
  const reverse = index % 2 === 1;

  return (
    <div className="grid items-center gap-8 border-t border-line pt-12 first:border-t-0 first:pt-0 lg:grid-cols-2 lg:gap-16">
      <div className={`flex flex-col gap-5 ${reverse ? "lg:order-2" : ""}`}>
        <div className="flex items-center gap-3">
          <span className="font-mono text-[12px] tracking-[0.13em] text-faint">
            {domain.number}
          </span>
          <span className="h-px w-8 bg-line-3" />
          <span className="flex h-9 w-9 items-center justify-center rounded-[10px] border border-ice/30 bg-ice/10 text-ice">
            <Icon name={domain.icon} size={18} />
          </span>
        </div>

        <h3 className="font-display text-[25px] font-medium leading-[1.2] tracking-[-0.02em] text-primary text-pretty">
          {domain.title}
        </h3>

        <p className="max-w-[440px] text-[14.5px] leading-[1.62] text-muted text-pretty">
          {domain.body}
        </p>

        <div className="flex flex-wrap gap-x-5 gap-y-2">
          {domain.capabilities.map((c) => (
            <span
              key={c}
              className="inline-flex items-center gap-2 font-mono text-[10.5px] uppercase tracking-[0.08em] text-muted"
            >
              <span className="h-[5px] w-[5px] shrink-0 rounded-full bg-green" />
              {c}
            </span>
          ))}
        </div>

        <ArrowLink className="mt-1">Explore {domain.short}</ArrowLink>
      </div>

      <div className={reverse ? "lg:order-1" : ""}>
        <div className="relative overflow-hidden rounded-[14px] border border-line-2 bg-panel">
          <div className="relative aspect-[2/1] w-full">
            <Image
              src={domain.image}
              alt={domain.alt}
              fill
              sizes="(max-width: 1180px) 100vw, 560px"
              className="object-cover"
            />
          </div>

          {domain.icon === "eye" ? (
            <div className="absolute bottom-3 right-3 w-[104px] rounded-lg border border-line-2 bg-background/70 p-1.5 backdrop-blur-sm">
              <div className="relative aspect-square w-full overflow-hidden rounded">
                <Image
                  src="/images/heatmap.png"
                  alt="Zone occupancy heatmap over a building floor plan"
                  fill
                  sizes="104px"
                  className="object-cover"
                />
              </div>
              <span className="mt-1 block font-mono text-[9px] uppercase tracking-[0.1em] text-faint">
                Zone heatmap
              </span>
            </div>
          ) : null}

          <div className="pointer-events-none absolute inset-x-0 top-0 h-px bg-linear-to-r from-transparent via-ice/25 to-transparent" />
        </div>
      </div>
    </div>
  );
}

export default function IntelligenceSection2() {
  return (
    <>
      <Section>
        <div className="flex flex-col gap-16">
          <SectionHeader
            eyebrow="The Domains"
            title="Explore the domains that power smarter operations."
            lead="Each domain pairs purpose-built AI models with real-world context and enterprise knowledge — available on its own, or combined through one platform and one API."
          />

          <div className="flex flex-col gap-12">
            {DOMAINS.map((domain, index) => (
              <DomainRow key={domain.number} domain={domain} index={index} />
            ))}
          </div>
        </div>
      </Section>

      {/* -------- Closing CTA -------- */}
      <section className="relative overflow-hidden border-t border-line py-24 sm:py-[120px]">
        <div
          aria-hidden
          className="pointer-events-none absolute left-1/2 top-0 h-[300px] w-full max-w-[700px] -translate-x-1/2"
          style={{
            background:
              "radial-gradient(ellipse at 50% 0%, rgba(108,147,255,0.14), transparent 70%)",
          }}
        />
        <Container className="relative flex flex-col items-center gap-7 text-center">
          <Eyebrow>Get started</Eyebrow>
          <h2 className="max-w-[620px] font-display text-[28px] font-medium leading-[1.15] tracking-[-0.02em] text-balance text-primary sm:text-[34px]">
            Seven domains. One API. One deployment model.
          </h2>
          <div className="flex flex-wrap justify-center gap-3">
            <PrimaryButton>See how it works</PrimaryButton>
            <GhostButton>Talk to experts</GhostButton>
          </div>
        </Container>
      </section>
    </>
  );
}
