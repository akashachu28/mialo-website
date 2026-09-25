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
      <section className=" pt-20 sm:py">
        <div className="mx-auto w-full max-w-7xl px-6 sm:px-8">
          <SectionHeader
            className="mb-12"
            eyebrow="How It Works"
            title="From Every Signal"
            titleIce="to Intelligent Action."
            // lead="Every operational moment follows the same journey — from observation to understanding, intelligent decision-making and real-world action."
          />
          <p
            className="w-full max-w-[640px] text-[18px] leading-[1.62] text-gray-700 mt-5 text-pretty"
            style={{
              fontFamily: "var(--font-manrope), sans-serif",
              fontWeight: 400,
              fontSize: "clamp(18px, 7.2vw, 24px)",
              lineHeight: 1.1,
              letterSpacing: "-0.045em",
              wordSpacing: 6,
              // color: "white"
            }}
          >
            Every operational moment moves through a continuous journey — from
            observation and understanding to intelligent decisions and
            real-world action.{" "}
          </p>
        </div>

        {/* Full-width video container with overlay text */}
        <div
          ref={videoContainerRef}
          className="w-full overflow-hidden mt-12 relative"
        >
          <h2
            className="absolute inset-0 z-10 flex items-center justify-center font-display text-[38px] font-medium leading-[1.05] tracking-[-0.03em] text-balance sm:text-[56px] text-center pointer-events-none"
            style={{
              fontFamily: "var(--font-manrope), sans-serif",
              fontWeight: 600,
              fontSize: "clamp(32px, 7.2vw, 70px)",
              lineHeight: 1.1,
              letterSpacing: "-0.045em",
              transform: `scale(${scale})`,
              transition: "transform 0.1s ease-out",
              mixBlendMode: "difference",
              color: "white",
              filter: "drop-shadow(0 0 20px rgba(255,255,255,0.3))",
            }}
          >
            <span>
              Observe. Understand.
              <span style={{ color: "#00d4ff" }}> Act.</span>
            </span>
          </h2>

          <div className="h-150 overflow-hidden border-y">
            <video className="w-full h-auto" autoPlay loop muted playsInline>
              <source src="/images/warehouse_vedio.mp4" type="video/mp4" />
              Your browser does not support the video tag.
            </video>
          </div>
        </div>

        {/* <div className="mx-auto w-full max-w-7xl px-6 sm:px-8">
          <p className="mt-12 max-w-[640px] font-display text-[22px] font-medium leading-[1.3] tracking-[-0.02em] sm:text-[26px]">
            <span className="text-gray-700">Recording is not understanding.</span>{" "}
            <span className="text-ice">Understanding enables action.</span>
          </p>
        </div> */}
      </section>

      {/* editorial beat */}
      {/* <section className="border-t border-line py-24 text-center sm:py-28">
        <p className="mt-6 text-[15px] text-muted">
          Turning every operational moment into better business outcomes.
        </p>
      </section> */}
    </>
  );
}
