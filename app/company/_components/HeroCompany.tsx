import Image from "next/image";

export default function HeroCompany() {
  return (
    <div className="relative  flex items-center justify-center h-full bg-[#010306] min-h-screen px-6 py-24 overflow-hidden">
      {/* Left side - Content */}
      <div className="relative z-10 max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 items-center ">
          <div className="flex flex-col gap-8 ">
            {/* Main headings */}
            <div className="flex flex-col gap-4">
              <h1
                className="text-[56px] lg:text-[64px] text-primary font-medium leading-[1.02] tracking-[-0.02rem]"
                style={{ fontFamily: "Boska, serif" }}
              >
                <span className="text-ice">Intelligence that Understands</span> the real world and
                drives real outcomes.
              </h1>
            </div>

            {/* Description with highlighted text */}
            <div className="text-xl leading-[1.08] tracking-[0.02rem] text-muted max-w-xl">
              <p>
                Mialo.ai is the intelligence layer for enterprise operations. 
                Careers We combine multimodal Al, domain expertise and edge-native News & Press 
                architecture to turn operational signals into intelligent actions Contact Us across industries.
              </p>
            </div>

            {/* Buttons */}
            <div className="flex gap-4 flex-wrap">
              <button className="px-8 py-2 font-medium text-sm rounded-lg bg-ice text-background hover:bg-ice/90 transition-all duration-200">
                Talk to an Expert
              </button>
              {/* <button className="px-6 py-3 font-semibold text-[15px] rounded-lg bg-slate-800/60 text-primary border border-slate-700 hover:bg-slate-800 hover:border-blue-500/30 transition-all duration-200">
                Talk to experts
              </button> */}
            </div>
          </div>
        </div>
      </div>

      {/* Right side - Image */}
      <div className="absolute w-[60%] h-[100%] flex  items-end justify-end bottom-0 right-0 ">
        <div className="relative w-full h-full">
          <Image
            src="/images/heroCompany.png"
            alt="Platform Intelligence Layer"
            fill
            className="object-contain object-bottom opacity-80"
            priority
          />
          {/* Glow effect around image */}
          <div className="absolute inset-0 bg-blue-500/5 blur-3xl rounded-full -z-10" />
        </div>
      </div>
    </div>
  );
}
