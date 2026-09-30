"use client";

import { Container, Kicker } from "@/components/ui";
import { Brain, MapPin, Building2, Network } from "lucide-react";

const PILLARS = [
  {
    title: "Purpose-built AI",
    body: "Specialized vision, voice, document and reasoning models designed for specific operational tasks.",
    icon: Brain,
  },
  {
    title: "Real-world context",
    body: "Location, time, environment and operational state give every inference the context needed to understand what is actually happening.",
    icon: MapPin,
  },
  {
    title: "Enterprise knowledge",
    body: "Your systems, documents, policies and workflows ground AI in how your organization operates.",
    icon: Building2,
  },
  {
    title: "Edge-native intelligence",
    body: "Run inference close to where data is generated for low-latency decisions, resilient operation and offline-capable deployments.",
    icon: Network,
  },
];

export default function HeroPlatform() {
  return (
    <section className="relative overflow-hidden pt-24 pb-16 sm:pt-28 sm:pb-24 lg:pt-40">
      {/* Background Video - Responsive positioning */}
      <div className="absolute right-0 top-0 w-full h-[60vh] sm:w-[85vw] sm:h-[70vh] lg:w-[75vw] lg:h-[75vh] pointer-events-none opacity-100 z-0">
        <video
          autoPlay
          loop
          muted
          playsInline
          className="w-full h-full object-cover"
        >
          <source src="/images/platformHero.mp4" type="video/mp4" />
        </video>
        {/* Gradient overlays for blending */}
        <div 
          className="absolute inset-0"
          style={{
            background: "radial-gradient(ellipse at top right, transparent 0%, var(--color-background) 95%)"
          }}
        />
        <div 
          className="absolute inset-0"
          style={{
            background: "linear-gradient(to bottom, transparent 0%, var(--color-background) 100%)"
          }}
        />
      </div>

      {/* dot-grid backdrop, faded from the top - above video */}
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 opacity-20 sm:opacity-30 z-10"
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
      <div className="absolute inset-0 bg-background/20 z-10" />

      <Container className="relative z-20">
        <div className="flex flex-col items-start gap-5 sm:gap-7 text-center sm:text-left">
          <h1 
            className="max-w-[1080px] text-balance text-primary"
            style={{ 
              fontFamily: "var(--font-manrope), sans-serif",
              fontWeight: 400,
              fontSize: "clamp(32px, 8vw, 70px)",
              lineHeight: 1.05,
              letterSpacing: "-0.045em",
              wordSpacing: "clamp(2px, 1vw, 6px)",
              color: "white"
            }}
          >
            Intelligence Where
            <br />
            <span className="text-pista">Your Operations Happen.</span>
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
            Mialo brings multimodal AI, enterprise knowledge and real-world
            context to the edge technology, enabling real-time insights and automated
            action - even when connectivity is limited or unavailable.
          </p>
        </div>

        {/* the intelligence layer at a glance */}
        <div className="mt-12 sm:mt-16 overflow-hidden rounded-[12px] sm:rounded-[18px] border border-line-2 bg-linear-to-b from-panel/40 to-raise/50 backdrop-blur-[2px]">
          <div className="flex items-center justify-between border-b border-line px-4 py-3 sm:px-5 sm:py-4 lg:px-6">
            <Kicker>Mialo Intelligence Layer</Kicker>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 border-t border-line">
            {PILLARS.map((p, i) => {
              const Icon = p.icon;
              return (
                <div
                  key={p.title}
                  className={`p-5 sm:p-7 lg:p-8 text-center sm:text-left ${
                    i > 0 ? "border-t border-line sm:border-t-0 sm:border-l" : ""
                  } ${
                    i >= 2 ? "sm:border-t lg:border-t-0" : ""
                  }`}
                >
                  <div className="mb-3 sm:mb-4 mx-auto sm:mx-0 mr-2 inline-flex h-9 w-9 sm:h-11 sm:w-11 items-center justify-center rounded-lg bg-pista/10 text-pista">
                    <Icon className="h-4 w-4 sm:h-5 sm:w-5" strokeWidth={1.5} />
                  </div>
                  <Kicker className="text-pista text-center sm:text-left">{p.title}</Kicker>
                </div>
              );
            })}
          </div>

          <div className="h-1.5 bg-linear-to-r from-transparent via-ice/30 to-transparent" />
        </div>
      </Container>

      {/* Radial gradient overlay for smooth transition to next section */}
      <div 
        className="absolute bottom-0 left-0 right-0 h-64 sm:h-96 pointer-events-none z-10"
        style={{
          background: "linear-gradient(to bottom, transparent 0%, var(--color-background) 100%)"
        }}
      />
    </section>
  );
}
