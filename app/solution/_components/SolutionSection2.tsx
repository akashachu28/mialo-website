"use client";

import Image from "next/image";
import { useState, useEffect } from "react";
import {
  Section,
  Container,
  Eyebrow,
  PrimaryButton,
  GhostButton,
  Icon,
  type IconName,
} from "@/components/ui";

type Solution = {
  icon: IconName;
  title: string;
  description: string;
  tagline: string;
  features: string[];
  image: string;
  alt: string;
  stats?: {
    label: string;
    value: string;
  }[];
};

const SOLUTIONS: Solution[] = [
  {
    icon: "eye",
    title: "RetailSense",
    tagline: "secure.",
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
    stats: [
      { label: "Customer insights accuracy", value: "95%" },
      { label: "Queue reduction", value: "40%" },
    ],
  },
  {
    icon: "shield",
    title: "SensiLance",
    tagline: "secure.",
    description: "AI for safety, security and perimeter intelligence.",
    features: [
      "Intrusion detection",
      "PPE & safety compliance",
      "Perimeter monitoring",
      "Vehicle & ANPR",
    ],
    image: "/images/sensilanse.png",
    alt: "A construction site camera flagging workers without helmets and an unsafe zone",
    stats: [
      { label: "Threat detection rate", value: "98%" },
      { label: "False alarm reduction", value: "85%" },
    ],
  },
  {
    icon: "radio",
    title: "BroadcastSense",
    tagline: "monitor.",
    description: "Real-time broadcast and media intelligence and monitoring.",
    features: [
      "Real-time content monitoring",
      "Ad detection & measurement",
      "Compliance & policy monitoring",
      "Media analytics & insights",
    ],
    image: "/images/broadcastIntelligence.png",
    alt: "A broadcast control room monitoring dozens of live channels",
    stats: [
      { label: "Channels monitored", value: "500+" },
      { label: "Real-time accuracy", value: "99%" },
    ],
  },
  {
    icon: "doc",
    title: "DocSense",
    tagline: "extract.",
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
    stats: [
      { label: "Processing speed increase", value: "10x" },
      { label: "Extraction accuracy", value: "97%" },
    ],
  },
  {
    icon: "mic",
    title: "VoxCore",
    tagline: "converse.",
    description:
      "Voice AI platform for real-time conversations and automation.",
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
    stats: [
      { label: "Languages supported", value: "50+" },
      { label: "Voice accuracy", value: "96%" },
    ],
  },
  {
    icon: "ruler",
    title: "MeasureSense",
    tagline: "measure.",
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
    stats: [
      { label: "Measurement precision", value: "±2mm" },
      { label: "Processing time saved", value: "75%" },
    ],
  },
];

