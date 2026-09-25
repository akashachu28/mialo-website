"use client";

import { Icon, Section, SectionHeader } from "@/components/ui";
import Image from "next/image";
import { useState } from "react";

interface Domain {
  number: string;
  icon: "eye" | "mic" | "doc" | "radio" | "ruler" | "brain" | "cpu";
  title: string;
  short: string;
  body: string;
  capabilities: string[];
  image: string;
  alt: string;
}

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
    image: "/images/domain_vision.png",
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
    image: "/images/domain_doc.png",
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
    image: "/images/domain_broadcast.png",
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
    image: "/images/domain_warehouse.png",
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
    image: "/images/neuralNet.png",
    alt: "A knowledge graph linking policies, people, systems, data and processes to shared insights",
  },
  {
    number: "07",
    icon: "cpu",
    title: "Edge Intelligence",
    short: "Edge",
    body: "Run AI models close to where data is generated. Secure, reliable and real-time intelligence at the edge.",
    capabilities: ["On-device inference", "Low latency", "Offline capable"],
    image: "/images/domain_edge.png",
    alt: "An edge compute board running AI inference with live performance monitoring panels",
  },
];

function DomainCard({ domain }: { domain: Domain }) {
  return (
    <div
      className="group relative overflow-hidden border border-line-2 bg-raise transition-colors hover:border-line-3 w-[320px] shrink-0 sm:w-90 lg:w-100 h-[500px]"
      style={{
        clipPath:
          "polygon(40px 0, 100% 0, 100% calc(100% - 40px), calc(100% - 40px) 100%, 0 100%, 0 40px)",
      }}
    >
      {/* Full-screen background image */}
      <div className="absolute inset-0">
        <Image
          src={domain.image}
          alt={domain.alt}
          fill
          sizes="(max-width: 640px) 320px, (max-width: 1024px) 360px, 400px"
          className="object-cover transition-transform duration-500 group-hover:scale-[1.04]"
        />
        {/* Dark gradient overlay for text readability */}
        <div className="absolute inset-0 bg-gradient-to-t from-background via-background/65 to-transparent" />
      </div>

      {/* Top accent line */}
      <div className="absolute inset-x-0 top-0 h-px bg-linear-to-r from-transparent via-ice/40 to-transparent z-10" />

      {/* Content overlay */}
      <div className="relative z-10 flex flex-col-reverse justify-between h-full p-6">
        {/* Top section */}
        <div className="flex flex-col gap-4">
          {/* Header - more compact */}
          <div className="flex items-start gap-3">
            <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl border border-pista/40 bg-pista/20 text-pista backdrop-blur-sm transition-colors duration-300 group-hover:border-ice/60 group-hover:bg-ice/30">
              <Icon name={domain.icon} size={20} />
            </span>

            <div className="flex flex-col gap-0.5 pt-0.5">
              <span className="font-mono text-[10px] font-semibold tracking-[0.13em] text-pista group-hover:text-ice">
                {domain.number}
              </span>
              <h3 className="font-display text-[22px] font-medium leading-[1.1] tracking-[-0.02em] text-white transition-colors group-hover:text-ice"
              style={{ 
                        fontFamily: "var(--font-manrope), sans-serif",
                        fontWeight: 400,
                        fontSize: "clamp(22px, 7.2vw, 28px)",
                        lineHeight: 0.96,
                        letterSpacing: "-0.045em"
                      }}>
                {domain.title}
              </h3>
            </div>
          </div>

          {/* Body - smaller and tighter */}
          <p className="text-[18px] leading-[1.6] text-slate-200"
          style={{ 
                        fontFamily: "var(--font-manrope), sans-serif",
                        lineHeight: 0.96,
                        letterSpacing: "-0.045em"
                        }}>
            {domain.body}
          </p>

          {/* Capabilities - more compact */}
          <div className="flex flex-wrap gap-x-4 gap-y-1.5">
            {domain.capabilities.map((c) => (
              <span
                key={c}
                className="inline-flex items-center  px-1 bg-pista gap-1.5 font-mono text-[12px] tracking-[0.04em] text-gray-900"
              >
                <span className="h-1.25 w-1.25 shrink-0 rounded-full bg-ice" />
                {c}
              </span>
            ))}
          </div>
        </div>

        {/* Bottom section */}
        <div className="flex items-end justify-end">
          {/* Heatmap overlay for Vision domain */}
          {domain.icon === "eye" && (
            <div className="w-26 rounded-lg border border-line-2 bg-background/70 p-1.5 backdrop-blur-sm">
              <div className="relative aspect-square w-full overflow-hidden rounded">
                <Image
                  src="/images/heatmap.png"
                  alt="Zone occupancy heatmap over a building floor plan"
                  fill
                  sizes="104px"
                  className="object-cover"
                />
              </div>
              <span className="mt-1 block font-mono text-[9px] tracking-[0.08em] text-faint">
                Zone heatmap
              </span>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
export default function IndustryDomain() {
  const [isPaused, setIsPaused] = useState(false);

  return (
    <>
      <Section>
        <div className="flex flex-col gap-16">
          {/* <SectionHeader
            eyebrow="The Domains"
            // title="Explore the domains that power smarter operations."
          /> */}
          <h2 className="font-display text-[30px] flex flex-col font-medium leading-[1.14] tracking-[-0.025em] text-pretty sm:text-[42px]"
          style={{ 
                        fontFamily: "var(--font-manrope), sans-serif",
                        fontWeight: 400,
                        fontSize: "clamp(32px, 7.2vw, 60px)",
                        lineHeight: 0.96,
                        letterSpacing: "-0.045em"
                      }}>
            <span className="text-gray-900">
              Explore the domains
            </span>{" "}
            <span className="text-ice">
              that power smarter operations.
            </span>
          </h2>
          <p className="w-full max-w-[640px] text-[18px] leading-[1.62] text-gray-700 -mt-10 text-pretty"
          style={{ 
                      fontFamily: "var(--font-manrope), sans-serif",
                      fontWeight: 400,
                      fontSize: "clamp(18px, 7.2vw, 24px)",
                      lineHeight: 1.1,
                      letterSpacing: "-0.045em",
                      wordSpacing: 6,
                      // color: "white"
                    }}>
            Choose the intelligence your operation needs or combine multiple
            domains to understand complex operational scenarios.
          </p>
        </div>
      </Section>

      {/* Full-width carousel outside container */}
      <div className="relative overflow-hidden -mt-8 pb-20 sm:pb-26">
        <div
          className="flex gap-6"
          style={{
            width: "max-content",
            animation: "scroll 35s linear infinite",
            animationPlayState: isPaused ? "paused" : "running",
            willChange: "transform",
          }}
          onMouseEnter={() => setIsPaused(true)}
          onMouseLeave={() => setIsPaused(false)}
        >
          {/* Triple duplicate for seamless loop */}
          {[...DOMAINS, ...DOMAINS, ...DOMAINS].map((domain, index) => (
            <DomainCard key={`${domain.number}-${index}`} domain={domain} />
          ))}
        </div>

        <style jsx>{`
          @keyframes scroll {
            0% {
              transform: translateX(0);
            }
            100% {
              transform: translateX(calc(-100% / 3));
            }
          }
        `}</style>
      </div>
    </>
  );
}
