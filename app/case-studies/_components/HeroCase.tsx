import Image from "next/image";
import { Container, Kicker } from "@/components/ui";
import { Eye, ScanSearch, Factory } from "lucide-react";

const TAGS = [
  { label: "Machine Vision", icon: Eye },
  { label: "Quality Inspection", icon: ScanSearch },
  { label: "Factory Intelligence", icon: Factory },
];

export default function HeroCase() {
  return (
    <section className="relative overflow-hidden pt-24 pb-16 sm:pt-28 sm:pb-24 lg:pt-40">
      {/* Grid texture overlay */}
      <div aria-hidden className="absolute inset-0">
        <div
          aria-hidden
          className="pointer-events-none absolute inset-0 opacity-20 sm:opacity-30"
          style={{
            backgroundImage:
              "linear-gradient(var(--color-pista) 1px, transparent 1px), linear-gradient(90deg, var(--color-pista) 1px, transparent 1px)",
            backgroundSize: "62px 62px",
            maskImage:
              "radial-gradient(ellipse 80% 60% at 50% 0%, #000 0%, transparent 75%)",
            WebkitMaskImage:
              "radial-gradient(ellipse 80% 60% at 50% 0%, #000 0%, transparent 75%)",
          }}
        />
        <div className="absolute inset-0 bg-background/20" />
        {/* Subtle gradient overlay */}
        <div
          className="absolute inset-0"
          style={{
            background:
              "linear-gradient(135deg, transparent 0%, rgba(8,9,11,0.3) 40%, rgba(8,9,11,0.7) 100%)",
          }}
        />
      </div>

      {/* Background image — full cover */}
      <div className="absolute inset-0 pointer-events-none opacity-40 sm:opacity-50">
        <Image
          src="/images/case_study_hero.png"
          alt="Case studies background visualization"
          fill
          sizes="100vw"
          className="object-cover object-center"
          priority
        />
        {/* Left-side fade so text stays readable */}
        <div
          className="absolute inset-0"
          style={{
            background:
              "linear-gradient(to right, rgba(8,9,11,0.85) 0%, rgba(8,9,11,0.55) 50%, rgba(8,9,11,0.2) 100%)",
          }}
        />
        {/* Top & bottom fades */}
        <div
          className="absolute inset-0"
          style={{
            background:
              "linear-gradient(to bottom, rgba(8,9,11,0.7) 0%, transparent 40%, rgba(8,9,11,0.6) 100%)",
          }}
        />
      </div>

      <Container className="relative">
        <div className="flex flex-col items-start gap-5 sm:gap-7 text-center sm:text-left">
          {/* Headline */}
          <h1
            className="max-w-[1080px] text-balance text-primary"
            style={{
              fontFamily: "var(--font-manrope), sans-serif",
              fontWeight: 400,
              fontSize: "clamp(32px, 8vw, 70px)",
              lineHeight: 1.05,
              letterSpacing: "-0.045em",
            }}
          >
            Real-world challenges.
            <br />
            <span className="text-pista">AI-powered solutions.</span>
          </h1>

          {/* Subheading */}
          <p
            className="max-w-[600px] text-ink text-pretty"
            style={{
              fontFamily: "var(--font-manrope), sans-serif",
              fontWeight: 400,
              fontSize: "clamp(16px, 4vw, 24px)",
              lineHeight: 1.4,
              letterSpacing: "-0.025em",
              wordSpacing: 3,
            }}
          >
            Explore how Mialo.AI helps manufacturers and industrial operators
            improve quality, accuracy and efficiency through computer vision and
            intelligent inspection.
          </p>

          {/* Tag pills */}
          <div className="flex flex-wrap items-center justify-center sm:justify-start gap-3 mt-2">
            {TAGS.map(({ label, icon: Icon }) => (
              <div
                key={label}
                className="flex items-center gap-2 rounded-full border border-line-2 bg-panel/60 backdrop-blur-sm px-4 py-2"
              >
                <span className="flex h-5 w-5 items-center justify-center rounded-md bg-pista/10 text-pista">
                  <Icon className="h-3 w-3" strokeWidth={1.5} />
                </span>
                <Kicker className="text-[11px] text-primary">{label}</Kicker>
              </div>
            ))}
          </div>
        </div>
      </Container>
    </section>
  );
}
