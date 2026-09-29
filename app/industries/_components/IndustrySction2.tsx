"use client";

import Image from "next/image";
import { useEffect, useRef } from "react";
import {
  Section,
  SectionHeader,
  Icon,
  type IconName,
} from "@/components/ui";

const STEPS: { icon: IconName; title: string; body: string }[] = [
  { icon: "eye", title: "Observe", body: "Capture data from any source in real time." },
  { icon: "brain", title: "Understand", body: "AI models analyze and surface what matters." },
  { icon: "target", title: "Decide", body: "Contextual insight for faster, smarter decisions." },
  { icon: "zap", title: "Act", body: "Trigger actions and automate workflows." },
  { icon: "loop", title: "Learn", body: "Continuously learn and improve outcomes." },
];

type Industry = {
  icon: IconName;
  label: string;
  blurb: string;
  image: string;
  alt: string;
  href?: string;
};

const INDUSTRIES: Industry[] = [
  {
    icon: "store",
    label: "Retail & E-commerce",
    blurb: "Footfall, dwell time and shelf compliance across every store.",
    image: "/images/retail2.png",
    alt: "A retail floor with shopper detection zones and a movement heatmap",
  },
  {
    icon: "armchair",
    label: "Furniture & Home Improvement",
    blurb: "Space utilization, inventory visibility and assisted customer experiences.",
    image: "/images/furniture.png",
    alt: "A robotic welding arm throwing sparks on a factory line",
  },
  {
    icon: "building",
    label: "Infrastructure",
    blurb: "Site activity, asset conditions and safety risks-detected before they escalate.",
    image: "/images/infra.png",
    alt: "A robotic welding arm throwing sparks on a factory line",
  },
  {
    icon: "heart",
    label: "Healthcare",
    blurb: "Situational awareness across capacity, workflow and patient safety.",
    image: "/images/healthcare2.png",
    alt: "A clinician reviewing AI diagnostic overlays beside a patient bed",
  },
  {
    icon: "planetakeoff",
    label: "Aerospace",
    blurb: "Detect anomalies, verify procedures and improve operational readiness.",
    image: "/images/aerospace.png",
    alt: "A clinician reviewing AI diagnostic overlays beside a patient bed",
  },
  {
    icon: "landmark",
    label: "PSUs and DPSUs",
    blurb: "Operational intelligence across public infrastructure, services, assets and citizen-facing workflows.",
    image: "/images/government.png",
    alt: "A government operations centre with a civic network overlay",
  },
  {
    icon: "shield",
    label: "Security",
    blurb: "Real-time situational awareness across people, assets and environments.",
    image: "/images/security.png",
    alt: "A government operations centre with a civic network overlay",
  },
  {
    icon: "truck",
    label: "Logistics & Warehousing",
    blurb: "Inventory movement, workflow bottlenecks and safety events-tracked in real time.",
    image: "/images/logistics.png",
    alt: "A forklift loading a truck at a warehouse dock",
  },
  {
    icon: "factory",
    label: "Manufacturing & more",
    blurb: "Line anomalies, safety and uptime-caught before they cascade.",
    image: "/images/manufacture.png",
    alt: "A power plant and solar array with live efficiency readouts",
  },
  {
    icon: "sprout",
    label: "Agriculture",
    blurb: "Detect anomalies early and optimize operations across every field.",
    image: "/images/agriculture.png",
    alt: "A power plant and solar array with live efficiency readouts",
  },
  {
    icon: "hotel",
    label: "Hospitality",
    blurb: "Smarter guest experiences through continuous visibility across operations.",
    image: "/images/hospitality.png",
    alt: "A power plant and solar array with live efficiency readouts",
  },
];

function IndustryCard({ industry }: { industry: Industry }) {
  return (
    <div
      className="group relative overflow-hidden shadow-xl bg-raise transition-colors hover:border-line-3 w-[320px] flex-shrink-0 sm:w-[360px] lg:w-[380px]"
      style={{
        clipPath:
          "polygon(40px 0, 100% 0, 100% calc(100% - 40px), calc(100% - 40px) 100%, 0 100%, 0 40px)",
      }}
    >
      <div className="relative aspect-[4/5]">
        <Image
          src={industry.image}
          alt={industry.alt}
          fill
          draggable={false}
          sizes="(max-width: 640px) 320px, (max-width: 1024px) 400px, 450px"
          className="object-cover transition-transform duration-500 group-hover:scale-[1.04]"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-background via-background/35 to-transparent" />

        <div className="absolute inset-x-0 bottom-0 flex flex-col gap-2 p-5">
          <span className="flex h-9 w-9 items-center justify-center rounded-[10px] border border-ice/30 bg-background/60 text-ice backdrop-blur-sm">
            <Icon name={industry.icon} size={18} />
          </span>
          <h3 className="font-display text-[19px] font-medium tracking-[-0.01em] text-primary">
            {industry.label}
          </h3>
          <p className="text-[12.5px] leading-[1.5] text-ink text-pretty">
            {industry.blurb}
          </p>
        </div>
      </div>
    </div>
  );
}

