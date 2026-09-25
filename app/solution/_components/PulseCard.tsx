"use client";
import { useEffect, useState } from "react";
import type { ComponentType } from "react";
import { Database, Brain, TrendingUp, Target } from "lucide-react";

const INTELLIGENCE_STEPS = [
  { icon: Database, label: "Data Ingestion" },
  { icon: Brain, label: "AI Processing" },
  { icon: TrendingUp, label: "Actionable Insights" },
  { icon: Target, label: "Business Impact" },
];

const STEP_X = ["16.5%", "38.5%", "61.5%", "83.5%"];

// Intelligence waves — now builds toward a saturated blue instead of fading to white
function IntelligenceWaves() {
  const strands = [
    { d: "M40,29 C90,23 120,35 170,28 C230,19 262,34 312,26 C362,17 392,32 432,25 C446,23 452,24 460,23", width: 1.2, opacity: 0.5, blur: 0 },
    { d: "M40,32 C100,19 152,42 214,27 C276,13 316,40 366,24 C404,15 428,29 456,21", width: 1.5, opacity: 0.35, blur: 0.5 },
    { d: "M40,34 C112,14 164,45 236,25 C304,8 346,42 402,22 C430,13 444,26 458,18", width: 2, opacity: 0.22, blur: 1.5 },
    { d: "M40,30 C100,19 152,40 214,27 C276,13 316,38 366,24 C404,15 428,29 456,21", width: 1.5, opacity: 0.35, blur: 0.5 },
  ];

  return (
    <svg
      viewBox="0 0 500 50"
      preserveAspectRatio="none"
      style={{ position: "absolute", inset: 0, width: "100%", height: "100%", overflow: "visible", pointerEvents: "none" }}
    >
      <defs>
        <linearGradient id="waveGradientLight" x1="0%" y1="0%" x2="100%" y2="0%">
          <stop offset="0%" stopColor="#93C5FD" stopOpacity="0" />
          <stop offset="20%" stopColor="#60A5FA" stopOpacity="0.55" />
          <stop offset="65%" stopColor="#3B82F6" stopOpacity="0.8" />
          <stop offset="100%" stopColor="#1D4ED8" stopOpacity="0.95" />
        </linearGradient>
      </defs>
      {strands.map((s, i) => (
        <path
          key={i}
          d={s.d}
          fill="none"
          stroke="url(#waveGradientLight)"
          strokeWidth={s.width}
          strokeLinecap="round"
          opacity={s.opacity}
          style={s.blur ? { filter: `blur(${s.blur}px)` } : undefined}
        />
      ))}
      <ellipse cx="462" cy="22" rx="34" ry="9" fill="url(#waveGradientLight)" opacity="0.25" style={{ filter: "blur(6px)" }} />
    </svg>
  );
}

