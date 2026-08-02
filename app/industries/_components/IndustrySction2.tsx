import { Radio, Brain, CheckCircle, Send, BarChart3, ArrowRight, ShoppingCart, Factory, Heart, Building2, Truck, Zap } from 'lucide-react';
import Image from 'next/image';

export default function IndustrySection2() {
    const steps = [
        {
            icon: Radio,
            title: "Observe",
            description: "Capture data from any source in real-time."
        },
        {
            icon: Brain,
            title: "Understand",
            description: "AI models analyze and find what matters."
        },
        {
            icon: CheckCircle,
            title: "Decide",
            description: "Contextual insights for faster, smarter decisions."
        },
        {
            icon: Send,
            title: "Act",
            description: "Trigger actions and automate workflows."
        },
        {
            icon: BarChart3,
            title: "Learn",
            description: "Continuously learn and improve outcomes."
        }
    ];

    return (
        <section className="w-full bg-background pt-16 md:pt-24 px-6 md:px-12 lg:px-0">
            <div className="max-w-7xl mx-auto">
                {/* Section Header */}
                <div className="mb-12">
                    <p className="text-ice text-xs font-semibold tracking-wider uppercase mb-4">
                        HOW MIALO WORKS
                    </p>
                    <h2 className="text-[48px] font-medium text-primary leading-[1.02] tracking-[-0.02rem] "
                        style={{ fontFamily: 'Boska, serif' }}>
                        From data to decisions.
                        <span className='block'>
                            In real time.
                        </span>
                    </h2>
                    {/* <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-primary font-[family-name:var(--font-boska)]">
                        In real time.
                    </h2> */}
                </div>

                {/* Workflow Steps */}
                <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-8 md:gap-4">
                    {steps.map((step, index) => {
                        const Icon = step.icon;
                        return (
                            <div key={index} className="flex items-center gap-4 md:gap-6">
                                {/* Step Content */}
                                <div className="flex flex-col items-start">
                                    {/* Icon */}
                                    <div className="mb-4">
                                        <Icon className="w-8 h-8 text-ice" strokeWidth={1.5} />
                                    </div>
                                    
                                    {/* Title */}
                                    <h3 className="text-xl font-medium text-primary mb-2">
                                        {step.title}
                                    </h3>
                                    
                                    {/* Description */}
                                    <p className="text-sm text-muted max-w-[180px]">
                                        {step.description}
                                    </p>
                                </div>

                                {/* Arrow (hidden on last item) */}
                                {index < steps.length - 1 && (
                                    <div className="hidden md:block">
                                        <ArrowRight className="w-6 h-6 text-faint" strokeWidth={1.5} />
                                    </div>
                                )}
                            </div>
                        );
                    })}
                </div>

                {/* Industries We Empower Section - Full Width */}
            </div>
            
            <div className="mt-24 md:mt-32 w-full border-t border-faint/50">
                <div className="flex flex-col lg:flex-row gap-0">
                        {/* Left Content */}
                        <div className="bg-background p-8 md:p-12 lg:p-16 flex flex-col justify-center lg:w-auto max-w-[500px]">
                            <p className="text-ice text-xs font-semibold tracking-wider uppercase mb-6">
                                INDUSTRIES WE EMPOWER
                            </p>
                            <h2 className="text-4xl md:text-[48px] leading-[1.02] tracking-[-0.02rem] font-medium text-primary mb-6"
                                style={{ fontFamily: 'Boska, serif' }}>
                                Operational intelligence tailored to your world.
                            </h2>
                            <button className="flex items-center gap-2 text-ice hover:text-primary transition-colors mt-4 group">
                                <span className="text-sm font-medium">Explore industries</span>
                                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                            </button>
                        </div>

                        {/* Right Image Strip - 6 Images Side by Side */}
                        <div className="flex flex-1">
                            {[
                                { icon: ShoppingCart, label: 'Retail', img: "/images/industryVision.png" },
                                { icon: Factory, label: 'Manufacturing', img: "/images/manufacture.png" },
                                { icon: Heart, label: 'Healthcare', img: "/images/medical.png" },
                                { icon: Building2, label: 'Government', img: "/images/government.png" },
                                { icon: Truck, label: 'Logistics', img: "/images/logistics.png" },
                                { icon: Zap, label: 'Energy & Utilities', img: "/images/energy.png" }
                            ].map((industry, index) => {
                                const Icon = industry.icon;
                                return (
                                    <div key={index} className="relative flex-1  min-h-[400px] lg:min-h-[500px] group cursor-pointer overflow-hidden">
                                        {/* Background Image */}
                                        <Image 
                                            src={industry.img}
                                            alt={`${industry.label} Industry`}
                                            fill
                                            className="object-cover transition-transform duration-500 group-hover:scale-110"
                                        />
                                        
                                        {/* Overlay */}
                                        <div className="absolute inset-0 bg-black/40 group-hover:bg-black/30 transition-colors duration-300" />
                                        
                                        {/* Bottom Gradient for blending */}
                                        <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-background to-transparent " />
                                        
                                        {/* Icon and Label - Centered */}
                                        <div className="absolute inset-0 flex flex-col items-center justify-end text-center p-4">
                                            <Icon className="w-10 h-10 md:w-12 md:h-12 text-ice mb-4" strokeWidth={1.5} />
                                            <span className="text-sm  text-primary font-medium">{industry.label}</span>
                                        </div>
                                    </div>
                                );
                            })}
                        </div>
                    </div>
            </div>
        </section>
    );
}