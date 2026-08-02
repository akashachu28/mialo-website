import { ArrowRight } from "lucide-react";
import Image from "next/image";

export default function HeroIndustry() {
  return (
    <div className="relative  flex items-center justify-center h-full   min-h-screen px-6 py-24 overflow-hidden">
      {/* Radial blur background - positioned at bottom to show only arc */}
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 pointer-events-none z-100">
        <div
          className="w-[1000px] h-[300px] rounded-full blur-[120px]"
          style={{
            background:
              "radial-gradient(circle, rgba(108, 147, 255, 0.20) 10%, transparent 60%)",
            transform: "translateY(50%)",
          }}
        />
      </div>

      {/* Right side - Image */}
      <div className="absolute w-[70%] h-[50%] flex items-end justify-end bottom-0 right-0 ">
        <Image
          src="/images/heroSolution.png"
          alt="Platform Intelligence Layer"
          fill
          className="object-cover opacity-80"
          priority
        />
        {/* Glow effect around image */}
        <div className="absolute inset-0 bg-blue-500/5 blur-3xl rounded-full -z-10" />
      </div>

      <div className="relative z-10  max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 items-center ">
          {/* Left side - Content */}
          <div className="flex flex-col gap-8">
            {/* Main headings */}
            <div className="flex flex-col gap-4">
              <h1
                className="text-[56px] lg:text-[64px] text-primary font-medium leading-[1.02] tracking-[-0.02rem]"
                style={{ fontFamily: "Boska, serif" }}
              >
                Operational Intelligence.
                <span className="block text-ice">
                  For Every Industry.
                </span>
              </h1>
              {/* <h1
                className="text-[56px] lg:text-[64px] text-ice font-medium leading-[1.02] tracking-[-0.02rem]"
                style={{ fontFamily: "Boska, serif" }}
              >
                for every industry.
              </h1> */}
            </div>

            {/* Description with highlighted text */}
            <div className="text-xl leading-[1.12] tracking-[0.01rem] text-muted max-w-xl">
              <p>
                Mialo's unified intelligence layer adapts to your world,
                delivering real-time awareness, smarter decisions and measurable
                impact across industries.
              </p>
            </div>
            {/* <p className="flex gap-2  font-semibold text-sm text-ice">
              See How It Works
              <ArrowRight className="text-ice"></ArrowRight>
            </p> */}
            <button className="px-8 py-2 w-fit h-fit font-medium text-sm rounded-lg bg-ice text-background hover:bg-ice/90 transition-all duration-200">
                See how it works
              </button>
          </div>
        </div>
      </div>
    </div>
  );
}
