"use client";

import { useEffect, useState } from "react";
import { Camera, AudioLines, FileText, Router, Database, Sparkles, Target, TrendingUp, Lightbulb, Bell, Zap, Send, AlertTriangle, FileCheck } from "lucide-react";

const SOURCE_ICONS = [
  { icon: Camera, label: "Camera" },
  { icon: AudioLines, label: "Voice" },
  { icon: FileText, label: "Document" },
  { icon: Router, label: "IoT" },
  { icon: Database, label: "ERP" },
];

const DECIDE_CAPABILITIES = [
  { icon: Target, label: "Predict" },
  { icon: TrendingUp, label: "Prioritize" },
  { icon: Lightbulb, label: "Recommend" },
  { icon: Bell, label: "Alert" }
];

const ACT_OUTPUTS = [
  { icon: Zap, label: "Automate" },
  { icon: Send, label: "Notify" },
  { icon: AlertTriangle, label: "Escalate" },
  { icon: FileCheck, label: "Log" }
];

function IntelligenceWaves() {
  const strands = [
    { d: "M40,29 C90,23 120,35 170,28 C230,19 262,34 312,26 C362,17 392,32 432,25 C446,23 452,24 460,23", width: 1.1, opacity: 0.55, blur: 0 },
    { d: "M40,32 C100,19 152,42 214,27 C276,13 316,40 366,24 C404,15 428,29 456,21", width: 1.4, opacity: 0.32, blur: 1 },
    { d: "M40,34 C112,14 164,45 236,25 C304,8 346,42 402,22 C430,13 444,26 458,18", width: 2, opacity: 0.18, blur: 2.5 },
    { d: "M40,30 C100,19 152,40 214,27 C276,13 316,38 366,24 C404,15 428,29 456,21", width: 1.4, opacity: 0.32, blur: 1 },
  ];

  return (
    <svg
      viewBox="0 0 500 50"
      preserveAspectRatio="none"
      style={{ position: "absolute", inset: 0, width: "100%", height: "100%", overflow: "visible", pointerEvents: "none" }}
    >
      <defs>
        <linearGradient id="waveGradientOps" x1="0%" y1="0%" x2="100%" y2="0%">
          <stop offset="0%" stopColor="#60A5FA" stopOpacity="0" />
          <stop offset="20%" stopColor="#60A5FA" stopOpacity="0.5" />
          <stop offset="65%" stopColor="#93C5FD" stopOpacity="0.85" />
          <stop offset="100%" stopColor="#EFF6FF" stopOpacity="1" />
        </linearGradient>
      </defs>
      {strands.map((s, i) => (
        <path
          key={i}
          d={s.d}
          fill="none"
          stroke="url(#waveGradientOps)"
          strokeWidth={s.width}
          strokeLinecap="round"
          opacity={s.opacity}
          style={s.blur ? { filter: `blur(${s.blur}px)` } : undefined}
        />
      ))}
      <ellipse cx="462" cy="22" rx="34" ry="9" fill="url(#waveGradientOps)" opacity="0.35" style={{ filter: "blur(6px)" }} />
    </svg>
  );
}

