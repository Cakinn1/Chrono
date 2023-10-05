import React from "react";
import { BsBox2Fill } from "react-icons/bs";

export default function HomeInfomation({
  para,
  title,
  icon,
}: {
  title: string;
  para: string;
  icon: React.ReactNode;
}) {
  return (
    <div className="w-[23%] space-y-4 justify-center items-center flex flex-col">
      <p className="text-2xl">{icon}</p>
      <h1 className="uppercase tracking-widest">{title}</h1>
      <p className="text-[#383f40] text-sm">{para}</p>
    </div>
  );
}
