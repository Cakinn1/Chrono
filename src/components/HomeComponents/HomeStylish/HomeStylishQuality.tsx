import React, { useEffect, useRef } from "react";
import HomeShopArrivals from "../HomeShopComponents/HomeShopArrivals";
import HomeStylishPhotos from "./HomeStylishPhotos";
import HomeShopAnimation from "../HomeShopComponents/HomeShopAnimation";

export default function HomeStylishQuality() {
  const elementRef = useRef(null)



  return (
    <>
      <div className="max-w-[1300px] mx-auto p-6 tracking-widest flex flex-col space-y-4 justify-center items-center text-center">
        <img src="./b2.png" className="w-[100px] h-[100px]" alt="" />
        <h1 className="text-5xl scrolling-text__top">Stylish. Functional. Quality.</h1>
        <p className="text-sm text-[#383f40]">
          Our goal is to provide products that stand the test of time
        </p>

        <div className="animated-element" >Content</div>
      </div>
      <HomeStylishPhotos />
      <HomeShopAnimation />
    </>
  );
}
