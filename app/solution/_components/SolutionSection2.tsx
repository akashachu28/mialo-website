import Image from "next/image";
import {
  Section,
  SectionHeader,
  Container,
  Eyebrow,
  ArrowLink,
  PrimaryButton,
  GhostButton,
  Icon,
  type IconName,
} from "@/components/ui";

type Solution = {
  icon: IconName;
  title: string;
  description: string;
  features: string[];
  image: string;
  alt: string;
};

const SOLUTIONS: Solution[] = [
  {
    icon: "eye",
    title: "RetailSense",
    description:
      "AI-powered retail analytics for smarter stores and happier customers.",
    features: [
      "Footfall & traffic analytics",
      "Customer behaviour analysis",
      "Queue & wait-time monitoring",
      "Planogram compliance",
    ],
    image: "/images/industryVision.png",
    alt: "A retail store floor with shopper detection zones and a movement heatmap",
  },
  {
    icon: "shield",
    title: "SensiLance",
    description: "AI for safety, security and perimeter intelligence.",
    features: [
      "Intrusion detection",
      "PPE & safety compliance",
      "Perimeter monitoring",
      "Vehicle & ANPR",
    ],
    image: "/images/sensilanse.png",
    alt: "A construction site camera flagging workers without helmets and an unsafe zone",
  },
  {
    icon: "radio",
    title: "BroadcastSense",
    description: "Real-time broadcast and media intelligence and monitoring.",
    features: [
      "Real-time content monitoring",
      "Ad detection & measurement",
      "Compliance & policy monitoring",
      "Media analytics & insights",
    ],
    image: "/images/broadcastIntelligence.png",
    alt: "A broadcast control room monitoring dozens of live channels",
  },
  {
    icon: "doc",
    title: "DocSense",
    description:
      "Intelligent document processing and enterprise knowledge extraction.",
    features: [
      "Document classification",
      "Data extraction (OCR)",
      "Table & field recognition",
      "Knowledge capture",
      "Workflow automation",
      "RAG-powered search",
    ],
    image: "/images/documentIntelligence.png",
    alt: "Contracts and invoices being scanned and turned into structured fields",
  },
  {
    icon: "mic",
    title: "VoxCore",
    description: "Voice AI platform for real-time conversations and automation.",
    features: [
      "Automatic speech recognition",
      "Wake-word detection",
      "Text-to-speech (TTS)",
      "Voice agents",
      "Real-time transcription",
      "Multi-language support",
    ],
    image: "/images/voiceIntelligence.png",
    alt: "A speaker profile beside a blue voice waveform being analysed",
  },
  {
    icon: "ruler",
    title: "MeasureSense",
    description: "AI-powered measurement and dimensioning at scale.",
    features: [
      "Dimension extraction",
      "Area & volume calculation",
      "As-built documentation",
      "3D reconstruction",
      "Quality verification",
      "Report generation",
    ],
    image: "/images/measurementIntelligence.png",
    alt: "A warehouse pallet with AI-generated dimensional measurements",
  },
];

function SolutionCard({ solution }: { solution: Solution }) {
  return (
    <div className="flex flex-col overflow-hidden rounded-[14px] border border-line-2 bg-raise transition-colors hover:border-line-3">
      <div className="relative aspect-[16/9] w-full border-b border-line-2">
        <Image
          src={solution.image}
          alt={solution.alt}
          fill
          sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 380px"
          className="object-cover"
        />
      </div>

      <div className="flex flex-1 flex-col gap-4 p-6">
        <span className="flex h-10 w-10 items-center justify-center rounded-[10px] border border-ice/30 bg-ice/10 text-ice">
          <Icon name={solution.icon} size={20} />
        </span>

        <div className="flex flex-col gap-1.5">
          <h3 className="font-display text-[18px] font-medium tracking-[-0.01em] text-primary">
            {solution.title}
          </h3>
          <p className="text-[13.5px] leading-[1.55] text-muted text-pretty">
            {solution.description}
          </p>
        </div>

        <ul className="flex flex-col gap-2">
          {solution.features.map((f) => (
            <li key={f} className="flex items-center gap-2 text-[12.5px] text-ink">
              <Icon
                name="check"
                size={14}
                strokeWidth={1.8}
                className="shrink-0 text-green"
              />
              {f}
            </li>
          ))}
        </ul>

        <ArrowLink className="mt-auto pt-1">Watch demo</ArrowLink>
      </div>
    </div>
  );
}

export default function SolutionSection2() {
  return (
    <>
      <Section>
        <div className="flex flex-col gap-14">
          <SectionHeader
            eyebrow="Solutions"
            title="Pre-built solutions, ready for real-world operations."
            lead="Each solution packages the models, workflows and integrations for a specific operational problem — powered by the same Mialo Intelligence Layer."
          />

          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {SOLUTIONS.map((s) => (
              <SolutionCard key={s.title} solution={s} />
            ))}
          </div>
        </div>
      </Section>

      {/* -------- Closing CTA -------- */}
      <section className="relative overflow-hidden border-t border-line py-24 sm:py-[120px]">
        <div aria-hidden className="absolute inset-0">
          <Image
            src="/images/solutionsBanner.png"
            alt=""
            fill
            sizes="100vw"
            className="object-cover opacity-40"
          />
          <div className="absolute inset-0 bg-background/70" />
          <div
            className="absolute inset-0"
            style={{
              background:
                "linear-gradient(180deg, var(--color-background) 0%, transparent 45%, var(--color-background) 100%)",
            }}
          />
        </div>

        <Container className="relative flex flex-col items-center gap-7 text-center">
          <Eyebrow>Get started</Eyebrow>
          <h2 className="max-w-[620px] font-display text-[28px] font-medium leading-[1.15] tracking-[-0.02em] text-balance text-primary sm:text-[34px]">
            Infinite solutions. One intelligence.
          </h2>
          <div className="flex flex-wrap justify-center gap-3">
            <PrimaryButton>Explore all solutions</PrimaryButton>
            <GhostButton>Talk to experts</GhostButton>
          </div>
        </Container>
      </section>
    </>
  );
}
