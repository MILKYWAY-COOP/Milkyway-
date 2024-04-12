import Image from 'next/image';
import { useContext, useEffect } from 'react';
import { AppContext } from '@/context/index';
import Logo from '@/assets/logo';
import Github from '@/assets/github';
import Linkedin from '@/assets/linkedin';
import Stackoverflow from '@/assets/stackoverflow';
import Upwork from '@/assets/upwork';
import Link from 'next/link';
import { motion } from 'framer-motion';
import FadeInWhenVisible, {
  FadeInLeftWhenVisible,
  FadeInRightWhenVisible,
} from '@/utils/fadeInWhenVisible';

export default function Footer() {
  const context = useContext(AppContext);

  const navItems = ['Services', 'Giving Back', 'Work', 'Blog', 'Contact Us'];

  if (!context) {
    throw new Error('AppContext must be used within an Application');
  }

  const { bg, screen } = context;

  const date = new Date().getFullYear();

  return (
    <motion.div
      className="w-[100%] h-[400px] md:h-[500px] relative pt-[80px] overflow-hidden md:rounded-[40px]"
      initial="hidden"
      animate="visible"
    >
      <div
        className={`${bg === 'custom-bg' ? 'bg-custom-bg' : ''} ${
          bg === 'custom-bg2' ? 'bg-custom-bg2' : ''
        } w-full h-full bg-cover bg-center absolute inset-0 flex align-start md:flex-row flex-col`}
      >
        <div className="flex-1 w-full h-full flex flex-col md:gap-[24px] align-center p-[10px] md:p-[40px]">
          <FadeInWhenVisible>
            <Logo width={100} height={90} />
            <p className="text-grey text-[16px] font-comfota">
              © {date} MilkyWay. All rights reserved.
            </p>
          </FadeInWhenVisible>
        </div>
        <div className="flex-1 w-full h-full flex flex-col gap-[7px] md:gap-[24px] align-center p-[10px] md:p-[40px]">
          <h2 className="text-white md:text-[18px] font-comfota mb-[5] text-[16px] md:px] md:mb-[24px]">
            Menu
          </h2>
          {navItems.map((item, index) => (
            <span
              key={index}
              className="text-grey text-[12px] md:text-[16px] font-comfota"
            >
              <FadeInLeftWhenVisible delay={0.2 * index}>
                {item}
              </FadeInLeftWhenVisible>
            </span>
          ))}
        </div>
        <div className="flex-1 w-full h-full flex md:flex-col gap-[14px] md:gap-[24px] align-center p-[7px]  md:p-[40px] ">
          <FadeInRightWhenVisible delay={0.1}>
            <Link
              href="https://www.upwork.com/freelancers/stephenm10"
              target="_blank"
            >
              <Upwork width={screen === 'sm' ? 30 : 50} height={50} />
            </Link>
          </FadeInRightWhenVisible>
          <FadeInRightWhenVisible delay={0.4}>
            <Link href="https://github.com/steeeved" target="_blank">
              <Github width={screen === 'sm' ? 30 : 50} height={50} />
            </Link>
          </FadeInRightWhenVisible>
          <FadeInRightWhenVisible delay={0.8}>
            <Link
              href="https://www.linkedin.com/in/stephen-muchendu-a0762a1a1/"
              target="_blank"
            >
              <Linkedin width={screen === 'sm' ? 30 : 50} height={50} />
            </Link>
          </FadeInRightWhenVisible>
          <FadeInRightWhenVisible delay={0.12}>
            <Link
              href="https://stackoverflow.com/users/14085531/muchendu?tab=profile"
              target="_blank"
            >
              <Stackoverflow width={screen === 'sm' ? 30 : 50} height={50} />
            </Link>
          </FadeInRightWhenVisible>
        </div>
      </div>
    </motion.div>
  );
}
