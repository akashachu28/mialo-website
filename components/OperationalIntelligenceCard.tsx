/**
 * IntelligenceFlow — static flow diagram.
 * Observe → Understand → Decide → Act.
 */
"use client";

import React, { useLayoutEffect, useRef, useState, CSSProperties } from 'react';

const W = 1920, H = 1080;
const FONT = '"Helvetica Neue", Helvetica, Arial, sans-serif';

/* ── layout ─────────────────────────────────────────────────────────────── */
const SOURCES = [
  { k: 'camera', label: 'Camera', y: 215 },
  { k: 'voice', label: 'Voice', y: 340 },
  { k: 'doc', label: 'Document', y: 465 },
  { k: 'iot', label: 'IoT', y: 590 },
  { k: 'erp', label: 'ERP', y: 715 },
];
const ORB = { x: 800, y: 465, r: 200 };
const REASON = ['Predict', 'Prioritize', 'Detect Anomalies', 'Simulate', 'Recommend'];
const ACTION = ['Alert', 'Notify', 'Automate', 'Integrate', 'Escalate'];
const COL_Y = [250, 345, 440, 535, 630];
const RX = 1275, AX = 1740, PW = 212, PH = 62;
const BRAIN = { x: 1508, y: 440 };
const KEYWORDS = [
  ['Context', 720, 250], ['Patterns', 915, 288], ['Signals', 612, 318],
  ['Insights', 1000, 360], ['Trends', 556, 392], ['Anomalies', 566, 575],
  ['Events', 990, 592], ['Knowledge', 928, 662], ['Relationships', 668, 662],
];

/* ── icons ──────────────────────────────────────────────────────────────── */
function Icon({ k, c, size = 34 }: { k: string; c: string; size?: number }) {
  const p = { fill: 'none', stroke: c, strokeWidth: 2.4, strokeLinecap: 'round' as const, strokeLinejoin: 'round' as const };
  return (
    <svg width={size} height={size} viewBox="0 0 24 24">
      {k === 'camera' && <g {...p}><rect x="2.5" y="6.5" width="19" height="13" rx="3" /><circle cx="12" cy="13" r="4" /><path d="M9 6.5 10.5 4h3L15 6.5" /></g>}
      {k === 'voice' && <g {...p}><path d="M4 10v4M8 6.5v11M12 3.5v17M16 7.5v9M20 10.5v3" /></g>}
      {k === 'doc' && <g {...p}><path d="M6 3h7l5 5v13H6z" /><path d="M13 3v5h5M9 13h7M9 17h5" /></g>}
      {k === 'iot' && <g {...p}><circle cx="12" cy="12" r="2" /><path d="M7.5 7.5a6.4 6.4 0 0 0 0 9M16.5 7.5a6.4 6.4 0 0 1 0 9M4.5 4.5a10.6 10.6 0 0 0 0 15M19.5 4.5a10.6 10.6 0 0 1 0 15" /></g>}
      {k === 'erp' && <g {...p}><ellipse cx="12" cy="6" rx="7.5" ry="3" /><path d="M4.5 6v6c0 1.7 3.4 3 7.5 3s7.5-1.3 7.5-3V6M4.5 12v6c0 1.7 3.4 3 7.5 3s7.5-1.3 7.5-3v-6" /></g>}
      {k === 'Predict' && <g {...p}><path d="M3 17 9 10l4 4 8-8" /><path d="M15 6h6v6" /></g>}
      {k === 'Prioritize' && <g {...p}><path d="M9 6h11M9 12h11M9 18h11M4 6h.01M4 12h.01M4 18h.01" /></g>}
      {k === 'Detect Anomalies' && <g {...p}><circle cx="11" cy="11" r="6" /><path d="M15.5 15.5 20 20" /></g>}
      {k === 'Simulate' && <g {...p}><path d="M12 3 20 7.5v9L12 21 4 16.5v-9z" /><path d="M4 7.5 12 12l8-4.5M12 12v9" /></g>}
      {k === 'Recommend' && <g {...p}><path d="M9 17h6M10 20h4" /><path d="M12 3a6 6 0 0 0-3.5 10.9V17h7v-3.1A6 6 0 0 0 12 3z" /></g>}
      {k === 'Alert' && <g {...p}><path d="M6 9a6 6 0 0 1 12 0c0 5 2 6 2 6H4s2-1 2-6z" /><path d="M10 19a2.2 2.2 0 0 0 4 0" /></g>}
      {k === 'Notify' && <g {...p}><rect x="3" y="5.5" width="18" height="13" rx="2.5" /><path d="m3.8 7 8.2 6.2L20.2 7" /></g>}
      {k === 'Automate' && <g {...p}><circle cx="12" cy="12" r="3.2" /><path d="M12 3v2.6M12 18.4V21M3 12h2.6M18.4 12H21M5.6 5.6l1.9 1.9M16.5 16.5l1.9 1.9M18.4 5.6l-1.9 1.9M7.5 16.5l-1.9 1.9" /></g>}
      {k === 'Integrate' && <g {...p}><path d="M4 4h7v3.5a2 2 0 1 0 0 4V15H4z" /><path d="M11 15h3.5a2 2 0 1 1 4 0H20v5h-9z" /></g>}
      {k === 'Escalate' && <g {...p}><path d="M12 15V4M8 8l4-4 4 4" /><path d="M4 15v3.5A1.5 1.5 0 0 0 5.5 20h13a1.5 1.5 0 0 0 1.5-1.5V15" /></g>}
    </svg>
  );
}