function EnergyPulse() {
  const wavePath = "M52.5,32 C77.5,25 127.5,25 152.5,32 C177.5,39 227.5,39 252.5,32 C277.5,25 327.5,25 352.5,32 C377.5,39 407.5,39 432.5,32 C450.5,25 460.5,28 470.5,32";

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
        zIndex: 7
      }}
    >
      <defs>
        <linearGradient id="trailGradientOps" x1="0%" y1="0%" x2="100%" y2="0%">
          <stop offset="0%" stopColor="rgba(96,165,250,0.9)" />
          <stop offset="100%" stopColor="rgba(147,197,253,0.7)" />
        </linearGradient>
        
        <radialGradient id="glowGradientOps">
          <stop offset="0%" stopColor="rgba(147,197,253,0.55)" />
          <stop offset="45%" stopColor="rgba(96,165,250,0.22)" />
          <stop offset="72%" stopColor="transparent" />
        </radialGradient>
        
        <radialGradient id="particleGradientOps" cx="50%" cy="50%">
          <stop offset="10%" stopColor="#FFFFFF" />
          <stop offset="45%" stopColor="#93C5FD" />
        </radialGradient>
        
        <linearGradient id="streakGradientOps" x1="0%" y1="0%" x2="100%" y2="0%">
          <stop offset="0%" stopColor="transparent" />
          <stop offset="30%" stopColor="rgba(147,197,253,0.25)" />
          <stop offset="75%" stopColor="rgba(191,219,254,0.7)" />
          <stop offset="100%" stopColor="rgba(255,255,255,0.95)" />
        </linearGradient>
      </defs>
      
      <path
        d={wavePath}
        fill="none"
        stroke="url(#trailGradientOps)"
        strokeWidth="1.5"
        strokeLinecap="round"
        pathLength="1"
        style={{
          filter: "blur(1px) drop-shadow(0 0 3px rgba(96,165,250,0.6))",
          opacity: 0.8,
          strokeDasharray: "1",
        }}
      >
        <animate
          attributeName="stroke-dashoffset"
          from="1"
          to="0"
          dur="4s"
          repeatCount="indefinite"
        />
      </path>
      
      <g>
        <circle r="27" fill="url(#glowGradientOps)" style={{ filter: "blur(2px)" }}>
          <animateMotion dur="4s" path={wavePath} repeatCount="indefinite" />
        </circle>
      </g>
      
      <g>
        <circle r="17" fill="url(#glowGradientOps)" style={{ filter: "blur(2px)" }}>
          <animateMotion dur="4s" path={wavePath} repeatCount="indefinite" />
        </circle>
      </g>
      
      <g>
        <ellipse rx="7" ry="1.25" fill="url(#streakGradientOps)">
          <animateMotion dur="4s" path={wavePath} repeatCount="indefinite" />
        </ellipse>
      </g>
      
      <g>
        <circle
          r="4.5"
          fill="url(#particleGradientOps)"
          style={{ filter: "drop-shadow(0 0 16px rgba(96,165,250,0.55)) drop-shadow(0 0 5px rgba(219,234,254,0.8))" }}
        >
          <animateMotion dur="4s" path={wavePath} repeatCount="indefinite" />
        </circle>
      </g>
    </svg>
  );
}

function StageNode({ 
  label, 
  active, 
  xPct, 
  children 
}: { 
  label: string; 
  active: boolean; 
  xPct: string; 
  children?: React.ReactNode;
}) {
  return (
    <div
      style={{
        position: "absolute",
        top: "50%",
        left: xPct,
        transform: "translate(-50%, -50%)",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        gap: 12,
      }}
    >
      {children}
      <span
        style={{
          fontSize: 13,
          fontWeight: 600,
          letterSpacing: "0.02em",
          color: active ? "#93C5FD" : "rgba(255,255,255,0.3)",
          transition: "color 0.15s ease",
          fontFamily: "'Inter', sans-serif",
        }}
      >
        {label}
      </span>
    </div>
  );
}

