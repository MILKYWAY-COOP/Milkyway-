import { motion } from 'framer-motion';
import Image from 'next/image';
import Cloud from '@/assets/clouds.png';
import Sun from '@/assets/sun.png';

import FadeInWhenVisible from '@/utils/fadeInWhenVisible';
import { Lift } from '@/utils/motion';

export default function Giving() {
  //   const variants = ;

  return (
    <motion.div
      className="bg-skyBlue py-[72px] w-full flex pt-{322px} pb-[92px] px-[204px] gap-[35px] w-[50%]"
      initial="hidden"
      animate="visible"
    >
      <motion.div className="flex flex-col gap-[28px] flex-1 ">
        <FadeInWhenVisible>
          <motion.h2 className="text-white text-[44px] mb-[24px] font-comfota">
            Passion before business
          </motion.h2>
        </FadeInWhenVisible>
        <motion.p className="text-greyB text-[16px] text-comfota">
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
      <motion.div className="w-[50%] h-[750px] relative">
        <motion.div
          className="h-[100%] w-[100%] bg-koimbi bg-center bg-cover absolute top-0 left-0 right-0 bottom-0 z-999"
          //   variants={Lift()}
        />
      </motion.div>
    </motion.div>
  );
}
