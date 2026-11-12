"use client";

import { useState } from "react";
import Image from "next/image";
import { ArrowRight, CheckCircle2, ChevronRight } from "lucide-react";
import { Container } from "@/components/ui";

const IMAGES = [
  { src: "/images/inspection-image-1.png", alt: "Cabinet inspection view 1" },
  { src: "/images/inspection-image-1.png", alt: "Cabinet inspection view 2" },
  { src: "/images/inspection-image-1.png", alt: "Cabinet inspection view 3" },
  { src: "/images/inspection-image-1.png", alt: "Cabinet inspection view 4" },
  { src: "/images/inspection-image-1.png", alt: "Cabinet inspection view 5" },
];

const BENEFITS = [
  "Consistent inspection across customised cabinets",
  "Earlier identification of assembly deviations",
  "Reduced manual reconciliation effort",
  "Cleaner corrective actions",
  "Stronger inspection traceability",
  "Controlled handling of uncertainty",
];

function SectionHeading({ children }: { children: React.ReactNode }) {
  return (
    <h2
      className="text-primary"
      style={{
        fontFamily: "var(--font-manrope), sans-serif",
        fontWeight: 500,
        fontSize: "clamp(20px, 3.5vw, 36px)",
        letterSpacing: "-0.03em",
        lineHeight: 1.1,
      }}
    >
      {children}
    </h2>
  );
}