/* ── pieces ─────────────────────────────────────────────────────────────── */
function SourceNode({ s, accent }: { s: typeof SOURCES[0]; accent: string }) {
  return (
    <div style={{ position: 'absolute', left: 96, top: s.y - 38, display: 'flex', alignItems: 'center', gap: 26 }}>
      <div style={{
        width: 76, height: 76, borderRadius: '50%', display: 'grid', placeItems: 'center',
        background: 'radial-gradient(circle at 50% 35%, rgba(30,70,150,0.55), rgba(8,16,38,0.9))',
        border: '1px solid rgba(120,170,255,0.35)', boxShadow: '0 0 22px rgba(45,120,255,0.35)',
      }}><Icon k={s.k} c={accent} /></div>
      <div style={{ color: 'rgba(226,236,255,0.92)', font: `400 27px ${FONT}`, letterSpacing: '0.01em' }}>{s.label}</div>
    </div>
  );
}

function Pill({ label, x, y, accent, filled, glow }: { label: string; x: number; y: number; accent: string; filled?: boolean; glow?: boolean }) {
  return (
    <div style={{
      position: 'absolute', left: x - PW / 2, top: y - PH / 2, width: PW, height: PH,
      borderRadius: 14, display: 'flex', alignItems: 'center', gap: 12, padding: '0 16px', boxSizing: 'border-box',
      background: filled ? accent : 'rgba(14,22,44,0.82)',
      border: `1px solid ${filled ? accent : (glow ? 'rgba(90,160,255,0.85)' : 'rgba(90,120,180,0.34)')}`,
      boxShadow: filled || glow ? '0 0 26px rgba(45,120,255,0.55)' : 'none',
      color: filled ? '#fff' : 'rgba(222,232,250,0.94)',
      font: `400 21px ${FONT}`, lineHeight: 1.15,
    }}>
      <div style={{ flex: '0 0 auto', display: 'grid', placeItems: 'center', width: 28, height: 28 }}>
        <Icon k={label} c={filled ? '#ffffff' : accent} size={24} />
      </div>
      <span>{label}</span>
    </div>
  );
}

function Orb() {
  return (
    <div style={{
      position: 'absolute', left: ORB.x - ORB.r, top: ORB.y - ORB.r, width: ORB.r * 2, height: ORB.r * 2,
    }}>
      <div style={{
        position: 'absolute', inset: -60, borderRadius: '50%',
        background: 'radial-gradient(circle, rgba(40,110,255,0.34) 0%, rgba(20,60,160,0.12) 45%, rgba(0,0,0,0) 70%)',
      }} />
      {[0, 1, 2].map((i) => (
        <div key={i} style={{
          position: 'absolute', inset: 16 + i * 22, borderRadius: '50%',
          border: `${1.6 - i * 0.3}px solid rgba(90,160,255,${0.55 - i * 0.13})`,
          boxShadow: 'inset 0 0 30px rgba(45,120,255,0.25)',
        }} />
      ))}
      <div style={{
        position: 'absolute', inset: 84, borderRadius: '50%',
        background: 'radial-gradient(circle at 50% 45%, rgba(70,140,255,0.35), rgba(8,20,55,0.6))',
        border: '1px solid rgba(120,180,255,0.4)',
      }} />
      <div style={{
        position: 'absolute', inset: 0, display: 'grid', placeItems: 'center', textAlign: 'center',
        color: '#fff', font: `500 40px/1.15 ${FONT}`, letterSpacing: '-0.01em', textShadow: '0 0 26px rgba(60,130,255,0.9)',
      }}>Intelligence<br />Layer</div>
    </div>
  );
}

function BrainHub({ accent }: { accent: string }) {
  return (
    <div style={{ position: 'absolute', left: BRAIN.x - 92, top: BRAIN.y - 92, width: 184, height: 184 }}>
      <div style={{ position: 'absolute', inset: 0, borderRadius: '50%', border: '1px dashed rgba(90,150,255,0.4)' }} />
      <div style={{
        position: 'absolute', inset: 30, borderRadius: '50%',
        border: '1.6px solid rgba(110,175,255,0.75)',
        background: 'radial-gradient(circle at 50% 40%, rgba(30,80,190,0.55), rgba(6,14,36,0.9))',
        boxShadow: '0 0 40px rgba(45,120,255,0.55)', display: 'grid', placeItems: 'center',
      }}>
        <svg width="52" height="52" viewBox="0 0 24 24" fill="none" stroke={accent} strokeWidth="1.7" strokeLinecap="round">
          <path d="M12 4.5v15" />
          <path d="M12 6.2a3.2 3.2 0 0 0-5.6 1.5A2.9 2.9 0 0 0 4.6 12a2.9 2.9 0 0 0 1.5 4.1A3.1 3.1 0 0 0 12 17.6" />
          <path d="M12 6.2a3.2 3.2 0 0 1 5.6 1.5A2.9 2.9 0 0 1 19.4 12a2.9 2.9 0 0 1-1.5 4.1A3.1 3.1 0 0 1 12 17.6" />
          <path d="M8.6 9.4H10M8.6 13.4H10M14 9.4h1.4M14 13.4h1.4" />
        </svg>
      </div>
    </div>
  );
}

