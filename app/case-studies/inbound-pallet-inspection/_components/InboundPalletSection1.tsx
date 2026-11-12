import Image from "next/image";
import { Container } from "@/components/ui";
import {
  Package, RotateCcw, MousePointerClick, Camera,
  Boxes, Tag, Barcode, Type, AlertTriangle,
  Database, UserCheck, CloudUpload, RefreshCw, Archive,
  ArrowDown, ArrowRight,
} from "lucide-react";

// ── Types ─────────────────────────────────────────────────────────────────────
type Color = "blue" | "green" | "navy" | "purple";

interface NormalStep {
  kind: "normal";
  step: number;
  icon: React.ElementType;
  color: Color;
  title: string;
  desc: string;
}

interface SubItem {
  icon: React.ElementType;
  label: string;
  body: string;
}

interface PlatformStep {
  kind: "platform";
  step: number;
  title: string;
  subItems: SubItem[];
}

interface BranchStep {
  kind: "branch";
  approve: NormalStep;
  reject: NormalStep;
}

type FlowStep = NormalStep | PlatformStep | BranchStep;

// ── Data ──────────────────────────────────────────────────────────────────────
const FLOW: FlowStep[] = [
  { kind: "normal", step: 1, icon: Package,           color: "blue",   title: "Inbound Pallet",                   desc: "Pallet arrives at the inbound receiving area." },
  { kind: "normal", step: 2, icon: RotateCcw,          color: "blue",   title: "Place Pallet on Rotary Table",      desc: "Pallet is placed on the rotary table at the inspection station." },
  { kind: "normal", step: 3, icon: MousePointerClick,  color: "blue",   title: "Operator Starts Inspection",        desc: "Operator initiates the inspection process through the application." },
  { kind: "normal", step: 4, icon: Camera,             color: "blue",   title: "Image Acquisition During Rotation", desc: "High-resolution images are captured from the top and all accessible sides during pallet rotation." },
  {
    kind: "platform",
    step: 5,
    title: "Mialo.AI Platform Analysis",
    subItems: [
      { icon: Boxes,         label: "Carton Detection",      body: "Detects all visible cartons on the pallet" },
      { icon: Tag,           label: "Label Detection",       body: "Identifies and locates labels on cartons" },
      { icon: Barcode,       label: "Barcode Recognition",   body: "Reads and decodes barcodes from carton labels" },
      { icon: Type,          label: "OCR & Data Extraction", body: "Extracts required information from labels" },
      { icon: AlertTriangle, label: "Exception Detection",   body: "Identifies missing, unreadable, or damaged items" },
    ],
  },
  { kind: "normal", step: 6, icon: Database,   color: "green", title: "Validation Against SAP Data",    desc: "Extracted information is validated against expected inbound and SAP master data." },
  { kind: "normal", step: 7, icon: UserCheck,  color: "green", title: "Operator Review & Approval",     desc: "Inspection results and exceptions are presented to the operator for review and approval." },
  {
    kind: "branch",
    approve: { kind: "normal", step: 8, icon: CloudUpload, color: "green", title: "Upload to SAP",               desc: "Validated inspection data is transmitted to SAP through REST APIs." },
    reject:  { kind: "normal", step: 8, icon: RefreshCw,   color: "navy",  title: "Re-Inspection / Take Action",  desc: "Pallet is re-inspected or corrective action is taken as per warehouse process." },
  },
  { kind: "normal", step: 9, icon: Archive, color: "navy", title: "Archive Images & Results", desc: "All images, extracted information, validation results, and operator actions are securely archived for future search, reporting, audits, and analytics." },
];

const COLOR_MAP = {
  blue:   { badge: "bg-blue-600  text-white",  card: "border-blue-100  bg-blue-50/70",  icon: "bg-blue-100  text-blue-600" },
  green:  { badge: "bg-green-600 text-white",  card: "border-green-100 bg-green-50/70", icon: "bg-green-100 text-green-700" },
  navy:   { badge: "bg-slate-700 text-white",  card: "border-slate-200 bg-slate-50/70", icon: "bg-slate-200 text-slate-700" },
  purple: { badge: "bg-purple-600 text-white", card: "border-purple-100 bg-purple-50",  icon: "bg-purple-100 text-purple-600" },
} as const;

const CAPABILITIES = [
  { capability: "Pallet presentation",    coverage: "Synchronised capture of accessible views during rotation." },
  { capability: "Information extraction", coverage: "Product IDs, manufacturing and expiry dates, and configured label fields." },
  { capability: "Enterprise validation",  coverage: "Checks against SAP master data and expected inbound information through REST APIs." },
];

const INSPECTION_IMAGES = [
  { src: "/images/Automated Pallet Inspection System.png", label: "Barcode & OCR" },
  { src: "/images/Automated Pallet Inspection System.png", label: "Label Verification" },
  { src: "/images/Automated Pallet Inspection System.png", label: "SAP Cross-check" },
];