export default function CapacitorQualitySection2() {
  const [startIdx, setStartIdx] = useState(0);
  const visible = 4;
  const canNext = startIdx + visible < IMAGES.length;

  return (
    <section className="bg-background py-16 sm:py-20 lg:py-24">
      <Container>
        <div className="flex flex-col gap-16 sm:gap-20">
          {/* ── Representative Inspection Images ─────────────────────── */}
          <div className="flex flex-col gap-5">
            <SectionHeading>Representative Inspection Images</SectionHeading>

            <div className="relative">
              <div
                className="grid gap-3"
                style={{ gridTemplateColumns: `repeat(${visible}, 1fr)` }}
              >
                {IMAGES.slice(startIdx, startIdx + visible).map((img, i) => (
                  <div
                    key={startIdx + i}
                    className="relative aspect-square overflow-hidden rounded-xl border border-line-2"
                  >
                    <Image
                      src={img.src}
                      alt={img.alt}
                      fill
                      sizes="25vw"
                      className="object-cover"
                    />
                  </div>
                ))}
              </div>

              {/* Next arrow — only shown if more images exist */}
              {canNext && (
                <button
                  onClick={() =>
                    setStartIdx((s) => Math.min(s + 1, IMAGES.length - visible))
                  }
                  className="absolute -right-4 top-1/2 -translate-y-1/2 flex h-8 w-8 items-center justify-center rounded-full border border-line-2 bg-panel text-ink hover:text-primary hover:border-line-3 transition-colors"
                  aria-label="Next images"
                >
                  <ChevronRight className="h-4 w-4" strokeWidth={2} />
                </button>
              )}
            </div>
          </div>

          {/* ── Workflow ─────────────────────────────────────────────── */}
          <div className="flex flex-col gap-6">
            <SectionHeading>Workflow</SectionHeading>

            <div className="w-full flex flex-col">
              {/* Steps 01–03: vertical full-width */}
              {[
                {
                  num: "01",
                  title: "Feed and Capture",
                  desc: "Present each capacitor and capture inspection images",
                },
                {
                  num: "02",
                  title: "Evaluate Quality",
                  desc: "Analyse visible surface, dimensional and coating abnormalities",
                },
                {
                  num: "03",
                  title: "Classify and Route",
                  desc: "Assign Good / Not Good status and activate sorting",
                },
              ].map((s, i) => (
                <div key={s.num}>
                  {i > 0 && (
                    <div className="flex justify-center py-1.5">
                      <ArrowRight
                        className="h-5 w-5 rotate-90 text-line-3"
                        strokeWidth={1.5}
                      />
                    </div>
                  )}
                  <div className="rounded-2xl border border-line-2 bg-raise px-6 py-5 text-center shadow-sm">
                    <p
                      className="font-bold"
                      style={{
                        color: "var(--color-pista)",
                        fontSize: "clamp(15px, 1.8vw, 18px)",
                        letterSpacing: "-0.02em",
                      }}
                    >
                      {s.num}&nbsp;&nbsp;{s.title}
                    </p>
                    <p
                      className="text-ink mt-1.5"
                      style={{ fontSize: "clamp(13px, 1.4vw, 15px)" }}
                    >
                      {s.desc}
                    </p>
                  </div>
                </div>
              ))}

              {/* Branch connector */}
              <div className="flex justify-center py-1.5">
                <ArrowRight
                  className="h-5 w-5 rotate-90 text-line-3"
                  strokeWidth={1.5}
                />
              </div>

              {/* Three-way outcome branch */}
              <div className="grid grid-cols-3 gap-4">
                {/* Good */}
                <div className="rounded-2xl border border-green-500/40 bg-green-900/20 px-4 py-5 text-center">
                  <p
                    className="font-bold text-green-400"
                    style={{ fontSize: "clamp(14px, 1.6vw, 17px)" }}
                  >
                    Good
                  </p>
                  <p
                    className="text-ink mt-2 leading-snug"
                    style={{ fontSize: "clamp(12px, 1.3vw, 14px)" }}
                  >
                    Route to accepted collection box
                  </p>
                </div>
                {/* Not Good */}
                <div className="rounded-2xl border border-red-500/40 bg-red-900/20 px-4 py-5 text-center">
                  <p
                    className="font-bold text-red-400"
                    style={{ fontSize: "clamp(14px, 1.6vw, 17px)" }}
                  >
                    Not Good
                  </p>
                  <p
                    className="text-ink mt-2 leading-snug"
                    style={{ fontSize: "clamp(12px, 1.3vw, 14px)" }}
                  >
                    Route to rejected collection box
                  </p>
                </div>
                {/* Separated Output */}
                <div className="rounded-2xl border border-line-2 bg-raise px-4 py-5 text-center">
                  <p
                    className="font-bold text-primary"
                    style={{ fontSize: "clamp(14px, 1.6vw, 17px)" }}
                  >
                    Separated Output
                  </p>
                  <p
                    className="text-ink mt-2 leading-snug"
                    style={{ fontSize: "clamp(12px, 1.3vw, 14px)" }}
                  >
                    Accepted and rejected capacitors kept apart
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* ── Benefits ─────────────────────────────────────────────── */}
          <div className="flex flex-col gap-6">
            <SectionHeading>Benefits</SectionHeading>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-12 gap-y-3">
              {BENEFITS.map((b) => (
                <div key={b} className="flex items-start gap-3">
                  <CheckCircle2
                    className="mt-0.5 h-4 w-4 shrink-0"
                    strokeWidth={2}
                    style={{ color: "var(--color-pista)" }}
                  />
                  <span
                    className="text-ink leading-snug"
                    style={{ fontSize: "clamp(13px, 1.5vw, 15px)" }}
                  >
                    {b}
                  </span>
                </div>
              ))}
            </div>
          </div>

          {/* ── Business Value ───────────────────────────────────────── */}
          <div className="flex flex-col gap-4">
            <SectionHeading>Business Value</SectionHeading>
            <p
              className="text-ink leading-relaxed max-w-3xl"
              style={{ fontSize: "clamp(14px, 1.8vw, 18px)" }}
            >
              The reported implementation combines a 2× increase in daily
              inspection capacity with automated physical sorting. One machine
              carries out the inspection and segregation workflow, reducing
              dependence oncontinuous manual checking as volumes grow.
            </p>
          </div>
        </div>
      </Container>
    </section>
  );
}
