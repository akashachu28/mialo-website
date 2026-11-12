import Footer from "@/components/Footer";
import Hero from "@/components/Hero";
import Hero2 from "@/components/Hero2";
import Section3 from "@/components/Section3";
import Section4 from "@/components/Section4";
import Section5 from "@/components/Section5";
import Section6 from "@/components/Section6";
import Section7 from "@/components/Section7";
import Section8 from "@/components/Section8";
import { Reveal } from "@/components/animations";

export default function Home() {
  return (
    <div className="bg-background font-body text-primary antialiased">
      <Hero />
      <div className="relative bg-white/95" data-header-theme="light">
        {/* Subtle radial gradient overlay */}
        {/* <div
          className="absolute inset-0 pointer-events-none"
          style={{
            background:
              "radial-gradient(circle at 0% 0%, rgba(108, 147, 255, 0.15), transparent 60%), radial-gradient(circle at 90% 80%, rgba(161, 140, 255, 0.15), transparent 50%)",
          }}
        /> */}
        <Reveal>
          <Hero2 />
        </Reveal>
        {/* <div className='absolute bg-linear-to-b from-[#C1C1C2] to-transparent inset-0 flex w-full h-30'/> */}
        <Reveal>
          <Section3 />
        </Reveal>
      </div>

      {/* <div className="relative" data-header-theme="light"> */}
        <Reveal>
          <Section4 />
        </Reveal>
      {/* </div> */}

      <Reveal>
        <Section6 />
      </Reveal>

      <Footer />
    </div>
  );
}
