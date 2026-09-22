import HeroCompany from "./_components/HeroCompany";
import CompanySection2 from "./_components/CompanySection2";
import CompanySection3 from "./_components/CompanySection3";
import CompanySection4 from "./_components/CompanySection4";
import CompanySection5 from "./_components/CompanySection5";

export const metadata = {
  title: "Company — Mialo",
  description:
    "Mialo.ai is the intelligence layer for enterprise operations — combining multimodal AI, domain expertise and edge-native architecture to turn operational signals into intelligent action across industries.",
};

export default function Company() {
  return (
    <div className="bg-background font-body text-primary antialiased">
      <HeroCompany />
      <CompanySection2 />
      <CompanySection3 />
      <CompanySection4 />
      <CompanySection5 />
    </div>
  );
}
