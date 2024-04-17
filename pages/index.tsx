import { Application } from '@/context';

import Hero from '@/components/Hero';
import Cards from '@/components/Cards';
import About from '@/components/About';
import Giving from '@/components/Giving';
import Projects from '@/components/Projects';
import Contact from '@/components/Contact';
import Footer from '@/components/Footer';
import './globals.css';

export default function Page() {
  return (
    <Application>
      <div
        className={`w-full flex flex-col items-start justify-center relative bg-stars gap-[60px] lg:gap-[160px] pb-[80px] app`}
      >
        <Hero />
        <div className="flex flex-col md:gap-[80px] gap-[60px] lg:gap-[100px] px-[20px] md:px-[104px] xl:px-[150px]">
          <Cards />
          <About />
        </div>
        <Giving />
        <div
          className="flex flex-col xl:gap-[80px] gap-[60px] lg:gap-[100px] px-[20px] md:px-[104px] xl:px-[150px]"
          id="Work"
        >
          <Projects />
        </div>
        <div className="w-full flex flex-col xl:gap-[80px] gap-[60px] lg:gap-[100px] px-[20px] md:px-[104px] xl:px-[150px]">
          <Contact />
          <Footer />
        </div>
      </div>
    </Application>
  );
}
