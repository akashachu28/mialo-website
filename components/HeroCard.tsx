'use client'
import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import { Eye, Brain, Zap, Factory, ShoppingBag, HeartPulse, Landmark } from "lucide-react";

// ── Industry selector ────────────────────────────────────────

const INDUSTRIES = [
  { id: "retail", label: "Retail", icon: <ShoppingBag size={13} /> },
  { id: "manufacturing", label: "Manufacturing", icon: <Factory size={13} /> },
  { id: "healthcare", label: "Healthcare", icon: <HeartPulse size={13} /> },
  { id: "government", label: "Government", icon: <Landmark size={13} /> },
];

// ── Event data — drives dots, the action-triggered text, and the
//    business-outcome card that appears once each event lands on its
//    corresponding stage in the intelligence layer ──
// Each event maps 1:1 to a stage: event 0 → Observe, event 1 → Understand,
// event 2 → Act. The x-position of each event's column already lines up
// with the pill below it, so the pulse only needs to travel straight down.

const PILL_X = ["16.5%", "50%", "83.5%"];

const EVENTS = [
  {
    id: "customer",
    lines: ["Customer", "enters"],
    action: "Triggered action for customer enters",
    outcomeLabel: "Conversion",
    value: "↑12%",
    color: "#4ADE80", // green
  },
  {
    id: "queue",
    lines: ["Queue", "forming"],
    action: "Additional counter opened",
    outcomeLabel: "Queue Time",
    value: "↓17%",
    color: "#EF4444", // red
  },
  {
    id: "shelf",
    lines: ["Shelf", "running low"],
    action: "Shelves replenished",
    outcomeLabel: "Stockouts",
    value: "↓23%",
    color: "#EF4444", // red
  },
];

// ── Glow dot ─────────────────────────────────────────────────

function GlowDot({ active }: { active: boolean }) {
  return (
    <div style={{ position: "relative", width: 20, height: 20, display: "flex", alignItems: "center", justifyContent: "center", flexShrink: 0 }}>
      <span
        style={{
          display: "block",
          width: 8,
          height: 8,
          borderRadius: "50%",
          border: `1px solid ${active ? "#60A5FA" : "rgba(255,255,255,0.13)"}`,
          background: active ? "rgba(96,165,250,0.8)" : "transparent",
          boxShadow: active ? "0 0 10px 3px rgba(96,165,250,0.5)" : "none",
          transition: "all 0.65s ease",
        }}
      />
    </div>
  );
}

// ── Vertical connector line (motion-driven for smooth entry) ──

function VertLine({ active, height = 36 }: { active: boolean; height?: number }) {
  return (
    <div style={{ position: "relative", width: 1, height }}>
      {/* Permanent dim base */}
      <div style={{ position: "absolute", inset: 0, background: "rgba(255,255,255,0.07)" }} />
      {/* Animated blue glow that grows downward */}
      <motion.div
        initial={{ scaleY: 0, opacity: 0 }}
        animate={{ scaleY: active ? 1 : 0, opacity: active ? 1 : 0 }}
        transition={{ duration: 0.5, ease: [0.4, 0, 0.2, 1] }}
        style={{
          position: "absolute",
          inset: 0,
          transformOrigin: "top",
          background: "linear-gradient(to bottom, rgba(96,165,250,0.8), rgba(96,165,250,0.15))",
          boxShadow: "0 0 5px rgba(96,165,250,0.35)",
        }}
      />
    </div>
  );
}

// ── Pill node — glassmorphism badge ───────────────────────────

function PillNode({ icon, label, active, xPct }: { icon: React.ReactNode; label: string; active: boolean; xPct: string }) {
  return (
    <div
      style={{
        position: "absolute",
        top: "32%",
        left: xPct,
        transform: "translate(-50%, -50%)",
        display: "flex",
        alignItems: "center",
        gap: 5,
        whiteSpace: "nowrap",
      }}
    >
      <span
        style={{
          display: "flex",
          color: active ? "#93C5FD" : "rgba(255,255,255,0.2)",
          transition: "color 0.5s ease",
        }}
      >
        {icon}
      </span>
      <span
        style={{
          fontSize: 12,
          fontWeight: 500,
          letterSpacing: "0.035em",
          color: active ? "rgba(255,255,255,0.92)" : "rgba(255,255,255,0.2)",
          transition: "color 0.5s ease",
          fontFamily: "'Inter', sans-serif",
        }}
      >
        {label}
      </span>
    </div>
  );
}

