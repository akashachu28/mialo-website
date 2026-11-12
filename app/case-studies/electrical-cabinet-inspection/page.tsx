import HeroElectricalCabinet from "./_components/HeroElectricalCabinet";
import ElectricalCabinetSection1 from "./_components/ElectricalCabinetSection1";
import ElectricalCabinetSection2 from "./_components/ElectricalCabinetSection2";
import Footer from "@/components/Footer";

export default function ElectricalCabinetInspectionPage() {
  return (
    <div>
      <HeroElectricalCabinet />
      <ElectricalCabinetSection1 />
      <ElectricalCabinetSection2 />
      <Footer />
    </div>
  );
}
