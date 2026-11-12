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

const WORKFLOW = [
  { step: 1, label: "Select recipe and record scan" },
  { step: 2, label: "Engine selects usable frames" },
  { step: 3, label: "Consolidate detections across viewpoints" },
  { step: 4, label: "Flag mismatches / review uncertain regions" },
  { step: 5, label: "Store findings with cabinet record" },
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

export default function ElectricalCabinetSection2() {
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
              <div className="grid gap-3" style={{ gridTemplateColumns: `repeat(${visible}, 1fr)` }}>
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
                  onClick={() => setStartIdx((s) => Math.min(s + 1, IMAGES.length - visible))}
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

            <div
              className="grid w-full items-center gap-3"
              style={{ gridTemplateColumns: "1fr auto 1fr auto 1fr auto 1fr auto 1fr" }}
            >
              {WORKFLOW.map((w, i) => (
                <>
                  <div
                    key={w.step}
                    className="flex flex-col gap-3 rounded-xl border border-line-2 bg-raise p-4 sm:p-5"
                  >
                    {/* Numbered badge */}
                    <div
                      className="flex h-7 w-7 items-center justify-center rounded-full border-2 text-[12px] font-bold"
                      style={{
                        borderColor: "var(--color-pista)",
                        color: "var(--color-pista)",
                      }}
                    >
                      {w.step}
                    </div>
                    <p
                      className="text-ink leading-snug"
                      style={{ fontSize: "clamp(12px, 1.4vw, 14px)" }}
                    >
                      {w.label}
                    </p>
                  </div>

                  {i < WORKFLOW.length - 1 && (
                    <ArrowRight
                      key={`arrow-${i}`}
                      className="h-4 w-4 shrink-0 text-faint"
                      strokeWidth={1.5}
                    />
                  )}
                </>
              ))}
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
              style={{ fontSize: "clamp(14px, 1.8vw, 16px)" }}
            >
              Establishes a structured quality-control process for customised
              electrical cabinets, connecting the physical assembly with its
              intended design, bill of materials and inspection requirements.
              Helps limit avoidable rework and supports smoother commissioning
              and handover.
            </p>
          </div>

        </div>
      </Container>
    </section>
  );
}
