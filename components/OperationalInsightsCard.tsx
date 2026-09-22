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
 *  "The Problem" flow diagram — Traditional Operations → Sources →
 *  Operational Moments → Mialo Intelligence → Impact.
 *
 *  Nodes (DOM) and connectors (SVG) live in ONE coordinate system
 *  (W × H). The whole plane is uniformly scaled to the container
 *  width, so every line meets its node at any screen size.
 * ------------------------------------------------------------------ */

const W = 1000;
const H = 420;
const MID = 222;

const TRAD_X = 80;
const TRAD_Y = [72, 132, 192, 252, 312, 372];
const TRADITIONAL = [Cctv, Film, HardDrive, LayoutGrid, User, Zap];

const SRC_X = 304;
const SRC_W = 158;
const SRC_Y = [92, 157, 222, 287, 352];
const SOURCES = [
  { label: "Camera", icon: Camera },
  { label: "Voice", icon: AudioLines },
  { label: "Documents", icon: FileText },
  { label: "IoT", icon: Router },
  { label: "ERP", icon: Database },
];

const MOMENTS = { x: 536, y: MID };
const BRAIN = { x: 766, y: MID };
const IMPACT = { x: 922, y: MID };

const SRC_RIGHT = SRC_X + SRC_W / 2;

/* converging splines: each source → the operational-moments node */
const SPLINES = SRC_Y.map(
  (y) =>
    `M ${SRC_RIGHT} ${y} C ${SRC_RIGHT + 66} ${y}, ${MOMENTS.x - 74} ${MID}, ${MOMENTS.x - 30} ${MID}`,
);

/* gentle sine wave: operational moments → mialo intelligence */
const SINE = `M ${MOMENTS.x + 30} ${MID} C ${MOMENTS.x + 74} ${MID - 42}, ${BRAIN.x - 78} ${MID + 42}, ${BRAIN.x - 44} ${MID}`;

function Node({
  x,
  y,
  children,
  className = "",
}: {
  x: number;
  y: number;
  children: ReactNode;
  className?: string;
}) {
  return (
    <div
      className="absolute"
      style={{ left: x, top: y, transform: "translate(-50%, -50%)" }}
    >
      <div
        className={`transition-transform duration-200 hover:scale-[1.05] ${className}`}
      >
        {children}
      </div>
    </div>
  );
}

