import Image from "next/image";

const PILLARS = [
  {
    title: ["OUR", "VISION"],
    body: "A future where every organization can understand what is happening across its operations and make better decisions as events unfold.",
    icon: "/images/eye_ic.png",
  },
  {
    title: ["OUR", "MISSION"],
    body: "To make enterprise operations more intelligent by turning real-world signals into timely, useful action.",
    icon: "/images/target_ic.png",
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
    <div className="w-full px-4 pb-12 sm:px-6 sm:pb-16 md:pb-20 lg:px-8">
      {/* ---------- Desktop / tablet: diagonal layout ---------- */}
      <div
        className="relative mx-auto hidden overflow-hidden rounded-2xl sm:rounded-3xl md:block"
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
            d="M0 0 H1105 L345 520 Q232 600 122 516 L0 422 Z"
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
          <h2 className="text-pista" 
          style={{
                        fontFamily: "var(--font-manrope), sans-serif",
                        fontWeight: 600,
                        fontSize: "clamp(24px, 4.5vw, 60px)",
                        lineHeight: "clamp(1.1, 0.96, 0.96)",
                        letterSpacing: "-0.03em",
                      }}>
            {vision.title[0]}
            <br />
            {vision.title[1]}
          </h2>
          <p className="text-white/95 mt-3 sm:mt-4" style={{
                        fontFamily: "var(--font-manrope), sans-serif",
                        fontWeight: 400,
                        fontSize: "clamp(14px, 2.8vw, 26px)",
                        lineHeight: "clamp(1.3, 1.05, 1.05)",
                        letterSpacing: "-0.03em",
                      }}>
            {vision.body}
          </p>
        </div>

        {/* Vision icon (bottom-left) */}
        <div
          className="absolute"
          style={{ left: "11%", top: "63%", width: "clamp(6%, 9%, 9%)", aspectRatio: "1" }}
        >
          <Image
            src={vision.icon}
            alt="Vision icon"
            fill
            className="object-contain"
            sizes="(max-width: 768px) 6vw, 9vw"
          />
        </div>

        {/* Mission icon (top-right) */}
        <div
          className="absolute"
          style={{ right: "19%", top: "15%", width: "clamp(5%, 7%, 7%)", aspectRatio: "1" }}
        >
          <Image
            src={mission.icon}
            alt="Mission icon"
            fill
            className="object-contain"
            sizes="(max-width: 768px) 5vw, 7vw"
          />
        </div>

        {/* Mission text (bottom-right, inside the light shape) */}
        <div className="absolute" style={{ left: "58%", top: "42%", width: "36%" }}>
          <h2 className="text-ice" style={{
                        fontFamily: "var(--font-manrope), sans-serif",
                        fontWeight: 600,
                        fontSize: "clamp(24px, 4.5vw, 60px)",
                        lineHeight: "clamp(1.1, 0.96, 0.96)",
                        letterSpacing: "-0.03em",
                      }}>
            {mission.title[0]}
            <br />
            {mission.title[1]}
          </h2>
          <p className="text-[#1a1a1a] mt-3 sm:mt-4" style={{
                        fontFamily: "var(--font-manrope), sans-serif",
                        fontWeight: 400,
                        fontSize: "clamp(14px, 2.8vw, 26px)",
                        lineHeight: "clamp(1.3, 1.05, 1.05)",
                        letterSpacing: "-0.03em",
                      }}>
            {mission.body}
          </p>
        </div>
      </div>

      {/* ---------- Mobile: stacked cards ---------- */}
      <div className="flex flex-col gap-4 md:hidden">
        <div
          className="rounded-2xl sm:rounded-3xl p-6 sm:p-8 text-white"
          style={{ background: "linear-gradient(45deg, #111827, #1e293b 55%, #334155)" }}
        >
          <div className="mb-4 sm:mb-6 relative h-8 w-8 sm:h-10 sm:w-10">
            <Image
              src={vision.icon}
              alt="Vision icon"
              fill
              className="object-contain"
              sizes="(max-width: 640px) 32px, 40px"
            />
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold leading-none text-pista" style={{
            fontFamily: "var(--font-manrope), sans-serif",
            fontSize: "clamp(28px, 8vw, 40px)",
            lineHeight: "clamp(1.1, 1, 1)",
          }}>
            {vision.title[0]}
            <br />
            {vision.title[1]}
          </h2>
          <p className="mt-3 sm:mt-4 text-sm sm:text-base leading-relaxed text-white/95" style={font}>
            {vision.body}
          </p>
        </div>

        <div
          className="rounded-2xl sm:rounded-3xl p-6 sm:p-8 text-[#14507F]"
          style={{ background: "linear-gradient(225deg, #D5DDE8, #F4F6FA)" }}
        >
          <div className="mb-4 sm:mb-6 relative h-8 w-8 sm:h-10 sm:w-10">
            <Image
              src={mission.icon}
              alt="Mission icon"
              fill
              className="object-contain"
              sizes="(max-width: 640px) 32px, 40px"
            />
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold leading-none text-ice" style={{
            fontFamily: "var(--font-manrope), sans-serif",
            fontSize: "clamp(28px, 8vw, 40px)",
            lineHeight: "clamp(1.1, 1, 1)",
          }}>
            {mission.title[0]}
            <br />
            {mission.title[1]}
          </h2>
          <p className="mt-3 sm:mt-4 text-sm sm:text-base leading-relaxed text-[#1a1a1a]" style={font}>
            {mission.body}
          </p>
        </div>
      </div>
    </div>
  );
}