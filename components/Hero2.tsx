import { Camera, Database, LucideFileText, Mic2, Radiation, Router } from "lucide-react"
import OperationalInsightsCard from "./OperationalInsightsCard";

export default function Hero2() {
  return (
    <section className="min-h-screen bg-background text-white pt-32 pb-20 px-8">
      <div className="max-w-5xl mx-auto">
        {/* Main Content - Centered */}
        <div className="text-center space-y-10">
          {/* Main Heading */}
          <h1 
            className="text-[46px] leading-[1.08] tracking-[-0.02em] font-normal text-white/90"
            style={{ fontFamily: 'Boska, serif' }}
          >
            Enterprise operations
            <br />
            already capture everything.
          </h1>

          {/* Subtitle - Gray */}
          <h2 
            className="text-[46px] leading-[1.08] tracking-[-0.02em] font-normal text-white/40"
            style={{ fontFamily: 'Boska, serif' }}
          >
            The challenge is
            <br />
            understanding it in real time.
          </h2>

          {/* Description Paragraphs */}
          <div className="space-y-6 max-w-3xl mx-auto">
            <p className="text-[19px] leading-[1.55] tracking-[0em] font-light text-white/60">
              Every day, enterprises generate millions of operational signals through
              cameras, voice, documents, sensors, ERP systems and connected devices.
            </p>
            
            <p className="text-[19px] leading-[1.55] tracking-[0em] font-light text-white/60">
              Most organisations simply collect and store this information. Very little becomes
              real-time operational intelligence.
            </p>
          </div>

          {/* Tags/Pills Section */}
          {/* <div className="flex flex-wrap items-center justify-center gap-3 pt-8">
            <button className="px-5 py-2.5 bg-white/10 hover:bg-white/15 border border-white/20 rounded-full text-sm font-light transition-colors flex items-center gap-2">
              <Camera className="text-white/70" strokeWidth={1}/>
              <span>Cameras</span>
            </button>
            
            <button className="px-5 py-2.5 bg-white/10 hover:bg-white/15 border border-white/20 rounded-full text-sm font-light transition-colors flex items-center gap-2">
              <Mic2 className="text-white/70" strokeWidth={1}/>
              <span>Voice</span>
            </button>
            
            <button className="px-5 py-2.5 bg-white/10 hover:bg-white/15 border border-white/20 rounded-full text-sm font-light transition-colors flex items-center gap-2">
              <LucideFileText className="text-white/70" strokeWidth={1}/>
              <span>Documents</span>
            </button>
            
            <button className="px-5 py-2.5 bg-white/10 hover:bg-white/15 border border-white/20 rounded-full text-sm font-light transition-colors flex items-center gap-2">
              <Router className="text-white/70" strokeWidth={1}/>
              <span>IoT Sensors</span>
            </button>
            
            <button className="px-5 py-2.5 bg-white/10 hover:bg-white/15 border border-white/20 rounded-full text-sm font-light transition-colors flex items-center gap-2">
              <Database className="text-white/70" strokeWidth={1}/>
              <span>ERP Systems</span>
            </button>
          </div> */}

          {/* Arrow Indicator */}
          {/* <div className="pt-8 flex flex-col items-center gap-3">
            <svg 
              className="w-6 h-6 text-white/30" 
              fill="none" 
              stroke="currentColor" 
              viewBox="0 0 24 24"
            >
              <path 
                strokeLinecap="round" 
                strokeLinejoin="round" 
                strokeWidth={2} 
                d="M19 9l-7 7-7-7" 
              />
            </svg>
          </div> */}

          {/* Bottom Label */}
          {/* <div className="pt-4">
            <div className="inline-block px-6 py-3 bg-white/5 border border-white/10 rounded-full">
              <span className="text-sm font-light text-white/70">
                Operational Signals
              </span>
            </div>
          </div> */}

          {/* Final Arrow */}
          {/* <div className="pt-4 flex flex-col items-center">
            <svg 
              className="w-6 h-6 text-white/30" 
              fill="none" 
              stroke="currentColor" 
              viewBox="0 0 24 24"
            >
              <path 
                strokeLinecap="round" 
                strokeLinejoin="round" 
                strokeWidth={2} 
                d="M19 9l-7 7-7-7" 
              />
            </svg>
          </div> */}

          <OperationalInsightsCard/>
        </div>
      </div>
    </section>
  );
}
