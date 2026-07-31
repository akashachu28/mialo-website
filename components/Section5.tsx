import IntelligenceLayerCards from "./IntelligenceLayerCards";

export default function Section5() {
    return (
        <div className="px-[24px] py-[120px] gap-[56px] flex flex-col items-center">
            <div className="flex flex-col items-center gap-[18px] max-w-[760px] ">
                <p className="font-bold text-xs text-[#6C93FF] ">
                    THE PLATFORM
                </p>
                <h2
                    className="text-[46px] text-primary text-center font-medium leading-[1.08] tracking-[-0.02rem] " 
                    style={{ fontFamily: 'Boska, serif' }}>
                    One intelligence layer. Many operational solutions.
                </h2>
                <p className="text-xl leading-[1.55] text-muted font-regular text-center w-[620px]">
                    A single foundation for sensing, reasoning and acting — deployed the way your enterprise already works.
                </p>
            </div>
            <IntelligenceLayerCards/>
        </div>
    )
}