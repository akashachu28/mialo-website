'use client'
import { useEffect, useState } from "react";
import PulseCard from "./PulseCard";




export default function SolutionSection1() {
  
  return (
    <div className="bg-gradient-to-b from-[#010306] to-background px-6 py-20">
      <div className="max-w-[1200px] mx-auto">
        <div className="flex items-center justify-between gap-16 mb-20">
          {/* Left: Text Content */}
          <div className="flex-1">
            <p className="text-xs font-semibold text-ice mb-4 uppercase tracking-wider">How it all works</p>
            <h2 className="text-5xl font-medium text-primary mb-3" style={{ fontFamily: 'Boska, serif' }}>
              One Intelligence Layer.
              <span className="block">
                Infinite possibilities.
              </span>
            </h2>
            {/* <h2 className="text-5xl font-medium text-primary mb-6" style={{ fontFamily: 'Boska, serif' }}>
              Infinite possibilities.
            </h2> */}
            <p className="text-base text-slate-400 max-w-xl mb-8">
              All solutions are powered by the Mialo Intelligence Layer, seamlessly turning data into decisions and outcomes.
            </p>
            <button className="flex items-center gap-2 px-8 py-2 rounded-lg border border-slate-700/50 bg-slate-900/40 text-slate-300 hover:border-blue-500/50 hover:text-blue-400 transition-all">
              Explore the Architecture →
            </button>
          </div>
        <PulseCard/>
          
        </div>

        <div className="mt-16 grid grid-cols-4 gap-8 max-w-[900px] mx-auto">
          <div className="flex flex-col items-center text-center">
            <div className="text-5xl font-bold text-primary mb-2" style={{ fontFamily: 'Boska, serif' }}>50+</div>
            <div className="text-sm text-faint font-medium">Enterprises trust Mialo</div>
          </div>
          <div className="flex flex-col items-center text-center">
            <div className="text-5xl font-bold text-primary mb-2" style={{ fontFamily: 'Boska, serif' }}>15+</div>
            <div className="text-sm text-faint font-medium">Industries impacted</div>
          </div>
          <div className="flex flex-col items-center text-center">
            <div className="text-5xl font-bold text-primary mb-2" style={{ fontFamily: 'Boska, serif' }}>10M+</div>
            <div className="text-sm text-faint font-medium">Events analyzed daily</div>
          </div>
          <div className="flex flex-col items-center text-center">
            <div className="text-5xl font-bold text-primary mb-2" style={{ fontFamily: 'Boska, serif' }}>99.9%</div>
            <div className="text-sm text-faint font-medium">On-premise & secure</div>
          </div>
        </div>
      </div>
    </div>
  );
}
