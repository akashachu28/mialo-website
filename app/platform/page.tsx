import Footer from "@/components/Footer";
import HeroPlatform from "./_components/HeroPlatform";
import IndustryDomain from "./_components/IndustryDomain";
import PlatformSection2 from "./_components/PlatformSection2";
import PlatformSection3 from "./_components/PlatformSection3";
import PlatformSection4 from "./_components/PlatfromSection4";

export const metadata = {
  title: "Platform - Mialo",
  description:
    "One intelligence layer. Unlimited operational applications. Mialo brings together multimodal AI, enterprise knowledge and real-world context to observe, understand and act on operational signals in real time.",
};

export default function PlatformPage() {
  return (
    <div className="bg-background font-body text-primary antialiased">
      <HeroPlatform />
      <div className="relative bg-white" data-header-theme="light">
      <div
          className="absolute inset-0 pointer-events-none"
          style={{
            background:
              "radial-gradient(circle at 0% 0%, rgba(108, 147, 255, 0.15), transparent 60%), radial-gradient(circle at 90% 80%, rgba(161, 140, 255, 0.15), transparent 50%)",
          }}
        />
        <PlatformSection3 />
        <IndustryDomain />
      </div>

      <PlatformSection4 />
      <Footer />
    </div>
  );
}
