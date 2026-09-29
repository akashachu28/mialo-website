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
      "Footfall Analytics",
      "Dwell Analytics",
      "Customer Behavior",
      "Staff Monitoring",
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
    title: "Sensilance",
    tagline: "secure.",
    description: "AI for safety, security and perimeter intelligence.",
    features: [
      "ANPR",
      "Facial Recognition",
      "Incident Alerts",
      "Intrusion Detection",
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
    title: "Broadcast Sense",
    tagline: "monitor.",
    description: "Real-time broadcast and media intelligence and monitoring.",
    features: [
      "Broadcast Monitoring",
      "Content Verification",
      "Compliance Tracking",
      "Automated Reporting",
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
    title: "Doc Sense",
    tagline: "extract.",
    description:
      "Intelligent document processing and enterprise knowledge extraction.",
    features: [
      "Document classification",
      "Data Extraction",
      "Document Verification",
      "Workflow Automation",
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
      "Voice Transcription",
      "Conversation Analysis",
      "Script Adherence",
      "Multilingual Support",
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
      "Photo-Based Measurement",
      "3D Measurements",
      "Dimension Extraction",
      "Estimate Support",
    ],
    image: "/images/measurementIntelligence.png",
    alt: "A warehouse pallet with AI-generated dimensional measurements",
    stats: [
      { label: "Measurement precision", value: "±2mm" },
      { label: "Processing time saved", value: "75%" },
    ],
  },
  {
    icon: "ruler",
    title: "ServiceSense",
    tagline: "measure.",
    description: "AI-powered measurement and dimensioning at scale.",
    features: [
      "Vehicle Check-In",
      "Service Bay Monitoring",
      "Technician Activity",
      "Service Turnaround Time",
    ],
    image: "/images/measurementIntelligence.png",
    alt: "A warehouse pallet with AI-generated dimensional measurements",
    stats: [
      { label: "Measurement precision", value: "±2mm" },
      { label: "Processing time saved", value: "75%" },
    ],
  },
  {
    icon: "ruler",
    title: "AI Visualizer",
    tagline: "measure.",
    description: "AI-powered measurement and dimensioning at scale.",
    features: [
      "Product Visualisation",
      "Design Previews",
      "Virtual Customisation",
      "Customer Presentations",
    ],
    image: "/images/measurementIntelligence.png",
    alt: "A warehouse pallet with AI-generated dimensional measurements",
    stats: [
      { label: "Measurement precision", value: "±2mm" },
      { label: "Processing time saved", value: "75%" },
    ],
  },
  {
    icon: "ruler",
    title: "MialoGPT",
    tagline: "measure.",
    description: "AI-powered measurement and dimensioning at scale.",
    features: [
      "Enterprise Search",
      "Knowledge Assistance",
      "AI Agents",
      "Workflow Support",
    ],
    image: "/images/measurementIntelligence.png",
    alt: "A warehouse pallet with AI-generated dimensional measurements",
    stats: [
      { label: "Measurement precision", value: "±2mm" },
      { label: "Processing time saved", value: "75%" },
    ],
  },
  {
    icon: "ruler",
    title: "OpsSense",
    tagline: "measure.",
    description: "AI-powered measurement and dimensioning at scale.",
    features: [
      "Process Monitoring",
      "Operational Analytics",
      "Exception Alerts",
      "Performance Tracking",
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
  const [isPaused, setIsPaused] = useState(false);

  const nextSlide = () => {
    setCurrentIndex((prev) => (prev + 1) % SOLUTIONS.length);
  };

  const prevSlide = () => {
    setCurrentIndex((prev) => (prev - 1 + SOLUTIONS.length) % SOLUTIONS.length);
  };

  const goToSlide = (index: number) => {
    setCurrentIndex(index);
  };

  // Auto-play carousel every 5 seconds when not paused
  useEffect(() => {
    if (isPaused) return;

    const interval = setInterval(() => {
      nextSlide();
    }, 2000);

    // Cleanup interval on component unmount
    return () => clearInterval(interval);
  }, [currentIndex, isPaused]); // Reset timer when currentIndex or isPaused changes

  const currentSolution = SOLUTIONS[currentIndex];

  return (
    <>
      <Section className="overflow-hidden">
        {/* Carousel with external navigation buttons */}
        <div className="relative flex items-center justify-center gap-6">
          {/* Previous Button - Outside Left */}
          <button
            onClick={prevSlide}
            className="shrink-0 flex h-12 w-12 items-center justify-center rounded-full border border-line bg-raise transition-all hover:border-ice hover:bg-panel"
            aria-label="Previous solution"
          >
            <svg
              width={20}
              height={20}
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth={2}
              strokeLinecap="round"
              strokeLinejoin="round"
              className="text-muted"
            >
              <path d="M19 12H5M12 19l-7-7 7-7" />
            </svg>
          </button>

          {/* Carousel Container */}
          <div
            className="relative overflow-hidden flex-1 max-w-6xl"
            style={{ height: "550px" }}
            onMouseEnter={() => setIsPaused(true)}
            onMouseLeave={() => setIsPaused(false)}
          >
            {/* Background Image */}
            <Image
              src={currentSolution.image}
              alt={currentSolution.alt}
              fill
              sizes="(max-width: 1280px) 100vw, 1280px"
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

            {/* Content Overlay - Fixed height with hidden overflow */}
            <div
              className="relative flex flex-col justify-center py-10 overflow-hidden"
              style={{ height: "550px" }}
            >
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

                  {/* Features - show all features */}
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
            </div>
          </div>

          {/* Next Button - Outside Right */}
          <button
            onClick={nextSlide}
            className="shrink-0 flex h-12 w-12 items-center justify-center rounded-full border border-line bg-raise transition-all hover:border-ice hover:bg-panel"
            aria-label="Next solution"
          >
            <svg
              width={20}
              height={20}
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth={2}
              strokeLinecap="round"
              strokeLinejoin="round"
              className="text-muted"
            >
              <path d="M5 12h14M12 5l7 7-7 7" />
            </svg>
          </button>
        </div>

        {/* Pagination Dots - Below Image Container */}
        <Container className="py-8">
            <div className="flex items-center justify-center gap-2.5">
              {SOLUTIONS.map((_, index) => (
                <button
                  key={index}
                  onClick={() => goToSlide(index)}
                  className={`h-2 rounded-full transition-all ${
                    index === currentIndex
                      ? "w-8 bg-pista"
                      : "w-2 bg-muted hover:bg-ink"
                  }`}
                  aria-label={`Go to solution ${index + 1}`}
                />
              ))}
            </div>
          </Container>
      </Section>
    </>
  );
}
