import Link from 'next/link';
import HeroCard from './HeroCard';

export default function Hero() {
  return (
    <section className="h-screen flex items-center justify-center bg-linear-to-b from-black/40 to-background text-primary pt-32 pb-20 px-8">
      <div className="max-w-7xl h-full mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 px-6 items-between">
          {/* Left Content */}
          <div className="space-y-8 ">
            {/* Small Badge */}
            <div className="inline-block">
              {/* <span className="px-4 py-2 bg-primary/10 rounded-full text-xs font-light tracking-wide text-primary/70">
                ✦ Enterprise Intelligence Platform
              </span> */}
            </div>

            {/* Main Heading */}
            <h1>
              <div 
                className="text-[76px]  font-medium leading-[1.02] tracking-[-0.02rem]" 
                style={{ fontFamily: 'Boska, serif' }}
              >
                Observe.
              </div>
              <div 
                className="text-[76px]  font-medium leading-[1.02] tracking-[-0.02rem]" 
                style={{ fontFamily: 'Boska, serif' }}
              >
                Understand.
              </div>
              <div 
                className="text-[76px]  font-medium leading-[1.02] tracking-[-0.02rem] text-[#6C93FF]" 
                style={{ fontFamily: 'Boska, serif' }}
              >
                Act.
              </div>
            </h1>

            {/* Subtitle */}
            <h2 className="text-2xl font-medium tracking-tight text-primary/90">
              The Intelligence Layer for Enterprise Operations.
            </h2>

            {/* Description */}
            <p className="text-base font-light leading-relaxed text-muted max-w-xl">
              Every enterprise generates thousands of operational moments every day. 
              Mialo continuously transforms those moments into intelligent actions and 
              measurable business outcomes.
            </p>

            {/* CTA Buttons */}
            <div className="flex gap-4">
              <Link 
                href="/demo"
                className="p-[1px] bg-linear-to-r from-muted/50 to-muted/20 text-primary text-sm font-regular rounded-[13px] hover:bg-muted/50 transition-colors"
              >
                <div className='bg-[#0C0f1C] px-8 py-2 rounded-xl'>Book a Demo</div>
              </Link>
              <Link 
                href="/learn-more"
                className="px-8 py-2 bg-transparent border border-primary/20 text-primary text-sm font-light rounded-xl hover:bg-primary/5 transition-colors"
              >
                Learn More
              </Link>
            </div>
          </div>

          {/* Right Side - Empty Box for Future Content */}
          <div className="lg:pt-8 flex justify-end scale-110">
              <HeroCard/>
          </div>
        </div>
      </div>
    </section>
  );
}
