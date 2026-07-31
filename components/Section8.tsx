export default function Section8() {
    return (
        <div className="relative bg-background/50 px-[24px] py-[140px] flex flex-col items-center justify-center overflow-hidden">
            {/* Radial blur background - positioned at bottom to show only arc */}
            <div className="absolute bottom-0 left-1/2 -translate-x-1/2 pointer-events-none">
                <div 
                    className="w-[1200px] h-[1200px] rounded-full blur-[120px]"
                    style={{
                        background: 'radial-gradient(circle, rgba(108, 147, 255, 0.14) 10%, transparent 60%)',
                        transform: 'translateY(50%)',
                    }}
                />
            </div>

            <div className="relative z-10 flex flex-col items-center gap-[28px] max-w-[780px]">
                <p className="font-bold text-xs text-[#6C93FF]">
                    GET STARTED
                </p>
                <h2
                className="text-[76px] text-primary text-center font-medium leading-[1.02] tracking-[-0.02rem]" 
                style={{ fontFamily: 'Boska, serif' }}>
                    Make your operations intelligent.
                </h2>
                <p className="text-xl leading-[1.55] text-muted font-regular text-center w-[620px]">
                    See how the intelligence layer works inside your environment — with your signals, your systems and your outcomes.
                </p>
                <div className="flex flex-col gap-[12px]">
                    <button className="px-[20px] py-[12px] font-semibold text-[15px] rounded-[10px] bg-primary text-background hover:bg-primary/90 transition-all duration-200">
                        Request a demo
                    </button>
                    <button className="px-[20px] py-[12px] font-semibold text-[15px] rounded-[10px] bg-primary text-background hover:bg-primary/90 transition-all duration-200">
                        Contact sales
                    </button>
                </div>
            </div>
        </div>
    )
}