"use client";

import { Icon, Section } from "@/components/ui";
import { BotMessageSquare } from "lucide-react";
import Image from "next/image";
import { useEffect, useRef } from "react";

interface Domain {
  number: string;
  icon: "eye" | "mic" | "doc" | "radio" | "ruler" | "brain" | "cpu" | "BotMessageSquare";
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
    image: "/images/voiceI.png",
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
    image: "/images/neural.png",
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
  {
    number: "08",
    icon: "BotMessageSquare",
    title: "Generative AI",
    short: "GenAI",
    body: "Transform enterprise data and context into intelligent content, insights and actions with generative AI.",
    capabilities: ["On-device inference", "Low latency", "Offline capable"],
    image: "/images/genAI.png",
    alt: "An edge compute board running AI inference with live performance monitoring panels",
  },
];

function DomainCard({ domain }: { domain: Domain }) {
  return (
    <div
      className="group relative overflow-hidden bg-raise transition-colors hover:border-line-3 w-[280px] sm:w-[320px] lg:w-90 xl:w-100 shrink-0 h-[400px] sm:h-[450px] lg:h-[500px]"
      style={{
        clipPath:
          "polygon(20px 0, 100% 0, 100% calc(100% - 20px), calc(100% - 20px) 100%, 0 100%, 0 20px)",
      }}
    >
      {/* Full-screen background image */}
      <div className="absolute inset-0">
        
        <Image
          src={domain.image}
          alt={domain.alt}
          fill
          draggable={false}
          sizes="(max-width: 640px) 280px, (max-width: 1024px) 320px, (max-width: 1280px) 360px, 400px"
          className="object-cover transition-transform duration-500 group-hover:scale-[1.04]"
        />
        {/* Dark gradient overlay for text readability */}
        <div className="absolute inset-0 bg-gradient-to-t from-background via-background/65 to-transparent" />
      </div>

      {/* Top accent line */}
      <div className="absolute inset-x-0 top-0 h-px bg-linear-to-r from-transparent via-ice/40 to-transparent z-10" />

      {/* Content overlay */}
      <div className="relative z-10 flex flex-col-reverse justify-between h-full p-4 sm:p-6">
        {/* Top section */}
        <div className="flex flex-col gap-3 sm:gap-4">
          {/* Header */}
          <div className="flex items-start gap-3">
            <span className="flex h-9 w-9 sm:h-11 sm:w-11 shrink-0 items-center justify-center rounded-xl border border-pista/40 bg-pista/20 text-pista backdrop-blur-sm transition-colors duration-300 group-hover:border-ice/60 group-hover:bg-ice/30">
              <Icon name={domain.icon} size={16} className="sm:w-5 sm:h-5" />
            </span>

            <div className="flex flex-col gap-0.5 pt-0.5">
              <span className="font-mono text-[9px] sm:text-[10px] font-semibold tracking-[0.13em] text-pista group-hover:text-ice">
                {domain.number}
              </span>
              <h3
                className="text-white transition-colors group-hover:text-ice"
                style={{
                  fontFamily: "var(--font-manrope), sans-serif",
                  fontWeight: 400,
                  fontSize: "clamp(18px, 4vw, 28px)",
                  lineHeight: 0.96,
                  letterSpacing: "-0.045em",
                }}
              >
                {domain.title}
              </h3>
            </div>
          </div>

          {/* Body */}
          <p 
            className="text-slate-200"
            style={{
              fontSize: "clamp(14px, 3vw, 16px)",
              lineHeight: 1.3,
            }}
          >
            {domain.body}
          </p>
        </div>

        {/* Bottom section */}
        <div className="flex items-end justify-end">
          {/* Heatmap overlay for Vision domain */}
          {domain.icon === "eye" && (
            <div className="w-20 sm:w-26 rounded-lg border border-line-2 bg-background/70 p-1.5 backdrop-blur-sm">
              <div className="relative aspect-square w-full overflow-hidden rounded">
                <Image
                  src="/images/heatmap.png"
                  alt="Zone occupancy heatmap over a building floor plan"
                  fill
                  draggable={false}
                  sizes="(max-width: 640px) 80px, 104px"
                  className="object-cover"
                />
              </div>
              <span className="mt-1 block font-mono text-[8px] sm:text-[9px] tracking-[0.08em] text-faint">
                Zone heatmap
              </span>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

const AUTO_SPEED = 40; // px per second

export default function IndustryDomain() {
  const scrollerRef = useRef<HTMLDivElement>(null);
  const pausedRef = useRef(false);
  const resumeTimer = useRef<ReturnType<typeof setTimeout> | undefined>(undefined);
  const drag = useRef({ active: false, startX: 0, startScroll: 0 });

  const pause = () => {
    pausedRef.current = true;
    clearTimeout(resumeTimer.current);
  };

  const resume = (delay = 0) => {
    clearTimeout(resumeTimer.current);
    resumeTimer.current = setTimeout(() => {
      pausedRef.current = false;
    }, delay);
  };

  // Auto-scroll + seamless looping
  useEffect(() => {
    const el = scrollerRef.current;
    if (!el) return;

    const third = () => el.scrollWidth / 3;
    el.scrollLeft = third(); // start on the middle copy so you can swipe both ways

    let pos = el.scrollLeft;
    let last = performance.now();
    let raf = 0;

    const tick = (now: number) => {
      const dt = now - last;
      last = now;
      const t = third();

      if (pausedRef.current) {
        pos = el.scrollLeft; // follow the user's scrolling
      } else {
        pos += (AUTO_SPEED * dt) / 1000;
      }

      // wrap around between copies
      if (pos >= 2 * t) pos -= t;
      else if (pos <= 0) pos += t;

      el.scrollLeft = pos;
      raf = requestAnimationFrame(tick);
    };

    raf = requestAnimationFrame(tick);
    return () => {
      cancelAnimationFrame(raf);
      clearTimeout(resumeTimer.current);
    };
  }, []);

  // Mouse drag (touch uses native swipe)
  const onPointerDown = (e: React.PointerEvent<HTMLDivElement>) => {
    if (e.pointerType !== "mouse") return;
    const el = scrollerRef.current!;
    drag.current = { active: true, startX: e.clientX, startScroll: el.scrollLeft };
    pause();
    el.setPointerCapture(e.pointerId);
  };

  const onPointerMove = (e: React.PointerEvent<HTMLDivElement>) => {
    if (!drag.current.active) return;
    const el = scrollerRef.current!;
    el.scrollLeft = drag.current.startScroll - (e.clientX - drag.current.startX);
  };

  const onPointerUp = (e: React.PointerEvent<HTMLDivElement>) => {
    if (!drag.current.active) return;
    drag.current.active = false;
    scrollerRef.current?.releasePointerCapture(e.pointerId);
    resume(1500);
  };

  return (
    <>
      <Section>
        <div className="flex flex-col gap-12 sm:gap-16">
          <h2
            className="flex flex-col text-center sm:text-left"
            style={{
              fontFamily: "var(--font-manrope), sans-serif",
              fontWeight: 400,
              fontSize: "clamp(24px, 6vw, 60px)",
              lineHeight: 0.96,
              letterSpacing: "-0.045em",
            }}
          >
            <span className="text-gray-900">Explore the domains</span>{" "}
            <span className="text-ice">that power smarter operations.</span>
          </h2>
          <p
            className="w-full max-w-[640px] text-gray-700 text-pretty text-center sm:text-left mx-auto sm:mx-0 -mt-6 sm:-mt-10"
            style={{
              fontFamily: "var(--font-manrope), sans-serif",
              fontWeight: 400,
              fontSize: "clamp(16px, 4vw, 24px)",
              lineHeight: 1.4,
              letterSpacing: "-0.025em",
              wordSpacing: 3,
            }}
          >
            Choose the intelligence your operation needs or combine multiple
            domains to understand complex operational scenarios.
          </p>
        </div>
      </Section>

      {/* Full-width carousel outside container */}
      <div className="relative -mt-6 sm:-mt-8 pb-16 sm:pb-20 lg:pb-26">
        <div
          ref={scrollerRef}
          className="flex cursor-grab select-none overflow-x-auto active:cursor-grabbing [scrollbar-width:none] [&::-webkit-scrollbar]:hidden pl-4 sm:pl-6 lg:pl-0"
          style={{ WebkitOverflowScrolling: "touch" }}
          onMouseEnter={pause}
          onMouseLeave={() => !drag.current.active && resume(0)}
          onTouchStart={pause}
          onTouchEnd={() => resume(2000)}
          onWheel={() => {
            pause();
            resume(2000);
          }}
          onPointerDown={onPointerDown}
          onPointerMove={onPointerMove}
          onPointerUp={onPointerUp}
          onPointerCancel={onPointerUp}
        >
          {/* Triple copy for a seamless loop */}
          {[...DOMAINS, ...DOMAINS, ...DOMAINS].map((domain, index) => (
            <div key={`${domain.number}-${index}`} className="shrink-0 pr-4 sm:pr-6">
              <DomainCard domain={domain} />
            </div>
          ))}
        </div>
      </div>
    </>
  );
}