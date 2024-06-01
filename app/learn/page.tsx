"use client";
import { Application } from "@/context";
import React from "react";
import Nav from "@/components/Nav";

interface PageProps {
  // Define your props here
}

const Page: React.FC<PageProps> = (props) => {
  return (
    <Application>
      <div className="bg-[#17468D] w-[100vw] min-h-[100vh]">
        <div className="bg-red w-[100%] min-h-[85vh] bg-custom-bg5 bg-cover bg-center flex justify-center">
          <div className="sm:w-[640px] md:w-[768px] lg:w-[1280px] flex justify-center">
            <Nav />
          </div>
        </div>
      </div>
    </Application>
  );
};

export default Page;
