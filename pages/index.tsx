
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
        className={`w-full flex flex-col items-start justify-center relative bg-stars gap-[160px] pb-[80px]`}
      >
        <Hero />
        <div className="flex flex-col gap-[160px] px-[204px]">
          <Cards />
          <About />
        </div>
        <Giving />
        <div className="flex flex-col gap-[160px] px-[204px]">
          <Projects />
          <Contact />
          <Footer />
        </div>
      </div>
    </Application>
  );
}
