import React from "react";
import { BlogDataProps } from "../../pages/News";

export interface NewsItemCardProps {
  image?: string;
  date?: string;
  category?: string;
  header?: string;
  paragraph?: string;
}

export default function NewsItemCard({
  image,
  date,
  category,
  header,
  paragraph,
}: NewsItemCardProps) {
  return (
    <div className="w-full md:w-[48%] lg:w-[31%] space-y-2 border-black min-h-[600px] h-full border mb-6 p-6">
      <img src={image} className="object-cover w-full h-[40%]" alt="" />
      <div className="flex items-center text-sm justify-between">
        <p className="text-[#383f40] text-[12px]">{date}</p>
        <div>
          <span className="text-[#a27a25] hover:border-b-[#a27a25] pb-1 hover:border-b">
            Blog
          </span>{" "}
          |{" "}
          <span className="text-[#a27a25] hover:border-b-[#a27a25] pb-1 hover:border-b">
            {category}
          </span>
        </div>
      </div>
      <div className="space-y-2">
        <h1 className="text-[29px] leading-8 cursor-pointer hover:text-[#a27a25] hover:duration-500 duration-500 ease-in-out">
          {header}
        </h1>
        <p className="text-[#383f40]">{paragraph}</p>
        <button className="leading-8 cursor-not-allowed  text-[#a27a25] border-b-[#a27a25] border-b hover:font-bold  hover:duration-500 duration-500 ease-in-out">Continue Reading </button>
      </div>
    </div>
  );
}
