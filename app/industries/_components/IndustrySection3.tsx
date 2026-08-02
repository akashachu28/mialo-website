import Image from 'next/image';

export default function IndustrySection3() {
    const metrics = [
        {
            value: "2.4B+",
            label: "Events processed daily",
            change: "+30% vs last month"
        },
        {
            value: "98.7%",
            label: "AI model accuracy",
            change: "+4.8% vs last month"
        },
        {
            value: "2.3s",
            label: "Avg. time to decision",
            change: "-42% vs last month"
        },
        {
            value: "+27%",
            label: "Operational impact",
            change: "improvement"
        }
    ];

    // Placeholder for company logos - replace with actual logo paths
    const companyLogos = [
        { name: "Adani", src: "/images/jindal.png" },
        { name: "Reliance", src: "/images/jindal.png" },
        { name: "DHL", src: "/images/jindal.png" },
        { name: "Vedanta", src: "/images/jindal.png" },
        { name: "Apollo", src: "/images/jindal.png" },
        { name: "Godrej", src: "/images/jindal.png" }
    ];

    return (
        <section className="w-full bg-background py-12 md:py-16 px-6 md:px-12 lg:px-24">
            {/* Curved Card Container */}
            <div className="relative max-w-[1200px] mx-auto rounded-3xl border border-faint/30 overflow-hidden">
                {/* Background Image */}
                <div className="absolute inset-0 z-0">
                    <Image 
                        src="/images/galaxyBanner.png"
                        alt="Galaxy Background"
                        fill
                        className="object-cover opacity-30"
                        priority
                    />
                    {/* Dark Overlay */}
                    <div className="absolute inset-0 bg-black/60" />
                </div>

                {/* Content */}
                <div className="relative z-10 px-6 md:px-10 lg:px-12 py-10 md:py-12">
                    {/* Top Section */}
                    <div className="flex flex-col lg:flex-row justify-between items-start lg:items-center gap-8">
                        {/* Left Content */}
                        <div className="flex-1">
                            <p className="text-ice text-xs font-semibold tracking-wider uppercase mb-4">
                                TRUSTED BY FORWARD-THINKING LEADERS
                            </p>
                            <h2 className="text-3xl lg:text-[36px] font-medium leading-[1.02] tracking-[-0.02rem] text-primary mb-2"
                                style={{ fontFamily: 'Boska, serif' }}>
                                Real impact.
                                <span className='block'>
                                    Proven at scale.
                                </span>
                            </h2>
                            {/* <h2 className="text-3xl md:text-4xl lg:text-5xl font-medium text-primary font-[family-name:var(--font-boska)]">
                                Proven at scale.
                            </h2> */}
                        </div>

                        {/* Right - Company Logos Grid */}
                        {/* <div className="flex-1 grid grid-cols-3  gap-6 lg:gap-8 items-center">
                            {companyLogos.map((company, index) => (
                                <div key={index} className="flex items-center justify-center opacity-70 hover:opacity-100 transition-opacity">
                                    <div className="relative w-20 h-10 md:w-24 md:h-12">
                                        <Image 
                                            src={company.src}
                                            alt={`${company.name} logo`}
                                            fill
                                            className="object-contain filter brightness-0 invert"
                                        />
                                    </div>
                                </div>
                            ))}
                        </div> */}
                    </div>

                    {/* Metrics Section */}
                    <div className="border-t border-muted/20 pt-8">
                        <p className="text-muted text-xs md:text-sm mb-6">
                            Key outcomes across our customers
                        </p>
                        <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8">
                            {metrics.map((metric, index) => (
                                <div key={index}>
                                    <h3 className="text-3xl font-medium text-ice mb-1">
                                        {metric.value}
                                    </h3>
                                    <p className="text-primary text-sm font-medium mb-1">
                                        {metric.label}
                                    </p>
                                    <p className="text-muted text-xs">
                                        {metric.change}
                                    </p>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
