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
      className="w-[100%] h-[340px] md:h-[500px] relative pt-[80px] overflow-hidden md:rounded-[40px] rounded-[20px]"
      initial="hidden"
      animate="visible"
    >
      <div
        className={`${
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
        } w-full h-full bg-cover bg-center absolute inset-0 flex align-start md:flex-row flex-col gap-[0px] `}
      >
        <FadeInWhenVisible className="md:w-[40%] flex flex-col lg:gap-[24px] align-center p-[10px] md:p-[40px]">
          <Logo
            width={screen === 'sm' ? 80 : 120}
            height={screen === 'sm' ? 80 : 120}
          />
          <p className="text-grey text-[16px] font-comfota">
            © {date} MilkyWay. All rights reserved.
          </p>
        </FadeInWhenVisible>

        <div className="flex md:w-[66%]">
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

          <div className="flex-1 w-full h-full flex flex-col gap-[7px] md:gap-[24px] align-center p-[7px] md:p-[40px]">
            <FadeInRightWhenVisible delay={0.1}>
              <Link
                href="https://www.upwork.com/freelancers/stephenm10"
                target="_blank"
              >
                <Upwork
                  width={screen === 'sm' ? 30 : 50}
                  height={screen === 'sm' ? 30 : 50}
                />
              </Link>
            </FadeInRightWhenVisible>
            <FadeInRightWhenVisible delay={0.4}>
              <Link href="https://github.com/steeeved" target="_blank">
                <Github
                  width={screen === 'sm' ? 30 : 50}
                  height={screen === 'sm' ? 30 : 50}
                />
              </Link>
            </FadeInRightWhenVisible>
            <FadeInRightWhenVisible delay={0.8}>
              <Link
                href="https://www.linkedin.com/in/stephen-muchendu-a0762a1a1/"
                target="_blank"
              >
                <Linkedin
                  width={screen === 'sm' ? 30 : 50}
                  height={screen === 'sm' ? 30 : 50}
                />
              </Link>
            </FadeInRightWhenVisible>
            <FadeInRightWhenVisible delay={0.12}>
              <Link
                href="https://stackoverflow.com/users/14085531/muchendu?tab=profile"
                target="_blank"
              >
                <Stackoverflow
                  width={screen === 'sm' ? 30 : 50}
                  height={screen === 'sm' ? 30 : 50}
                />
              </Link>
            </FadeInRightWhenVisible>
          </div>
        </div>
      </div>
    </motion.div>
  );
}
