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
 *  "The Problem" flow diagram - VERTICAL layout
 *  Traditional Operations (top) → Sources → Operational Moments → 
 *  Mialo Intelligence → Impact (bottom)
 *
 *  Nodes (DOM) and connectors (SVG) live in ONE coordinate system
 *  (W × H). The whole plane is uniformly scaled to the container
 *  width, so every line meets its node at any screen size.
 * ------------------------------------------------------------------ */

// Responsive dimensions based on screen size
const W = 280;
const H_MOBILE = 260; // More compact for mobile
const H_TABLET = 300; // Medium height for tablet
const H_DESKTOP = 380; // Slightly reduced for desktop

const MID_X = 140;

// Sources - responsive positioning
const SRC_Y = 30; // Moved up slightly
const SRC_X = [55, 97.5, 140, 182.5, 225];
const SOURCES = [
  { label: "Camera", icon: Camera },
  { label: "Voice", icon: AudioLines },
  { label: "Documents", icon: FileText },
  { label: "IoT", icon: Router },
  { label: "ERP", icon: Database },
];

// Key nodes going down - better responsive positioning
const MOMENTS = { x: MID_X, y: 90 }; // Moved up
const BRAIN = { x: MID_X, y: 130 }; // Better spacing
const IMPACT = { x: MID_X, y: 180 }; // More space from brain

/* converging splines: each source → the operational-moments node */
const SPLINES = SRC_X.map(
  (x) =>
    `M ${x} ${SRC_Y + 10} C ${x} ${SRC_Y + 20}, ${MID_X} ${MOMENTS.y - 25}, ${MID_X} ${MOMENTS.y - 10}`,
);

/* gentle line: operational moments → mialo intelligence */
const SINE = `M ${MID_X} ${MOMENTS.y + 12} L ${MID_X} ${BRAIN.y + 52}`;

