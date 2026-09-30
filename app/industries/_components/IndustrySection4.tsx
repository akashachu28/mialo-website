import Image from "next/image";
import { Container, Eyebrow, PrimaryButton, GhostButton } from "@/components/ui";

export default function IndustrySection4() {
  return (
    <section className="relative overflow-hidden border-t border-line py-16 sm:py-20 md:py-24 lg:py-28 xl:py-[120px]">
      <div aria-hidden className="absolute inset-0">
        <Image
          src="/images/horizonBanner.png"
          alt=""
          fill
          sizes="100vw"
          className="object-cover opacity-35 sm:opacity-40 md:opacity-45"
        />
        <div className="absolute inset-0 bg-background/65 sm:bg-background/70" />
        <div
          className="absolute inset-0"
          style={{
            background:
              "linear-gradient(180deg, var(--color-background) 0%, transparent 35%, transparent 65%, var(--color-background) 100%)",
          }}
        />
      </div>

      <Container className="relative flex flex-col items-center gap-5 sm:gap-6 md:gap-7 text-center px-4 sm:px-6">
        <Eyebrow>Our Vision</Eyebrow>
        <h2 className="max-w-full sm:max-w-[600px] md:max-w-[700px] lg:max-w-[720px] font-display text-2xl sm:text-3xl md:text-[30px] lg:text-[34px] xl:text-[38px] font-medium leading-tight sm:leading-[1.15] md:leading-[1.12] tracking-tight text-balance text-primary">
          A world where every operation is intelligent, connected and
          human-safe.
        </h2>
        <p className="max-w-full sm:max-w-[480px] md:max-w-[520px] lg:max-w-[560px] text-sm sm:text-[15px] md:text-base leading-relaxed sm:leading-[1.6] text-muted text-pretty">
          We envision a future where organizations of every size can anticipate
          what is next, automate with confidence and create lasting impact.
        </p>
        <div className="flex flex-col sm:flex-row flex-wrap justify-center gap-3 mt-2 sm:mt-0">
          <PrimaryButton>Learn more about Mialo</PrimaryButton>
          <GhostButton>Talk to experts</GhostButton>
        </div>
      </Container>
    </section>
  );
}
