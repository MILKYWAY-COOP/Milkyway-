import { useContext, useEffect } from "react";
import { AppContext } from "@/context/index";
import Nav from "@/components/Nav";
import SpringIcons from "@/components/SpringIcons";
import { motion } from "framer-motion";
import { slideInFromLeft } from "@/utils/motion";

export default function Hero() {
  const delayValue = 0.5;

  const context = useContext(AppContext);

  if (!context) {
    throw new Error("AppContext must be used within an Application");
  }

  const { changeBg, bg, screen } = context;

  useEffect(() => {
    changeBg();
  }, []);

  return (
    <div
      className={`w-[100vw] h-[100vh] flex justify-center ${
        bg === "custom-bg1"
          ? "bg-custom-bg1"
          : bg === "custom-bg2"
          ? "bg-custom-bg2"
          : bg === "custom-bg3"
          ? "bg-custom-bg3"
          : bg === "custom-bg4"
          ? "bg-custom-bg4"
          : bg === "custom-bg5"
          ? "bg-custom-bg5"
          : ""
      } bg-cover bg-center overflow-hidden`}
    >
      <div className="sm:w-[640px] md:w-[768px] lg:w-[1280px] flex flex-col items-start relative">
        <Nav />
        <div className="w-[100%] h-full flex flex-col items-center justify-start  gap-[60px]">
          <motion.div
            variants={slideInFromLeft(delayValue)}
            className="w-full text-center"
          >
            <p className="w-full text-white font-comfota md:text-[50px] sm:text-[40px] text-[40px] text-center">
              MilkyWay Cooperation
            </p>
            <p className="w-full text-white font-comfota md:text-[30px] sm:text-[30px] text-[16px] text-center">
              Tech is our business and business is good
            </p>
          </motion.div>
          <SpringIcons />
        </div>
      </div>
    </div>
  );
}
