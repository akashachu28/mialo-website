import { Container } from "@/components/ui";
import { ArrowDown, ArrowRight, CheckCircle2 } from "lucide-react";

// ── Workflow diagram data ─────────────────────────────────────────────────────
const MAIN_STEPS = [
  {
    num: "01",
    title: "Position & Start Inspection",
    desc: "Operator places the pallet on the rotary table and starts the scan",
  },
  {
    num: "02",
    title: "Capture & Extract",
    desc: "Multi-view images  •  Visible carton count  •  Barcode and OCR fields",
  },
  {
    num: "03",
    title: "Validate Against SAP",
    desc: "Compare extracted fields with expected receiving information",
  },
];

const BRANCHES = [
  {
    color: "green",
    title: "Match Confirmed",
    desc: "Operator approves validated receiving data",
    sub: { title: "Upload & Archive", desc: "Receiving record + evidence" },
    footer: null,
  },
  {
    color: "red",
    title: "Mismatch Detected",
    desc: "Resolve discrepancies and repeat inspection",
    sub: null,
    footer: "Return to capture",
  },
  {
    color: "amber",
    title: "Reading Uncertain",
    desc: "Review unreadable or hidden labels before approval",
    sub: null,
    footer: "Verify, then approve or reinspect",
  },
];

const BENEFITS = [
  {
    title: "Less repetitive receiving work",
    body: "Automates visible label reading and data comparison so operators can focus on exceptions.",
  },
  {
    title: "More consistent reconciliation",
    body: "Applies the same validation rules to extracted product information and expected inbound records.",
  },
  {
    title: "Controlled exception handling",
    body: "Highlights mismatches and unreadable information before an operator approves the SAP update.",
  },
  {
    title: "Stronger receiving traceability",
    body: "Links captured images, extracted fields and approval actions to a searchable inspection record.",
  },
  {
    title: "Practical handling of visibility limits",
    body: "Treats inaccessible labels as exceptions rather than assuming the full pallet has been verified.",
  },
];

// ── Colour maps ───────────────────────────────────────────────────────────────
const BRANCH_STYLES = {
  green: {
    card:   "border-green-500/40 bg-green-900/20",
    title:  "text-green-400",
    footer: "text-green-400",
    sub:    "border-green-500/30 bg-green-900/10",
  },
  red: {
    card:   "border-red-500/40 bg-red-900/20",
    title:  "text-red-400",
    footer: "text-red-400",
    sub:    "",
  },
  amber: {
    card:   "border-amber-500/40 bg-amber-900/20",
    title:  "text-amber-400",
    footer: "text-amber-400",
    sub:    "",
  },
};

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

function Connector() {
  return (
    <div className="flex justify-center py-1.5">
      <ArrowDown className="h-5 w-5 text-line-3" strokeWidth={1.5} />
    </div>
  );
}

