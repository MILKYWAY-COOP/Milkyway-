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

  const { changeBg, bg, screen } = context;

  useEffect(() => {
    changeBg();
  }, []);

  return (
    <div
      className={`w-full h-[100vh] flex min-h-screen flex-col items-start relative ${
        bg === 'custom-bg1'
        ? 'bg-custom-bg1'
        : bg === 'custom-bg2'
        ? 'bg-custom-bg2'
        : bg === 'custom-bg3'
        ? 'bg-custom-bg3'
        : bg === 'custom-bg4'
        ? 'bg-custom-bg4'
        : bg === 'custom-bg5'
        ? 'bg-custom-bg5'
        : ''
      } lg:px-[80px] md:px-[60px] sm:px-[40px] px-[20px] bg-cover bg-center overflow-hidden`}
    >
      <Nav />
      <div className="w-full h-[calc(100vh-149.219px)] flex flex-col items-center mt-[50px] overflow-hidden gap-[60px]">
        <motion.div variants={slideInFromLeft(delayValue)}>
          <p className="text-white font-comfota md:text-[50px] sm:text-[40px] text-[40px] text-center">
            MilkyWay Cooperation
          </p>
          <p className="text-white font-comfota md:text-[30px] sm:text-[30px] text-[16px] text-center">
            Tech is our business and business is good
          </p>
        </motion.div>
        <div className="w-[20%]">
          <SpringIcons />
        </div>
      </div>
    </div>
  );
}