const AUTO_SPEED = 40; // px per second

export default function IndustrySection2() {
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
    <div className="relative">
      {/* Background layer (vertical gradient lines removed; re-add here if needed) */}
      <div className="absolute inset-0 pointer-events-none" />

      {/* -------- How Mialo works -------- */}
      <Section className="relative bg-white/75 z-10 white-75">
        <div className="flex flex-col gap-14">
          <SectionHeader
            eyebrow="How Mialo Works"
            title="From data to decisions. "
            titleIce="In real time."
          />
          <p
            className="w-full max-w-[640px] text-[18px] leading-[1.62] text-gray-700 -mt-10 text-pretty"
            style={{
              fontFamily: "var(--font-manrope), sans-serif",
              fontWeight: 400,
              fontSize: "clamp(18px, 7.2vw, 24px)",
              lineHeight: 1.1,
              letterSpacing: "-0.045em",
              wordSpacing: 6,
            }}
          >
            Every operational moment follows the same loop - observe, understand, decide, act and learn - running continuously across your sources.
          </p>

          <div
            className="relative bg-gray-900 py-3 grid grid-cols-2 gap-x-3 gap-y-8 sm:grid-cols-3 lg:grid-cols-5"
            style={{
              clipPath:
                "polygon(40px 0, 100% 0, 100% calc(100% - 40px), calc(100% - 40px) 100%, 0 100%, 0 40px)",
            }}
          >
            {STEPS.map((s, i) => (
              <div
                key={s.title}
                className="relative flex flex-col items-center gap-3 text-center"
              >
                {/* Dotted line between icons (not after last one) */}
                {i < STEPS.length - 1 && (
                  <div
                    aria-hidden
                    className="absolute top-[46px] hidden h-px lg:block z-0 pointer-events-none"
                    style={{
                      left: "calc(50% + 32px)",
                      width: "calc(100vw / 5 - 120px)",
                      background:
                        "repeating-linear-gradient(90deg, var(--color-pista) 0 6px, transparent 6px 14px)",
                    }}
                  />
                )}

                <span className="font-mono text-[10px] tracking-[0.1em] text-pista relative z-10">
                  {String(i + 1).padStart(2, "0")}
                </span>
                <span className="flex h-11 w-11 items-center justify-center rounded-[11px] border border-white/30 bg-white/10 text-white relative z-10">
                  <Icon name={s.icon} size={20} />
                </span>
                <span className="font-display text-[15px] font-medium text-pista relative z-10">
                  {s.title}
                </span>
                <span className="max-w-[190px] text-[12.5px] leading-[1.5] text-white/90 text-pretty relative z-10">
                  {s.body}
                </span>
              </div>
            ))}
          </div>
        </div>
      </Section>

      {/* -------- Industries we empower -------- */}
      <div className="bg-white/85">
        <Section className="relative z-10 ">
          <div className="flex flex-col gap-14">
            <SectionHeader
              eyebrow="Industries We Empower"
              title="Operational intelligence, "
              titleIce="tuned to your world."
            >
              <p
                className="w-full max-w-[640px] text-[18px] leading-[1.62] text-gray-700 text-pretty"
                style={{
                  fontFamily: "var(--font-manrope), sans-serif",
                  fontWeight: 400,
                  fontSize: "clamp(18px, 7.2vw, 24px)",
                  lineHeight: 1.1,
                  letterSpacing: "-0.045em",
                  wordSpacing: 6,
                }}
              >
                The same intelligence layer, adapted to the signals, constraints and outcomes that define each sector.
              </p>
            </SectionHeader>
          </div>
        </Section>
  
        {/* Full-width carousel outside container */}
        <div className="relative -mt-8 pb-20 sm:pb-[104px]">
          <div
            ref={scrollerRef}
            className="flex cursor-grab select-none overflow-x-auto active:cursor-grabbing [scrollbar-width:none] [&::-webkit-scrollbar]:hidden"
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
            {[...INDUSTRIES, ...INDUSTRIES, ...INDUSTRIES].map((industry, index) => (
              <div key={`${industry.label}-${index}`} className="flex-shrink-0 pr-6">
                <IndustryCard industry={industry} />
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}