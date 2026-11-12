import { Container } from "@/components/ui";
import {
  Layers, Crosshair, Eye, RefreshCw, Cpu,
  CheckCircle2, XCircle, BarChart2, ArrowDown, ArrowRight,
} from "lucide-react";

const CAPABILITIES = [
  {
    capability: "Surface inspection",
    coverage: "Burrs, pinholes and visible surface abnormalities."
  },
  {
    capability: "Geometry checks",
    coverage: "Lead-length deviations and configured dimensional abnormalities.",
  },
  {
    capability: "Coating inspection",
    coverage: "Visible paint and coating defects.",
  },
  {
    capability: "Automated rejection",
    coverage: "Quality classification linked to physical Good / Not Good separation.",
  },
];

function SectionHeading({ children }: { children: React.ReactNode }) {
  return (
    <h2
      className="text-ice"
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

function Connector() {
  return (
    <div className="flex justify-center py-1.5">
      <ArrowDown className="h-5 w-5 text-blue-300" strokeWidth={1.5} />
    </div>
  );
}

export default function CapacitorQualitySection1() {
  return (
    <section className="bg-white py-16 sm:py-20 lg:py-24">
      <Container>
        <div className="flex flex-col gap-16 sm:gap-20 lg:gap-24">

          {/* ── Challenge + Solution ─────────────────────────────────── */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16">
            {[
              {
                title: "The Challenge",
                body: "Four operators manually inspected approximately 20,000 capacitors per day. Inspection and sorting dependedon sustained visual attention and individual judgement, creating exposure to fatigue and inconsistent decisionsas volumes increased."
              },
              {
                title: "The Solution",
                body: "Mialo.AI developed an automated machine vision and AI system that inspects each capacitor, classifies it as Good or Not Good and physically directs it into the corresponding box. Inspection, classification andsortingareautomated during normal operation."
              },
            ].map(({ title, body }) => (
              <div key={title} className="flex flex-col gap-4">
                <SectionHeading>{title}</SectionHeading>
                <p
                  className="text-gray-600 leading-relaxed "
                  style={{ fontSize: "clamp(14px, 1.8vw, 18px)" }}
                >
                  {body}
                </p>
              </div>
            ))}
          </div>

          {/* ── Solution Architecture ────────────────────────────────── */}
          <div className="flex flex-col gap-7">
            <SectionHeading>Solution Architecture</SectionHeading>

            <div className="w-full flex flex-col">

              {/* 1 — Feeding & Singulation */}
              <div className="flex items-center gap-4 rounded-2xl border border-blue-100 bg-blue-50/60 px-5 py-4 shadow-sm">
                <div className="shrink-0 flex h-11 w-11 items-center justify-center rounded-xl" style={{ background: "rgba(35,88,205,0.1)" }}>
                  <Layers className="h-5 w-5" strokeWidth={1.5} style={{ color: "var(--color-ice)" }} />
                </div>
                <div>
                  <p className="font-bold text-gray-900" style={{ fontSize: "clamp(14px, 1.6vw, 16px)", letterSpacing: "-0.02em" }}>Feeding &amp; Singulation</p>
                  <p className="text-gray-500 mt-0.5" style={{ fontSize: "clamp(12px, 1.3vw, 13px)" }}>Bulk capacitors fed and separated for individual inspection</p>
                </div>
              </div>

              <Connector />

              {/* 2 — Positioning */}
              <div className="flex items-center gap-4 rounded-2xl border border-blue-100 bg-blue-50/60 px-5 py-4 shadow-sm">
                <div className="shrink-0 flex h-11 w-11 items-center justify-center rounded-xl" style={{ background: "rgba(35,88,205,0.1)" }}>
                  <Crosshair className="h-5 w-5" strokeWidth={1.5} style={{ color: "var(--color-ice)" }} />
                </div>
                <div>
                  <p className="font-bold text-gray-900" style={{ fontSize: "clamp(14px, 1.6vw, 16px)", letterSpacing: "-0.02em" }}>Positioning</p>
                  <p className="text-gray-500 mt-0.5" style={{ fontSize: "clamp(12px, 1.3vw, 13px)" }}>Each component precisely aligned under the camera system</p>
                </div>
              </div>

              <Connector />

              {/* 3 — Two-Sided Vision Inspection */}
              <div className="rounded-2xl border border-blue-200 bg-blue-50/40 shadow-sm overflow-hidden">
                {/* Header */}
                <div className="flex items-center gap-3 border-b border-blue-100 px-5 py-3 bg-blue-100/50">
                  <div className="shrink-0 flex h-9 w-9 items-center justify-center rounded-xl" style={{ background: "rgba(35,88,205,0.12)" }}>
                    <Eye className="h-4.5 w-4.5" strokeWidth={1.5} style={{ color: "var(--color-ice)" }} />
                  </div>
                  <p className="font-bold italic text-gray-900" style={{ fontSize: "clamp(14px, 1.6vw, 16px)", letterSpacing: "-0.02em" }}>
                    Two-Sided Vision Inspection
                  </p>
                </div>
                {/* Three sub-panels */}
                <div className="grid w-full items-center px-5 py-4 gap-3"
                  style={{ gridTemplateColumns: "1fr auto 1fr auto 1fr" }}
                >
                  {[
                    { label: "Face 1",   desc: "Top-side surface, leads and markings",      icon: null },
                    { label: "Turnover", desc: "Component flipped for reverse inspection",  icon: RefreshCw },
                    { label: "Face 2",   desc: "Bottom-side surface and coating",           icon: null },
                  ].map((panel, i) => {
                    const PanelIcon = panel.icon;
                    return (
                    <>
                      <div key={panel.label} className="flex flex-col items-center gap-2 rounded-xl border border-blue-100 bg-white/70 px-4 py-3 text-center">
                        {PanelIcon && (
                          <div className="flex h-8 w-8 items-center justify-center rounded-lg" style={{ background: "rgba(35,88,205,0.08)" }}>
                            <PanelIcon className="h-4 w-4" strokeWidth={1.5} style={{ color: "var(--color-ice)" }} />
                          </div>
                        )}
                        <p className="font-semibold text-gray-900" style={{ fontSize: "clamp(12px, 1.3vw, 14px)" }}>{panel.label}</p>
                        <p className="text-gray-500 leading-snug" style={{ fontSize: "clamp(11px, 1.1vw, 12px)" }}>{panel.desc}</p>
                      </div>
                      {i < 2 && (
                        <ArrowRight key={`sub-arrow-${i}`} className="h-4 w-4 shrink-0 text-blue-300" strokeWidth={1.5} />
                      )}
                    </>
                    );
                  })}
                </div>
              </div>

              <Connector />

              {/* 4 — Mialo.AI Decision Engine */}
              <div className="flex items-start gap-4 rounded-2xl border border-blue-100 bg-blue-50/60 px-5 py-4 shadow-sm">
                <div className="shrink-0 flex h-11 w-11 items-center justify-center rounded-xl" style={{ background: "rgba(35,88,205,0.1)" }}>
                  <Cpu className="h-5 w-5" strokeWidth={1.5} style={{ color: "var(--color-ice)" }} />
                </div>
                <div>
                  <p className="font-bold text-gray-900" style={{ fontSize: "clamp(14px, 1.6vw, 16px)", letterSpacing: "-0.02em" }}>Mialo.AI Decision Engine</p>
                  <p className="text-gray-500 mt-0.5" style={{ fontSize: "clamp(12px, 1.3vw, 13px)" }}>
                    Surface defects &nbsp;•&nbsp; Pinholes &nbsp;•&nbsp; Lead length &nbsp;•&nbsp; Coating
                  </p>
                </div>
              </div>

              <Connector />

              {/* 5 — OK / NG branch */}
              <div className="grid grid-cols-2 gap-4">
                <div className="flex items-center gap-3 rounded-2xl border border-green-200 bg-green-50/60 px-5 py-4 shadow-sm">
                  <CheckCircle2 className="h-6 w-6 shrink-0 text-green-600" strokeWidth={1.5} />
                  <div>
                    <p className="font-bold text-green-700" style={{ fontSize: "clamp(14px, 1.6vw, 16px)" }}>OK</p>
                    <p className="text-gray-600 mt-0.5" style={{ fontSize: "clamp(12px, 1.3vw, 13px)" }}>Good components sorted into the OK bin</p>
                  </div>
                </div>
                <div className="flex items-center gap-3 rounded-2xl border border-red-200 bg-red-50/60 px-5 py-4 shadow-sm">
                  <XCircle className="h-6 w-6 shrink-0 text-red-500" strokeWidth={1.5} />
                  <div>
                    <p className="font-bold text-red-600" style={{ fontSize: "clamp(14px, 1.6vw, 16px)" }}>NG</p>
                    <p className="text-gray-600 mt-0.5" style={{ fontSize: "clamp(12px, 1.3vw, 13px)" }}>Defective components rejected into the NG bin</p>
                  </div>
                </div>
              </div>

              <Connector />

              {/* 6 — Inspection Records & Analytics */}
              <div className="flex items-center gap-4 rounded-2xl border border-blue-100 bg-blue-50/60 px-5 py-4 shadow-sm">
                <div className="shrink-0 flex h-11 w-11 items-center justify-center rounded-xl" style={{ background: "rgba(35,88,205,0.1)" }}>
                  <BarChart2 className="h-5 w-5" strokeWidth={1.5} style={{ color: "var(--color-ice)" }} />
                </div>
                <div>
                  <p className="font-bold text-gray-900" style={{ fontSize: "clamp(14px, 1.6vw, 16px)", letterSpacing: "-0.02em" }}>Inspection Records &amp; Analytics</p>
                  <p className="text-gray-500 mt-0.5" style={{ fontSize: "clamp(12px, 1.3vw, 13px)" }}>Every result logged with images, classifications and production statistics</p>
                </div>
              </div>

            </div>
          </div>

          {/* ── Capabilities ─────────────────────────────────────────── */}
          <div className="flex flex-col gap-7">
            <SectionHeading>Capabilities</SectionHeading>

            {/* Glossy card container */}
            <div
              className="overflow-hidden rounded-2xl border border-white/70 shadow-xl shadow-blue-100/40"
              style={{
                background:
                  "linear-gradient(135deg, rgba(255,255,255,0.85) 0%, rgba(235,242,255,0.65) 100%)",
                backdropFilter: "blur(16px)",
                WebkitBackdropFilter: "blur(16px)",
              }}
            >
              {/* Header row */}
              <div
                className="grid grid-cols-[1fr_2fr] border-b border-white/60 px-6 py-3.5 sm:px-8"
                style={{
                  background: "rgba(35,88,205,0.07)",
                }}
              >
                <span
                  className="font-semibold uppercase tracking-wider"
                  style={{ fontSize: "11px", color: "var(--color-ice)" }}
                >
                  Capability
                </span>
                <span
                  className="font-semibold uppercase tracking-wider"
                  style={{ fontSize: "11px", color: "var(--color-ice)" }}
                >
                  Coverage
                </span>
              </div>

              {/* Data rows */}
              {CAPABILITIES.map((row, i) => (
                <div
                  key={row.capability}
                  className={`grid grid-cols-[1fr_2fr] gap-4 px-6 py-4 sm:px-8 sm:py-5 ${
                    i < CAPABILITIES.length - 1
                      ? "border-b border-white/50"
                      : ""
                  }`}
                  style={{
                    background:
                      i % 2 === 0
                        ? "rgba(255,255,255,0.5)"
                        : "rgba(235,242,255,0.3)",
                  }}
                >
                  <span
                    className="font-medium text-gray-800 leading-snug"
                    style={{ fontSize: "clamp(13px, 1.5vw, 15px)" }}
                  >
                    {row.capability}
                  </span>
                  <span
                    className="text-gray-600 leading-relaxed"
                    style={{ fontSize: "clamp(13px, 1.5vw, 15px)" }}
                  >
                    {row.coverage}
                  </span>
                </div>
              ))}
            </div>
          </div>

        </div>
      </Container>
    </section>
  );
}