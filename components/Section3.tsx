import OperationalIntelligenceCard from "./OperationalIntelligenceCard";

export default function Section3 () {
    return(
        <div className="bg-background py-[120px] px-[24px] flex flex-col items-center gap-[76px] justify-center">
            <div className="flex flex-col items-center max-w-[760px] ">
                <h2 className="text-[46px] font-medium text-primary leading-[1.02] tracking-[-0.02rem]" style={{ fontFamily: 'Boska, serif' }}>
                    How Operational Intelligence Works
                </h2>
                <p className="text-center text-xl tracking-none leading-[1.55] text-muted px-8 pt-[24px] ">Every operational moment follows the same journey—from observation
                     to understanding, intelligent decision-making and real-world action.</p>
            </div>

                <OperationalIntelligenceCard/>

            <div className="flex flex-col items-center gap-[24px] text-primary">
                <h2
                    className="text-[76px]  font-medium leading-[1.02] tracking-[-0.02rem]" 
                    style={{ fontFamily: 'Boska, serif' }}>
                    Observe. Understand. Act.
                </h2>
                <h3
                    className="text-[46px]  font-medium leading-[1.08] tracking-[-0.02rem]" 
                    style={{ fontFamily: 'Boska, serif' }}>
                    Repeat.
                </h3>
                <p className="text-muted text-[16px] leading-[1.6] px-8  ">
                    Turning every operational moment into better business outcomes.
                </p>
            </div>

        </div>
    )
}