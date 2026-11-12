"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { Container, Kicker } from "@/components/ui";

const FILTERS = ["All", "Manufacturing", "Food & Agriculture", "Electrical"];

const CASE_STUDIES = [
  {
    id: "electrical-cabinet-inspection",
    category: "Electrical Equipment",
    filter: "Electrical",
    title: "Electrical Cabinet Assembly Inspection",
    description: "Verify components, wiring and labels against design and BOMs.",
    image: "/images/case_study_hero.png",
    href: "/case-studies/electrical-cabinet-inspection",
  },
  {
    id: "automated-pallet-inspection",
    category: "Food & Beverage",
    filter: "Food & Agriculture",
    title: "Automated Inbound Pallet Inspection",
    description: "Read labels, check against SAP and ensure traceability.",
    image: "/images/case_study_hero.png",
    href: "/case-studies/inbound-pallet-inspection",
  },
  {
    id: "capacitor-quality-inspection",
    category: "Manufacturing",
    filter: "Manufacturing",
    title: "Capacitor Quality Inspection",
    description: "Detect defects and verify markings and specifications.",
    image: "/images/case_study_hero.png",
    href: "/case-studies/capacitor-quality-inspection",
  },
  {
    id: "agricultural-produce-inspection",
    category: "Agriculture",
    filter: "Food & Agriculture",
    title: "Agricultural Produce Inspection",
    description: "Grade produce by size, color and quality using computer vision.",
    image: "/images/case_study_hero.png",
    href: "/case-studies/agricultural-produce-inspection",
  },
  {
    id: "manufacturing-floor-intelligence",
    category: "Manufacturing",
    filter: "Manufacturing",
    title: "Manufacturing Floor Intelligence",
    description: "Monitor safety, detect anomalies and improve operational awareness.",
    image: "/images/case_study_hero.png",
    href: "/case-studies/manufacturing-floor-intelligence",
  },
];

function CaseCard({ study }: { study: (typeof CASE_STUDIES)[number] }) {
  return (
    <Link
      href={study.href}
      className="group relative flex flex-col overflow-hidden rounded-xl border border-line-2 bg-raise transition-colors hover:border-line-3"
    >
      {/* Image */}
      <div className="relative aspect-[16/9] w-full overflow-hidden">
        <Image
          src={study.image}
          alt={study.title}
          fill
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
          className="object-cover transition-transform duration-500 group-hover:scale-105"
        />
        {/* Dark gradient over bottom of image so category pill stays readable */}
        <div
          className="absolute inset-0"
          style={{
            background:
              "linear-gradient(to bottom, transparent 40%, rgba(8,9,11,0.85) 100%)",
          }}
        />
        {/* Category pill */}
        <div className="absolute bottom-3 left-3">
          <span className="inline-flex items-center rounded-full border border-pista/40 bg-pista/10 px-2.5 py-1 backdrop-blur-sm">
            <Kicker className="text-pista text-[10px]">{study.category}</Kicker>
          </span>
        </div>
      </div>

      {/* Content */}
      <div className="flex flex-1 flex-col gap-2 p-4 sm:p-5">
        <h3
          className="text-primary leading-tight"
          style={{
            fontFamily: "var(--font-manrope), sans-serif",
            fontWeight: 500,
            fontSize: "clamp(15px, 2.5vw, 18px)",
            letterSpacing: "-0.02em",
          }}
        >
          {study.title}
        </h3>
        <p className="text-[13px] leading-relaxed text-ink flex-1">
          {study.description}
        </p>
        <div className="mt-2 flex items-center gap-1.5 text-pista text-[13px] font-medium group-hover:gap-2.5 transition-all duration-200">
          View case study
          <ArrowRight className="h-3.5 w-3.5" strokeWidth={2} />
        </div>
      </div>
    </Link>
  );
}

export default function CaseStudySection1() {
  const [active, setActive] = useState("All");

  const filtered =
    active === "All"
      ? CASE_STUDIES
      : CASE_STUDIES.filter((c) => c.filter === active);

  // Layout: first 3 in a row, remaining in a second row
  const firstRow = filtered.slice(0, 3);
  const secondRow = filtered.slice(3);

  return (
    <section className="py-16 sm:py-20 lg:py-24">
      <Container>
        {/* Header row */}
        <div className="flex flex-col gap-4 sm:flex-row sm:items-start sm:justify-between sm:gap-6 mb-8 sm:mb-10 lg:mb-12">
          <div className="flex flex-col gap-1.5">
            <h2
              className="text-primary"
              style={{
                fontFamily: "var(--font-manrope), sans-serif",
                fontWeight: 500,
                fontSize: "clamp(24px, 5vw, 36px)",
                letterSpacing: "-0.03em",
                lineHeight: 1.1,
              }}
            >
              Our Case Studies
            </h2>
            <p className="text-[13px] sm:text-sm text-ink">
              Five real-world use cases. One powerful platform.
            </p>
          </div>

          {/* Filter pills */}
          <div className="flex flex-wrap items-center gap-2">
            {FILTERS.map((f) => (
              <button
                key={f}
                onClick={() => setActive(f)}
                className={`rounded-full border px-4 py-1.5 text-[13px] font-medium transition-colors duration-150 cursor-pointer ${
                  active === f
                    ? "border-pista bg-pista text-background"
                    : "border-line-2 bg-transparent text-ink hover:border-line-3 hover:text-primary"
                }`}
              >
                {f}
              </button>
            ))}
          </div>
        </div>

        {/* Grid */}
        {filtered.length === 0 ? (
          <p className="text-ink text-sm py-16 text-center">
            No case studies in this category yet.
          </p>
        ) : (
          <div className="flex flex-col gap-4 sm:gap-5">
            {/* First row — up to 3 cards */}
            {firstRow.length > 0 && (
              <div
                className={`grid gap-4 sm:gap-5 ${
                  firstRow.length === 1
                    ? "grid-cols-1 max-w-lg"
                    : firstRow.length === 2
                    ? "grid-cols-1 sm:grid-cols-2"
                    : "grid-cols-1 sm:grid-cols-2 lg:grid-cols-3"
                }`}
              >
                {firstRow.map((s) => (
                  <CaseCard key={s.id} study={s} />
                ))}
              </div>
            )}

            {/* Second row — remaining cards, wider aspect */}
            {secondRow.length > 0 && (
              <div
                className={`grid gap-4 sm:gap-5 ${
                  secondRow.length === 1
                    ? "grid-cols-1 sm:grid-cols-1"
                    : "grid-cols-1 sm:grid-cols-2"
                }`}
              >
                {secondRow.map((s) => (
                  <CaseCard key={s.id} study={s} />
                ))}
              </div>
            )}
          </div>
        )}
      </Container>
    </section>
  );
}
