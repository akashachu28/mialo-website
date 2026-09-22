/**
 * OperationalIntelligenceCard — animated "how it works" flow diagram.
 * Observe → Understand → Decide → Act.
 *
 * One fixed coordinate plane (W × H) holds both the SVG connectors and
 * the DOM nodes; a ResizeObserver scales the whole plane to the
 * container, so every line meets its node at any size. Motion is a
 * single idea: green pulses travel each lane, source → core → decide → act.
 */
"use client";

import { useEffect, useLayoutEffect, useRef, useState } from "react";
import type { CSSProperties } from "react";

const W = 1240;
const H = 560;

const SANS = "var(--font-geist-sans), 'Inter', system-ui, sans-serif";
const MONO = "var(--font-geist-mono), ui-monospace, 'SF Mono', Menlo, monospace";

const BLUE = "#6C93FF";
const BLUE_2 = "#97B4FF";
const GREEN = "#00E599";
const LINE = "#23262D";
const LINE_3 = "#2E323B";
const PANEL = "#0E1013";
const RAISE = "#131519";
const TEXT_2 = "#B4BAC4";
const TEXT_3 = "#8A909C";

const ROWS = [104, 194, 284, 374, 464];

const OBS_X = 100;
const CORE = { x: 434, y: 284 };
const CORE_R = 96;
const DEC_X = 782;
const ACT_X = 1104;
const CW = 186;
const CH = 44;

const SOURCES = [
  { k: "camera", label: "Camera" },
  { k: "voice", label: "Voice" },
  { k: "doc", label: "Document" },
  { k: "iot", label: "IoT" },
  { k: "erp", label: "ERP" },
];
const DECIDE = ["Predict", "Prioritize", "Detect Anomalies", "Simulate", "Recommend"];
const ACT = ["Alert", "Notify", "Automate", "Integrate", "Escalate"];

const STAGES = [
  { n: "01", label: "Observe", x: OBS_X + 26 },
  { n: "02", label: "Understand", x: CORE.x },
  { n: "03", label: "Decide", x: DEC_X },
  { n: "04", label: "Act", x: ACT_X },
];

/* ── connectors ─────────────────────────────────────────────────────────── */
const OBS_EDGE = OBS_X + 24;
const CORE_L = CORE.x - CORE_R;
const CORE_R_EDGE = CORE.x + CORE_R;
const DEC_L = DEC_X - CW / 2;
const DEC_R = DEC_X + CW / 2;
const ACT_L = ACT_X - CW / 2;

const SRC_IN = ROWS.map(
  (y) => `M ${OBS_EDGE} ${y} C ${OBS_X + 150} ${y}, ${CORE.x - 172} ${CORE.y}, ${CORE_L} ${CORE.y}`,
);
const CORE_OUT = ROWS.map(
  (y) => `M ${CORE_R_EDGE} ${CORE.y} C ${CORE_R_EDGE + 96} ${CORE.y}, ${DEC_L - 70} ${y}, ${DEC_L} ${y}`,
);
const DEC_ACT = ROWS.map((y) => `M ${DEC_R} ${y} L ${ACT_L} ${y}`);

/* pulse-dot paths — identical to the visible connectors */
const IN_PATH = SRC_IN;
const OUT_PATH = ROWS.map(
  (y, i) => `${CORE_OUT[i]} L ${DEC_R} ${y} L ${ACT_L} ${y}`,
);

const CYCLE = 4.6; // seconds — one converge-then-radiate pulse

