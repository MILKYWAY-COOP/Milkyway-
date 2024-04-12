import { motion } from 'framer-motion';
import { useState, useContext } from 'react';
import { AppContext } from '@/context/index';
import {
  slideInFromLeft,
  slideInFromRight,
  slideBracketRight,
  slideBracketLeft,
} from '@/utils/motion';
import { IoClose } from 'react-icons/io5';
import Github from '@/assets/github';
import Linkedin from '@/assets/linkedin';
import Stackoverflow from '@/assets/stackoverflow';
import Upwork from '@/assets/upwork';
import Link from 'next/link';
import Logo from '@/assets/logo';

export default function Nav() {
  const [isHovered, setIsHovered] = useState<string | null>(null);
  const navItems = ['Services', 'Giving Back', 'Work', 'Blog', 'Contact Us'];

  const context = useContext(AppContext);

  if (!context) {
    throw new Error('AppContext must be used within an Application');
  }

  const { screen, isNavOpen, setIsNavOpen } = context;

  return (
    <motion.div
      className="w-full flex flex-col font-comfota"
      initial="hidden"
      animate="visible"
    >
      <motion.div
        className={`w-full flex-col font-comfota ${
          screen === 'sm' ? 'hidden' : 'flex'
        }`}
      >
        <motion.div
          className={`border-b-[1px] flex gap-4 ${
            screen === 'md'
              ? 'text-[13px]  py-[16px]'
              : 'text-[20px]  py-[18px]'
          }`}
        >
          <motion.p
            className={`text-white pr-4 bo'rder-r-[1px] font-comfota `}
            variants={slideInFromLeft(0.1)}
          >
            Need help ? Talk to an expert
          </motion.p>
          <motion.p className="text-white" variants={slideInFromLeft(0.2)}>
            +254 799 710693
          </motion.p>
        </motion.div>
        <motion.div
          className={`w-full flex flex-row justify-between ${
            screen === 'md'
              ? 'py-[16px] text-[13px] '
              : 'py-[30px] text-[18px] '
          } `}
        >
          <motion.div variants={slideInFromLeft(0.2)} className="">
            <Logo
              width={screen === 'md' ? 40 : 60}
              height={screen === 'md' ? 40 : 60}
            />
          </motion.div>
          <motion.ul className="flex gap-5">
            {navItems.map((item, index) => (
              <motion.li
                key={item}
                className="text-white cursor-pointer"
                onMouseEnter={() => setIsHovered(item)}
                onMouseLeave={() => setIsHovered(null)}
                variants={slideInFromRight(0.2 * index)}
              >
                <motion.span
                  variants={slideBracketLeft}
                  initial="hidden"
                  animate={isHovered === item ? 'hover' : 'hidden'}
                  className="absolute"
                >
                  [
                </motion.span>
                <a href={`#${item}`}>{item}</a>
                <motion.span
                  variants={slideBracketRight}
                  initial="hidden"
                  animate={isHovered === item ? 'hover' : 'hidden'}
                  className="absolute"
                >
                  ]
                </motion.span>
              </motion.li>
            ))}
          </motion.ul>
        </motion.div>
      </motion.div>

      <motion.div
        className={`w-full flex justify-between align-center py-[30px] px-[28px] 
           ${screen === 'sm' ? '' : 'hidden'}
            `}
      >
        <motion.div variants={slideInFromLeft(0.2)} className="">
          <Logo width={45} height={40} />
        </motion.div>

        <motion.button
          className="h-full flex flex-col justify-center gap-[6px]"
          onClick={() => setIsNavOpen(true)}
        >
          <motion.span
            className="block h-0.5 w-8 animate-pulse bg-grey"
            variants={slideInFromRight(0.2)}
          ></motion.span>
          <motion.span
            className="block h-0.5 w-8 animate-pulse bg-grey"
            variants={slideInFromRight(0.3)}
          ></motion.span>
          <motion.span
            className="block h-0.5 w-8 animate-pulse bg-grey"
            variants={slideInFromRight(0.4)}
          ></motion.span>
        </motion.button>
      </motion.div>

      <motion.div
        className={`w-full flex flex-col gap-4 absolute inset-0 bg-stars z-9999 p-[28px] ${
          isNavOpen ? 'flex' : 'hidden'
        }`}
        initial="hidden"
        animate="visible"
      >
        <motion.div className="w-full flex align-center justify-end">
          <motion.button
            onClick={() => setIsNavOpen(false)}
            className="text-white cursor-pointer"
          >
            <IoClose size={30} />
          </motion.button>
        </motion.div>
        <motion.ul className="w-full flex flex-col justify-center ">
          {navItems.map((item, index) => (
            <motion.li
              key={item}
              className="text-white cursor-pointer text-[26px] py-[33px] text-center"
              variants={slideInFromLeft(0.2 * index)}
            >
              {item}
            </motion.li>
          ))}
        </motion.ul>
        <motion.div className="w-full">
          <motion.div className="flex justify-center gap-4">
            <Link href="/">
              <Upwork width={30} height={30} />
            </Link>
            <Link href="/">
              <Github width={30} height={30} />
            </Link>
            <Link href="/">
              <Linkedin width={30} height={30} />
            </Link>
            <Link href="/">
              <Stackoverflow width={30} height={30} />
            </Link>
          </motion.div>
        </motion.div>
      </motion.div>
    </motion.div>
  );
}
