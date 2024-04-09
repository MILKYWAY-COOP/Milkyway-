import { motion } from 'framer-motion';
import Image from 'next/image';
import Cloud from '@/assets/clouds.png';
import Sun from '@/assets/sun.png';

export default function Giving() {
  return (
    <motion.div
      className="bg-skyBlue py-[72px] w-full flex pt-{322px} pb-[92px] px-[204px]"
      initial="hidden"
      animate="visible"
    >
      <motion.div>
        <motion.h2>Passion before business</motion.h2>
        <motion.p>
          At MilkyWay, we are deeply committed to driving progress and
          evolution, both within our company and in the world around us. Our
          belief is that as we grow and evolve, we have a significant role to
          play in the community. We strive to create impactful changes and
          advancements, reflecting our dedication to innovation and improvement.
          As we continue to expand and adapt, our focus remains steadfast on
          positively influencing and contributing to the world, embodying our
          core values of evolution and community involvement.
        </motion.p>
      </motion.div>
    </motion.div>
  );
}