// ── Intelligence waves — non-uniform flowing strands, not straight lines ──

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
        <linearGradient id="waveGradient" x1="0%" y1="0%" x2="100%" y2="0%">
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
          stroke="url(#waveGradient)"
          strokeWidth={s.width}
          strokeLinecap="round"
          opacity={s.opacity}
          style={s.blur ? { filter: `blur(${s.blur}px)` } : undefined}
        />
      ))}
      {/* Flare where the waves converge, near Act — bleeds past the pill edge */}
      <ellipse cx="462" cy="22" rx="34" ry="9" fill="url(#waveGradient)" opacity="0.35" style={{ filter: "blur(6px)" }} />
    </svg>
  );
}

// ── Energy pulse — three layers travelling together, riding the waves ──
// Travels horizontally through the intelligence layer from left to right
// Pure SVG approach using <animateMotion> for perfect alignment

function EnergyPulse({ xPct, visible }: { xPct: string; visible: boolean }) {
  if (!visible) return null;

  // Wave path - same for trail and motion
  const wavePath = "M52.5,32 C77.5,25 127.5,25 152.5,32 C177.5,39 227.5,39 252.5,32 C277.5,25 327.5,25 352.5,32 C374.5,38 407.5,35 432.5,33 C442.5,32 450.5,32 447.5,32";
  
  // Calculate pathLength based on xPct
  const pathLength = xPct === "89.5%" ? 1 : 0;

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
        {/* Trail gradient */}
        <linearGradient id="trailGradient" x1="0%" y1="0%" x2="100%" y2="0%">
          <stop offset="0%" stopColor="rgba(96,165,250,0.9)" />
          <stop offset="100%" stopColor="rgba(147,197,253,0.7)" />
        </linearGradient>
        
        {/* Glow gradient for layers */}
        <radialGradient id="glowGradient">
          <stop offset="0%" stopColor="rgba(147,197,253,0.55)" />
          <stop offset="45%" stopColor="rgba(96,165,250,0.22)" />
          <stop offset="72%" stopColor="transparent" />
        </radialGradient>
        
        {/* Particle dot core gradient */}
        <radialGradient id="particleGradient" cx="50%" cy="50%">
          <stop offset="10%" stopColor="#FFFFFF" />
          <stop offset="45%" stopColor="#93C5FD" />
          {/* <stop offset="80%" stopColor="#2563EB" /> */}
        </radialGradient>
        
        {/* Streak gradient */}
        <linearGradient id="streakGradient" x1="0%" y1="0%" x2="100%" y2="0%">
          <stop offset="0%" stopColor="transparent" />
          <stop offset="30%" stopColor="rgba(147,197,253,0.25)" />
          <stop offset="75%" stopColor="rgba(191,219,254,0.7)" />
          <stop offset="100%" stopColor="rgba(255,255,255,0.95)" />
        </linearGradient>
      </defs>
      
      {/* Animated trail that draws progressively as particle moves */}
      <path
        d={wavePath}
        fill="none"
        stroke="url(#trailGradient)"
        strokeWidth="1.5"
        strokeLinecap="round"
        pathLength="1"
        style={{
          filter: "blur(1px) drop-shadow(0 0 3px rgba(96,165,250,0.6))",
          opacity: 0.8,
          strokeDasharray: "1",
          strokeDashoffset: pathLength === 1 ? 0 : 1
        }}
      >
        {pathLength === 1 && (
          <animate
            attributeName="stroke-dashoffset"
            from="1"
            to="0"
            dur="5s"
            fill="freeze"
          />
        )}
      </path>
      
      {/* Layer 1 — Large soft blue glow */}
      <g>
        <circle
          r="27"
          fill="url(#glowGradient)"
          style={{ filter: "blur(2px)" }}
        >
          <animateMotion
            dur="5s"
            path={wavePath}
            fill="freeze"
          />
        </circle>
      </g>
      
      {/* Layer 2 — Medium glow */}
      <g>
        <circle
          r="17"
          fill="url(#glowGradient)"
          style={{ filter: "blur(2px)" }}
        >
          <animateMotion
            dur="5s"
            path={wavePath}
            fill="freeze"
          />
        </circle>
      </g>
      
      {/* Layer 3 — Streak */}
      <g>
        <ellipse
          rx="7"
          ry="1.25"
          fill="url(#streakGradient)"
        >
          <animateMotion
            dur="5s"
            path={wavePath}
            fill="freeze"
          />
        </ellipse>
      </g>
      
      {/* Layer 4 — Particle core */}
      <g>
        <circle
          r="4.5"
          fill="url(#particleGradient)"
          style={{ 
            filter: "drop-shadow(0 0 16px rgba(96,165,250,0.55)) drop-shadow(0 0 5px rgba(219,234,254,0.8))"
          }}
        >
          <animateMotion
            dur="5s"
            path={wavePath}
            fill="freeze"
          />
        </circle>
      </g>
    </svg>
  );
}