export default function OperationalIntelligenceCard() {
  const [activeStage, setActiveStage] = useState(0);

  useEffect(() => {
    const totalDuration = 4000;
    const earlyOffset = 300; // Activate 0.3s earlier

    const updateStages = () => {
      const elapsed = (Date.now() + earlyOffset) % totalDuration;
      
      if (elapsed < 1000) {
        setActiveStage(0);
      } else if (elapsed < 2000) {
        setActiveStage(1);
      } else if (elapsed < 3000) {
        setActiveStage(2);
      } else {
        setActiveStage(3);
      }
    };

    updateStages();
    const interval = setInterval(updateStages, 16);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="w-full max-w-6xl mx-auto">
      <div style={{ position: "relative", height: 200, marginBottom: 48 }}>
        <div
          style={{
            position: "absolute",
            inset: 0,
            borderRadius: 999,
            background: "radial-gradient(ellipse 90% 140% at 50% 50%, rgba(96,165,250,0.05) 0%, rgba(96,165,250,0.015) 45%, transparent 75%)",
            border: "0.5px solid rgba(255,255,255,0.1)",
            backdropFilter: "blur(28px)",
            WebkitBackdropFilter: "blur(8px)",
            boxShadow: "0 4px 28px rgba(0,0,0,0.35), inset 0 1px 0 rgba(255,255,255,0.1), inset 0 -1px 0 rgba(0,0,0,0.12)",
          }}
        >
          <IntelligenceWaves />
          
          {/* Observe - 2x2 grid */}
          <StageNode label="Observe" active={activeStage === 0} xPct="12%">
            <div className="grid grid-cols-2 gap-2">
              {SOURCE_ICONS.slice(0, 4).map((source, idx) => {
                const Icon = source.icon;
                return (
                  <div
                    key={idx}
                    className="flex items-center justify-center px-2.5 py-2 rounded-lg"
                    style={{
                      backgroundColor: activeStage === 0 ? 'rgba(108,147,255,0.12)' : 'rgba(255,255,255,0.03)',
                      border: `1px solid ${activeStage === 0 ? 'rgba(108,147,255,0.25)' : 'rgba(255,255,255,0.08)'}`,
                      transition: 'all 0.15s ease',
                    }}
                  >
                    <Icon
                      size={18}
                      strokeWidth={1.5}
                      style={{
                        color: activeStage === 0 ? '#6C93FF' : 'rgba(255,255,255,0.2)',
                        transition: 'color 0.15s ease',
                      }}
                    />
                  </div>
                );
              })}
            </div>
          </StageNode>

          {/* Understand */}
          <StageNode label="Understand" active={activeStage === 1} xPct="37%">
            <div
              className="flex items-center justify-center w-16 h-16 rounded-xl"
              style={{
                backgroundColor: activeStage === 1 ? 'rgba(108,147,255,0.12)' : 'rgba(255,255,255,0.03)',
                border: `1px solid ${activeStage === 1 ? 'rgba(108,147,255,0.25)' : 'rgba(255,255,255,0.08)'}`,
                transition: 'all 0.15s ease',
              }}
            >
              <Sparkles
                size={26}
                strokeWidth={1.5}
                style={{
                  color: activeStage === 1 ? '#6C93FF' : 'rgba(255,255,255,0.2)',
                  transition: 'color 0.15s ease',
                }}
              />
            </div>
          </StageNode>

          {/* Decide */}
          <StageNode label="Decide" active={activeStage === 2} xPct="62%">
            <div className="grid grid-cols-2 gap-1.5">
              {DECIDE_CAPABILITIES.map((cap, idx) => {
                const Icon = cap.icon;
                return (
                  <div
                    key={idx}
                    className="flex items-center gap-1.5 px-2 py-1.5 rounded-md"
                    style={{
                      backgroundColor: activeStage === 2 ? 'rgba(147,197,253,0.15)' : 'rgba(255,255,255,0.03)',
                      border: `1px solid ${activeStage === 2 ? 'rgba(147,197,253,0.3)' : 'rgba(255,255,255,0.08)'}`,
                      transition: 'all 0.15s ease',
                      minWidth: '80px',
                    }}
                  >
                    <Icon
                      size={12}
                      strokeWidth={2}
                      style={{
                        color: activeStage === 2 ? '#93C5FD' : 'rgba(255,255,255,0.2)',
                        transition: 'color 0.15s ease',
                        flexShrink: 0,
                      }}
                    />
                    <span
                      className="text-[10px] font-medium"
                      style={{
                        color: activeStage === 2 ? '#93C5FD' : 'rgba(255,255,255,0.2)',
                        transition: 'color 0.15s ease',
                      }}
                    >
                      {cap.label}
                    </span>
                  </div>
                );
              })}
            </div>
          </StageNode>

          {/* Act */}
          <StageNode label="Act" active={activeStage === 3} xPct="87%">
            <div className="grid grid-cols-2 gap-1.5">
              {ACT_OUTPUTS.map((output, idx) => {
                const Icon = output.icon;
                return (
                  <div
                    key={idx}
                    className="flex items-center gap-1.5 px-2 py-1.5 rounded-md"
                    style={{
                      backgroundColor: activeStage === 3 ? 'rgba(147,197,253,0.15)' : 'rgba(255,255,255,0.03)',
                      border: `1px solid ${activeStage === 3 ? 'rgba(147,197,253,0.3)' : 'rgba(255,255,255,0.08)'}`,
                      transition: 'all 0.15s ease',
                      minWidth: '80px',
                    }}
                  >
                    <Icon
                      size={12}
                      strokeWidth={2}
                      style={{
                        color: activeStage === 3 ? '#93C5FD' : 'rgba(255,255,255,0.2)',
                        transition: 'color 0.15s ease',
                        flexShrink: 0,
                      }}
                    />
                    <span
                      className="text-[10px] font-medium"
                      style={{
                        color: activeStage === 3 ? '#93C5FD' : 'rgba(255,255,255,0.2)',
                        transition: 'color 0.15s ease',
                      }}
                    >
                      {output.label}
                    </span>
                  </div>
                );
              })}
            </div>
          </StageNode>
        </div>
        
        <EnergyPulse />
      </div>

      
    </div>
  );
}
