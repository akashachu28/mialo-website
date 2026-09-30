import { Container, Kicker } from "@/components/ui";
import { Layers, Workflow, Globe } from "lucide-react";

const PANEL = [
  {
    title: "The intelligence layer",
    body: "Multimodal AI, domain expertise and edge-native architecture in a single platform.",
    icon: Layers,
  },
  {
    title: "Built for operations",
    body: "Vision, voice, document, sensor and enterprise signals, turned into real-time action.",
    icon: Workflow,
  },
  {
    title: "Deployed worldwide",
    body: "Enterprises and public-sector teams across Asia, Africa and North America.",
    icon: Globe,
  },
];

export default function HeroCompany() {
  return (
    <section className="relative overflow-hidden pt-24 pb-16 sm:pt-28 sm:pb-24 lg:pt-40">
      {/* dot-grid backdrop, faded from the top */}
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

      <Container className="relative">
        <div className="flex flex-col items-start gap-5 sm:gap-7 text-center sm:text-left">
          <h1
            className="max-w-[1080px] text-balance text-primary"
            style={{
              fontFamily: "var(--font-manrope), sans-serif",
              fontWeight: 400,
              fontSize: "clamp(28px, 7vw, 70px)",
              lineHeight: 1.05,
              letterSpacing: "-0.045em",
            }}
          >
            Wherever operations happen,
            <br />
            <span className="text-pista">
              intelligence can make a difference.
            </span>
          </h1>

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
            We connect AI with real-world operational signals to help
            organizations understand what&apos;s happening, make better decisions and
            act in real time
          </p>
        </div>

        {/* Mialo at a glance */}
        <div className="mt-12 sm:mt-16 overflow-hidden rounded-[12px] sm:rounded-[18px] border border-line-2 bg-linear-to-b from-panel to-raise">
          <div className="flex items-center justify-between border-b border-line px-4 py-3 sm:px-5 sm:py-4 lg:px-6">
            <Kicker>Mialo · Global Operations</Kicker>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-3 border-t border-line">
            {PANEL.map((p, i) => {
              const Icon = p.icon;
              return (
                <div
                  key={p.title}
                  className={`p-5 sm:p-7 lg:p-8 text-center sm:text-left ${
                    i > 0
                      ? "border-t border-line sm:border-t-0 sm:border-l"
                      : ""
                  }`}
                >
                  <div className="mb-3 sm:mb-4 mx-auto sm:mx-0 mr-2 inline-flex h-9 w-9 sm:h-11 sm:w-11 items-center justify-center rounded-lg bg-pista/10 text-pista">
                    <Icon className="h-4 w-4 sm:h-5 sm:w-5" strokeWidth={1.5} />
                  </div>
                  <Kicker className="text-pista">{p.title}</Kicker>
                </div>
              );
            })}
          </div>

          <div className="h-1.5 bg-linear-to-r from-transparent via-ice/30 to-transparent" />
        </div>
      </Container>
    </section>
  );
}