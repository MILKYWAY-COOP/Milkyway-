import { Application } from "@/context";

import Hero from "@/components/Hero";
import Cards from "@/components/Cards";
import About from "@/components/About";
import Giving from "@/components/Giving";
import Projects from "@/components/Projects";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";
import "./globals.css";

export default function Page() {
  return (
    <Application>
      <div className="w-[100vw] bg-stars flex flex-col items-center justify-center">
        <div
          className={`w-full flex flex-col items-start justify-center relative  gap-[60px] lg:gap-[160px] app`}
        >
          <Hero />
          <div className="sm:w-[640px] md:w-[768px] lg:w-[1280px] flex flex-col items-center md:gap-[80px] gap-[60px] lg:gap-[100px] px-[20px] self-center">
            <Cards />
            <About />
          </div>
          <Giving />
          <div
            className="sm:w-[640px] md:w-[768px] lg:w-[1280px] flex flex-col justify-center xl:gap-[80px] gap-[60px] lg:gap-[100px] px-[20px] self-center"
            id="Work"
          >
            <Projects />
          </div>
          <div className="sm:w-[640px] md:w-[768px] lg:w-[1280px] flex flex-col xl:gap-[80px] gap-[60px] lg:gap-[100px] px-[20px] self-center">
            <Contact />
          </div>
          <Footer />
        </div>
      </div>
    </Application>
  );
}
