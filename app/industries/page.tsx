import HeroIndustry from "./_components/HeroIndustry";
import IndustrySection2 from "./_components/IndustrySction2";
import IndustrySection3 from "./_components/IndustrySection3";
import IndustrySection4 from "./_components/IndustrySection4";

export const metadata = {
  title: "Industries — Mialo",
  description:
    "Mialo's unified intelligence layer adapts to your world — real-time awareness, smarter decisions and measurable impact across retail, manufacturing, healthcare, government, logistics and energy.",
};

export default function Industries() {
  return (
    <div className="bg-background font-body text-primary antialiased">
      <HeroIndustry />
      <div className="bg-white/85" data-header-theme="light">
        <IndustrySection2 />
      </div>
      <IndustrySection3 />
      <IndustrySection4 />
    </div>
  );
}
