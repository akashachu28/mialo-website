"use client";

import { useLayoutEffect, useRef, useState } from "react";
import type { ReactNode } from "react";
import {
  Cctv,
  Film,
  HardDrive,
  LayoutGrid,
  User,
  Zap,
  Camera,
  AudioLines,
  FileText,
  Database,
  Router,
  CheckCircle2,
} from "lucide-react";

/* ------------------------------------------------------------------ *
 *  "The Problem" flow diagram — VERTICAL layout
 *  Traditional Operations (top) → Sources → Operational Moments → 
 *  Mialo Intelligence → Impact (bottom)
 *
 *  Nodes (DOM) and connectors (SVG) live in ONE coordinate system
 *  (W × H). The whole plane is uniformly scaled to the container
 *  width, so every line meets its node at any screen size.
 * ------------------------------------------------------------------ */

const W = 280;
const H = 400;
const MID_X = 140;

// Traditional Operations - at the top
const TRAD_Y = 30;
const TRAD_X = [55, 97.5, 140, 182.5, 225];
const TRADITIONAL = [Cctv, Film, HardDrive, LayoutGrid, User];

// Sources - below traditional
const SRC_Y = 70;
const SRC_X = [55, 97.5, 140, 182.5, 225];
const SRC_W = 60;
const SOURCES = [
  { label: "Camera", icon: Camera },
  { label: "Voice", icon: AudioLines },
  { label: "Documents", icon: FileText },
  { label: "IoT", icon: Router },
  { label: "ERP", icon: Database },
];

// Key nodes going down
const MOMENTS = { x: MID_X, y: 120 };
const BRAIN = { x: MID_X, y: 170 };
const IMPACT = { x: MID_X, y: 230 };

/* converging splines: each source → the operational-moments node */
const SPLINES = SRC_X.map(
  (x) =>
    `M ${x} ${SRC_Y + 10} C ${x} ${SRC_Y + 25}, ${MID_X} ${MOMENTS.y - 28}, ${MID_X} ${MOMENTS.y - 10}`,
);

/* gentle sine wave: operational moments → mialo intelligence */
const SINE = `M ${MID_X} ${MOMENTS.y + 12} L ${MID_X} ${BRAIN.y + 56}`;

/* line from mialo intelligence to impact */
// const BRAIN_TO_IMPACT = `M ${MID_X} ${BRAIN.y + 2} L ${MID_X} ${IMPACT.y - 14}`;


function Node({
  x,
  y,
  children,
  className = "",
  style = {},
}: {
  x: number;
  y: number;
  children: ReactNode;
  className?: string;
  style?: React.CSSProperties;
}) {
  return (
    <div
      className="absolute"
      style={{ left: x, top: y, transform: "translate(-50%, -50%)", ...style }}
    >
      <div
        className={`transition-transform duration-200 hover:scale-[1.05] ${className}`}
      >
        {children}
      </div>
    </div>
  );
}

function Label({ x, y, children, className = "" }: { x: number; y: number; children: ReactNode; className?: string }) {
  return (
    <span
      className={`absolute text-center text-[6px] font-medium leading-tight text-pista/80 ${className}`}
      style={{ left: x, top: y, width: 105, transform: "translateX(-50%)",
        fontFamily: "var(--font-manrope), sans-serif",
        fontWeight: 400,
       }}
    >
      {children}
    </span>
  );
}

