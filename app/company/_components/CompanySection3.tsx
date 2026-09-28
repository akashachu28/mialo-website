import { Section } from "@/components/ui";
import { Eye, Target } from "lucide-react";

const PILLARS = [
  {
    title: ["OUR", "VISION"],
    body: "A future where every organization can understand what is happening across its operations and make better decisions as events unfold.",
    icon: Eye,
  },
  {
    title: ["OUR", "MISSION"],
    body: "To make enterprise operations more intelligent by turning real-world signals into timely, useful action.",
    icon: Target,
  },
];

const font = { fontFamily: "var(--font-manrope), sans-serif" };

export default function CompanySection3() {
  const [vision, mission] = PILLARS;

  return (
    <Section className="py-20 sm:py-32">
      {/* ---------- Desktop / tablet: diagonal layout ---------- */}
      <div
        className="relative hidden md:block w-full overflow-hidden rounded-3xl bg-transparent"
        style={{ aspectRatio: "1457 / 807", containerType: "inline-size" }}
      >
        <svg
          viewBox="0 0 1457 807"
          className="absolute inset-0 h-full w-full"
          aria-hidden="true"
        >
          <defs>
            {/* dark gray (bottom-left) -> slate (top-right) */}
            <linearGradient id="visionGrad" x1="0" y1="1" x2="1" y2="0">
              <stop offset="0%" stopColor="#111827" />
              <stop offset="55%" stopColor="#1e293b" />
              <stop offset="100%" stopColor="#334155" />
            </linearGradient>
            {/* blue-grey (top-right) fading to white (bottom-left) */}
            <linearGradient id="missionGrad" x1="1" y1="0" x2="0" y2="1">
              <stop offset="0%" stopColor="#D5DDE8" />
              <stop offset="60%" stopColor="#E6EBF2" />
              <stop offset="100%" stopColor="#FFFFFF" />
            </linearGradient>
          </defs>

          {/* Vision: rotated rounded block, rounded corner at the bottom */}
          <path
            d="M0 0 H1105 L345 679 Q232 780 122 670 L0 548 Z"
            fill="url(#visionGrad)"
          />

          {/* Mission: parallel diagonal, rounded corner at the top */}
          <path
            d="M313 807 L1118 86 Q1215 0 1315 100 L1457 242 V807 Z"
            fill="url(#missionGrad)"
          />
        </svg>

        {/* Vision text */}
        <div className="absolute" style={{ left: "6%", top: "14%", width: "38%" }}>
          <h2
            className="text-white"
            style={{
              ...font,
              fontWeight: 800,
              fontSize: "5cqw",
              lineHeight: 0.95,
              letterSpacing: "-0.01em",
            }}
          >
            {vision.title[0]}
            <br />
            {vision.title[1]}
          </h2>
          <p
            className="text-white/95"
            style={{
              ...font,
              fontSize: "1.6cqw",
              lineHeight: 1.45,
              marginTop: "2cqw",
            }}
          >
            {vision.body}
          </p>
        </div>

        {/* Vision icon (bottom-left) */}
        <vision.icon
          className="absolute text-white"
          strokeWidth={1.5}
          style={{ left: "10.5%", top: "68%", width: "13%", height: "13%" }}
        />

        {/* Mission icon (top-right) */}
        <mission.icon
          className="absolute text-[#14507F]"
          strokeWidth={1.75}
          style={{ left: "77.5%", top: "12%", width: "9%", height: "9%" }}
        />

        {/* Mission text */}
        <div className="absolute" style={{ left: "62%", top: "46%", width: "33%" }}>
          <h2
            className="text-[#14507F]"
            style={{
              ...font,
              fontWeight: 800,
              fontSize: "5cqw",
              lineHeight: 0.95,
              letterSpacing: "-0.01em",
            }}
          >
            {mission.title[0]}
            <br />
            {mission.title[1]}
          </h2>
          <p
            className="text-[#1a1a1a]"
            style={{
              ...font,
              fontSize: "1.6cqw",
              lineHeight: 1.45,
              marginTop: "2cqw",
            }}
          >
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
          <mission.icon className="mb-6 h-10 w-10" strokeWidth={1.75} />
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
    </Section>
  );
}