import { div } from "motion/react-client";
import HeroCapacitorQuality from "./_components/HeroCapacitorQuality";
import CapacitorQualitySection1 from "./_components/CapacitorQualitySection1";
import CapacitorQualitySection2 from "./_components/CapacitorQuaitySection2";

export default function CapacitorQualityInspectionPage() {
  return (
      <div>
        <HeroCapacitorQuality/>
        <CapacitorQualitySection1/>
        <CapacitorQualitySection2/>
      </div>
  )
}