export default function SolutionSection2() {
  const [currentIndex, setCurrentIndex] = useState(0);

  const nextSlide = () => {
    setCurrentIndex((prev) => (prev + 1) % SOLUTIONS.length);
  };

  const prevSlide = () => {
    setCurrentIndex((prev) => (prev - 1 + SOLUTIONS.length) % SOLUTIONS.length);
  };

  const goToSlide = (index: number) => {
    setCurrentIndex(index);
  };

  // Auto-play carousel every 5 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      nextSlide();
    }, 5000);

    // Cleanup interval on component unmount
    return () => clearInterval(interval);
  }, [currentIndex]); // Reset timer when currentIndex changes

  const currentSolution = SOLUTIONS[currentIndex];

  return (
    <>
      <Section className="overflow-hidden">
       
        <Container className="relative bg-">
          {/* Carousel Content */}
          {/* Carousel Content - Full Width Image with Overlay */}
      {/* Full-width Solutions Carousel */}
      <div className="relative min-h-[600px] overflow-hidden lg:min-h-[500px]">
        {/* Background Image */}
        <Image
          src={currentSolution.image}
          alt={currentSolution.alt}
          fill
          sizes="100vw"
          className="object-cover"
          priority
        />

        {/* Gradient Overlay from Left */}
        <div
          className="absolute inset-0"
          style={{
            background:
              "linear-gradient(to right, rgba(0,0,0,0.95) 0%, rgba(0,0,0,0.85) 35%, rgba(0,0,0,0.4) 60%, transparent 80%)",
          }}
        />

        {/* Content Overlay */}
        <div className="relative flex h-full min-h-[600px] flex-col justify-between py-10 lg:min-h-[500px]">
          <Container>
            {/* Section Header */}
            <div className="mb-6 flex flex-col gap-2">
              <span className="inline-flex items-center gap-[11px] font-mono text-[12px] font-medium uppercase tracking-[0.16em] text-[#8A909C]">
                <span className="h-1.5 w-1.5 shrink-0 bg-green shadow-[0_0_12px_rgba(0,229,153,0.7)]" />
                Solutions · {String(currentIndex + 1).padStart(2, "0")} /{" "}
                {String(SOLUTIONS.length).padStart(2, "0")}
              </span>
            </div>

            {/* Solution Content */}
            <div className="flex max-w-[680px] flex-col gap-8 lg:max-w-[800px]">
              <div className="flex flex-col gap-4">
                <h2
                  className="text-white"
                  style={{
                    fontFamily: "var(--font-manrope), sans-serif",
                    fontWeight: 400,
                    fontSize: "clamp(36px, 7.2vw, 72px)",
                    lineHeight: 1.05,
                    letterSpacing: "-0.03em",
                  }}
                >
                  {currentSolution.title}
                </h2>
                <p
                  className="text-pista"
                  style={{
                    fontFamily: "var(--font-serif, serif)",
                    fontStyle: "italic",
                    fontSize: "clamp(22px, 3.5vw, 32px)",
                    lineHeight: 1.2,
                  }}
                >
                  {currentSolution.tagline}
                </p>

                <p className="max-w-[600px] text-[18px] leading-[1.65] text-white/90">
                  {currentSolution.description}
                </p>
              </div>

              {/* Features */}
              <div className="flex flex-wrap gap-2.5">
                {currentSolution.features.map((feature) => (
                  <span
                    key={feature}
                    className="bg-pista px-4 py-2.5 text-[13px] font-medium text-background"
                    style={{
                      clipPath:
                        "polygon(10px 0, 100% 0, 100% calc(100% - 10px), calc(100% - 10px) 100%, 0 100%, 0 10px)",
                    }}
                  >
                    {feature}
                  </span>
                ))}
              </div>

              {/* Stats */}
              {currentSolution.stats && (
                <div className="flex gap-12 border-t border-white/15 pt-8">
                  {currentSolution.stats.map((stat) => (
                    <div key={stat.label} className="flex flex-col gap-1.5">
                      <div className="font-display text-[40px] font-medium tracking-[-0.02em] text-pista">
                        {stat.value}
                      </div>
                      <div className="text-[13px] text-white/60">
                        {stat.label}
                      </div>
                    </div>
                  ))}
                </div>
              )}
            </div>
          </Container>

          {/* Navigation Controls - Bottom Center */}
          <Container>
            <div className="flex items-center justify-center gap-6">
              {/* Previous Button */}
              <button
                onClick={prevSlide}
                className="flex h-11 w-11 items-center justify-center rounded-full border border-white/30 bg-white/10 backdrop-blur-sm transition-all hover:border-pista hover:bg-white/20"
                aria-label="Previous solution"
              >
                <svg
                  width={18}
                  height={18}
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth={1.5}
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="text-white"
                >
                  <path d="M19 12H5M12 19l-7-7 7-7" />
                </svg>
              </button>

              {/* Pagination Dots */}
              <div className="flex items-center gap-2.5">
                {SOLUTIONS.map((_, index) => (
                  <button
                    key={index}
                    onClick={() => goToSlide(index)}
                    className={`h-2 rounded-full transition-all ${
                      index === currentIndex
                        ? "w-8 bg-pista"
                        : "w-2 bg-white/30 hover:bg-white/50"
                    }`}
                    aria-label={`Go to solution ${index + 1}`}
                  />
                ))}
              </div>

              {/* Next Button */}
              <button
                onClick={nextSlide}
                className="flex h-11 w-11 items-center justify-center rounded-full border border-white/30 bg-white/10 backdrop-blur-sm transition-all hover:border-pista hover:bg-white/20"
                aria-label="Next solution"
              >
                <svg
                  width={18}
                  height={18}
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth={1.5}
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="text-white"
                >
                  <path d="M5 12h14M12 5l7 7-7 7" />
                </svg>
              </button>
            </div>
          </Container>
        </div>
      </div>
        </Container>

     
      </Section>

    </>
  );
}
