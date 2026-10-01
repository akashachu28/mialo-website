import { Container, SectionHeader } from "./ui";
import OperationalCards from "./OperationalCards";

export default function Section4() {
  return (
    <section className="py-12 sm:py-20 lg:py-[104px]">
      <Container>
        <div className="grid grid-cols-1 gap-8 sm:gap-10 lg:gap-8 items-start">
          
          {/* Header */}
          <div className="lg:col-span-4 text-center lg:text-left">
            <SectionHeader
              eyebrow="The Model"
              titleIce="From operations to outcomes."
            />
          </div>
          
          {/* Cards */}
          <div className="lg:col-span-8">
            <OperationalCards />
          </div>
        </div>
      </Container>
    </section>
  );
}
