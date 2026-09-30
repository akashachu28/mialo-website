"use client";

import { Container, PrimaryButton } from "./ui";
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
              className="h-full w-full object-cover opacity-[1]"
            >
              <source src="/images/videoCover.mp4" type="video/mp4" />
            </video>
            <div className="absolute inset-0 bg-ice/10" />

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
          </div>
        </div>
      </div>

      {/* Scrolling content that overlaps the video - starts with text */}
      <div className="relative z-10 mt-[-100vh] overflow-x-hidden">
        <Container>
          {/* Text section that overlaps video */}
          <div className="min-h-screen flex items-center justify-center px-4 sm:px-6 lg:px-0">
            <Reveal stagger className="flex flex-col items-center justify-center gap-7 text-center">
              <div
                style={{
                  transform: `translateY(${subtitleTranslateY}px) scale(${scale})`,
                  opacity: subtitleOpacity,
                  transition: "transform 0.05s linear, opacity 0.05s linear",
                  willChange: "transform, opacity"
                }}
                className="w-full max-w-6xl mx-auto"
              >
                <RevealItem
                  as="div"
                  className="hero-title text-center text-primary/90"
                >
                  <h1 
                    style={{ 
                      fontFamily: "var(--font-manrope), sans-serif",
                      fontWeight: 400,
                      fontSize: "clamp(28px, 7.2vw, 86px)",
                      lineHeight: 0.96,
                      letterSpacing: "-0.045em",
                      wordSpacing: "clamp(3px, 0.6vw, 6px)"
                    }}
                    className="mb-8 sm:mb-12 lg:mb-20"
                  >
                    Edge intelligence layer for real world operations
                  </h1>
                  <TypewriterText
                    words={['Observe . Understand . Act.']}
                    delay={80}
                    pauseBetweenWords={600}
                    pauseBeforeRestart={2500}
                    highlightLastWord={true}
                    style={{ 
                      fontFamily: "var(--font-manrope), sans-serif",
                      fontWeight: 400,
                      fontSize: "clamp(20px, 4.5vw, 46px)",
                      lineHeight: 0.96,
                      letterSpacing: "-0.045em",
                      wordSpacing: "clamp(3px, 0.6vw, 6px)",
                      color: "white"
                    }}
                  />
                </RevealItem>
              </div>
            </Reveal>
          </div>

          {/* Content section with solid background */}
          <div className="bg-transparent pt-10 pb-30">
            <Reveal delay={0.15} className="w-full">
              <div className="flex flex-col lg:flex-row items-center justify-between gap-8 lg:gap-12 xl:gap-16">
                <div className="flex flex-col justify-between h-full flex-1 text-center lg:text-left order-2 lg:order-1">
                  <p
                    className="max-w-130 mx-auto lg:mx-0 text-gray-300 text-pretty"
                    style={{ 
                      fontFamily: "var(--font-manrope), sans-serif",
                      fontWeight: 400,
                      fontSize: "clamp(16px, 3vw, 32px)",
                      lineHeight: 1.2,
                      letterSpacing: "-0.04em",
                      wordSpacing: 3,
                    }}
                  >
                    We use AI to connect what&apos;s happening across your operations and take decisions that accelerates your business forward.
                  </p>
                  <div className="mt-6 lg:mt-10 flex flex-wrap gap-3 justify-center lg:justify-start">
                    <PrimaryButton onClick={() => setIsDemoModalOpen(true)}>Request a demo</PrimaryButton>
                  </div>
                </div>

                <div className="flex-shrink-0 w-full max-w-md lg:max-w-none lg:w-auto order-1 lg:order-2">
                  <HeroCard />
                </div>
              </div>
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