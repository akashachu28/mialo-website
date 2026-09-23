import { ArrowLink, Icon, Section, SectionHeader } from "@/components/ui";
import Image from "next/image";

const DOMAINS: Domain[] = [
  {
    number: "01",
    icon: "eye",
    title: "Vision Intelligence",
    short: "Vision",
    body: "Understand the world through computer vision. Detect, recognize and analyze visual data from cameras and images in real time.",
    capabilities: [
      "Detection & recognition",
      "Multi-camera tracking",
      "Zone & heatmap analytics",
    ],
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
    capabilities: [
      "Stream monitoring",
      "Logo & keyword detection",
      "Real-time alerts",
    ],
    image: "/images/broadcastIntelligence.png",
    alt: "A control room video wall monitoring many broadcast and camera feeds at once",
  },
  {
    number: "05",
    icon: "ruler",
    title: "Measurement Intelligence",
    short: "Measurement",
    body: "Measure and quantify physical assets and environments using AI-powered measurement models.",
    capabilities: [
      "Dimensional capture",
      "Volume estimation",
      "Scales to fleets",
    ],
    image: "/images/measurementIntelligence.png",
    alt: "A warehouse pallet with AI-generated dimensional measurements and environment readouts",
  },
  {
    number: "06",
    icon: "brain",
    title: "Enterprise Intelligence",
    short: "Enterprise",
    body: "Combine enterprise knowledge, context and workflows to deliver intelligent recommendations and automation.",
    capabilities: [
      "Knowledge retrieval",
      "Copilots & assistants",
      "Workflow context",
    ],
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
  return (
    <div className="group relative cursor-pointer  border-b border-line-2 bg-white/60 overflow-hidden transition-all duration-300 hover:border-l-ice hover:border-l-4 hover:bg-ice/5 hover:shadow-lg hover:shadow-ice/5">
      <div className="grid items-center gap-6 p-8 lg:grid-cols-[1fr_auto] lg:gap-8">
        {/* Left side - Title, Icon, Capabilities, Explore */}
        <div className="flex flex-col gap-5">
          <div className="flex items-center gap-4">
            <span className="font-mono text-[12px] font-semibold tracking-[0.13em] text-ice">
              {domain.number}
            </span>
            <span className="h-px w-8 bg-ice/50 transition-colors group-hover:bg-ice" />
            <span className="flex h-11 w-11 items-center justify-center rounded-[10px] border border-ice/30 bg-ice/10 text-ice transition-all duration-300 group-hover:border-ice/50 group-hover:bg-ice/20 group-hover:shadow-lg group-hover:shadow-ice/20">
              <Icon name={domain.icon} size={20} />
            </span>
            <h3 className="font-display text-[25px] font-medium leading-[1.2] tracking-[-0.02em] text-gray-700 transition-colors group-hover:text-ice">
              {domain.title}
            </h3>
          </div>

          {/* Body text - absolutely positioned to avoid layout shift */}
          <div className="relative">
            <p className="absolute left-0 right-0 top-0 text-[14.5px] leading-[1.62] text-gray-700 opacity-0 transition-opacity duration-300 group-hover:opacity-100 text-pretty pointer-events-none">
              {domain.body}
            </p>
          </div>

          {/* Capabilities and Explore - shift down on hover to make room for body */}
          <div className="flex flex-col gap-5 transition-transform duration-300 group-hover:translate-y-20">
            <div className="flex flex-wrap gap-x-5 gap-y-2">
              {domain.capabilities.map((c) => (
                <span
                  key={c}
                  className="inline-flex items-center gap-2 font-mono text-[10.5px] uppercase tracking-[0.08em] text-muted transition-colors group-hover:text-gray-700"
                >
                  <span className="h-[5px] w-[5px] shrink-0 rounded-full bg-pista border" />
                  {c}
                </span>
              ))}
            </div>

            <ArrowLink className="">Explore {domain.short}</ArrowLink>
          </div>
        </div>

        {/* Right side - Image (positioned on the right side) */}
        <div className="hidden lg:block pointer-events-none opacity-0 transition-opacity duration-500 group-hover:pointer-events-auto group-hover:opacity-100 w-[400px]">
          <div className="relative overflow-hidden border border-line-2 bg-background">
            <div className="relative aspect-[2/1] w-full">
              <Image
                src={domain.image}
                alt={domain.alt}
                fill
                sizes="400px"
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
    </div>
  );
}
export default function IndustryDomain() {
  return (
    <>
      <Section>
        <div className="flex flex-col gap-16">
          <SectionHeader
            eyebrow="The Domains"
            title="Explore the domains that power smarter operations."
            // lead="Each domain pairs purpose-built AI models with real-world context and enterprise knowledge — available on its own, or combined through one platform and one API."
          />
          <p className="w-full max-w-[640px] text-[18px] leading-[1.62] text-gray-700 -mt-10 text-pretty">
            Each domain pairs purpose-built AI models with real-world context
            and enterprise knowledge — available on its own, or combined through
            one platform and one API.{" "}
          </p>

          <div className="flex flex-col gap-0">
            {DOMAINS.map((domain, index) => (
              <DomainRow key={domain.number} domain={domain} index={index} />
            ))}
          </div>
        </div>
      </Section>
    </>
  );
}
