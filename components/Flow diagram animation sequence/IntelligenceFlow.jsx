/**
 * IntelligenceFlow — self-contained animated flow diagram.
 * Observe → Understand → Decide → Act.
 *
 * Dependencies: React 17/18 only. No CSS files, no build config beyond JSX.
 *
 *   import IntelligenceFlow from './IntelligenceFlow';
 *   <IntelligenceFlow />
 *   <IntelligenceFlow accent="#6C93FF" background="#08090B" loop autoPlay
 *                     durations={{ Observe: 5, Understand: 5.5, Decide: 5, Act: 5, Repeat: 6.5 }}
 *                     time={2.4}          // optional: controlled playhead (seconds)
 *                     style={{ height: 540 }} />
 *
 * The component renders a 1920×1080 stage and scales it to fit its container.
 */
import React, { useEffect, useLayoutEffect, useRef, useState } from 'react';

const W = 1920, H = 1080;
const FONT = '"Helvetica Neue", Helvetica, Arial, sans-serif';

const clamp = (v, a, b) => Math.max(a, Math.min(b, v));
const lerp = (a, b, t) => a + (b - a) * t;
const easeOutCubic = (t) => 1 - Math.pow(1 - t, 3);
const easeInOutCubic = (t) => (t < 0.5 ? 4 * t * t * t : 1 - Math.pow(-2 * t + 2, 3) / 2);
const seg = (p, s, e) => clamp((p - s) / Math.max(1e-6, e - s), 0, 1);

const MOTION = {
  enter: (p, dx = -26) => ({
    opacity: clamp(p * 1.15, 0, 1),
    transform: `translate(${(1 - easeOutCubic(p)) * dx}px, 0px) scale(${lerp(0.92, 1, easeOutCubic(p))})`,
  }),
  pop: (p) => ({ opacity: clamp(p * 1.4, 0, 1), transform: `scale(${lerp(0.8, 1, easeOutCubic(p))})` }),
};

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
const STEPS = ['Observe.', 'Understand.', 'Decide.', 'Act.'];
const STEP_X = [240, 730, 1215, 1600];
const STEP_W = [231, 310, 200, 100];

const SCENE_ORDER = ['Observe', 'Understand', 'Decide', 'Act', 'Repeat'];
const DEFAULT_DURATIONS = { Observe: 5, Understand: 5.5, Decide: 5, Act: 5, Repeat: 6.5 };

const Z = { sources: 0, streams: 0, core: 0, keywords: 0, reason: 0, brain: 0, actions: 0, words: 0 };
const K = [
  { cam: [340, 545, 1.32], ...Z },
  { cam: [470, 545, 1.30], ...Z, sources: 1, streams: 0.55, core: 0.2 },
  { cam: [800, 500, 1.34], ...Z, sources: 1, streams: 1, core: 1, keywords: 1 },
  { cam: [1360, 470, 1.34], ...Z, sources: 1, streams: 1, core: 1, keywords: 1, reason: 1, brain: 1 },
  { cam: [1660, 470, 1.38], ...Z, sources: 1, streams: 1, core: 1, keywords: 1, reason: 1, brain: 1, actions: 1 },
  { cam: [960, 560, 1.0], ...Z, sources: 1, streams: 1, core: 1, keywords: 1, reason: 1, brain: 1, actions: 1, words: 1 },
];
const CAPS = [
  ['01 — Observe', 'Every signal from the floor, captured.'],
  ['02 — Understand', 'Raw signal becomes context, patterns, meaning.'],
  ['03 — Decide', 'The reasoning layer weighs what matters now.'],
  ['04 — Act', 'Decisions leave the screen and do the work.'],
  ['Continuously', 'Observe → Understand → Decide → Act.'],
];

