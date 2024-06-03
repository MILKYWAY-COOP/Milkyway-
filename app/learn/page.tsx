"use client";
import { Application } from "@/context";
import React, { useState, useEffect } from "react";
import Nav from "@/components/Nav";
import blogs from "@/data/blog";
import { MainTags } from "@/data/blog";
import BT from "@/components/ui/blogTags";
import Image from "next/image";
import { motion, useMotionValue, useTransform } from "framer-motion";
import BlogCard from "@/components/blogCard";
import { slideInFromBottom, slideInFromLeft } from "@/utils/motion";
import { Poppins } from "next/font/google";

interface PageProps {
  // Define your props here
}

const Page: React.FC<PageProps> = (props) => {
  const [selectedTag, setSelectedTag] = useState<string>("All");

  return (
    <motion.div
      className="w-[100vw] min-h-[100vh] relative overflow-y-visible"
      initial="hidden"
      animate="visible"
    >
      <div className="bg-red w-[100%] min-h-[85vh] bg-custom-bg5 bg-cover bg-center flex justify-center">
        <div className="sm:w-[640px] md:w-[768px] lg:w-[1280px] flex flex-col items-center">
          <Nav />
          <motion.div
            className="flex flex-col mt-20 items-center"
            variants={slideInFromBottom(0.1)}
          >
            <span className="bg-contrast1 uppercase text-[12px] p-1 rounded mb-2 font-bold">
              {blogs[0].mainTag}
            </span>
            <BT.H1>{blogs[0].title}</BT.H1>
            <BT.SPAN className="text-[14px] text-white font-semibold">
              {blogs[0].datePublished}
            </BT.SPAN>
            <button className="bg-white border border-white hover:bg-transparent hover:text-white p-2 rounded-[20px] px-6 mt-8 text-[18px]">
              Read
            </button>
          </motion.div>
          <motion.div className="flex w-full items-start gap-6 pl-12 mt-[20px]">
            <motion.span
              className={`text-[16px] p-1 rounded mb-2 font-bold cursor-pointer ${
                selectedTag === "All"
                  ? "text-contrast1"
                  : "text-white hover:text-contrast1"
              }`}
              onClick={() => setSelectedTag("All")}
              variants={slideInFromLeft(0.2)}
            >
              All
            </motion.span>
            {Object.values(MainTags).map((tag, index) => (
              <motion.span
                key={tag}
                className={`text-[16px] p-1 rounded mb-2 font-bold cursor-pointer 
                  ${
                    selectedTag === tag
                      ? "text-contrast1"
                      : "text-white hover:text-contrast1"
                  }
                  `}
                onClick={() => setSelectedTag(tag)}
                variants={slideInFromLeft(0.2 * (index + 2))}
              >
                {tag}
              </motion.span>
            ))}
          </motion.div>
          <motion.div className="sm:w-[640px] md:w-[768px] lg:w-[1280px] flex absolute top-[56%] items-start justify-start gap-10 flex-wrap">
            {Array.from({ length: 10 })
              .slice(0, 8)
              .map((_, index) => (
                <motion.div
                  key={index}
                  variants={slideInFromBottom(0.1 * index)}
                >
                  <BlogCard />
                </motion.div>
              ))}
          </motion.div>
        </div>
      </div>
    </motion.div>
  );
};

export default Page;
