"use client";
import React, { useState, useEffect, ReactNode } from "react";
import { useParams } from "next/navigation";
import blogs from "@/data/blog";
import { replaceNonAlphanumericWithHyphen } from "@/utils/helpers";
import Nav from "@/components/Nav";
import BT from "@/components/ui/blogTags";
import Image from "next/image";

interface PageProps {
  // Define your props here
}

const Page: React.FC<PageProps> = (props) => {
  const [blog, setBlog] = useState<undefined | (typeof blogs)[0]>(undefined);
  const params = useParams();
  const { title }: any = params;

  useEffect(() => {
    const blog = blogs.find((b) =>
      replaceNonAlphanumericWithHyphen(b.title).includes(title)
    );
    setBlog(blog);
  }, [title]);

  if (!blog) {
    return <div>Loading...</div>;
  }

  return (
    <div className="w-full h-fit bg-skyBlue">
      <div className="sm:w-[640px] md:w-[768px] lg:w-[1280px] flex flex-col items-center justify-center px-[20px] self-center mx-auto ">
        <Nav />
        <div className="w-full mt-[40px] flex flex-col text-center">
          <h4 className="text-[20px] font-[300px] text-contrast1 bold">
            {blog?.mainTag}
          </h4>
          <BT.H1 className="">{blog?.title}</BT.H1>
          <BT.SPAN className="text-[14px] text-white font-semibold mt-[8px]">
            {blog?.datePublished}
          </BT.SPAN>
          {!!blog.description && (
            <BT.P className="mt-[16px] text-greyB text-[200]">
              {blog?.description}
            </BT.P>
          )}
          <Image
            src={blog.image}
            alt={blog.image}
            width={1280}
            height={1020}
            className="mt-[40px] object-cover w-[100%] aspect-[2/1]"
          />
        </div>
        <div className="w-[80%] mt-[40px] flex flex-col items-center">
          {blog.content}
        </div>
      </div>
    </div>
  );
};

export default Page;
