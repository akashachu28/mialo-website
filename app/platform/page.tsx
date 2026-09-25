import Footer from "@/components/Footer";
import HeroPlatform from "./_components/HeroPlatform";
import IndustryDomain from "./_components/IndustryDomain";
import PlatformSection2 from "./_components/PlatformSection2";
import PlatformSection3 from "./_components/PlatformSection3";
import PlatformSection4 from "./_components/PlatfromSection4";

export const metadata = {
  title: "Platform — Mialo",
  description:
    "One intelligence layer. Unlimited operational applications. Mialo brings together multimodal AI, enterprise knowledge and real-world context to observe, understand and act on operational signals in real time.",
};

export default function PlatformPage() {
  return (
    <div className="bg-background font-body text-primary antialiased">
      <HeroPlatform />
      <div className="bg-white/75"><PlatformSection3 /></div>
      {/* <div className="bg-white/75"><PlatformSection2 /></div> */}
      
      <div className="bg-white/85"><IndustryDomain/></div>
      
      <PlatformSection4 />
      <Footer/>
    </div>
  );
}