// Energy pulse — particle core is now a deep blue with a white highlight, not white-on-white
function EnergyPulse({ visible }: { visible: boolean }) {
  if (!visible) return null;

  const wavePath = "M52.5,32 C77.5,25 127.5,25 152.5,32 C177.5,39 227.5,39 252.5,32 C277.5,25 327.5,25 352.5,32 C374.5,38 407.5,35 432.5,33 C442.5,32 450.5,32 447.5,32";

  return (
    <svg
      viewBox="0 0 500 50"
      preserveAspectRatio="none"
      style={{
        position: "absolute",
        inset: 0,
        width: "100%",
        height: "100%",
        overflow: "visible",
        pointerEvents: "none",
        zIndex: 7,
        background: "radial-gradient(circle at center, rgba(37, 99, 235, 0.12) 0%, transparent 70%)", 
      }}
    >
      <defs>
        <linearGradient id="trailGradientLight" x1="0%" y1="0%" x2="100%" y2="0%">
          <stop offset="0%" stopColor="rgba(37,99,235,0.7)" />
          <stop offset="100%" stopColor="rgba(59,130,246,0.55)" />
        </linearGradient>

        <radialGradient id="glowGradientLight">
          <stop offset="0%" stopColor="rgba(59,130,246,0.4)" />
          <stop offset="45%" stopColor="rgba(96,165,250,0.18)" />
          <stop offset="72%" stopColor="transparent" />
        </radialGradient>

        <radialGradient id="particleGradientLight" cx="50%" cy="50%">
          <stop offset="0%" stopColor="#FFFFFF" />
          <stop offset="40%" stopColor="#60A5FA" />
          <stop offset="100%" stopColor="#2563EB" />
        </radialGradient>

        <linearGradient id="streakGradientLight" x1="0%" y1="0%" x2="100%" y2="0%">
          <stop offset="0%" stopColor="transparent" />
          <stop offset="30%" stopColor="rgba(96,165,250,0.3)" />
          <stop offset="75%" stopColor="rgba(59,130,246,0.7)" />
          <stop offset="100%" stopColor="rgba(29,78,216,0.95)" />
        </linearGradient>
      </defs>

      <path
        d={wavePath}
        fill="none"
        stroke="url(#trailGradientLight)"
        strokeWidth="1.5"
        strokeLinecap="round"
        pathLength="1"
        style={{
          filter: "drop-shadow(0 0 2px rgba(37,99,235,0.35))",
          opacity: 0.85,
          strokeDasharray: "1",
        }}
      >
        <animate attributeName="stroke-dashoffset" from="1" to="0" dur="4s" repeatCount="indefinite" />
      </path>

      <g>
        <circle r="27" fill="url(#glowGradientLight)" style={{ filter: "blur(2px)" }}>
          <animateMotion dur="4s" path={wavePath} repeatCount="indefinite" />
        </circle>
      </g>

      <g>
        <circle r="17" fill="url(#glowGradientLight)" style={{ filter: "blur(2px)" }}>
          <animateMotion dur="4s" path={wavePath} repeatCount="indefinite" />
        </circle>
      </g>

      <g>
        <ellipse rx="7" ry="1.25" fill="url(#streakGradientLight)">
          <animateMotion dur="4s" path={wavePath} repeatCount="indefinite" />
        </ellipse>
      </g>

      <g>
        <circle
          r="4.5"
          fill="url(#particleGradientLight)"
          style={{ filter: "drop-shadow(0 0 10px rgba(37,99,235,0.45)) drop-shadow(0 0 3px rgba(37,99,235,0.6))" }}
        >
          <animateMotion dur="4s" path={wavePath} repeatCount="indefinite" />
        </circle>
      </g>
    </svg>
  );
}

// Pill node component
function StepNode({ icon: Icon, label, active, xPct }: { icon: ComponentType<{ size?: number }>; label: string; active: boolean; xPct: string }) {
  return (
    <div
      style={{
        position: "absolute",
        top: "32%",
        left: xPct,
        transform: "translate(-50%, -50%)",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        gap: 5,
        whiteSpace: "nowrap",
      }}
    >
      <span style={{ display: "flex", color: active ? "#2563EB" : "rgba(15,23,42,0.18)", transition: "color 0.5s ease" }}>
        <Icon size={20} />
      </span>
      <span
        style={{
          fontSize: 10,
          fontWeight: 500,
          letterSpacing: "0.035em",
          color: active ? "rgba(15,23,42,0.82)" : "rgba(15,23,42,0.18)",
          transition: "color 0.5s ease",
          fontFamily: "'Inter', sans-serif",
        }}
      >
        {label}
      </span>
    </div>
  );
}

export default function PulseCard() {
  const [activeSteps, setActiveSteps] = useState([false, false, false, false]);

  useEffect(() => {
    const timers: ReturnType<typeof setTimeout>[] = [];
    const interval = 4000; // 4 second cycle
    const stepDelay = interval / 4; // 1 second per step

    const loop = () => {
      timers.push(setTimeout(() => setActiveSteps([true, false, false, false]), 0));
      timers.push(setTimeout(() => setActiveSteps([true, true, false, false]), stepDelay));
      timers.push(setTimeout(() => setActiveSteps([true, true, true, false]), stepDelay * 2));
      timers.push(setTimeout(() => setActiveSteps([true, true, true, true]), stepDelay * 3));
      timers.push(setTimeout(loop, interval));
    };

    loop();

    return () => timers.forEach(clearTimeout);
  }, []);

  return (
    <div className="flex-1" style={{ minWidth: 500 }}>
      {/* Intelligence flow container */}
      <div style={{ position: "relative", height: 100 }}>
        <div
          style={{
            position: "absolute",
            inset: 0,
            borderRadius: 999,
            border: "1px solid rgba(15,23,42,0.08)",
            boxShadow:
              "0 2px 16px rgba(15,23,42,0.06), inset 0 1px 0 rgba(255,255,255,0.9)",
          }}
        >
          <IntelligenceWaves />
          {INTELLIGENCE_STEPS.map((step, idx) => (
            <StepNode key={idx} icon={step.icon} label={step.label} active={activeSteps[idx]} xPct={STEP_X[idx]} />
          ))}
        </div>
        <EnergyPulse visible={true} />
      </div>
    </div>
  );
}