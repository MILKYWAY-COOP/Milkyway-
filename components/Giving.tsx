import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import Cloud from "@/assets/clouds.png";
import Sun from "@/assets/sun.png";

import FadeInWhenVisible, {
  FadeInLeftWhenVisible,
  FadeInRightWhenVisible,
} from "@/utils/fadeInWhenVisible";
import LeftDiagonalWhenVisible from "@/utils/leftDiagonalWhenVisible";
import RightDiagonalWhenVisible from "@/utils/rightDiagonalWhenVisible";
import SunAnimation from "@/utils/sunAnimation";

export default function Giving() {
  return (
    <div className="bg-skyBlue w-full flex justify-center">
      <motion.div
        className="sm:w-[640px] md:w-[768px] lg:w-[1280px] px-[20px] flex pt-[97px] md:pt-[122px] lg:pt-[250px] pb-[92px] gap-[16px] md:gap-[35px] relative lg:flex-row flex-col-reverse"
        initial="hidden"
        animate="visible"
        id="Giving Back"
      >
        <motion.div className="flex flex-col gap-[16px] md:gap-[28px] flex-1 ">
          <FadeInWhenVisible>
            <motion.h2 className="text-white text-[26px] md:text-[44px] xl:mb-[24px] font-comfota">
              Passion in business
            </motion.h2>
          </FadeInWhenVisible>
          <FadeInLeftWhenVisible className="text-greyB text-[14px] md:text-[16px] text-comfota">
            <motion.p>
              At MilkyWay, we are deeply committed to driving progress and
              evolution, both within our company and in the world around us. Our
              belief is that as we grow and evolve, we have a significant role
              to play in the community. We strive to create impactful changes
              and advancements, reflecting our dedication to innovation and
              improvement. As we continue to expand and adapt, our focus remains
              steadfast on positively influencing and contributing to the world,
              embodying our core values of evolution and community involvement.
            </motion.p>
          </FadeInLeftWhenVisible>
        </motion.div>
        <FadeInRightWhenVisible className="lg:w-[50%] lg:h-[750px] h-[291px] relative">
          <Link href="https://koimbi.web.app/" target="_blank">
            <motion.div className="h-[100%] w-[100%] bg-koimbi bg-center bg-cover absolute top-0 left-0 right-0 bottom-0 z-[999]" />
          </Link>
        </FadeInRightWhenVisible>
        <LeftDiagonalWhenVisible className="absolute top-[20px] lg:top-[90px] left-[20%] lg:left-[30%]">
          <Image
            src={Cloud}
            alt="cloud"
            className="w-[100px] md:w-[150px] lg:w-[250px]"
          />
        </LeftDiagonalWhenVisible>
        <RightDiagonalWhenVisible className="absolute top-[20px] lg:top-[50px] right-[5%] lg:right-[10%]">
          <Image
            src={Cloud}
            alt="cloud"
            className="w-[100px] md:w-[150px] lg:w-[250px]"
          />
        </RightDiagonalWhenVisible>
        <SunAnimation className="absolute top-[-20px] lg:top-[-50px] left-[45%] lg:left-[50%] z-[500]">
          <Image
            src={Sun}
            alt="sun"
            className="w-[100px] md:w-[150px] lg:w-[250px]"
          />
        </SunAnimation>
      </motion.div>
    </div>
  );
}
