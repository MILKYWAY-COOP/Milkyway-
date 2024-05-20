import { motion } from "framer-motion";
import FadeInWhenVisible from "@/utils/fadeInWhenVisible";
import {
  FadeInLeftWhenVisible,
  FadeInRightWhenVisible,
} from "@/utils/fadeInWhenVisible";
import TopRatedIcon from "@/assets/topRated";
import SatisfactionIcon from "@/assets/satisfaction";
import DiscountIcon from "@/assets/discount";
import DownloadIcon from "@/assets/download";
import { slideInFromLeft, slideInFromRight } from "@/utils/motion";

const data = [
  {
    text: "Top Rated",
    icon: TopRatedIcon,
  },
  {
    text: "100% Satisfaction",
    icon: SatisfactionIcon,
  },
  {
    text: "Best Price & Quality",
    icon: DiscountIcon,
  },
];

export default function About() {
  const scrollToSection = (sectionId: string) => {
    const section = document.getElementById(sectionId) as HTMLElement;
    section.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <motion.div
      className="w-full h-full flex gap-[60px] align-center justify-center lg:flex-row flex-col-reverse"
      initial="hidden"
      animate="visible"
    >
      <motion.div className="lg:max-w-[50%] ">
        <FadeInWhenVisible>
          <motion.h1 className="text-white lg:text-[44px] mb-[24px] font-comfota text-[20px]">
            About Us
          </motion.h1>
        </FadeInWhenVisible>
        <FadeInLeftWhenVisible delay={0.2}>
          <motion.span className="text-greyB font-comfota text-[14px] lg:text-[18px]">
            We are software development company solely focused on creating
            cutting-edge software solutions, driven by a profound passion and
            motivation for technological innovation. We are committed to
            prioritizing efficient project delivery, ensuring that each project
            is completed within the agreed-upon budget constraints. Our goal is
            to set new standards in software development, by consistently
            delivering exceptional and timely solutions that meet and exceed our
            clients&apos; expectations. Our approach combines a blend of
            expertise, innovation, and a deep understanding of the latest
            technological trends to deliver unparalleled value.{" "}
          </motion.span>
        </FadeInLeftWhenVisible>
        <motion.div className="flex gap-[32px] mt-[32px]">
          {data.map((item, index) => (
            <FadeInWhenVisible key={index}>
              <motion.div className="flex flex-col gap-[12px] items-center">
                <item.icon width={24} height={24} />
                <motion.span className="text-white md:text-[20px] font-comfota">
                  {item.text}
                </motion.span>
              </motion.div>
            </FadeInWhenVisible>
          ))}
        </motion.div>
        <FadeInLeftWhenVisible delay={0.3}>
          {/* <motion.h1 className="text-[24px] text-white mt-[44px]">
            Stephen Muchendu - Founder
          </motion.h1> */}
        </FadeInLeftWhenVisible>
        <motion.div className="mt-[40px] flex gap-[20px] md:flex-row flex-col">
          <motion.button
            className="border-[1px] rounded-[5px] border-contrast1 px-[24px] py-[12px] text-white text-[18px] w-fit"
            variants={slideInFromLeft(0.3)}
            onClick={() => scrollToSection(`Contact Us`)}
          >
            Contact Us
          </motion.button>
          <motion.button
            className="border-[1px] rounded-[5px] border-contrast1 px-[24px] py-[12px] text-white text-[18px] flex gap-[10px] w-fit"
            variants={slideInFromLeft(0.3)}
          >
            <DownloadIcon width={24} height={24} />
            Download CV
          </motion.button>
        </motion.div>
      </motion.div>
      <FadeInRightWhenVisible delay={0.2}>
        <motion.video
          autoPlay
          loop
          muted
          className="w-[100%] aspect-video lg:w-[555px] lg:aspect-square "
          src="/blackhol.mp4"
          style={{ objectFit: "cover", objectPosition: "center" }}
        />
      </FadeInRightWhenVisible>
    </motion.div>
  );
}