/* ── icons ──────────────────────────────────────────────────────────────── */
function Icon({ k, c, size = 20, sw = 1.9 }: { k: string; c: string; size?: number; sw?: number }) {
  const p = {
    fill: "none",
    stroke: c,
    strokeWidth: sw,
    strokeLinecap: "round" as const,
    strokeLinejoin: "round" as const,
  };
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" style={{ display: "block" }}>
      {k === "camera" && (
        <g {...p}>
          <rect x="2.5" y="6.5" width="19" height="13" rx="3" />
          <circle cx="12" cy="13" r="4" />
          <path d="M9 6.5 10.5 4h3L15 6.5" />
        </g>
      )}
      {k === "voice" && (
        <g {...p}>
          <path d="M4 10v4M8 6.5v11M12 3.5v17M16 7.5v9M20 10.5v3" />
        </g>
      )}
      {k === "doc" && (
        <g {...p}>
          <path d="M6 3h7l5 5v13H6z" />
          <path d="M13 3v5h5M9 13h7M9 17h5" />
        </g>
      )}
      {k === "iot" && (
        <g {...p}>
          <circle cx="12" cy="12" r="2" />
          <path d="M7.5 7.5a6.4 6.4 0 0 0 0 9M16.5 7.5a6.4 6.4 0 0 1 0 9M4.5 4.5a10.6 10.6 0 0 0 0 15M19.5 4.5a10.6 10.6 0 0 1 0 15" />
        </g>
      )}
      {k === "erp" && (
        <g {...p}>
          <ellipse cx="12" cy="6" rx="7.5" ry="3" />
          <path d="M4.5 6v6c0 1.7 3.4 3 7.5 3s7.5-1.3 7.5-3V6M4.5 12v6c0 1.7 3.4 3 7.5 3s7.5-1.3 7.5-3v-6" />
        </g>
      )}
      {k === "Predict" && (
        <g {...p}>
          <path d="M3 17 9 10l4 4 8-8" />
          <path d="M15 6h6v6" />
        </g>
      )}
      {k === "Prioritize" && (
        <g {...p}>
          <path d="M9 6h11M9 12h11M9 18h11M4 6h.01M4 12h.01M4 18h.01" />
        </g>
      )}
      {k === "Detect Anomalies" && (
        <g {...p}>
          <circle cx="11" cy="11" r="6" />
          <path d="M15.5 15.5 20 20" />
        </g>
      )}
      {k === "Simulate" && (
        <g {...p}>
          <path d="M12 3 20 7.5v9L12 21 4 16.5v-9z" />
          <path d="M4 7.5 12 12l8-4.5M12 12v9" />
        </g>
      )}
      {k === "Recommend" && (
        <g {...p}>
          <path d="M9 17h6M10 20h4" />
          <path d="M12 3a6 6 0 0 0-3.5 10.9V17h7v-3.1A6 6 0 0 0 12 3z" />
        </g>
      )}
      {k === "Alert" && (
        <g {...p}>
          <path d="M6 9a6 6 0 0 1 12 0c0 5 2 6 2 6H4s2-1 2-6z" />
          <path d="M10 19a2.2 2.2 0 0 0 4 0" />
        </g>
      )}
      {k === "Notify" && (
        <g {...p}>
          <rect x="3" y="5.5" width="18" height="13" rx="2.5" />
          <path d="m3.8 7 8.2 6.2L20.2 7" />
        </g>
      )}
      {k === "Automate" && (
        <g {...p}>
          <circle cx="12" cy="12" r="3.2" />
          <path d="M12 3v2.6M12 18.4V21M3 12h2.6M18.4 12H21M5.6 5.6l1.9 1.9M16.5 16.5l1.9 1.9M18.4 5.6l-1.9 1.9M7.5 16.5l-1.9 1.9" />
        </g>
      )}
      {k === "Integrate" && (
        <g {...p}>
          <path d="M4 4h7v3.5a2 2 0 1 0 0 4V15H4z" />
          <path d="M11 15h3.5a2 2 0 1 1 4 0H20v5h-9z" />
        </g>
      )}
      {k === "Escalate" && (
        <g {...p}>
          <path d="M12 15V4M8 8l4-4 4 4" />
          <path d="M4 15v3.5A1.5 1.5 0 0 0 5.5 20h13a1.5 1.5 0 0 0 1.5-1.5V15" />
        </g>
      )}
    </svg>
  );
}

/* ── chip ───────────────────────────────────────────────────────────────── */
function Chip({
  label,
  x,
  y,
  variant,
}: {
  label: string;
  x: number;
  y: number;
  variant: "plain" | "glow" | "filled";
}) {
  const filled = variant === "filled";
  const glow = variant === "glow";
  return (
    <div
      style={{
        position: "absolute",
        left: x,
        top: y,
        width: CW,
        height: CH,
        boxSizing: "border-box",
        transform: "translate(-50%, -50%)",
        display: "flex",
        alignItems: "center",
        gap: 10,
        padding: "0 14px",
        borderRadius: 10,
        background: filled ? BLUE : RAISE,
        border: `1px solid ${filled ? BLUE : glow ? "rgba(108,147,255,0.5)" : LINE}`,
        boxShadow: filled
          ? "0 0 24px rgba(108,147,255,0.42)"
          : glow
            ? "0 0 22px rgba(108,147,255,0.26)"
            : "none",
        color: filled ? "#0B0D10" : TEXT_2,
        font: `${filled ? 500 : 400} 12.5px ${SANS}`,
        letterSpacing: "-0.005em",
      }}
    >
      <span style={{ flex: "0 0 auto", display: "grid", placeItems: "center", width: 18, height: 18 }}>
        <Icon k={label} c={filled ? "#0B0D10" : BLUE} size={17} sw={1.7} />
      </span>
      <span style={{ whiteSpace: "nowrap" }}>{label}</span>
    </div>
  );
}

