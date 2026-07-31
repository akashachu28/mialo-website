import OperationalCards from "./OperationalCards";

export default function Section4 () {
    return (
        <div className="px-[24px] pt-[120px] gap-[56px] flex flex-col items-center bg-[#101216] ">
            <div className="flex flex-col items-center gap-[18px] max-w-[760px] ">
                <p className="font-bold text-xs text-[#6C93FF] ">
                    THE MODEL
                </p>
                <h2
                    className="text-[46px] text-primary font-medium leading-[1.08] tracking-[-0.02rem]" 
                    style={{ fontFamily: 'Boska, serif' }}>
                    From operations to outcomes.
                </h2>
                <p className="text-xl leading-[1.55] text-muted font-regular text-center w-[620px]">
                    A continuous loop that senses what is happening, understands why,
                     decides what to do, and measures the result — then improves with every cycle.
                </p>
            </div>
            <div>
                <OperationalCards/>
            </div>
        </div>
    )
}