/* ── icons ──────────────────────────────────────────────────────────────── */
function Icon({ k, c, size = 34 }) {
  const p = { fill: 'none', stroke: c, strokeWidth: 2.4, strokeLinecap: 'round', strokeLinejoin: 'round' };
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
function SourceNode({ s, p, accent }) {
  return (
    <div style={{ position: 'absolute', left: 96, top: s.y - 38, display: 'flex', alignItems: 'center', gap: 26, ...MOTION.enter(p) }}>
      <div style={{
        width: 76, height: 76, borderRadius: '50%', display: 'grid', placeItems: 'center',
        background: 'radial-gradient(circle at 50% 35%, rgba(30,70,150,0.55), rgba(8,16,38,0.9))',
        border: '1px solid rgba(120,170,255,0.35)', boxShadow: `0 0 ${22 * p}px rgba(45,120,255,0.35)`,
      }}><Icon k={s.k} c={accent} /></div>
      <div style={{ color: 'rgba(226,236,255,0.92)', font: `400 27px ${FONT}`, letterSpacing: '0.01em' }}>{s.label}</div>
    </div>
  );
}

function Pill({ label, x, y, p, accent, filled, glow }) {
  return (
    <div style={{
      position: 'absolute', left: x - PW / 2, top: y - PH / 2, width: PW, height: PH,
      borderRadius: 14, display: 'flex', alignItems: 'center', gap: 12, padding: '0 16px', boxSizing: 'border-box',
      background: filled ? accent : 'rgba(14,22,44,0.82)',
      border: `1px solid ${filled ? accent : (glow ? 'rgba(90,160,255,0.85)' : 'rgba(90,120,180,0.34)')}`,
      boxShadow: filled || glow ? `0 0 ${26 * p}px rgba(45,120,255,0.55)` : 'none',
      color: filled ? '#fff' : 'rgba(222,232,250,0.94)',
      font: `400 21px ${FONT}`, lineHeight: 1.15, ...MOTION.enter(p, -18),
    }}>
      <div style={{ flex: '0 0 auto', display: 'grid', placeItems: 'center', width: 28, height: 28 }}>
        <Icon k={label} c={filled ? '#ffffff' : accent} size={24} />
      </div>
      <span>{label}</span>
    </div>
  );
}

function Orb({ p, prog }) {
  const spin = 360 * prog;
  const pulse = 0.5 + 0.5 * Math.sin(prog * Math.PI * 6);
  return (
    <div style={{
      position: 'absolute', left: ORB.x - ORB.r, top: ORB.y - ORB.r, width: ORB.r * 2, height: ORB.r * 2,
      opacity: clamp(p * 1.3, 0, 1), transform: `scale(${lerp(0.6, 1, easeOutCubic(p))})`,
    }}>
      <div style={{
        position: 'absolute', inset: -60, borderRadius: '50%',
        background: `radial-gradient(circle, rgba(40,110,255,${0.28 + 0.12 * pulse * p}) 0%, rgba(20,60,160,0.12) 45%, rgba(0,0,0,0) 70%)`,
      }} />
      {[0, 1, 2].map((i) => (
        <div key={i} style={{
          position: 'absolute', inset: 16 + i * 22, borderRadius: '50%',
          border: `${1.6 - i * 0.3}px solid rgba(90,160,255,${0.55 - i * 0.13})`,
          transform: `rotate(${spin * (i % 2 ? -1 : 1) * (1 + i * 0.4)}deg) scaleY(${1 - i * 0.06})`,
          boxShadow: `inset 0 0 ${30 + i * 10}px rgba(45,120,255,${0.25 * p})`,
        }} />
      ))}
      <div style={{
        position: 'absolute', inset: 84, borderRadius: '50%',
        background: `radial-gradient(circle at 50% 45%, rgba(70,140,255,${0.3 + 0.1 * pulse}), rgba(8,20,55,0.6))`,
        border: '1px solid rgba(120,180,255,0.4)',
      }} />
      <div style={{
        position: 'absolute', inset: 0, display: 'grid', placeItems: 'center', textAlign: 'center',
        color: '#fff', font: `500 40px/1.15 ${FONT}`, letterSpacing: '-0.01em', textShadow: '0 0 26px rgba(60,130,255,0.9)',
      }}>Intelligence<br />Layer</div>
    </div>
  );
}

function BrainHub({ p, prog, accent }) {
  const pulse = 0.5 + 0.5 * Math.sin(prog * Math.PI * 6);
  return (
    <div style={{ position: 'absolute', left: BRAIN.x - 92, top: BRAIN.y - 92, width: 184, height: 184, ...MOTION.pop(p) }}>
      <div style={{ position: 'absolute', inset: 0, borderRadius: '50%', border: '1px dashed rgba(90,150,255,0.4)', transform: `rotate(${360 * prog}deg)` }} />
      <div style={{
        position: 'absolute', inset: 30, borderRadius: '50%',
        border: `1.6px solid rgba(110,175,255,${0.6 + 0.3 * pulse})`,
        background: 'radial-gradient(circle at 50% 40%, rgba(30,80,190,0.55), rgba(6,14,36,0.9))',
        boxShadow: `0 0 ${30 + 26 * pulse}px rgba(45,120,255,0.55)`, display: 'grid', placeItems: 'center',
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

function Flow({ d, p, prog, accent, width = 1.3, speed = 6 }) {
  if (p <= 0) return null;
  const off = -((prog * speed) % 1) * 0.16;
  return (
    <g>
      <path d={d} stroke="rgba(90,150,255,0.32)" strokeWidth={width} fill="none"
        pathLength="1" strokeDasharray="1 1" strokeDashoffset={1 - easeOutCubic(p)} />
      <path d={d} stroke={accent} strokeWidth={width + 0.6} fill="none" strokeLinecap="round"
        pathLength="1" strokeDasharray="0.035 0.125" strokeDashoffset={off}
        opacity={0.9 * easeOutCubic(p)} style={{ filter: 'drop-shadow(0 0 6px rgba(70,140,255,0.9))' }} />
    </g>
  );
}

function Diagram({ r, prog, accent, vividness }) {
  const stag = (v, i, n) => clamp((v - i * (0.5 / n)) / 0.5, 0, 1);
  return (
    <div style={{ position: 'absolute', inset: 0, filter: `saturate(${vividness})` }}>
      <svg width={W} height={H} style={{ position: 'absolute', inset: 0 }}>
        {SOURCES.map((s, i) => (
          <Flow key={s.k} accent={accent} prog={prog} p={stag(r.streams, i, 5)}
            d={`M 232 ${s.y} C 420 ${s.y} 470 ${ORB.y} 600 ${ORB.y}`} />
        ))}
        {COL_Y.map((y, i) => (
          <Flow key={'r' + i} accent={accent} prog={prog} p={stag(r.reason, i, 5)} width={1.1}
            d={`M 1000 ${ORB.y} C 1100 ${ORB.y} 1090 ${y} 1169 ${y}`} />
        ))}
        {COL_Y.map((y, i) => (
          <Flow key={'b' + i} accent={accent} prog={prog} p={stag(r.brain, i, 5)} width={1.1} speed={4}
            d={`M 1381 ${y} C 1420 ${y} 1420 ${BRAIN.y} 1448 ${BRAIN.y}`} />
        ))}
        {COL_Y.map((y, i) => (
          <Flow key={'a' + i} accent={accent} prog={prog} p={stag(r.actions, i, 5)} width={1.1} speed={4}
            d={`M 1568 ${BRAIN.y} C 1600 ${BRAIN.y} 1600 ${y} 1634 ${y}`} />
        ))}
        {[0, 1, 2].map((i) => {
          const p = clamp((r.words - 0.18 - i * 0.16) / 0.4, 0, 1);
          const mid = (STEP_X[i] + STEP_W[i] + STEP_X[i + 1]) / 2;
          return (
            <path key={'s' + i} d={`M ${mid - 46} 812 L ${mid + 46} 812`} stroke="rgba(150,180,225,0.7)"
              strokeWidth="2" strokeLinecap="round" fill="none" pathLength="1" strokeDasharray="0.045 0.055"
              opacity={p} style={{ clipPath: `inset(0 ${(1 - easeOutCubic(p)) * 100}% 0 0)` }} />
          );
        })}
        <path d="M 1700 852 C 1700 940 1300 946 900 946 C 500 946 250 936 250 856"
          stroke="rgba(110,150,215,0.55)" strokeWidth="1.8" fill="none" strokeLinecap="round"
          pathLength="1" strokeDasharray="1 1" strokeDashoffset={1 - easeOutCubic(clamp((r.words - 0.6) / 0.4, 0, 1))} />
      </svg>

      {SOURCES.map((s, i) => <SourceNode key={s.k} s={s} accent={accent} p={stag(r.sources, i, 5)} />)}

      {KEYWORDS.map(([w, x, y], i) => {
        const p = stag(r.keywords, i, 9);
        return (
          <div key={w} style={{
            position: 'absolute', left: x, top: y + (1 - easeOutCubic(p)) * 10, transform: 'translate(-50%,-50%)',
            color: `rgba(190,210,245,${0.72 * p})`, font: `300 25px ${FONT}`, whiteSpace: 'nowrap',
          }}>{w}</div>
        );
      })}

      <Orb p={r.core} prog={prog} />

      {REASON.map((l, i) => <Pill key={l} label={l} x={RX} y={COL_Y[i]} accent={accent} p={stag(r.reason, i, 5)} glow={i === 2} />)}
      <BrainHub p={r.brain} prog={prog} accent={accent} />
      {ACTION.map((l, i) => <Pill key={l} label={l} x={AX} y={COL_Y[i]} accent={accent} p={stag(r.actions, i, 5)} filled={i === 2} />)}

      {STEPS.map((s, i) => {
        const p = clamp((r.words - i * 0.14) / 0.42, 0, 1);
        return (
          <div key={s} style={{
            position: 'absolute', left: STEP_X[i], top: 812,
            transform: `translate(0,-50%) translateY(${(1 - easeOutCubic(p)) * 14}px)`,
            color: '#eef3ff', font: `300 62px ${FONT}`, letterSpacing: '-0.02em', opacity: p,
            textShadow: '0 0 30px rgba(40,90,200,0.5)',
          }}>{s}</div>
        );
      })}
      <div style={{
        position: 'absolute', left: 0, right: 0, top: 968, textAlign: 'center',
        color: `rgba(180,200,235,${0.9 * clamp((r.words - 0.55) / 0.45, 0, 1)})`, font: `300 30px ${FONT}`,
      }}>Repeat — turning every operational moment into better business outcomes.</div>
    </div>
  );
}

function Caption({ i, p, background }) {
  const vis = i === 4 ? 0 : seg(p, 0.06, 0.2) * (1 - seg(p, 0.86, 0.97));
  const [t, s] = CAPS[i] || CAPS[0];
  const rgb = hexToRgb(background);
  return (
    <React.Fragment>
      <div style={{
        position: 'absolute', left: 0, right: 0, bottom: 0, height: 300, pointerEvents: 'none', opacity: vis,
        background: `linear-gradient(to top, rgba(${rgb},0.94) 12%, rgba(${rgb},0.72) 45%, rgba(${rgb},0) 100%)`,
      }} />
      <div style={{
        position: 'absolute', left: 92, bottom: 82, opacity: vis,
        transform: `translateY(${(1 - easeOutCubic(seg(p, 0.06, 0.2))) * 16}px)`,
      }}>
        <div style={{ color: 'rgba(140,180,255,0.95)', font: `500 24px ${FONT}`, letterSpacing: '0.16em', textTransform: 'uppercase' }}>{t}</div>
        <div style={{ color: 'rgba(232,240,255,0.95)', font: `300 40px ${FONT}`, marginTop: 12, letterSpacing: '-0.01em' }}>{s}</div>
      </div>
    </React.Fragment>
  );
}

function hexToRgb(hex) {
  const h = String(hex || '#08090B').replace('#', '');
  const n = parseInt(h.length === 3 ? h.split('').map((c) => c + c).join('') : h, 16);
  return `${(n >> 16) & 255},${(n >> 8) & 255},${n & 255}`;
}

/* ── the component ──────────────────────────────────────────────────────── */
export default function IntelligenceFlow({
  accent = '#6C93FF',
  background = '#08090B',
  vividness = 0.8,
  durations = DEFAULT_DURATIONS,
  autoPlay = true,
  loop = false,
  time,                 // controlled playhead in seconds (disables internal clock)
  onEnded,
  className,
  style,
}) {
  const durs = SCENE_ORDER.map((n) => Math.max(0.2, (durations && durations[n]) || DEFAULT_DURATIONS[n]));
  const total = durs.reduce((a, b) => a + b, 0);

  const hostRef = useRef(null);
  const [scale, setScale] = useState(1);
  const [clock, setClock] = useState(0);
  const controlled = typeof time === 'number';
  const t = clamp(controlled ? time : clock, 0, total);

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

  useEffect(() => {
    if (controlled || !autoPlay) return undefined;
    let raf, last = null, done = false;
    const tick = (ts) => {
      if (last == null) last = ts;
      const dt = (ts - last) / 1000; last = ts;
      setClock((c) => {
        let n = c + dt;
        if (n >= total) {
          if (loop) { n = n % total; }
          else { n = total; if (!done) { done = true; onEnded && onEnded(); } }
        }
        return n;
      });
      raf = requestAnimationFrame(tick);
    };
    raf = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(raf);
  }, [controlled, autoPlay, loop, total, onEnded]);

  // resolve scene + local progress
  let idx = 0, acc = 0;
  for (let i = 0; i < durs.length; i++) {
    if (t < acc + durs[i] || i === durs.length - 1) { idx = i; break; }
    acc += durs[i];
  }
  const progress = clamp((t - acc) / durs[idx], 0, 1);

  const a = K[idx], b = K[idx + 1];
  const e = easeInOutCubic(progress);
  const rp = clamp(progress / 0.82, 0, 1);
  const cam = [lerp(a.cam[0], b.cam[0], e), lerp(a.cam[1], b.cam[1], e), lerp(a.cam[2], b.cam[2], e)];
  const r = {};
  Object.keys(Z).forEach((k) => { r[k] = lerp(a[k], b[k], rp); });

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
            transform: `translate(${W / 2 - cam[0] * cam[2]}px, ${H / 2 - cam[1] * cam[2]}px) scale(${cam[2]})`,
          }}>
            <Diagram r={r} prog={progress} accent={accent} vividness={vividness} />
          </div>
          <Caption i={idx} p={progress} background={background} />
        </div>
      </div>
    </div>
  );
}

export { SCENE_ORDER, DEFAULT_DURATIONS };
