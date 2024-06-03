"use client";
import React from "react";
import { Application } from "@/context";
import Nav from "@/components/Nav";

interface PageProps {
  children: React.ReactNode;
}

const Page: React.FC<PageProps> = ({ children }) => {
  return (
    <Application>
      {children}
    </Application>
  );
};

export default Page;
