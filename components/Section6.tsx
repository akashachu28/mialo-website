import SectorCards from "./SectorCards";
import Image from "next/image";
import background1 from "../public/images/background1.png";
export default function Section6() {
    return(
        <div className="relative px-[24px] py-[120px] gap-[56px] flex flex-col items-center overflow-hidden">
            {/* Background Image */}
            <div className="absolute inset-0 z-0">
                <Image
                    src={background1}
                    alt="Background"
                    fill
                    className="object-cover opacity-50"
                    priority={false}
                />
                {/* Gradient overlay for better text readability */}
                <div className="absolute inset-0 bg-gradient-to-b from-background/50 via-background/30 to-background/40" />
            </div>

            {/* Content */}
            <div className="relative z-10 flex flex-col items-center gap-[18px] max-w-[760px]">
                <p className="font-bold text-xs text-[#6C93FF]">
                    INDUSTRIES
                </p>
                <h2
                    className="text-[46px] text-primary text-center font-medium leading-[1.08] tracking-[-0.02rem]" 
                    style={{ fontFamily: 'Boska, serif' }}>
                    Built for the operations that run the world.
                </h2>
                <p className="text-xl leading-[1.55] text-muted font-regular text-center w-[620px]">
                    The same intelligence layer, tuned to the signals, constraints and outcomes that define each sector.
                </p>
            </div>
            <div className="relative z-10">
                <SectorCards/>
            </div>
        </div>
    )
}