"use client";

import { Container, Eyebrow, PrimaryButton, GhostButton } from "./ui";
import { Reveal, RevealItem } from "./animations";
import HeroCard from "./HeroCard";
import TypewriterText from "./TypewriterText";
import DemoModal from "./DemoModal";
import { useEffect, useState } from "react";

export default function Hero() {
  const [scrollProgress, setScrollProgress] = useState(0);
  const [isDemoModalOpen, setIsDemoModalOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY;
      const windowHeight = window.innerHeight;
      // Calculate scroll progress (0 to 1) within the first viewport
      const progress = Math.min(scrollPosition / windowHeight, 1);
      setScrollProgress(progress);
    };

    window.addEventListener("scroll", handleScroll);
    handleScroll(); // Initial call
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Calculate scale based on scroll (scale up as you scroll)
  const scale = 1 + scrollProgress * 1.5; // Scale from 1 to 5 for more dramatic effect
  const translateY = -scrollProgress * -100; // Move up by 100px as you scroll
  const subtitleTranslateY = -scrollProgress * 50; // Move subtitle up by 50px
  const subtitleOpacity = 1 - scrollProgress; // Fade out as you scroll

  return (
    <section className="relative">
      {/* Sticky video container - just video, no text */}
      <div className="sticky top-0 h-screen overflow-hidden">
        <div className="relative h-full">
          {/* Video background */}
          <div aria-hidden className="absolute inset-0">
            <video
              autoPlay
              loop
              muted
              playsInline
              className="h-full w-full object-cover opacity-[0.8]"
            >
              <source src="/images/videoCover.mp4" type="video/mp4" />
            </video>
            <div className="absolute inset-0 bg-background/0" />

            <div
              className="absolute inset-0"
              style={{
                background:
                  "linear-gradient(90deg, var(--color-background) 0%, rgba(8,9,11,0.55) 45%, transparent 100%)",
              }}
            />

            <div
              className="absolute inset-0"
              style={{
                background:
                  "linear-gradient(90deg, transparent 0%, rgba(8,9,11,0.55) 55%, var(--color-background) 100%)",
              }}
            />

            <div
              className="absolute inset-0"
              style={{
                background:
                  "linear-gradient(180deg, var(--color-background) 0%, transparent 35%, var(--color-background) 100%)",
              }}
            />
          </div>
        </div>
      </div>

      {/* Scrolling content that overlaps the video - starts with text */}
      <div className="relative z-10 -mt-[100vh] overflow-x-hidden">
        <Container>
          {/* Text section that overlaps video */}
          <div className="min-h-screen flex items-center justify-center">
            <Reveal stagger className="flex flex-col items-center justify-center gap-7">
              {/* <RevealItem>
                <Eyebrow>Mialo</Eyebrow>
              </RevealItem> */}

              <div
                style={{
                  transform: `translateY(${subtitleTranslateY}px) scale(${scale})`,
                  opacity: subtitleOpacity,
                  transition: "transform 0.05s linear, opacity 0.05s linear",
                  willChange: "transform, opacity"
                }}
              >
                <RevealItem
                  as="p"
                  className="hero-title text-center text-primary/90"
                >
                  <h1 
                    style={{ 
                      fontFamily: "var(--font-manrope), sans-serif",
                      fontWeight: 400,
                      fontSize: "clamp(32px, 7.2vw, 86px)",
                      lineHeight: 0.96,
                      letterSpacing: "-0.045em",
                      wordSpacing: 6
                    }}
                  >
                    Edge intelligence layer for real world operations
                  </h1>
                  <TypewriterText
                    words={['Observe . Understand . Act']}
                    delay={80}
                    pauseBetweenWords={600}
                    pauseBeforeRestart={2500}
                    highlightLastWord={true}
                    className="mt-20"
                    style={{ 
                      fontFamily: "var(--font-manrope), sans-serif",
                      fontWeight: 400,
                      fontSize: "clamp(32px, 7.2vw, 46px)",
                      lineHeight: 0.96,
                      letterSpacing: "-0.045em",
                      wordSpacing: 6
                    }}
                  />
                </RevealItem>
              </div>

              {/* OBSERVE UNDERSTAND ACT HEADING */}
              {/* <div
                style={{
                  transform: `scale(${scale}) translateY(${translateY}px)`,
                  transformOrigin: "center center",
                  transition: "transform 0.05s linear",
                  willChange: "transform"
                }}
              >
                <RevealItem
                  as="h1"
                  className="font-display mb-10 text-[48px] font-medium leading-[1.0] tracking-[-0.03em] text-balance text-primary"
                >
                  Observe.
                  <br />
                  Understand.
                  <br />
                  <span className="text-pista italic text-[48px] leading-[1rem] tracking-[-0.03rem] text-balance" 
                  style={{ fontFamily: "Boska, serif" }}>Act.</span>
                </RevealItem>
              </div> */}
            </Reveal>
          </div>

          {/* Content section with solid background */}
          <div className="bg-transparent pt-10 pb-30">
            <Reveal delay={0.15} className="w-full flex items-center justify-evenly min-w-0 scale-100">
            <div className="fle flex-col justify-between h-full">
              <p
                className="max-w-[520px] text-[32px] leading-[1.62] text-gray-300 text-pretty"
                style={{ 
              fontFamily: "var(--font-manrope), sans-serif",
              fontWeight: 400,
              // fontSize: "clamp(32px, 7.2vw, 20px)",
              lineHeight: 1.2,
              letterSpacing: "-0.04em",
              wordSpacing: 3,
              // transition: "transform 0.1s ease-out"
            }}
              >
                We use AI to connect what’s happening across your operations and take decisions that accelerates your business forward.

              </p>
              <div className="mt-10 flex flex-wrap gap-3">
                <PrimaryButton onClick={() => setIsDemoModalOpen(true)}>Request a demo</PrimaryButton>
                {/* <GhostButton>Learn more</GhostButton> */}
              </div>
            </div>

              <div><HeroCard /></div>
            </Reveal>
          </div>
        </Container>
      </div>

      {/* Demo Modal */}
      <DemoModal 
        isOpen={isDemoModalOpen} 
        onClose={() => setIsDemoModalOpen(false)} 
      />
    </section>
  );
}
