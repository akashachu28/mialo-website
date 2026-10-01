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
    tagline: "analyze.",
    description:
      "AI-powered retail analytics for smarter stores and happier customers.",
    features: [
      "Footfall Analytics",
      "Dwell Analytics",
      "Customer Behavior",
      "Staff Monitoring",
    ],
    image: "/images/retail.png",
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
    image: "/images/anpr.png",
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
    image: "/images/broadcast.png",
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
    image: "/images/docs.png",
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
    image: "/images/voiceAI.png",
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
    image: "/images/measure.png",
    alt: "A warehouse pallet with AI-generated dimensional measurements",
    stats: [
      { label: "Measurement precision", value: "±2mm" },
      { label: "Processing time saved", value: "75%" },
    ],
  },
  {
    icon: "sparkle",
    title: "ServiceSense",
    tagline: "optimize.",
    description: "AI-powered service monitoring for automotive and maintenance operations.",
    features: [
      "Vehicle Check-In",
      "Service Bay Monitoring",
      "Technician Activity",
      "Service Turnaround Time",
    ],
    image: "/images/cars.png",
    alt: "A service bay with AI monitoring vehicle check-in and technician activities",
    stats: [
      { label: "Service efficiency gain", value: "45%" },
      { label: "Turnaround time reduction", value: "30%" },
    ],
  },
  {
    icon: "blocks",
    title: "AI Visualizer",
    tagline: "visualize.",
    description: "AI-powered product visualization and virtual customization platform.",
    features: [
      "Product Visualisation",
      "Design Previews",
      "Virtual Customisation",
      "Customer Presentations",
    ],
    image: "/images/furniture2.png",
    alt: "3D furniture visualization with customization options in virtual space",
    stats: [
      { label: "Customer engagement", value: "3x" },
      { label: "Design accuracy", value: "92%" },
    ],
  },
  {
    icon: "brain",
    title: "MialoGPT",
    tagline: "assist.",
    description: "Enterprise AI assistant for knowledge management and workflow automation.",
    features: [
      "Enterprise Search",
      "Knowledge Assistance",
      "AI Agents",
      "Workflow Support",
    ],
    image: "/images/chatbot.png",
    alt: "AI assistant interface showing enterprise knowledge search and workflow automation",
    stats: [
      { label: "Query response time", value: "<2s" },
      { label: "Knowledge accuracy", value: "94%" },
    ],
  },
  {
    icon: "activity",
    title: "OpsSense",
    tagline: "track.",
    description: "AI-powered operational intelligence for process monitoring and optimization.",
    features: [
      "Process Monitoring",
      "Operational Analytics",
      "Exception Alerts",
      "Performance Tracking",
    ],
    image: "/images/ops.png",
    alt: "Operational dashboard showing process monitoring and performance analytics",
    stats: [
      { label: "Process efficiency", value: "35%" },
      { label: "Exception detection", value: "99%" },
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
        <div className="relative flex flex-col lg:flex-row items-center justify-center gap-4 lg:gap-6">
          {/* Navigation Buttons - Mobile: Above, Desktop: Sides */}
          <div className="flex lg:hidden gap-4 order-first">
            <button
              onClick={prevSlide}
              className="shrink-0 flex h-10 w-10 sm:h-12 sm:w-12 items-center justify-center rounded-full border border-line bg-raise transition-all hover:border-ice hover:bg-panel"
              aria-label="Previous solution"
            >
              <svg
                width={16}
                height={16}
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth={2}
                strokeLinecap="round"
                strokeLinejoin="round"
                className="text-muted sm:w-5 sm:h-5"
              >
                <path d="M19 12H5M12 19l-7-7 7-7" />
              </svg>
            </button>
            <button
              onClick={nextSlide}
              className="shrink-0 flex h-10 w-10 sm:h-12 sm:w-12 items-center justify-center rounded-full border border-line bg-raise transition-all hover:border-ice hover:bg-panel"
              aria-label="Next solution"
            >
              <svg
                width={16}
                height={16}
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth={2}
                strokeLinecap="round"
                strokeLinejoin="round"
                className="text-muted sm:w-5 sm:h-5"
              >
                <path d="M5 12h14M12 5l7 7-7 7" />
              </svg>
            </button>
          </div>

          {/* Previous Button - Desktop Left */}
          <button
            onClick={prevSlide}
            className="hidden lg:flex shrink-0 h-12 w-12 items-center justify-center rounded-full border border-line bg-raise transition-all hover:border-ice hover:bg-panel"
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
            className="relative overflow-hidden flex-1 w-full max-w-6xl mx-4 sm:mx-0"
            style={{ height: "clamp(400px, 50vh, 550px)" }}
            onMouseEnter={() => setIsPaused(true)}
            onMouseLeave={() => setIsPaused(false)}
          >
            {/* Background Image */}
            <Image
              src={currentSolution.image}
              alt={currentSolution.alt}
              fill
              sizes="(max-width: 640px) 100vw, (max-width: 1024px) 90vw, 1280px"
              className="object-cover"
              priority
            />

            {/* Gradient Overlay from Left - Responsive */}
            <div
              className="absolute inset-0"
              style={{
                background:
                  "linear-gradient(to right, rgba(0,0,0,0.95) 0%, rgba(0,0,0,0.85) 25%, rgba(0,0,0,0.6) 45%, rgba(0,0,0,0.3) 65%, transparent 80%)",
              }}
            />

            {/* Content Overlay - Responsive height */}
            <div
              className="relative flex flex-col justify-center py-6 sm:py-8 md:py-10 overflow-hidden px-4 sm:px-6"
              style={{ minHeight: "clamp(400px, 50vh, 550px)" }}
            >
              <div className="w-full max-w-7xl mx-auto">
                {/* Section Header */}
                <div className="mb-4 sm:mb-5 md:mb-6 flex flex-col gap-1 sm:gap-2">
                  <span className="inline-flex items-center gap-2 sm:gap-[11px] font-mono text-[10px] sm:text-[12px] font-medium uppercase tracking-[0.16em] text-[#8A909C]">
                    <span className="h-1 w-1 sm:h-1.5 sm:w-1.5 shrink-0 bg-green shadow-[0_0_12px_rgba(0,229,153,0.7)]" />
                    Solutions · {String(currentIndex + 1).padStart(2, "0")} /{" "}
                    {String(SOLUTIONS.length).padStart(2, "0")}
                  </span>
                </div>

                {/* Solution Content */}
                <div className="flex max-w-full sm:max-w-[500px] md:max-w-[600px] lg:max-w-[700px] xl:max-w-[800px] flex-col gap-4 sm:gap-6 md:gap-8">
                  <div className="flex flex-col gap-2 sm:gap-3 md:gap-4">
                    <h2
                      className="text-white"
                      style={{
                        fontFamily: "var(--font-manrope), sans-serif",
                        fontWeight: 400,
                        fontSize: "clamp(28px, 8vw, 72px)",
                        lineHeight: "clamp(1.1, 1.05, 1.05)",
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
                        fontSize: "clamp(18px, 4vw, 32px)",
                        lineHeight: "clamp(1.3, 1.2, 1.2)",
                      }}
                    >
                      {currentSolution.tagline}
                    </p>

                    <p className="max-w-full sm:max-w-[400px] md:max-w-[500px] lg:max-w-[600px] text-sm sm:text-base md:text-[18px] leading-relaxed sm:leading-[1.65] text-white/90 text-pretty">
                      {currentSolution.description}
                    </p>
                  </div>

                  {/* Features - responsive grid */}
                  <div className="flex flex-wrap gap-1.5 sm:gap-2 md:gap-2.5">
                    {currentSolution.features.map((feature) => (
                      <span
                        key={feature}
                        className="bg-pista px-2.5 sm:px-3 md:px-4 py-1.5 sm:py-2 md:py-2.5 text-[11px] sm:text-[12px] md:text-[13px] font-medium text-background"
                        style={{
                          clipPath:
                            "polygon(8px 0, 100% 0, 100% calc(100% - 8px), calc(100% - 8px) 100%, 0 100%, 0 8px)",
                        }}
                      >
                        {feature}
                      </span>
                    ))}
                  </div>

                  {/* Stats - responsive layout */}
                  {currentSolution.stats && (
                    <div className="flex flex-col sm:flex-row gap-6 sm:gap-8 md:gap-12 border-t border-white/15 pt-4 sm:pt-6 md:pt-8">
                      {currentSolution.stats.map((stat) => (
                        <div key={stat.label} className="flex flex-col gap-1 sm:gap-1.5">
                          <div className="font-display text-2xl sm:text-3xl md:text-[36px] lg:text-[40px] font-medium tracking-tight text-pista">
                            {stat.value}
                          </div>
                          <div className="text-[11px] sm:text-[12px] md:text-[13px] text-white/60 leading-tight">
                            {stat.label}
                          </div>
                        </div>
                      ))}
                    </div>
                  )}
                </div>
              </div>
            </div>
          </div>

          {/* Next Button - Desktop Right */}
          <button
            onClick={nextSlide}
            className="hidden lg:flex shrink-0 h-12 w-12 items-center justify-center rounded-full border border-line bg-raise transition-all hover:border-ice hover:bg-panel"
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
        <Container className="py-4 sm:py-6 md:py-8">
          <div className="flex items-center justify-center gap-2 sm:gap-2.5">
            {SOLUTIONS.map((_, index) => (
              <button
                key={index}
                onClick={() => goToSlide(index)}
                className={`h-1.5 sm:h-2 rounded-full transition-all ${
                  index === currentIndex
                    ? "w-6 sm:w-8 bg-pista"
                    : "w-1.5 sm:w-2 bg-muted hover:bg-ink"
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
