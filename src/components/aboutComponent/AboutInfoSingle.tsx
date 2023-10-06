import React, { useEffect, useState } from "react";
import { AboutInfoProps } from "./AboutInfo";

export default function AboutInfoSingle({
  image,
  info,
  isRight,
}: AboutInfoProps) {
  const [innerWidth, setInnerWidth] = useState<number>(window.innerWidth);

  useEffect(() => {
    function handleResize() {
      setInnerWidth(window.innerWidth);
    }

    window.addEventListener('resize', handleResize)

    return () => {
        window.removeEventListener('resize', handleResize)
    }
  }, []);
  return (
    <div className="flex flex-col md:flex-row">
      {isRight && innerWidth < 790 ? (
        <>
          <div className="w-full lg:w-1/2 ">
            <img src={image} className="object-cover w-full h-full" alt="" />
          </div>
          <div className="w-full lg:w-1/2 flex space-y-8 justify-center flex-col lg:p-12  bg-[#eee]">
            <h1 className="text-3xl tracking-wide">{info.title}</h1>
            <p className="text-[#383f40]">{info.paragraph}</p>
          </div>
        </>
      ) : isRight && innerWidth > 800 ? (
        <>
          <div className="w-full lg:w-1/2 flex space-y-8 justify-center flex-col lg:p-12 bg-[#eee]">
            <h1 className="text-3xl tracking-wide">{info.title}</h1>
            <p className="text-[#383f40]">{info.paragraph}</p>
          </div>
          <div className="w-full lg:w-1/2 ">
            <img src={image} className="object-cover w-full h-full" alt="" />
          </div>
        </>
      ) : (
        <>
          <div className="w-full lg:w-1/2">
            <img src={image} className="object-cover w-full h-full" alt="" />
          </div>
          <div className="w-full lg:w-1/2 flex space-y-8 justify-center flex-col lg:p-12  md:p-0 bg-[#eee]">
            <h1 className="text-3xl tracking-wide">{info.title}</h1>
            <p className="text-[#383f40]">{info.paragraph}</p>
          </div>
        </>
      )}
    </div>
  );
}
