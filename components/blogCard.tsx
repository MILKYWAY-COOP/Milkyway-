import React from "react";
import Image from "next/image";
import { motion, useMotionValue, useTransform } from "framer-motion";
import blogs from "@/data/blog";
import { useRouter } from "next/navigation";
import { replaceNonAlphanumericWithHyphen } from "@/utils/helpers";

interface PageProps {
  // Define your props here
}

const BlogCard: React.FC<PageProps> = (props) => {
  const router = useRouter();
  const scaleValue = useMotionValue(1);
  const scale = useTransform(scaleValue, [1, 1.2], [1, 1.2]);

  const handleMouseEnter = () => {
    scaleValue.set(1.2);
  };

  const handleMouseLeave = () => {
    scaleValue.set(1);
  };

  return (
    <div className="w-[280px] h-fit flex flex-col justify-center items-center overflow-hidden rounded cursor-pointer">
      <div className="w-full h-[200px] overflow-hidden">
        <motion.div
          className="w-[100%] h-[100%] transform-gpu transition-transform duration-300 ease-in-out"
          style={{
            scale,
          }}
          onMouseEnter={handleMouseEnter}
          onMouseLeave={handleMouseLeave}
        >
          <Image
            src={blogs[0].image}
            alt={blogs[0].image}
            className="object-cover h-[200px] w-[100%]"
            width={1280}
            height={1020}
          />
        </motion.div>
      </div>
      <div className="w-[100%] bg-greyB flex flex-col p-9 gap-3">
        <div className="text-black text-[14px] font-200">
          {blogs[0].datePublished}
        </div>
        <h5 className="text-black text-[16px] font-bold">{blogs[0].title}</h5>
        <button
          className="w-fit bg-white p-2 rounded-[20px] px-4 text-[18px] self-end hover:bg-contrast1 transform transition-transform duration-500 ease-in-out"
          onClick={() => {
            const title = replaceNonAlphanumericWithHyphen(blogs[0].title);
            router.push(`/learn/${title}`);
          }}
        >
          Read
        </button>
      </div>
    </div>
  );
};

export default BlogCard;
