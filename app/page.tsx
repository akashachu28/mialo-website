import Footer from '@/components/Footer';
import Hero from '@/components/Hero';
import Hero2 from '@/components/Hero2';
import Section3 from '@/components/Section3';
import Section4 from '@/components/Section4';
import Section5 from '@/components/Section5';
import Section6 from '@/components/Section6';
import Section7 from '@/components/Section7';
import Section8 from '@/components/Section8';
import { Reveal } from '@/components/animations';

export default function Home() {
  return (
    <div className="bg-background font-body text-primary antialiased">
      <Hero />
      <div className='bg-white/75' data-header-theme="light">
        <Reveal>
          <Hero2 />
        </Reveal>
      </div>
        
      
        <div className='bg-white/85' data-header-theme="light">
          <Reveal>
            <Section3 />
          </Reveal>
        </div>
        
      <div className='bg-white/75'>
        <Reveal>
          <Section4 />
        </Reveal>
      </div>

        {/* <Reveal>
          <Section5 />
        </Reveal> */}
        <Reveal>
          <Section6 />
        </Reveal>
      {/* <Reveal>
        <Section7 />
      </Reveal> */}
      {/* <div className=''>
        <Reveal>
          <Section8 />
        </Reveal>
      </div> */}
      <Footer/>
    </div>
  );
}
