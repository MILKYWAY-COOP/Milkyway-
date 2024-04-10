import Nav from '@/components/Nav';
import SpringIcons from '@/components/SpringIcons';
import Cards from '@/components/Cards';
import About from '@/components/About';
import Giving from '@/components/Giving';
import Projects from '@/components/Projects';
import Contact from '@/components/Contact';
import './globals.css';

import { motion } from 'framer-motion';
import { slideInFromLeft } from '@/utils/motion';

export default function Page() {
  const delayValue = 0.5;

  return (
    <div
      className={`w-full flex flex-col items-start justify-center relative bg-stars gap-[160px] pb-[60px]`}
    >
      <div className="w-full flex min-h-screen flex-col items-start relative bg-custom-bg lg:px-[80px] md:px-[60px] sm:px-[40px] px-[20px] bg-cover bg-center">
        <Nav />
        <div className="w-full h-[calc(100vh-149.219px)] flex flex-col items-center mt-[50px] overflow-hidden gap-[60px]">
          <motion.div variants={slideInFromLeft(delayValue)}>
            <p className="text-white font-comfota md:text-[60px] sm:text-[40px] text-[30px] text-center">
              MilkyWay Cooperation
            </p>
            <p className="text-white font-comfota md:text-[40px] sm:text-[30px] text-[16px] text-center">
              Tech is our business and business is good
            </p>
          </motion.div>
          <SpringIcons />
        </div>
      </div>
      <div className="flex flex-col gap-[160px] px-[204px]">
        <Cards />
        <About />
      </div>
      <Giving />
      <div className="flex flex-col gap-[160px] px-[204px]">
        <Projects />
        <Contact />
      </div>
    </div>
  );
}
