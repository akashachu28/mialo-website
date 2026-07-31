export default function Section7() {
  return (
    <div className="relative bg-background/50 px-[24px] py-[120px] gap-[56px] flex flex-col items-center overflow-hidden">
        <div className="relative z-10 flex flex-col items-center gap-[18px] max-w-[760px]">
            <p className="font-bold text-xs text-[#6C93FF]">
                CUSTOMERS
            </p>
            <h2
                className="text-[46px] text-primary text-center font-medium leading-[1.08] tracking-[-0.02rem]" 
                style={{ fontFamily: 'Boska, serif' }}>
                Trusted where operations cannot fail.
            </h2>
        </div>

        {/* Company Logos */}
        <div className="relative z-10 flex items-center justify-center gap-12 flex-wrap max-w-4xl opacity-40 hover:opacity-60 transition-opacity duration-300">
            {/* IBM */}
            <div className="text-slate-300 text-3xl font-bold tracking-tight">IBM</div>
            
            {/* Cisco */}
            <div className="text-slate-300 text-2xl font-bold">
                <span className="inline-block">cisco</span>
            </div>
            
            {/* Samsung */}
            <div className="text-slate-300 text-2xl font-bold tracking-wide">SAMSUNG</div>
            
            {/* Dell */}
            <div className="text-slate-300 text-2xl font-bold">DELL</div>
            
            {/* Oracle */}
            <div className="text-slate-300 text-2xl font-bold tracking-tight">
                <span className="text-red-500">O</span>RACLE
            </div>
        </div>

        {/* Testimonial Card */}
        <div className="relative z-10 w-full max-w-4xl mt-8">
            <div className="bg-slate-900/60 backdrop-blur-md border border-blue-500/20 rounded-2xl p-10 hover:border-blue-500/40 transition-all duration-300">
                {/* Quote Icon */}
                <div className="text-blue-400 text-5xl mb-6 font-serif">"</div>
                
                {/* Testimonial Text */}
                <p className="text-white text-2xl leading-relaxed mb-8 font-light" style={{ fontFamily: 'Boska, serif' }}>
                    Mialo turned our operational data from something we reported on into something that acts. We move from signal to decision in seconds, not meetings.
                </p>
                
                {/* Attribution */}
                <div className="mb-10">
                    <p className="text-white font-semibold text-lg">Elena Marsh</p>
                    <p className="text-slate-400 text-sm">Chief Operating Officer, Global Manufacturing Group</p>
                </div>

                {/* Metrics */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8 pt-8 border-t border-slate-700/50">
                    <div>
                        <p className="text-white text-4xl font-bold mb-2" style={{ fontFamily: 'Boska, serif' }}>42%</p>
                        <p className="text-slate-400 text-sm">Faster time from signal to action</p>
                    </div>
                    <div>
                        <p className="text-white text-4xl font-bold mb-2" style={{ fontFamily: 'Boska, serif' }}>3.1x</p>
                        <p className="text-slate-400 text-sm">Return on operational intelligence</p>
                    </div>
                    <div>
                        <p className="text-white text-4xl font-bold mb-2" style={{ fontFamily: 'Boska, serif' }}>24/7</p>
                        <p className="text-slate-400 text-sm">Continuous monitoring and response</p>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}