function Label({ x, y, children }: { x: number; y: number; children: ReactNode }) {
  return (
    <span
      className="absolute text-center text-[13px] font-medium leading-tight text-slate-400"
      style={{ left: x, top: y, width: 132, transform: "translateX(-50%)" }}
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
    <div className="w-full py-6 font-sans">
      <div
        ref={hostRef}
        className="relative mx-auto w-full max-w-[1040px] overflow-hidden"
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
              <linearGradient id="oicPath" x1="0%" y1="0%" x2="100%" y2="0%">
                <stop offset="0%" stopColor="#60A5FA" stopOpacity="0" />
                <stop offset="20%" stopColor="#60A5FA" stopOpacity="0.5" />
                <stop offset="65%" stopColor="#93C5FD" stopOpacity="0.85" />
                <stop offset="100%" stopColor="#EFF6FF" stopOpacity="1" />
              </linearGradient>
              <marker
                id="oicArrow"
                markerWidth="9"
                markerHeight="7"
                refX="8"
                refY="3.5"
                orient="auto"
              >
                <polygon points="0 0, 9 3.5, 0 7" fill="#64748B" />
              </marker>
            </defs>

            {/* traditional → sources */}
            <path
              d={`M ${TRAD_X + 34} ${MID} L ${SRC_X - SRC_W / 2 - 14} ${MID}`}
              stroke="#475569"
              strokeWidth="1"
              strokeDasharray="4 3"
              markerEnd="url(#oicArrow)"
            />

            {/* sources → operational moments */}
            {SPLINES.map((d) => (
              <path
                key={d}
                d={d}
                stroke="url(#oicPath)"
                strokeWidth="1"
                className="opacity-70"
              />
            ))}
            {SPLINES.map((d, i) =>
              i === 2 ? null : (
                <circle
                  key={`dot-${d}`}
                  r="2.5"
                  fill="#fff"
                  className="drop-shadow-[0_0_8px_rgba(255,255,255,0.85)]"
                >
                  <animateMotion dur="2.6s" repeatCount="indefinite" path={d} />
                </circle>
              ),
            )}

            {/* operational moments → mialo intelligence */}
            <path d={SINE} stroke="url(#oicPath)" strokeWidth="1" />
            <circle
              r="2.5"
              fill="#fff"
              className="drop-shadow-[0_0_8px_rgba(255,255,255,0.85)]"
            >
              <animateMotion dur="3s" repeatCount="indefinite" path={SINE} />
            </circle>

            {/* mialo intelligence → impact */}
            <path
              d={`M ${BRAIN.x + 56} ${MID} L ${IMPACT.x - 62} ${MID}`}
              stroke="url(#oicPath)"
              strokeWidth="1"
              strokeDasharray="4 4"
              className="opacity-70"
            />
          </svg>

          {/* --- Traditional Operations --- */}
          <Label x={TRAD_X} y={6}>
            Traditional
            <br />
            Operations
          </Label>
          <div
            className="absolute rounded-xl border border-slate-700/40 opacity-60"
            style={{
              left: TRAD_X - 30,
              top: TRAD_Y[0] - 34,
              width: 60,
              height: TRAD_Y[5] - TRAD_Y[0] + 68,
            }}
          />
          {TRADITIONAL.map((IconCmp, i) => (
            <Node
              key={i}
              x={TRAD_X}
              y={TRAD_Y[i]}
              className="flex h-11 w-11 items-center justify-center rounded-full border border-slate-800 bg-slate-900/50 text-slate-400 shadow-lg shadow-black/40 backdrop-blur-sm"
            >
              <IconCmp size={18} />
            </Node>
          ))}

          {/* --- Source cards --- */}
          {SOURCES.map((s, i) => (
            <Node
              key={s.label}
              x={SRC_X}
              y={SRC_Y[i]}
              className="flex items-center gap-3 rounded-2xl border border-slate-800/70 bg-slate-900/30 px-4 py-3 text-ice shadow-lg shadow-black/40 backdrop-blur-sm hover:border-blue-500/40"
            >
              <div style={{ width: SRC_W - 32 }} className="flex items-center gap-3">
                <s.icon size={20} strokeWidth={1.25} className="shrink-0" />
                <span className="text-[13px] font-medium">{s.label}</span>
              </div>
            </Node>
          ))}

          {/* --- Operational Moments --- */}
          <Node
            x={MOMENTS.x}
            y={MOMENTS.y}
            className="flex h-14 w-14 items-center justify-center rounded-full border border-blue-900/60 bg-slate-900 shadow-lg shadow-blue-500/20 drop-shadow-[0_0_15px_rgba(96,165,250,0.45)]"
          >
            <Zap size={22} strokeWidth={2} className="fill-primary text-primary" />
          </Node>
          <Label x={MOMENTS.x} y={MOMENTS.y + 36}>
            Operational
            <br />
            Moments
          </Label>

          {/* --- Mialo Intelligence --- */}
          <div
            className="absolute"
            style={{
              left: BRAIN.x,
              top: BRAIN.y,
              width: 104,
              height: 104,
              transform: "translate(-50%, -50%)",
            }}
          >
            <span className="absolute inset-0 rounded-full border border-blue-500/25 motion-safe:animate-ping" />
            <span
              className="absolute inset-0 rounded-full border border-blue-500/20 motion-safe:animate-ping"
              style={{ animationDelay: "1.25s" }}
            />
            <div className="absolute inset-2 flex items-center justify-center rounded-full border border-blue-500/50 bg-slate-900 text-[34px] leading-none text-[#93C5FD] shadow-[0_0_40px_rgba(96,165,250,0.4)] transition-transform duration-200 hover:scale-[1.05]">
              <span className="-mt-1">✦</span>
            </div>
          </div>
          <Label x={BRAIN.x} y={BRAIN.y + 48}>
            Mialo
            <br />
            Intelligence
          </Label>

          {/* --- Impact --- */}
          <Node
            x={IMPACT.x}
            y={IMPACT.y}
            className="flex items-center gap-2 rounded-full border border-blue-900/60 bg-slate-900/50 px-5 py-2 text-primary shadow-lg shadow-blue-500/10 backdrop-blur-sm hover:border-blue-500/40"
          >
            <CheckCircle2 size={17} className="text-slate-300" />
            <span className="text-[13px] font-semibold">Impact</span>
          </Node>
        </div>
      </div>
    </div>
  );
}