// ── Component ─────────────────────────────────────────────────────────────────
export default function InboundPalletSection2() {
  return (
    <section className="bg-background py-16 sm:py-20 lg:py-24">
      <Container>
        <div className="flex flex-col gap-16 sm:gap-20">

          {/* ── Workflow ──────────────────────────────────────────────── */}
          <div className="flex flex-col gap-7">
            <div className="flex flex-col gap-1">
              <SectionHeading>Workflow</SectionHeading>
              <p className="text-ink" style={{ fontSize: "clamp(13px, 1.5vw, 18px)" }}>
                The operator positions the pallet and starts inspection. Cameras capture accessible views during
                rotation. AI extracts visible label information and applies SAP validation rules. The operator
                reviews exceptions and approves the result; validated data is transmitted and the inspection
                record archived.
              </p>
            </div>

            {/* ── Workflow diagram ─────────────────────────────── */}
            <div className="w-full flex flex-col">

              {/* Steps 01–03: horizontal full-width */}
              <div
                className="grid w-full items-stretch gap-3"
                style={{ gridTemplateColumns: "1fr auto 1fr auto 1fr" }}
              >
                {MAIN_STEPS.map((s, i) => (
                  <>
                    <div
                      key={s.num}
                      className="flex items-start gap-3 rounded-2xl border border-line-2 bg-raise px-5 py-4 shadow-sm w-full"
                    >
                      <span
                        className="shrink-0 font-bold leading-none pt-0.5"
                        style={{ color: "var(--color-ice)", fontSize: "clamp(13px, 1.5vw, 15px)" }}
                      >
                        {s.num}
                      </span>
                      <div>
                        <p
                          className="font-bold leading-tight"
                          style={{ color: "var(--color-ice)", fontSize: "clamp(13px, 1.5vw, 15px)" }}
                        >
                          {s.title}
                        </p>
                        <p className="text-ink mt-0.5" style={{ fontSize: "clamp(12px, 1.3vw, 13px)" }}>
                          {s.desc}
                        </p>
                      </div>
                    </div>
                    {i < MAIN_STEPS.length - 1 && (
                      <ArrowRight
                        key={`arrow-${i}`}
                        className="h-4 w-4 shrink-0 self-center text-line-3"
                        strokeWidth={1.5}
                      />
                    )}
                  </>
                ))}
              </div>

              {/* "Inspection Result" label */}
              <Connector />
              <div className="flex justify-center">
                <span
                  className="rounded-full border border-line-3 bg-panel px-4 py-1.5 text-[11px] font-bold uppercase tracking-widest text-muted"
                >
                  Inspection Result
                </span>
              </div>

              {/* Three-way branch */}
              <div className="mt-4 grid grid-cols-3 gap-3 items-start">
                {BRANCHES.map((b) => {
                  const s = BRANCH_STYLES[b.color as keyof typeof BRANCH_STYLES];
                  return (
                    <div key={b.title} className="flex flex-col gap-2">
                      {/* Branch arrow */}
                      <div className="flex justify-center">
                        <ArrowDown className="h-4 w-4 text-line-3" strokeWidth={1.5} />
                      </div>

                      {/* Branch card */}
                      <div className={`rounded-xl border px-3 py-3 ${s.card}`}>
                        <p className={`font-bold leading-tight text-center ${s.title}`}
                          style={{ fontSize: "clamp(12px, 1.3vw, 14px)" }}>
                          {b.title}
                        </p>
                        <p className="text-ink mt-1 text-center leading-snug"
                          style={{ fontSize: "clamp(11px, 1.2vw, 12px)" }}>
                          {b.desc}
                        </p>
                      </div>

                      {/* Sub-card (green only) */}
                      {b.sub && (
                        <>
                          <div className="flex justify-center">
                            <ArrowDown className="h-4 w-4 text-line-3" strokeWidth={1.5} />
                          </div>
                          <div className={`rounded-xl border px-3 py-3 ${s.sub}`}>
                            <p className={`font-bold leading-tight text-center ${s.title}`}
                              style={{ fontSize: "clamp(12px, 1.3vw, 14px)" }}>
                              {b.sub.title}
                            </p>
                            <p className="text-ink mt-1 text-center leading-snug"
                              style={{ fontSize: "clamp(11px, 1.2vw, 12px)" }}>
                              {b.sub.desc}
                            </p>
                          </div>
                        </>
                      )}

                      {/* Footer label */}
                      {b.footer && (
                        <p className={`text-center font-semibold italic ${s.footer}`}
                          style={{ fontSize: "11px" }}>
                          {b.footer}
                        </p>
                      )}
                    </div>
                  );
                })}
              </div>
            </div>
          </div>

          {/* ── Benefits ──────────────────────────────────────────────── */}
          <div className="flex flex-col gap-6">
            <SectionHeading>Benefits</SectionHeading>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-12 gap-y-4">
              {BENEFITS.map((b) => (
                <div key={b.title} className="flex items-start gap-3">
                  <CheckCircle2
                    className="mt-0.5 h-4 w-4 shrink-0"
                    strokeWidth={2}
                    style={{ color: "var(--color-pista)" }}
                  />
                  <div>
                    <span
                      className="font-semibold text-primary"
                      style={{ fontSize: "clamp(13px, 1.5vw, 18px)" }}
                    >
                      {b.title}:{" "}
                    </span>
                    <span
                      className="text-ink"
                      style={{ fontSize: "clamp(13px, 1.5vw, 18px)" }}
                    >
                      {b.body}
                    </span>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* ── Business Value ─────────────────────────────────────────── */}
          <div className="flex flex-col gap-4">
            <SectionHeading>Business Value</SectionHeading>
            <div className="flex flex-col gap-3 max-w-3xl">
              <p className="text-ink leading-relaxed" style={{ fontSize: "clamp(14px, 1.8vw, 18px)" }}>
                The proposed solution connects physical receiving checks with enterprise inventory records in a
                controlled workflow. Camera acquisition, AI extraction and SAP validation work together to
                reduce repeated data handling and make receiving decisions easier to review.
              </p>
              <p className="text-ink leading-relaxed" style={{ fontSize: "clamp(14px, 1.8vw, 18px)" }}>
                The digital inspection archive provides a foundation for resolving receiving queries, reviewing
                discrepancies and extending automation to additional receiving points. These are intended
                business benefits of the designed scope; production results remain subject to acceptance testing.
              </p>
            </div>
          </div>

        </div>
      </Container>
    </section>
  );
}
