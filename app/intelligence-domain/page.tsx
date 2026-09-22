import HeroIntelligence from "./_components/HeroIntelligence";
import IntelligenceSection2 from "./_components/IntelligenceSection2";

export const metadata = {
  title: "Intelligence Domains — Mialo",
  description:
    "Specialized intelligence domains. One unified platform. Mialo's intelligence domains bring together specialized AI models, real-world context and enterprise knowledge to solve operational challenges across the value chain.",
};

export default function IntelligenceDomain() {
  return (
    <div className="bg-background font-body text-primary antialiased">
      <HeroIntelligence />
      <IntelligenceSection2 />
    </div>
  );
}
