import { Eye } from "lucide-react";
import type { SVGProps } from "react";

/* Custom target + arrow icon (same props as a lucide icon) */
function TargetArrow({ strokeWidth = 1.75, ...props }: SVGProps<SVGSVGElement>) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth={strokeWidth}
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
      {...props}
    >
      {/* outer ring, gap at top-right */}
      <path d="M16.69 3.17 A10 10 0 1 0 21.06 7.77" />
      {/* middle ring */}
      <path d="M14.95 6.21 A6.5 6.5 0 1 0 17.98 9.46" />
      {/* inner ring */}
      <path d="M13.18 9.46 A2.8 2.8 0 1 0 14.63 11.04" />
      {/* arrow shaft */}
      <path d="M12 12 L17 7" />
      {/* arrow fletching */}
      <path d="M16.3 6.2 L19.3 3 L19.9 4.4 L21.4 5 L18.2 8.2 L17 7.5 Z" />
    </svg>
  );
}

const PILLARS = [
  {
    title: ["OUR", "VISION"],
    body: "A future where every organization can understand what is happening across its operations and make better decisions as events unfold.",
    icon: Eye,
  },
  {
    title: ["OUR", "MISSION"],
    body: "To make enterprise operations more intelligent by turning real-world signals into timely, useful action.",
    icon: TargetArrow,
  },
];

const font = { fontFamily: "var(--font-manrope), sans-serif" };

const heading = {
  ...font,
  fontWeight: 800,
  fontSize: "5cqw",
  lineHeight: 0.95,
  letterSpacing: "-0.01em",
} as const;

const paragraph = {
  ...font,
  fontSize: "1.6cqw",
  lineHeight: 1.45,
  marginTop: "2cqw",
} as const;

export default function CompanySection3() {
  const [vision, mission] = PILLARS;

  return (
    <div className="w-full px-4 pb-12 sm:px-6 sm:pb-20 lg:px-8">
      {/* ---------- Desktop / tablet: diagonal layout ---------- */}
      <div
        className="relative mx-auto hidden overflow-hidden rounded-3xl md:block"
        style={{
          aspectRatio: "1457 / 620",
          // never taller than 90vh; width shrinks with it so nothing distorts
          width: "min(100%, calc(90vh * 1457 / 620))",
          containerType: "inline-size",
        }}
      >
        <svg
          viewBox="0 0 1457 620"
          className="absolute inset-0 h-full w-full"
          aria-hidden="true"
        >
          <defs>
            <linearGradient id="visionGrad" x1="0" y1="1" x2="1" y2="0">
              <stop offset="0%" stopColor="#111827" />
              <stop offset="55%" stopColor="#1e293b" />
              <stop offset="100%" stopColor="#334155" />
            </linearGradient>
            <linearGradient id="missionGrad" x1="1" y1="0" x2="0" y2="1">
              <stop offset="0%" stopColor="#D5DDE8" />
              <stop offset="60%" stopColor="#E6EBF2" />
              <stop offset="100%" stopColor="#FFFFFF" />
            </linearGradient>
          </defs>

          {/* Vision */}
          <path
            d="M0 0 H1105 L345 523 Q232 600 122 516 L0 422 Z"
            fill="url(#visionGrad)"
          />

          {/* Mission: edge is parallel to Vision's diagonal */}
          <path
            d="M245 620 L1050 66 Q1140 0 1240 100 L1457 317 V620 Z"
            fill="url(#missionGrad)"
          />
        </svg>

        {/* Vision text (top-left, inside the dark shape) */}
        <div className="absolute" style={{ left: "6%", top: "12%", width: "33%" }}>
          <h2 className="text-pista" style={heading}>
            {vision.title[0]}
            <br />
            {vision.title[1]}
          </h2>
          <p className="text-white/95" style={paragraph}>
            {vision.body}
          </p>
        </div>

        {/* Vision icon (bottom-left) */}
        <vision.icon
          className="absolute text-pista"
          strokeWidth={1.5}
          style={{ left: "11%", top: "63%", width: "9%", height: "auto", aspectRatio: "1" }}
        />

        {/* Mission icon (top-right) */}
        <mission.icon
          className="absolute text-ice"
          strokeWidth={2}
          style={{ left: "77%", top: "21%", width: "5.5%", height: "auto", aspectRatio: "1" }}
        />

        {/* Mission text (bottom-right, inside the light shape) */}
        <div className="absolute" style={{ left: "58%", top: "42%", width: "36%" }}>
          <h2 className="text-ice" style={heading}>
            {mission.title[0]}
            <br />
            {mission.title[1]}
          </h2>
          <p className="text-[#1a1a1a]" style={paragraph}>
            {mission.body}
          </p>
        </div>
      </div>

      {/* ---------- Mobile: stacked cards ---------- */}
      <div className="flex flex-col gap-4 md:hidden">
        <div
          className="rounded-3xl p-8 text-white"
          style={{ background: "linear-gradient(45deg, #111827, #1e293b 55%, #334155)" }}
        >
          <vision.icon className="mb-6 h-10 w-10" strokeWidth={1.5} />
          <h2 className="text-4xl font-extrabold leading-none" style={font}>
            {vision.title[0]}
            <br />
            {vision.title[1]}
          </h2>
          <p className="mt-4 text-base leading-relaxed text-white/95" style={font}>
            {vision.body}
          </p>
        </div>

        <div
          className="rounded-3xl p-8 text-[#14507F]"
          style={{ background: "linear-gradient(225deg, #D5DDE8, #F4F6FA)" }}
        >
          <mission.icon className="mb-6 h-10 w-10" strokeWidth={2} />
          <h2 className="text-4xl font-extrabold leading-none" style={font}>
            {mission.title[0]}
            <br />
            {mission.title[1]}
          </h2>
          <p className="mt-4 text-base leading-relaxed text-[#1a1a1a]" style={font}>
            {mission.body}
          </p>
        </div>
      </div>
    </div>
  );
}