// ── Main component ───────────────────────────────────────────

export default function HeroCard() {
  const [industry, setIndustry] = useState("retail");

  const [dotsOn, setDotsOn] = useState([false, false, false]);
  const [linesOn, setLinesOn] = useState([false, false, false]);

  const [observeOn, setObserveOn] = useState(false);
  const [understandOn, setUnderstandOn] = useState(false);
  const [actOn, setActOn] = useState(false);

  const [pulseVisible, setPulseVisible] = useState(false);
  const [pulseX, setPulseX] = useState("10.5%");

  const [staffOn, setStaffOn] = useState(false);
  const [actionText, setActionText] = useState("");
  const [outcomes, setOutcomes] = useState<typeof EVENTS>([]);

  useEffect(() => {
    const timers: ReturnType<typeof setTimeout>[] = [];
    const schedule = (fn: () => void, ms: number) => timers.push(setTimeout(fn, ms));

    // Total animation: 8 seconds
    // Pulse duration: 5 seconds (travels through intelligence layer)
    // Business outcomes appear when pulse reaches each node

    // Start with a visible delay
    // Event 1: Customer enters
    schedule(() => setDotsOn([true, false, false]), 500);
    schedule(() => setLinesOn([true, false, false]), 900);
    
    // Pulse starts and travels for 5 seconds
    schedule(() => {
      setObserveOn(true);
      setPulseVisible(true);
      setPulseX("89.5%");
    }, 1400);
    
    // Staff alerted
    schedule(() => setStaffOn(true), 1600);
    
    // First outcome: when pulse reaches Observe (immediately after start)
    schedule(() => {
      setActionText(EVENTS[0].action);
      setOutcomes([EVENTS[0]]);
    }, 1600);
    
    // Event 2: Queue forming
    schedule(() => setDotsOn([true, true, false]), 2200);
    schedule(() => setLinesOn([true, true, false]), 2600);
    
    // Second outcome: when pulse reaches Understand (50%)
    // Pulse travels from 10.5% to 89.5% (79% total) in 5000ms
    // To reach 50%: (50-10.5)/79 * 5000 = 2500ms after pulse starts = 3900ms total
    schedule(() => setUnderstandOn(true), 3900);
    schedule(() => {
      setActionText(EVENTS[1].action);
      setOutcomes([EVENTS[0], EVENTS[1]]);
    }, 3900);
    
    // Event 3: Shelf running low
    schedule(() => setDotsOn([true, true, true]), 4500);
    schedule(() => setLinesOn([true, true, true]), 4900);
    
    // Third outcome: when pulse reaches Act (83.5%)
    // To reach 83.5%: (83.5-10.5)/79 * 5000 = 4620ms after pulse starts = 6020ms total
    schedule(() => setActOn(true), 6020);
    schedule(() => {
      setActionText(EVENTS[2].action);
      setOutcomes([EVENTS[0], EVENTS[1], EVENTS[2]]);
    }, 6020);
    
    // Pulse completes at 6400ms (1400ms start + 5000ms duration)

    return () => {
      timers.forEach(clearTimeout);
    };
  }, []);

  return (
    <div
      style={{
        // minHeight: "100vh",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        // padding: 24,
        // background: "#000000",
        fontFamily: "'Inter', -apple-system, BlinkMacSystemFont, sans-serif",
      }}
    >
      {/* Panel */}
      <div
        style={{
          width: 500,
          minHeight: 480,
          borderRadius: 20,
          padding: "22px 26px 28px",
          background: "rgba(255,255,255,0.0)",
          borderBottom: "1px solid rgba(255,255,255,0.07)",
          backdropFilter: "blur(40px)",
          WebkitBackdropFilter: "blur(40px)",
          boxShadow: "0 0 120px rgba(0,0,0,0.7), inset 0 1px 0 rgba(255,255,255,0.06)",
        }}
      >
        {/* ── Industry selector tabs ─────────────────────────── */}
        <div style={{ display: "flex", alignItems: "center", justifyContent: "center", marginBottom: 22 }}>
          {INDUSTRIES.map(({ id, label, icon }, idx) => {
            const sel = industry === id;
            return (
              <div key={id} style={{ display: "flex", alignItems: "center" }}>
                {idx > 0 && (
                  <div style={{ width: 1, height: 14, background: "rgba(255,255,255,0.1)", margin: "0 16px", flexShrink: 0 }} />
                )}

                {sel ? (
                  <div
                    onClick={() => setIndustry(id)}
                    style={{
                      padding: 1,
                      borderRadius: 999,
                      background:
                        "linear-gradient(138deg, rgba(255,255,255,0.38) 0%, rgba(255,255,255,0.16) 28%, rgba(255,255,255,0.05) 55%, rgba(255,255,255,0.09) 80%, rgba(255,255,255,0.04) 100%)",
                      cursor: "pointer",
                      boxShadow: "0 2px 12px rgba(0,0,0,0.4)",
                    }}
                  >
                    <div
                      style={{
                        display: "flex",
                        flexDirection: "column",
                        alignItems: "center",
                        gap: 5,
                        padding: "5px 16px 7px",
                        borderRadius: 999,
                        background: "#0C0F1C",
                        boxShadow: "inset 0 1px 0 rgba(255,255,255,0.06)",
                      }}
                    >
                      <div style={{ display: "flex", alignItems: "center", gap: 7 }}>
                        <span style={{ display: "flex", color: "#60A5FA" }}>{icon}</span>
                        <span
                          style={{
                            fontSize: 12,
                            fontWeight: 400,
                            letterSpacing: "0.01em",
                            color: "rgba(255,255,255,0.9)",
                            fontFamily: "'Inter', sans-serif",
                          }}
                        >
                          {label}
                        </span>
                      </div>
                      <div
                        style={{
                          width: "70%",
                          height: 1,
                          borderRadius: 1,
                          background:
                            "linear-gradient(90deg, transparent, #3B82F6 30%, #60A5FA 50%, #3B82F6 70%, transparent)",
                        }}
                      />
                    </div>
                  </div>
                ) : (
                  <button
                    onClick={() => setIndustry(id)}
                    style={{
                      display: "flex",
                      alignItems: "center",
                      gap: 7,
                      background: "none",
                      border: "none",
                      cursor: "pointer",
                      padding: "4px 0",
                      color: "rgba(255,255,255,0.36)",
                      fontSize: 12,
                      fontWeight: 300,
                      fontFamily: "'Inter', sans-serif",
                      letterSpacing: "0.01em",
                      transition: "color 0.2s ease",
                    }}
                  >
                    <span style={{ display: "flex", opacity: 0.55 }}>{icon}</span>
                    {label}
                  </button>
                )}
              </div>
            );
          })}
        </div>

        {/* Hairline under tabs */}
        <div style={{ height: 1, background: "rgba(255,255,255,0.05)", marginBottom: 20 }} />

        {/* ── Events row ───────────────────────────────────────── */}
        <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr 1fr" }}>
          {EVENTS.map(({ lines }, i) => (
            <div key={i} style={{ display: "flex", flexDirection: "column", alignItems: "center", gap: 5 }}>
              <div style={{ textAlign: "center" }}>
                {lines.map((l, j) => (
                  <div
                    key={j}
                    style={{
                      fontSize: 12,
                      fontWeight: 300,
                      lineHeight: 1.4,
                      color: dotsOn[i] ? "rgba(255,255,255,0.8)" : "rgba(255,255,255,0.1)",
                      transition: "color 0.7s ease",
                    }}
                  >
                    {l}
                  </div>
                ))}
              </div>
              <GlowDot active={dotsOn[i]} />
            </div>
          ))}
        </div>

        {/* ── Connector lines ───────────────────────────────────── */}
        <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr 1fr" }}>
          {linesOn.map((active, i) => (
            <div key={i} style={{ display: "flex", justifyContent: "center" }}>
              <VertLine active={active} />
            </div>
          ))}
        </div>

        {/* ── Intelligence field + vertical pulse wrapper ── */}
        <div style={{ position: "relative", height: 60 }}>
          <div
            style={{
              position: "absolute",
              inset: 0,
              borderRadius: 999,
              background:
                "radial-gradient(ellipse 90% 140% at 50% 74%, rgba(96,165,250,0.05) 0%, rgba(96,165,250,0.015) 45%, transparent 75%)",
              border: "0.5px solid rgba(255,255,255,0.1)",
              backdropFilter: "blur(28px)",
              WebkitBackdropFilter: "blur(8px)",
              boxShadow: "0 4px 28px rgba(0,0,0,0.35), inset 0 1px 0 rgba(255,255,255,0.1), inset 0 -1px 0 rgba(0,0,0,0.12)",
            }}
          >
            <IntelligenceWaves />

            <PillNode icon={<Eye size={13} />} label="Observe" active={observeOn} xPct={PILL_X[0]} />
            <PillNode icon={<Brain size={13} />} label="Understand" active={understandOn} xPct={PILL_X[1]} />
            <PillNode icon={<Zap size={13} />} label="Act" active={actOn} xPct={PILL_X[2]} />
          </div>

          {/* Energy pulse travels horizontally through the layer */}
          <EnergyPulse xPct={pulseX} visible={pulseVisible} />
        </div>

        {/* ── Connecting line: pill → Staff alerted ────────────── */}
        <div style={{ display: "flex", justifyContent: "center" }}>
          <VertLine active={staffOn} height={40} />
        </div>

        {/* ── Staff alerted / dynamic action-triggered text ────── */}
        <div style={{ display: "flex", justifyContent: "center" }}>
          <motion.div
            animate={{ 
              opacity: staffOn ? 1 : 0.13,
              scale: staffOn ? [1, 1.05, 1] : 1
            }}
            transition={{ 
              opacity: { duration: 0.6, ease: "easeOut" },
              scale: { duration: 1.5, repeat: Infinity, ease: "easeInOut" }
            }}
            style={{ display: "flex", flexDirection: "column", alignItems: "center", gap: 5 }}
          >
            <motion.span
              animate={{
                textShadow: staffOn 
                  ? [
                      "0 0 8px rgba(96,165,250,0.4)",
                      "0 0 16px rgba(96,165,250,0.6)",
                      "0 0 8px rgba(96,165,250,0.4)"
                    ]
                  : "0 0 0px rgba(96,165,250,0)"
              }}
              transition={{ 
                duration: 1.5, 
                repeat: Infinity, 
                ease: "easeInOut" 
              }}
              style={{
                fontSize: 10,
                fontWeight: 500,
                color: staffOn ? "rgba(255,255,255,0.8)" : "rgba(255,255,255,0.18)",
                transition: "color 0.5s ease",
              }}
            >
              ✦ Staff alerted
            </motion.span>
            <AnimatePresence mode="wait">
              <motion.span
                key={actionText}
                initial={{ opacity: 0, y: 4 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -4 }}
                transition={{ duration: 0.35, ease: "easeOut" }}
                style={{
                  fontSize: 9,
                  fontWeight: 300,
                  letterSpacing: "0.05em",
                  color: staffOn ? "rgba(255,255,255,0.32)" : "rgba(255,255,255,0.08)",
                }}
              >
                {actionText || "Action triggered"}
              </motion.span>
            </AnimatePresence>
          </motion.div>
        </div>

        {/* ── Small vertical separator before Business Outcome ── */}
        <div style={{ display: "flex", justifyContent: "center", margin: "20px 0 16px" }}>
          <div
            style={{
              width: 1,
              height: 20,
              background:
                "linear-gradient(to bottom, transparent, rgba(255,255,255,0.15) 25%, rgba(255,255,255,0.15) 75%, transparent)",
            }}
          />
        </div>

        {/* ── Business Outcomes — flat rows separated by thin dividers ── */}
        <motion.div
          animate={{ opacity: outcomes.length > 0 ? 1 : 0, y: outcomes.length > 0 ? 0 : 8 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          style={{
            position: "relative",
            padding: "0 0 20px",
          }}
        >
          <p
            style={{
              textAlign: "center",
              fontSize: 9,
              letterSpacing: "0.22em",
              fontWeight: 400,
              textTransform: "uppercase",
              color: "rgba(255,255,255,0.3)",
              marginBottom: 18,
            }}
          >
            {/* Business Outcome */}
          </p>

          {/* Row of outcomes — `layout` lets each one glide into place as new
              siblings join; thin vertical rules separate them instead of boxes */}
          <div style={{ display: "flex", alignItems: "center", justifyContent: "center", flexWrap: "wrap" }}>
            <AnimatePresence>
              {outcomes.map((ev, idx) => (
                <div key={ev.id} style={{ display: "flex", alignItems: "center" }}>
                  {idx > 0 && (
                    <div
                      style={{
                        width: 1,
                        height: 34,
                        background: "rgba(255,255,255,0.12)",
                        margin: "0 20px",
                        flexShrink: 0,
                      }}
                    />
                  )}
                  <motion.div
                    layout
                    initial={{ opacity: 0, scale: 0.7, y: 14 }}
                    animate={{ opacity: 1, scale: 1, y: 0 }}
                    transition={{ duration: 0.6, ease: [0.4, 0, 0.2, 1] }}
                    style={{ display: "flex", flexDirection: "column", alignItems: "center", gap: 4 }}
                  >
                    <span
                      style={{
                        fontSize: 9,
                        fontWeight: 300,
                        letterSpacing: "0.06em",
                        textTransform: "uppercase",
                        color: "rgba(255,255,255,0.4)",
                      }}
                    >
                      {ev.outcomeLabel}
                    </span>
                    <span
                      style={{
                        fontSize: "1.7rem",
                        fontWeight: 800,
                        lineHeight: 1,
                        letterSpacing: "-0.02em",
                        color: ev.color,
                        fontFamily: "'JetBrains Mono', 'Courier New', monospace",
                        textShadow: ev.color === "#4ADE80"
                          ? "0 0 20px rgba(74,222,128,0.5), 0 0 6px rgba(74,222,128,0.3)"
                          : "0 0 20px rgba(239,68,68,0.5), 0 0 6px rgba(239,68,68,0.3)",
                      }}
                    >
                      {ev.value}
                    </span>
                  </motion.div>
                </div>
              ))}
            </AnimatePresence>
          </div>

          {/* ── Green ambient glow ── */}
          <div
            style={{
              position: "absolute",
              bottom: -30,
              left: "50%",
              transform: "translateX(-50%)",
              width: "140%",
              height: 90,
              background:
                "radial-gradient(ellipse 65% 70% at 50% 100%, rgba(74,222,128,0.18) 0%, rgba(74,222,128,0.08) 45%, transparent 62%)",
              pointerEvents: "none",
              opacity: outcomes.length > 0 ? 1 : 0,
              transition: "opacity 0.8s ease",
            }}
          />
        </motion.div>
      </div>
    </div>
  );
}