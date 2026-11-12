import { div } from "motion/react-client";
import HeroManufacturingFloor from "./_components/HeroManufacturingFloor";
import ManufacturingFloorSection1 from "./_components/ManufacturingFloorSection1";
import ManufacturingFloorSection2 from "./_components/ManufacturingFloorSection2";

export default function ManufacturingFloorIntelligencePage() {
  return (
      <div>
        <HeroManufacturingFloor/>
        <ManufacturingFloorSection1/>
        <ManufacturingFloorSection2/>
      </div>
  )
}