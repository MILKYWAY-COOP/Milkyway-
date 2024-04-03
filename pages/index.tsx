import Nav from '@/components/Nav';
import SpringIcons from '@/components/SpringIcons';
import Cards from '@/components/Cards';
import './globals.css';

import { motion } from 'framer-motion';
import { slideInFromLeft } from '@/utils/motion';

export default function Page() {
  const delayValue = 0.5;

  return (
    <div className={`w-full flex flex-col items-start relative mw-bg gap-[40px] pb-[60px]`}>
      <div className="w-full flex min-h-screen flex-col items-start relative bg-gradient-overlay px-[80px]">
        <Nav />
        <div className="w-full h-[calc(100vh-149.219px)] flex flex-col items-center overflow-hidden gap-[60px]">
          <motion.div variants={slideInFromLeft(delayValue)}>
            <p className="text-white font-comfota text-[60px] text-center">
              MilkyWay Cooperation
            </p>
            <p className="text-white font-comfota text-[40px] text-center">
              Tech is our business and business is good
            </p>
          </motion.div>
          <SpringIcons />
        </div>
      </div>
      <div className="w-full flex flex-col items-center">
        <Cards />
      </div>
    </div>
  );
}