/* static line: mialo intelligence → impact (no animation) */
// const BRAIN_TO_IMPACT = `M ${MID_X} ${BRAIN.y + 22} L ${MID_X} ${IMPACT.y - 14}`;


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
  const [screenSize, setScreenSize] = useState('desktop');

  useLayoutEffect(() => {
    const el = hostRef.current;
    if (!el || typeof ResizeObserver === "undefined") return undefined;
    
    const fit = () => {
      const r = el.getBoundingClientRect();
      if (r.width) {
        setScale(r.width / W);
        // Determine screen size for responsive height based on container width
        const containerWidth = el.parentElement?.getBoundingClientRect().width || r.width;
        if (containerWidth < 640) {
          setScreenSize('mobile');
        } else if (containerWidth < 1024) {
          setScreenSize('tablet');
        } else {
          setScreenSize('desktop');
        }
      }
    };
    
    fit();
    const ro = new ResizeObserver(fit);
    ro.observe(el);
    // Also observe parent for better responsiveness
    if (el.parentElement) {
      ro.observe(el.parentElement);
    }
    return () => ro.disconnect();
  }, []);

  // Get responsive height
  const getHeight = () => {
    switch (screenSize) {
      case 'mobile': return H_MOBILE;
      case 'tablet': return H_TABLET;
      default: return H_DESKTOP;
    }
  };

  const currentHeight = getHeight();

  return (
    <div className="w-full text-[4px] h-full"
    style={{
      fontFamily: "var(--font-manrope), sans-serif",
      fontWeight: 400,
    }}>
      <div
        ref={hostRef}
        className="relative mx-auto w-full h-full overflow-hidden"
        style={{ aspectRatio: `${W} / ${currentHeight}` }}
      >
        <div
          className="absolute left-0 top-0 origin-top-left"
          style={{ width: W, height: currentHeight, transform: `scale(${scale})` }}
        >
          {/* --- connectors --- */}
          <svg
            className="absolute inset-0 overflow-visible"
            width={W}
            height={currentHeight}
            fill="none"
          >
            <defs>
              <linearGradient id="oicPathVertical" x1="0%" y1="0%" x2="0%" y2="100%">
                <stop offset="0%" stopColor="#60A5FA" stopOpacity="0" />
                <stop offset="20%" stopColor="#60A5FA" stopOpacity="0.5" />
                <stop offset="65%" stopColor="#93C5FD" stopOpacity="0.85" />
                <stop offset="100%" stopColor="#EFF6FF" stopOpacity="1" />
              </linearGradient>
            </defs>

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

            {/* mialo intelligence → impact (static line, no animation) */}
            {/* <path
              d={BRAIN_TO_IMPACT}
              stroke="#93C5FD"
              strokeWidth="0.5"
              className="opacity-70"
            /> */}
            {/* Static dot at the end of the line */}
            {/* <circle
              cx={MID_X}
              cy={IMPACT.y - 14}
              r="2"
              fill="#fff"
              className="drop-shadow-[0_0_8px_rgba(255,255,255,0.85)]"
            /> */}
          </svg>

          {/* --- Traditional Operations --- */}
          {/* <Label x={MID_X} y={8}>
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
          ))} */}

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
              style={{ 
                width: screenSize === 'mobile' ? 20 : 24, 
                height: screenSize === 'mobile' ? 20 : 24 
              }}
            >
              <div className="flex items-center justify-center h-2.5 w-2.5">
                <s.icon 
                  size={screenSize === 'mobile' ? 6 : 7} 
                  strokeWidth={1.25} 
                  className="shrink-0" 
                />
              </div>
              <span className={`font-medium whitespace-nowrap ${
                screenSize === 'mobile' ? 'text-[3.5px]' : 'text-[4px]'
              }`}>
                {s.label}
              </span>
            </Node>
          ))}

          {/* --- Operational Moments --- */}
          <Node
            x={MOMENTS.x}
            y={MOMENTS.y}
            className={`flex items-center justify-center rounded-full border border-blue-900/60 bg-slate-900 shadow-lg shadow-blue-500/20 drop-shadow-[0_0_15px_rgba(96,165,250,0.45)] ${
              screenSize === 'mobile' ? 'h-5 w-14 text-[4px]' : 'h-6 w-18 text-[5px]'
            }`}
          >
            <Zap 
              size={screenSize === 'mobile' ? 6 : 8} 
              strokeWidth={1} 
              className="fill-none text-pista mr-1" 
            />
            {screenSize === 'mobile' ? 'Moments' : 'Operational Moments'}
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
              width: screenSize === 'mobile' ? 28 : screenSize === 'tablet' ? 36 : 44,
              height: screenSize === 'mobile' ? 28 : screenSize === 'tablet' ? 36 : 44,
              transform: "translate(-50%, -50%)",
            }}
          >
            <span className="absolute inset-0 rounded-full border border-pista/25 motion-safe:animate-ping" />
            <span
              className="absolute inset-0 rounded-full border border-pista/20 motion-safe:animate-ping"
              style={{ animationDelay: "1.25s" }}
            />
            <div className="absolute inset-1.5 flex items-center justify-center rounded-full border border-pista/50 bg-slate-900 leading-none text-pista shadow-[0_0_40px_rgba(52,211,153,0.4)] transition-transform duration-200 hover:scale-[1.05]"
              style={{
                fontSize: screenSize === 'mobile' ? '10px' : '14px'
              }}
            >
              <span>✦</span>
            </div>
          </div>
          <Label 
            x={BRAIN.x} 
            y={BRAIN.y + (screenSize === 'mobile' ? 14 : screenSize === 'tablet' ? 18 : 22)} 
            className="text-white"
          >
            Mialo
            <br />
            Intelligence
          </Label>

          {/* --- Impact --- */}
          <Node
            x={IMPACT.x}
            y={IMPACT.y}
            className={`flex items-center gap-1 rounded-full border border-blue-900/60 bg-slate-900/50 text-primary shadow-lg shadow-blue-500/10 backdrop-blur-sm hover:border-blue-500/40 ${
              screenSize === 'mobile' ? 'px-1 py-0.5' : 'px-1.5 py-0.5'
            }`}
          >
            <CheckCircle2 
              size={screenSize === 'mobile' ? 6 : 8} 
              strokeWidth={1} 
              className="text-pista" 
            />
            <span className={`font-medium ${
              screenSize === 'mobile' ? 'text-[5px]' : 'text-[6px]'
            }`}>
              {screenSize === 'mobile' ? 'Results' : 'Real-time Results'}
            </span>
          </Node>
          {/* <Label x={IMPACT.x} y={IMPACT.y + 16}>
            Real-time Results
          </Label> */}
        </div>
      </div>
    </div>
  );
}
