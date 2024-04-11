import { useContext, useEffect } from 'react';
import { AppContext } from '@/context/index';
import Nav from '@/components/Nav';
import SpringIcons from '@/components/SpringIcons';
import { motion } from 'framer-motion';
import { slideInFromLeft } from '@/utils/motion';

export default function Hero() {
  const delayValue = 0.5;

  const context = useContext(AppContext);

  if (!context) {
    throw new Error('AppContext must be used within an Application');
  }

  const { changeBg, bg } = context;

  useEffect(() => {
    changeBg();
  }, []);

  return (
    <div
      className={`w-full flex min-h-screen flex-col items-start relative ${
        bg === 'custom-bg' ? 'bg-custom-bg' : ''
      } ${
        bg === 'custom-bg2' ? 'bg-custom-bg2' : ''
      } lg:px-[80px] md:px-[60px] sm:px-[40px] px-[20px] bg-cover bg-center`}
    >
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
  );
}