export default function OperationalIntelligenceCard() {
  const hostRef = useRef<HTMLDivElement>(null);
  const [scale, setScale] = useState(1);

  useLayoutEffect(() => {
    const el = hostRef.current;
    if (!el || typeof ResizeObserver === "undefined") return undefined;
    const fit = () => {
      const r = el.getBoundingClientRect();
      if (r.width) setScale(r.width / W);
    };
    fit();
    const ro = new ResizeObserver(fit);
    ro.observe(el);
    return () => ro.disconnect();
  }, []);

  return (
    <div className="w-full text-[4px]"
    style={{
      fontFamily: "var(--font-manrope), sans-serif",
      fontWeight: 400,
    }}>
      <div
        ref={hostRef}
        className="relative mx-auto w-full overflow-hidden"
        style={{ aspectRatio: `${W} / ${H}` }}
      >
        <div
          className="absolute left-0 top-0 origin-top-left"
          style={{ width: W, height: H, transform: `scale(${scale})` }}
        >
          {/* --- connectors --- */}
          <svg
            className="absolute inset-0 overflow-visible"
            width={W}
            height={H}
            fill="none"
          >
            <defs>
              <linearGradient id="oicPathVertical" x1="0%" y1="0%" x2="0%" y2="100%">
                <stop offset="0%" stopColor="#60A5FA" stopOpacity="0" />
                <stop offset="20%" stopColor="#60A5FA" stopOpacity="0.5" />
                <stop offset="65%" stopColor="#93C5FD" stopOpacity="0.85" />
                <stop offset="100%" stopColor="#EFF6FF" stopOpacity="1" />
              </linearGradient>
              <marker
                id="oicArrowVertical"
                markerWidth="9"
                markerHeight="7"
                refX="8"
                refY="3.5"
                orient="auto"
              >
                <polygon points="0 0, 9 3.5, 0 7" fill="#64748B" />
              </marker>
            </defs>

            {/* traditional → sources (vertical arrow) */}
            <path
              d={`M ${MID_X} ${TRAD_Y + 8} L ${MID_X} ${SRC_Y - 22}`}
              stroke="#475569"
              strokeWidth="1"
              // strokeDasharray="4 3"
              markerEnd="url(#oicArrowVertical)"
            />

            {/* sources → operational moments */}
            {SPLINES.map((d) => (
              <path
                key={d}
                d={d}
                stroke="url(#oicPathVertical)"
                strokeWidth="0.5"
                className="opacity-70"
              />
            ))}
            {SPLINES.map((d, i) =>
              i === 2 ? null : (
                <circle
                  key={`dot-${d}`}
                  r="2"
                  fill="#fff"
                  className="drop-shadow-[0_0_8px_rgba(255,255,255,0.85)]"
                >
                  <animateMotion dur="2.6s" repeatCount="indefinite" path={d} />
                </circle>
              ),
            )}

            {/* operational moments → mialo intelligence */}
            <path d={SINE} stroke="#93C5FD" strokeWidth="0.5" className="opacity-70" />
            <circle
              r="2"
              fill="#fff"
              className="drop-shadow-[0_0_8px_rgba(255,255,255,0.85)]"
            >
              <animateMotion dur="2.5s" repeatCount="indefinite" path={SINE} />
            </circle>

            {/* mialo intelligence → impact */}
            {/* <path
              d={BRAIN_TO_IMPACT}
              stroke="#93C5FD"
              strokeWidth="0.5"
              className="opacity-70"
            /> */}
            <circle
              r="2"
              fill="#fff"
              className="drop-shadow-[0_0_8px_rgba(255,255,255,0.85)]"
            >
              {/* <animateMotion dur="2s" repeatCount="indefinite" path={BRAIN_TO_IMPACT} /> */}
            </circle>
          </svg>

          {/* --- Traditional Operations --- */}
          <Label x={MID_X} y={8}>
            Traditional Operations
          </Label>
          <div
            className="absolute rounded-lg border  border-pista/50 opacity-60"
            style={{
              left: TRAD_X[0] - 12,
              top: TRAD_Y - 10,
              width: TRAD_X[4] - TRAD_X[0] + 24,
              height: 20,
            }}
          />
          {TRADITIONAL.map((IconCmp, i) => (
            <Node
              key={i}
              x={TRAD_X[i]}
              y={TRAD_Y}
              className="flex h-4 w-4 items-center justify-center rounded-full border border-slate-800 bg-slate-900/50 text-slate-400 shadow-lg shadow-black/40 backdrop-blur-sm"
            >
              <IconCmp size={7} />
            </Node>
          ))}

          {/* --- Source cards --- */}
          <Label x={MID_X} y={SRC_Y - 22}>
            Data Sources
          </Label>
          {SOURCES.map((s, i) => (
            <Node
              key={s.label}
              x={SRC_X[i]}
              y={SRC_Y}
              className="flex flex-col items-center justify-center gap-0.5 rounded border border-slate-800/70 bg-slate-900/30 text-ice shadow-lg shadow-black/40 backdrop-blur-sm hover:border-blue-500/40"
              style={{ width: 24, height: 24 }}
            >
              <div className="flex items-center justify-center h-2.5 w-2.5">
                <s.icon size={7} strokeWidth={1.25} className="shrink-0" />
              </div>
              <span className="text-[4px] font-medium whitespace-nowrap">{s.label}</span>
            </Node>
          ))}

          {/* --- Operational Moments --- */}
          <Node
            x={MOMENTS.x}
            y={MOMENTS.y}
            className="flex h-6 w-16 text-[5px] items-center justify-center rounded-full border border-blue-900/60 bg-slate-900 shadow-lg shadow-blue-500/20 drop-shadow-[0_0_15px_rgba(96,165,250,0.45)]"
          >
            <Zap size={8} strokeWidth={1} className="fill-none text-pista" />
            Operational Moments
          </Node>
          {/* <Label x={MOMENTS.x} y={MOMENTS.y + 24}>
            Operational
            <br />
            Moments
          </Label> */}

          {/* --- Mialo Intelligence --- */}
          <div
            className="absolute"
            style={{
              left: BRAIN.x,
              top: BRAIN.y,
              width: 44,
              height: 44,
              transform: "translate(-50%, -50%)",
            }}
          >
            <span className="absolute inset-0 rounded-full border border-pista/25 motion-safe:animate-ping" />
            <span
              className="absolute inset-0 rounded-full border border-pista/20 motion-safe:animate-ping"
              style={{ animationDelay: "1.25s" }}
            />
            <div className="absolute inset-1.5 flex items-center justify-center rounded-full border border-pista/50 bg-slate-900 text-[14px] leading-none text-pista shadow-[0_0_40px_rgba(52,211,153,0.4)] transition-transform duration-200 hover:scale-[1.05]">
              <span className="">✦</span>
            </div>
          </div>
          <Label x={BRAIN.x} y={BRAIN.y + 20} className="text-white">
            Mialo
            <br />
            Intelligence
          </Label>

          {/* --- Impact --- */}
          <Node
            x={IMPACT.x}
            y={IMPACT.y}
            className="flex items-center gap-1 rounded-full border border-blue-900/60 bg-slate-900/50 px-1.5 py-0.5 text-primary shadow-lg shadow-blue-500/10 backdrop-blur-sm hover:border-blue-500/40"
          >
            <CheckCircle2 size={8} className="text-pista" />
            <span className="text-[6px] font-medium">Real-time Results</span>
          </Node>
          {/* <Label x={IMPACT.x} y={IMPACT.y + 16}>
            Real-time Results
          </Label> */}
        </div>
      </div>
    </div>
  );
}
