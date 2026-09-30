import Image from "next/image";
import { Container, Kicker } from "@/components/ui";
import { Layers, Zap, TrendingUp } from "lucide-react";

const PANEL = [
  {
    title: "One layer, many worlds",
    body: "The same intelligence core, tuned to the signals and constraints of each sector.",
    icon: Layers,
  },
  {
    title: "Real-time by default",
    body: "Awareness of what is happening now - not a report on what happened last week.",
    icon: Zap,
  },
  {
    title: "Measurable outcomes",
    body: "Safety, uptime, service levels and cost, moved in the direction that matters.",
    icon: TrendingUp,
  },
];

export default function HeroIndustry() {
  return (
    <section className="relative overflow-hidden pt-20 pb-12 sm:pt-32 sm:pb-16 md:pt-40 md:pb-20 lg:pt-52 lg:pb-24 xl:pt-60 xl:pb-28">
      {/* dot-grid backdrop, faded from the top */}
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 opacity-15 sm:opacity-20 md:opacity-25 lg:opacity-30"
        style={{
          backgroundImage:
            "linear-gradient(var(--color-pista) 1px, transparent 1px), linear-gradient(90deg, var(--color-pista) 1px, transparent 1px)",
          backgroundSize: "40px 40px",
          maskImage:
            "radial-gradient(ellipse 80% 60% at 50% 0%, #000 0%, transparent 75%)",
          WebkitMaskImage:
            "radial-gradient(ellipse 80% 60% at 50% 0%, #000 0%, transparent 75%)",
        }}
      />
      
      <div className="absolute inset-0 bg-background/20" />
      
      {/* Background image covering responsive dimensions */}
      <div className="absolute right-0 bottom-0 w-full h-[40vh] sm:w-[85vw] sm:h-[55vh] md:w-[80vw] md:h-[60vh] lg:w-[75vw] lg:h-[65vh] xl:w-[70vw] xl:h-[70vh] 2xl:w-[65vw] 2xl:h-[75vh] pointer-events-none opacity-30 sm:opacity-40 md:opacity-45 lg:opacity-50">
        <Image
          src="/images/indusBG.png"
          alt="Industries background visualization"
          fill
          sizes="(max-width: 480px) 100vw, (max-width: 768px) 85vw, (max-width: 1024px) 80vw, (max-width: 1280px) 75vw, (max-width: 1536px) 70vw, 65vw"
          className="object-cover object-center"
          priority
        />
      </div>

      <Container className="relative z-10">
        <div className="flex flex-col items-center sm:items-start gap-4 sm:gap-5 md:gap-6 lg:gap-7 text-center sm:text-left">
          <h1 
            className="w-full max-w-full sm:max-w-[600px] md:max-w-[800px] lg:max-w-[1080px] text-balance text-primary px-4 sm:px-0"
            style={{ 
              fontFamily: "var(--font-manrope), sans-serif",
              fontWeight: 400,
              fontSize: "clamp(24px, 6vw, 70px)",
              lineHeight: "clamp(1.1, 1.05, 1.05)",
              letterSpacing: "-0.045em",
            }}
          >
            Operational intelligence.
            <br className="hidden sm:block" />
            <span className="sm:inline block mt-1 sm:mt-0"> </span>
            <span className="text-pista">For every industry.</span>
          </h1>

          <p 
            className="w-full max-w-full sm:max-w-[500px] md:max-w-[600px] text-ink text-pretty px-4 sm:px-0"
            style={{ 
              fontFamily: "var(--font-manrope), sans-serif",
              fontWeight: 400,
              fontSize: "clamp(14px, 3.5vw, 24px)",
              lineHeight: "clamp(1.5, 1.4, 1.4)",
              letterSpacing: "-0.025em",
              wordSpacing: 3,
            }}
          >
            Mialo&apos;s unified intelligence layer adapts to your world,
            delivering real-time awareness, smarter decisions and measurable
            impact across industries.
          </p>
        </div>

        {/* one layer, every sector */}
        <div className="mt-8 sm:mt-12 md:mt-14 lg:mt-16 mx-4 sm:mx-0 overflow-hidden rounded-xl sm:rounded-[18px] border border-line-2 bg-linear-to-b from-panel/40 to-raise/50 backdrop-blur-[2px]">
          <div className="flex items-center justify-center sm:justify-between border-b border-line px-3 py-2.5 sm:px-4 sm:py-3 md:px-5 md:py-4 lg:px-6">
            <Kicker className="text-xs sm:text-[11px]">Mialo · One Intelligence Layer</Kicker>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 border-t border-line">
            {PANEL.map((p, i) => {
              const Icon = p.icon;
              return (
                <div
                  key={p.title}
                  className={`p-4 sm:p-5 md:p-6 lg:p-7 xl:p-8 text-center sm:text-left ${
                    i > 0 ? "border-t border-line sm:border-t lg:border-t-0 lg:border-l" : ""
                  } ${
                    i === 1 ? "sm:border-l" : ""
                  }`}
                >
                  <div className="mb-2.5 sm:mb-3 md:mb-4 mx-auto sm:mx-0 inline-flex h-8 w-8 sm:h-9 sm:w-9 md:h-10 md:w-10 lg:h-11 lg:w-11 items-center justify-center rounded-lg bg-pista/10 text-pista">
                    <Icon className="h-3.5 w-3.5 sm:h-4 sm:w-4 md:h-4.5 md:w-4.5 lg:h-5 lg:w-5" strokeWidth={1.5} />
                  </div>
                  <div className="space-y-1.5 sm:space-y-2">
                    <Kicker className="text-pista text-[10px] sm:text-[11px] block">{p.title}</Kicker>
                    {/* <p className="text-xs sm:text-[13px] leading-relaxed text-muted px-1 sm:px-0">
                      {p.body}
                    </p> */}
                  </div>
                </div>
              );
            })}
          </div>

          <div className="h-1 sm:h-1.5 bg-linear-to-r from-transparent via-ice/30 to-transparent" />
        </div>
      </Container>
    </section>
  );
}