// ── Sub-components ────────────────────────────────────────────────────────────
function SectionHeading({ children }: { children: React.ReactNode }) {
  return (
    <h2
      className="text-ice"
      style={{ fontFamily: "var(--font-manrope), sans-serif", fontWeight: 500, fontSize: "clamp(20px, 3.5vw, 36px)", letterSpacing: "-0.03em", lineHeight: 1.1 }}
    >
      {children}
    </h2>
  );
}

function Connector() {
  return (
    <div className="flex justify-center py-1">
      <ArrowDown className="h-5 w-5 text-gray-300" strokeWidth={1.5} />
    </div>
  );
}

function NormalCard({ s }: { s: NormalStep }) {
  const c = COLOR_MAP[s.color];
  const Icon = s.icon;
  return (
    <div className={`flex items-start gap-4 rounded-2xl border px-5 py-4 shadow-sm ${c.card}`}>
      <div className={`shrink-0 flex h-9 w-9 items-center justify-center rounded-lg text-[13px] font-bold ${c.badge}`}>
        {String(s.step).padStart(2, "0")}
      </div>
      <div className={`shrink-0 flex h-9 w-9 items-center justify-center rounded-xl ${c.icon}`}>
        <Icon className="h-4 w-4" strokeWidth={1.5} />
      </div>
      <div className="flex flex-col gap-0.5">
        <p className="font-semibold text-gray-900 leading-tight" style={{ fontSize: "clamp(13px, 1.5vw, 15px)", letterSpacing: "-0.01em" }}>
          {s.title}
        </p>
        <p className="text-gray-600 leading-snug" style={{ fontSize: "clamp(12px, 1.3vw, 13px)" }}>
          {s.desc}
        </p>
      </div>
    </div>
  );
}