function Flow({ d, accent, width = 1.3 }: { d: string; accent: string; width?: number }) {
  return (
    <g>
      <path d={d} stroke="rgba(90,150,255,0.32)" strokeWidth={width} fill="none" />
      <path d={d} stroke={accent} strokeWidth={width + 0.6} fill="none" strokeLinecap="round"
        pathLength="1" strokeDasharray="0.035 0.125"
        opacity={0.9} style={{ filter: 'drop-shadow(0 0 6px rgba(70,140,255,0.9))' }} />
    </g>
  );
}

function Diagram({ accent, vividness }: { accent: string; vividness: number }) {
  return (
    <div style={{ position: 'absolute', inset: 0, filter: `saturate(${vividness})` }}>
      <svg width={W} height={H} style={{ position: 'absolute', inset: 0 }}>
        {SOURCES.map((s) => (
          <Flow key={s.k} accent={accent}
            d={`M 232 ${s.y} C 420 ${s.y} 470 ${ORB.y} 600 ${ORB.y}`} />
        ))}
        {COL_Y.map((y, i) => (
          <Flow key={'r' + i} accent={accent} width={1.1}
            d={`M 1000 ${ORB.y} C 1100 ${ORB.y} 1090 ${y} 1169 ${y}`} />
        ))}
        {COL_Y.map((y, i) => (
          <Flow key={'b' + i} accent={accent} width={1.1}
            d={`M 1381 ${y} C 1420 ${y} 1420 ${BRAIN.y} 1448 ${BRAIN.y}`} />
        ))}
        {COL_Y.map((y, i) => (
          <Flow key={'a' + i} accent={accent} width={1.1}
            d={`M 1568 ${BRAIN.y} C 1600 ${BRAIN.y} 1600 ${y} 1634 ${y}`} />
        ))}
      </svg>

      {SOURCES.map((s) => <SourceNode key={s.k} s={s} accent={accent} />)}

      {KEYWORDS.map(([w, x, y]) => (
        <div key={String(w)} style={{
          position: 'absolute', left: Number(x), top: Number(y), transform: 'translate(-50%,-50%)',
          color: 'rgba(190,210,245,0.72)', font: `300 25px ${FONT}`, whiteSpace: 'nowrap',
        }}>{w}</div>
      ))}

      <Orb />

      {REASON.map((l, i) => <Pill key={l} label={l} x={RX} y={COL_Y[i]} accent={accent} glow={i === 2} />)}
      <BrainHub accent={accent} />
      {ACTION.map((l, i) => <Pill key={l} label={l} x={AX} y={COL_Y[i]} accent={accent} filled={i === 2} />)}
    </div>
  );
}

/* ── the component ──────────────────────────────────────────────────────── */
export default function OperationalIntelligenceCard({
  accent = '#6C93FF',
  background = '#08090B',
  vividness = 0.8,
  className,
  style,
}: {
  accent?: string;
  background?: string;
  vividness?: number;
  className?: string;
  style?: CSSProperties;
}) {
  const hostRef = useRef<HTMLDivElement>(null);
  const [scale, setScale] = useState(1);

  useLayoutEffect(() => {
    const el = hostRef.current;
    if (!el || typeof ResizeObserver === 'undefined') return undefined;
    const fit = () => {
      const r = el.getBoundingClientRect();
      if (r.width && r.height) setScale(Math.min(r.width / W, r.height / H));
    };
    fit();
    const ro = new ResizeObserver(fit);
    ro.observe(el);
    return () => ro.disconnect();
  }, []);

  return (
    <div ref={hostRef} className={className}
      style={{ position: 'relative', width: '100%', aspectRatio: '16 / 9', overflow: 'hidden', background, ...style }}>
      <div style={{
        position: 'absolute', left: '50%', top: '50%', width: W, height: H,
        transform: `translate(-50%, -50%) scale(${scale})`, transformOrigin: '50% 50%',
      }}>
        <div style={{ position: 'absolute', inset: 0, overflow: 'hidden', background }}>
          <div style={{
            position: 'absolute', inset: 0, width: W, height: H, transformOrigin: '0 0',
            transform: `translate(${W / 2 - 960 * 1.0}px, ${H / 2 - 560 * 1.0}px) scale(1.0)`,
          }}>
            <Diagram accent={accent} vividness={vividness} />
          </div>
        </div>
      </div>
    </div>
  );
}
