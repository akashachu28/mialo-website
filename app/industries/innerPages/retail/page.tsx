import HeroRetail from "./_components/HeroRetail";
import RetailSection2 from "./_components/RetailSection2";
import RetailSection3 from "./_components/RetailSection3";
import RetailSection4 from "./_components/RetailSection4";

export const metadata = {
  title: "Retail Intelligence — Mialo",
  description:
    "Transform retail operations with real-time intelligence. Monitor footfall, dwell time, shelf compliance and customer behavior across every store.",
};

export default function Retail() {
  return (
    <div className="bg-background font-body text-primary antialiased">
      <HeroRetail />
      <RetailSection2 />
      <RetailSection3 />
      <RetailSection4 />
    </div>
  );
}
