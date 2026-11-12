import { Container } from "@/components/ui";
import { Circle, LayoutGrid, Hexagon, MonitorCheck, ArrowRight } from "lucide-react";

const ARCHITECTURE = [
  { icon: Circle,       title: "Video Capture", subtitle: "(Handheld)" },
  { icon: LayoutGrid,   title: "AI Engine",     subtitle: "(Detection + OCR)" },
  { icon: Hexagon,      title: "Validation",    subtitle: "(Recipe-based)" },
  { icon: MonitorCheck, title: "Results",       subtitle: "(Annotations + Confidence)" },
];

const CAPABILITIES = [
  {
    capability: "Assembly verification",
    coverage: "Component presence, identity, quantity and position against the configured BOM.",
  },
  {
    capability: "Wiring and label checks",
    coverage: "Readable ferrules, terminal identifiers, visible wire colours and connection context.",
  },
  {
    capability: "Design verification",
    coverage: "Configured checks for clearance, mounting space, duct loading and cable segregation.",
  },
  {
    capability: "Inspection evidence",
    coverage: "Annotated images, pass or fail drawing markups and confidence by inspection zone.",
  },
];

// Shared section heading style
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

export default function ElectricalCabinetSection1() {
  return (
    <section className="bg-white py-16 sm:py-20 lg:py-24">
      <Container>
        <div className="flex flex-col gap-16 sm:gap-20 lg:gap-24">

          {/* ── Challenge + Solution ─────────────────────────────────── */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16">
            {[
              {
                title: "The Challenge",
                body: "Custom-built electrical cabinets require detailed checks across components, dense wiring and labels. Manual reconciliation against drawings and bills of materials can be slow and inconsistent, while hidden connections make verification difficult. Assembly deviations can lead to rework and commissioning delays.",
              },
              {
                title: "The Solution",
                body: "Mialo AI designed a visual inspection system that combines handheld video capture, component detection, OCR and recipe-based validation. Each cabinet design has defined zones, expected parts, wiring attributes and inspection rules. Multi-view evidence and confidence scoring support a controlled review of uncertain regions.",
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

            {/* Grid: 4 card cols + 3 arrow cols = 11 cols total */}
            <div className="grid w-full items-center gap-3"
              style={{ gridTemplateColumns: "1fr auto 1fr auto 1fr auto 1fr" }}
            >
              {ARCHITECTURE.map((step, i) => {
                const Icon = step.icon;
                return (
                  <>
                    {/* Card */}
                    <div
                      key={step.title}
                      className="flex flex-col items-center justify-center gap-3 rounded-2xl border border-blue-100 bg-blue-50/60 px-4 py-5 sm:py-6 text-center shadow-sm w-full"
                    >
                      <div
                        className="flex h-11 w-11 items-center justify-center rounded-xl"
                        style={{ background: "rgba(35,88,205,0.1)" }}
                      >
                        <Icon
                          className="h-5 w-5"
                          strokeWidth={1.5}
                          style={{ color: "var(--color-ice)" }}
                        />
                      </div>
                      <div>
                        <p
                          className="text-gray-900 font-semibold leading-tight"
                          style={{
                            fontSize: "clamp(13px, 1.5vw, 15px)",
                            letterSpacing: "-0.01em",
                          }}
                        >
                          {step.title}
                        </p>
                        <p
                          className="text-gray-500 mt-0.5"
                          style={{ fontSize: "clamp(11px, 1.2vw, 13px)" }}
                        >
                          {step.subtitle}
                        </p>
                      </div>
                    </div>

                    {/* Arrow between cards */}
                    {i < ARCHITECTURE.length - 1 && (
                      <ArrowRight
                        key={`arrow-${i}`}
                        className="h-4 w-4 shrink-0 text-gray-400"
                        strokeWidth={1.5}
                      />
                    )}
                  </>
                );
              })}
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