// ── Main component ────────────────────────────────────────────────────────────
export default function InboundPalletSection1() {
  return (
    <section className="bg-white py-16 sm:py-20 lg:py-24">
      <Container>
        <div className="flex flex-col gap-16 sm:gap-20 lg:gap-24">

          {/* ── Challenge + Solution ─────────────────────────── */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16">
            {[
              {
                title: "The Challenge",
                body: "The manufacturer sought to improve receiving efficiency and accuracy while reducing repetitive manual checking. Operators needed to reconcile carton information with inbound records, manage unclear labels and maintain dependable inventory traceability across varying pallet presentations.",
              },
              {
                title: "The Solution",
                body: "Mialo AI proposed a controlled inspection station combining industrial cameras, lighting, a rotary table, PLC synchronisation and local AI processing. Visible carton labels are read through barcode recognition and OCR, checked against SAP data and presented for approval before records are updated.",
              },
            ].map(({ title, body }) => (
              <div key={title} className="flex flex-col gap-4">
                <SectionHeading>{title}</SectionHeading>
                <p className="text-gray-600 leading-relaxed" style={{ fontSize: "clamp(14px, 1.8vw, 18px)" }}>
                  {body}
                </p>
              </div>
            ))}
          </div>

          {/* ── Inspection Image Cards ───────────────────────── */}
          <div className="flex flex-col gap-6">
            <SectionHeading>Representative Inspection Images</SectionHeading>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
              {INSPECTION_IMAGES.map(({ src, label }) => (
                <div key={label} className="relative overflow-hidden rounded-2xl border border-gray-200 shadow-sm group" style={{ aspectRatio: "16/9" }}>
                  <Image src={src} alt={label} fill sizes="(max-width: 640px) 100vw, 33vw" className="object-cover transition-transform duration-500 group-hover:scale-105" />
                  <div className="absolute inset-0" style={{ background: "linear-gradient(to bottom, transparent 40%, rgba(8,9,11,0.75) 100%)" }} />
                  <div className="absolute bottom-3 left-3">
                    <span className="inline-flex items-center rounded-md px-2.5 py-1 text-[11px] font-bold tracking-wider"
                      style={{ background: "rgba(198,255,109,0.15)", border: "1px solid rgba(198,255,109,0.4)", color: "var(--color-pista)", backdropFilter: "blur(4px)" }}>
                      {label}
                    </span>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* ── Solution Architecture (flowchart) ───── */}
          <div className="flex flex-col gap-7">
            <SectionHeading>Solution Architecture</SectionHeading>

            <div className="mx-auto w-full flex flex-col gap-0">

              {/* Steps 1–4: horizontal row */}
              <div className="grid w-full items-stretch gap-3"
                style={{ gridTemplateColumns: "1fr auto 1fr auto 1fr auto 1fr" }}
              >
                {(FLOW.slice(0, 4) as NormalStep[]).map((step, i) => {
                  const c = COLOR_MAP[step.color];
                  const Icon = step.icon;
                  return (
                    <>
                      <div key={step.title} className={`flex flex-col gap-3 rounded-2xl border px-4 py-4 shadow-sm ${c.card}`}>
                        <div className="flex items-center gap-2">
                          <div className={`shrink-0 flex h-7 w-7 items-center justify-center rounded-lg text-[11px] font-bold ${c.badge}`}>
                            {String(step.step).padStart(2, "0")}
                          </div>
                          <div className={`shrink-0 flex h-7 w-7 items-center justify-center rounded-lg ${c.icon}`}>
                            <Icon className="h-3.5 w-3.5" strokeWidth={1.5} />
                          </div>
                        </div>
                        <div>
                          <p className="font-semibold text-gray-900 leading-tight" style={{ fontSize: "clamp(12px, 1.4vw, 14px)", letterSpacing: "-0.01em" }}>
                            {step.title}
                          </p>
                          <p className="text-gray-600 leading-snug mt-0.5" style={{ fontSize: "clamp(11px, 1.2vw, 12px)" }}>
                            {step.desc}
                          </p>
                        </div>
                      </div>
                      {i < 3 && (
                        <ArrowRight key={`h-arrow-${i}`} className="h-4 w-4 shrink-0 self-center text-gray-300" strokeWidth={1.5} />
                      )}
                    </>
                  );
                })}
              </div>

              {/* Connector down to step 5 */}
              <Connector />

              {/* Steps 5–9: vertical */}
              {(FLOW.slice(4) as FlowStep[]).map((step, idx) => {
                if (step.kind === "normal") {
                  return (
                    <div key={idx}>
                      {idx > 0 && <Connector />}
                      <NormalCard s={step} />
                    </div>
                  );
                }

                if (step.kind === "platform") {
                  return (
                    <div key={idx}>
                      {idx > 0 && <Connector />}
                      <div className="rounded-2xl border border-purple-200 bg-purple-50/60 shadow-sm overflow-hidden">
                        <div className="flex items-center gap-3 bg-purple-600 px-5 py-3">
                          <div className="shrink-0 flex h-8 w-8 items-center justify-center rounded-lg bg-white/20 text-[12px] font-bold text-white">
                            {String(step.step).padStart(2, "0")}
                          </div>
                          <span className="font-bold text-white" style={{ fontSize: "clamp(13px, 1.5vw, 15px)" }}>
                            {step.title}
                          </span>
                        </div>
                        <div className="grid grid-cols-2 sm:grid-cols-5 divide-x divide-purple-100 border-t border-purple-100">
                          {step.subItems.map(({ icon: Icon, label, body }) => (
                            <div key={label} className="flex flex-col items-center gap-2 px-3 py-4 text-center">
                              <div className="flex h-9 w-9 items-center justify-center rounded-xl bg-purple-100 text-purple-600">
                                <Icon className="h-4 w-4" strokeWidth={1.5} />
                              </div>
                              <p className="font-semibold text-gray-900 leading-tight" style={{ fontSize: "11px" }}>{label}</p>
                              <p className="text-gray-500 leading-snug" style={{ fontSize: "11px" }}>{body}</p>
                            </div>
                          ))}
                        </div>
                      </div>
                    </div>
                  );
                }

                if (step.kind === "branch") {
                  return (
                    <div key={idx}>
                      {idx > 0 && <Connector />}
                      <div className="grid grid-cols-2 gap-3 mb-1">
                        <span className="text-center text-[11px] font-bold tracking-wider text-green-600 uppercase">Approve</span>
                        <span className="text-center text-[11px] font-bold tracking-wider text-red-500 uppercase">Reject</span>
                      </div>
                      <div className="grid grid-cols-2 gap-3">
                        <NormalCard s={step.approve} />
                        <NormalCard s={step.reject} />
                      </div>
                    </div>
                  );
                }

                return null;
              })}
            </div>
          </div>

          {/* ── Capabilities ─────────────────────────────────── */}
          <div className="flex flex-col gap-7">
            <SectionHeading>Capabilities</SectionHeading>
            <div
              className="overflow-hidden rounded-2xl border border-white/70 shadow-xl shadow-blue-100/40"
              style={{ background: "linear-gradient(135deg, rgba(255,255,255,0.85) 0%, rgba(235,242,255,0.65) 100%)", backdropFilter: "blur(16px)", WebkitBackdropFilter: "blur(16px)" }}
            >
              <div className="grid grid-cols-[1fr_2fr] border-b border-white/60 px-6 py-3.5 sm:px-8" style={{ background: "rgba(35,88,205,0.07)" }}>
                <span className="font-semibold uppercase tracking-wider" style={{ fontSize: "11px", color: "var(--color-ice)" }}>Capability</span>
                <span className="font-semibold uppercase tracking-wider" style={{ fontSize: "11px", color: "var(--color-ice)" }}>Coverage</span>
              </div>
              {CAPABILITIES.map((row, i) => (
                <div
                  key={row.capability}
                  className={`grid grid-cols-[1fr_2fr] gap-4 px-6 py-4 sm:px-8 sm:py-5 ${i < CAPABILITIES.length - 1 ? "border-b border-white/50" : ""}`}
                  style={{ background: i % 2 === 0 ? "rgba(255,255,255,0.5)" : "rgba(235,242,255,0.3)" }}
                >
                  <span className="font-medium text-gray-800 leading-snug" style={{ fontSize: "clamp(13px, 1.5vw, 15px)" }}>{row.capability}</span>
                  <span className="text-gray-600 leading-relaxed" style={{ fontSize: "clamp(13px, 1.5vw, 15px)" }}>{row.coverage}</span>
                </div>
              ))}
            </div>
          </div>

        </div>
      </Container>
    </section>
  );
}