/* ── component ──────────────────────────────────────────────────────────── */
export default function OperationalIntelligenceCard({
  className,
  style,
}: {
  className?: string;
  style?: CSSProperties;
}) {
  const MIN_W = 760;
  const hostRef = useRef<HTMLDivElement>(null);
  const [scale, setScale] = useState(MIN_W / W);
  const [animate, setAnimate] = useState(true);

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

  useEffect(() => {
    if (typeof window === "undefined" || !window.matchMedia) return undefined;
    const mq = window.matchMedia("(prefers-reduced-motion: reduce)");
    const sync = () => setAnimate(!mq.matches);
    sync();
    mq.addEventListener("change", sync);
    return () => mq.removeEventListener("change", sync);
  }, []);

  return (
    <div style={{ width: "100%", overflowX: "auto", ...style }}>
      <div
        ref={hostRef}
        className={className}
        style={{
          position: "relative",
          width: "100%",
          minWidth: MIN_W,
          aspectRatio: `${W} / ${H}`,
          overflow: "hidden",
          background: PANEL,
        }}
      >
      <div
        style={{
          position: "absolute",
          left: 0,
          top: 0,
          width: W,
          height: H,
          transformOrigin: "0 0",
          transform: `scale(${scale})`,
        }}
      >
        {/* --- connectors, core, pulses --- */}
        <svg
          width={W}
          height={H}
          fill="none"
          style={{ position: "absolute", inset: 0, overflow: "visible" }}
        >
          <defs>
            <radialGradient id="oicGlow">
              <stop offset="0%" stopColor={BLUE} stopOpacity="0.3" />
              <stop offset="55%" stopColor={BLUE} stopOpacity="0.06" />
              <stop offset="100%" stopColor={BLUE} stopOpacity="0" />
            </radialGradient>
            <radialGradient id="oicFill" cx="50%" cy="42%">
              <stop offset="0%" stopColor="rgba(108,147,255,0.22)" />
              <stop offset="100%" stopColor="rgba(108,147,255,0.02)" />
            </radialGradient>
          </defs>

          {[...SRC_IN, ...CORE_OUT, ...DEC_ACT].map((d, i) => (
            <path key={i} d={d} stroke={LINE_3} strokeWidth="1" />
          ))}

          {/* pulses — drawn before the core so they pass behind it.
             Inbound: all five converge on the core together.
             Outbound: fan out once the core has "received" them. */}
          {animate && (
            <g style={{ filter: `drop-shadow(0 0 5px ${GREEN})` }}>
              {IN_PATH.map((d, i) => (
                <circle key={`in-${i}`} r="3.4" fill={GREEN}>
                  <animateMotion
                    dur={`${CYCLE}s`}
                    repeatCount="indefinite"
                    calcMode="linear"
                    path={d}
                    keyPoints="0;1;1"
                    keyTimes="0;0.34;1"
                  />
                  <animate
                    attributeName="opacity"
                    dur={`${CYCLE}s`}
                    repeatCount="indefinite"
                    calcMode="linear"
                    values="0;1;1;0;0"
                    keyTimes="0;0.05;0.31;0.38;1"
                  />
                </circle>
              ))}
              {OUT_PATH.map((d, i) => (
                <circle key={`out-${i}`} r="3.4" fill={GREEN} opacity="0">
                  <animateMotion
                    dur={`${CYCLE}s`}
                    repeatCount="indefinite"
                    calcMode="linear"
                    path={d}
                    keyPoints="0;0;1;1"
                    keyTimes="0;0.36;0.92;1"
                  />
                  <animate
                    attributeName="opacity"
                    dur={`${CYCLE}s`}
                    repeatCount="indefinite"
                    calcMode="linear"
                    values="0;0;1;1;0;0"
                    keyTimes="0;0.36;0.42;0.88;0.94;1"
                  />
                </circle>
              ))}
            </g>
          )}

          {/* core */}
          <circle cx={CORE.x} cy={CORE.y} r="152" fill="url(#oicGlow)" opacity="0.75">
            {animate && (
              <animate
                attributeName="opacity"
                values="0.6;0.95;0.6"
                dur="5s"
                repeatCount="indefinite"
              />
            )}
          </circle>
          <circle
            cx={CORE.x}
            cy={CORE.y}
            r={CORE_R + 13}
            stroke={GREEN}
            strokeOpacity="0.3"
            strokeWidth="1"
            strokeDasharray="2 8"
          >
            {animate && (
              <animateTransform
                attributeName="transform"
                type="rotate"
                from={`0 ${CORE.x} ${CORE.y}`}
                to={`360 ${CORE.x} ${CORE.y}`}
                dur="36s"
                repeatCount="indefinite"
              />
            )}
          </circle>
          <circle
            cx={CORE.x}
            cy={CORE.y}
            r={CORE_R}
            fill="url(#oicFill)"
            stroke={BLUE}
            strokeOpacity="0.42"
            strokeWidth="1"
          />
          <circle
            cx={CORE.x}
            cy={CORE.y}
            r={CORE_R - 20}
            stroke={BLUE}
            strokeOpacity="0.16"
            strokeWidth="1"
          />

          {/* reception ripple — fires as the inbound pulses land */}
          {animate && (
            <circle cx={CORE.x} cy={CORE.y} fill="none" stroke={GREEN} strokeWidth="1.5" opacity="0">
              <animate
                attributeName="r"
                dur={`${CYCLE}s`}
                repeatCount="indefinite"
                calcMode="linear"
                values={`${CORE_R};${CORE_R};${CORE_R + 46};${CORE_R + 46}`}
                keyTimes="0;0.33;0.54;1"
              />
              <animate
                attributeName="opacity"
                dur={`${CYCLE}s`}
                repeatCount="indefinite"
                calcMode="linear"
                values="0;0;0.5;0;0"
                keyTimes="0;0.33;0.4;0.56;1"
              />
            </circle>
          )}
        </svg>

        {/* --- stage headers --- */}
        {STAGES.map((s) => (
          <div
            key={s.n}
            style={{
              position: "absolute",
              left: s.x,
              top: 28,
              transform: "translateX(-50%)",
              whiteSpace: "nowrap",
              font: `500 12px ${MONO}`,
              letterSpacing: "0.14em",
              textTransform: "uppercase",
              color: TEXT_3,
            }}
          >
            <span style={{ color: BLUE }}>{s.n}</span>
            <span style={{ margin: "0 8px", color: LINE_3 }}>/</span>
            {s.label}
          </div>
        ))}

        {/* --- live indicator --- */}
        <div
          style={{
            position: "absolute",
            right: 26,
            top: 26,
            display: "flex",
            alignItems: "center",
            gap: 7,
            font: `500 11px ${MONO}`,
            letterSpacing: "0.14em",
            textTransform: "uppercase",
            color: TEXT_3,
          }}
        >
          <span
            className="motion-safe:animate-blink"
            style={{
              width: 7,
              height: 7,
              borderRadius: "50%",
              background: GREEN,
              boxShadow: `0 0 10px ${GREEN}`,
            }}
          />
          Live
        </div>

        {/* --- source nodes --- */}
        {SOURCES.map((s, i) => (
          <div key={s.k}>
            <div
              style={{
                position: "absolute",
                left: OBS_X,
                top: ROWS[i],
                transform: "translate(-50%, -50%)",
                width: 46,
                height: 46,
                borderRadius: "50%",
                display: "grid",
                placeItems: "center",
                background: RAISE,
                border: `1px solid ${LINE}`,
                boxShadow: "0 0 18px rgba(108,147,255,0.12)",
              }}
            >
              <Icon k={s.k} c={BLUE} size={20} />
            </div>
            <span
              style={{
                position: "absolute",
                left: OBS_X,
                top: ROWS[i] + 32,
                transform: "translateX(-50%)",
                font: `400 11px ${MONO}`,
                letterSpacing: "0.08em",
                textTransform: "uppercase",
                color: TEXT_3,
                whiteSpace: "nowrap",
              }}
            >
              {s.label}
            </span>
          </div>
        ))}

        {/* --- core label --- */}
        <div
          style={{
            position: "absolute",
            left: CORE.x,
            top: CORE.y,
            transform: "translate(-50%, -50%)",
            textAlign: "center",
            font: `500 15px ${SANS}`,
            lineHeight: 1.22,
            letterSpacing: "-0.01em",
            color: BLUE_2,
            textShadow: "0 0 22px rgba(108,147,255,0.55)",
          }}
        >
          Intelligence
          <br />
          Layer
        </div>

        {/* --- decide / act chips --- */}
        {DECIDE.map((label, i) => (
          <Chip
            key={label}
            label={label}
            x={DEC_X}
            y={ROWS[i]}
            variant={i === 2 ? "glow" : "plain"}
          />
        ))}
        {ACT.map((label, i) => (
          <Chip
            key={label}
            label={label}
            x={ACT_X}
            y={ROWS[i]}
            variant={i === 2 ? "filled" : "plain"}
          />
        ))}
        </div>
      </div>
    </div>
  );
}
