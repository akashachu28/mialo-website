"use client";

import { SectionHeader } from "./ui";
import { useEffect, useRef, useState } from "react";

export default function Section3() {
  const videoContainerRef = useRef<HTMLDivElement>(null);
  const [scale, setScale] = useState(1);

  useEffect(() => {
    const handleScroll = () => {
      if (!videoContainerRef.current) return;

      const rect = videoContainerRef.current.getBoundingClientRect();
      const viewportHeight = window.innerHeight;

      // Calculate scale based on scroll position
      // Scale from 1 to 1.5 as the element enters and moves through viewport
      const progress = Math.max(
        0,
        Math.min(
          1,
          (viewportHeight - rect.top) / (viewportHeight + rect.height),
        ),
      );
      const newScale = 1 + progress * 0.9;

      setScale(newScale);
    };

    window.addEventListener("scroll", handleScroll);
    handleScroll(); // Initial call

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      <section className="pt-12 sm:pt-20 lg:pt-32">
        <div className="mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 sm:gap-8 lg:gap-12 items-center">
            {/* Left: Section Header */}
            <div className="lg:col-span-5 text-center lg:text-left">
              <SectionHeader
                eyebrow="How It Works"
                title="From Every Signal"
                titleIce="to Intelligent Action."
              />
            </div>

            {/* Right: Description */}
            <div className="lg:col-span-7">
              <p
                className="text-gray-600 text-pretty text-center lg:text-left"
                style={{
                  fontFamily: "var(--font-manrope), sans-serif",
                  fontWeight: 400,
                  fontSize: "clamp(16px, 3.5vw, 26px)",
                  lineHeight: 1.6,
                  letterSpacing: "-0.01em",
                }}
              >
                Every operational moment moves through a continuous journey - from
                observation and understanding to intelligent decisions and
                real-world action.
              </p>
            </div>
          </div>
        </div>

        {/* Full-width video container with overlay text */}
        <div
          ref={videoContainerRef}
          className="w-full overflow-hidden mt-8 sm:mt-12 relative"
        >
          <h2
            className="absolute inset-0 z-10 flex items-center justify-center text-center pointer-events-none px-4"
            style={{
              fontFamily: "var(--font-manrope), sans-serif",
              fontWeight: 400,
              fontSize: "clamp(24px, 6vw, 60px)",
              lineHeight: 1.1,
              letterSpacing: "-0.045em",
              transform: `scale(${scale})`,
              transition: "transform 0.1s ease-out",
              mixBlendMode: "hard-light",
              color: "white",
              filter: "drop-shadow(0 0 20px rgba(255,255,255,0.3))",
            }}
          >
            <span className="text-gray-100">
              Observe. Understand.
              <span style={{ color: "#C6FF6D" }}> Act.</span>
            </span>
          </h2>

          <div className="h-80 sm:h-96 md:h-120 lg:h-150 overflow-hidden">
            <video 
              className="w-full h-auto object-cover" 
              autoPlay 
              loop 
              muted 
              playsInline
            >
              <source src="/images/website.mp4" type="video/mp4" />
              Your browser does not support the video tag.
            </video>
          </div>
        </div>

      </section>


    </>
  );
}
