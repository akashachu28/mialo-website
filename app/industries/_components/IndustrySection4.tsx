import Image from 'next/image';
import { ArrowRight } from 'lucide-react';

export default function IndustrySection4() {
    return (
        <section className="w-full pb-16">
            {/* Curved Card Container */}
            <div className="relative mx-auto overflow-hidden">
                {/* Background Image */}
                <div className="absolute w-420 flex  bg-blue-100 left-100 inset-0 z-0">
                    <Image 
                        src="/images/horizonBanner.png"
                        alt="Horizon Background"
                        fill
                        className="object-cover"
                        priority
                    />
                    {/* Dark Overlay */}
                    <div className="absolute inset-0 bg-black/50" />
                </div>

                {/* Content */}
                <div className="relative z-10 px-6 md:px-10 lg:px-12 py-10 md:py-12">
                    {/* Label */}
                    {/* <p className="text-ice text-xs font-medium tracking-wider uppercase mb-6">
                        OUR VISION
                    </p> */}

                    {/* Main Heading */}
                    <h2 className="text-2xl md:text-3xl lg:text-4xl font-medium text-primary mb-4 max-w-2xl leading-[1.02] tracking-[-0.02rem]"
                        style={{ fontFamily: 'Boska, serif' }}>
                        A world where every operation is intelligent, connected and human-safe.
                    </h2>

                    {/* Description */}
                    <p className="text-muted text-sm font-medium max-w-xl mb-6">
                        We envision a future where organizations of every size can anticipate what's next, automate with confidence and create lasting impact.
                    </p>

                    {/* CTA Button */}
                    <button className="flex items-center gap-2 text-ice hover:text-primary transition-colors group">
                        <span className="text-sm font-medium">Learn more about Mialo</span>
                        <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                    </button>
                </div>
            </div>
        </section>
    );
}
