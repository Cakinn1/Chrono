import React from "react";

export default function FooterLinks({
  boldTitle,
  para1,
  para2,
  para3,
  para4,
  para5,
  title,
}: {
  boldTitle: string
  title: string
  para1: string
  para2: string
  para3: string
  para4: string
  para5?: string
}) {
  return (
    <div className="w-full  md:w-1/3 space-y-3">
      <h1 className="tracking-widest">
        {title} <span className="font-bold">{boldTitle}</span>
      </h1>
      <div>
        <span className="text-[#a27a25] border-b cursor-not-allowed border-[#a27a25] hover:border-b-2">
          {para1}
        </span>
      </div>
      <div>
        <span className="text-[#a27a25] border-b cursor-not-allowed border-[#a27a25] hover:border-b-2">
          {para2}
        </span>
      </div>
      <div>
        <span className="text-[#a27a25] border-b cursor-not-allowed border-[#a27a25] hover:border-b-2">
          {para3}
        </span>
      </div>
      <div>
        <span className="text-[#a27a25] border-b cursor-not-allowed border-[#a27a25] hover:border-b-2">
          {para4}
        </span>
      </div>
      <div>
        <span className="text-[#a27a25] border-b cursor-not-allowed border-[#a27a25] hover:border-b-2">
          {para5}
        </span>
      </div>
    </div>
  );
}
