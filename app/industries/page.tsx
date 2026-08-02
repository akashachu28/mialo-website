import { div } from "motion/react-client";
import HeroIndustry from "./_components/HeroIndustry";
import IndustrySection2 from "./_components/IndustrySction2";
import IndustrySection3 from "./_components/IndustrySection3";
import IndustrySection4 from "./_components/IndustrySection4";

export default function Industries() {
    return (
        <div>
            <HeroIndustry/>
            <IndustrySection2/>
            <IndustrySection3/>
            <IndustrySection4/>
        </div>
    )
}