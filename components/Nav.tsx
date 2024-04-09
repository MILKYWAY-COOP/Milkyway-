import { motion } from 'framer-motion';
import { useState } from 'react';
import {
  slideInFromLeft,
  slideInFromRight,
  slideBracketRight,
  slideBracketLeft,
} from '@/utils/motion';

export default function Nav() {
  const [isHovered, setIsHovered] = useState<string | null>(null);
  const navItems = ['Work', 'Blog', 'Giving Back'];

  return (
    <motion.div className="w-full flex flex-col font-comfota">
      <motion.div
        variants={slideInFromLeft(0.1)}
        className="border-b-[1px] py-[20px] flex gap-4"
      >
        <motion.p className="text-white pr-4 border-r-[1px] font-comfota">
          Need help ? Talk to an expert
        </motion.p>
        <motion.p className="text-white">+254 799 710693</motion.p>
      </motion.div>
      <motion.div className="w-full flex flex-row justify-between py-[30px]">
        <motion.div variants={slideInFromLeft(0.2)} className="">
          <motion.h2 className="text-white font-bold">MC (Logo)</motion.h2>
        </motion.div>
        <motion.ul variants={slideInFromRight(0.2)} className="flex gap-5">
          {navItems.map((item) => (
            <motion.li
              key={item}
              className="text-white cursor-pointer"
              onMouseEnter={() => setIsHovered(item)}
              onMouseLeave={() => setIsHovered(null)}
            >
              <motion.span
                variants={slideBracketLeft}
                initial="hidden"
                animate={isHovered === item ? 'hover' : 'hidden'}
                className="absolute"
              >
                [
              </motion.span>
              {item}
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
  );
}
