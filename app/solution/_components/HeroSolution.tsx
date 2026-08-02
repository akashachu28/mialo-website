import { ArrowRight } from "lucide-react";
import Image from "next/image";

export default function HeroSolution() {
  return (
    <div className="relative  flex items-center justify-center h-full bg-[#010306] min-h-screen px-6 py-24 overflow-hidden">
      {/* Right side - Image */}
      <div className="absolute w-[60%] h-[100%] flex  items-end justify-end bottom-0 right-0 ">
        <div className="relative w-full h-full">
          <Image
            src="/images/heroSolutions.png"
            alt="Platform Intelligence Layer"
            fill
            className="object-contain object-bottom opacity-80"
            priority
          />
          {/* Glow effect around image */}
          <div className="absolute inset-0 bg-blue-500/5 blur-3xl rounded-full -z-10" />
        </div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 items-center ">
          {/* Left side - Content */}
          <div className="flex flex-col gap-8">
            {/* Main headings */}
            <div className="flex flex-col gap-4">
              <h1
                className="text-[56px] lg:text-[64px] text-primary font-medium leading-[1.02] tracking-[-0.02rem]"
                style={{ fontFamily: "Boska, serif" }}
              >
                Intelligence in Action.
                <span className="block">
                  Built for <span className="text-ice italic">real-world</span>{" "}
                  impact.
                </span>
              </h1>
            </div>

            {/* Description with highlighted text */}
            <div className="text-xl leading-[1.08] tracking-[0.02rem] text-muted max-w-xl">
              <p>
                Pre-built Al solutions powered by the Mialo Intelligence Layer
                mialo.ai that deliver fast time-to-value and measurable
                outcomes.
              </p>
            </div>

            {/* Buttons */}
            <div className="flex gap-4 flex-wrap">
              <button className="px-8 py-2 font-medium text-sm rounded-lg bg-ice text-background hover:bg-ice/90 transition-all duration-200">
                Explore all Solutions
              </button>
              <button className="px-8 py-2 font-medium text-sm rounded-lg bg-slate-800/60 text-primary border border-slate-700 hover:bg-slate-800 hover:border-blue-500/30 transition-all duration-200">
                Talk to experts
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
