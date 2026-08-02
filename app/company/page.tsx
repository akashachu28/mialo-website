import CompanySection2 from "./_components/CompanySection2";
import CompanySection3 from "./_components/CompanySection3";
import CompanySection4 from "./_components/CompanySection4";
import CompanySection5 from "./_components/CompanySection5";
import HeroCompany from "./_components/HeroCompany";

export default function Company () {
    return (
        <div>
            <HeroCompany/>
            <CompanySection2/>
            <CompanySection3/>
            <CompanySection4/>
            <CompanySection5/>
        </div>
    )
}