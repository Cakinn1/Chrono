import React, { useEffect, useRef, useState } from "react";
import HomeShopArrivals from "../Shop/HomeShopArrivals";
import HomeStylishPhotos from "./HomeStylishPhotos";
import HomeShopAnimation from "../Shop/HomeShopAnimation";
import useAnimation from "../../../animationHook/useAnimation";

export default function HomeStylishQuality() {
  const { inViewPort: imageInView, ref: imageRef } = useAnimation();
  const { inViewPort: titleInView, ref: titleRef } = useAnimation();
  const { inViewPort: paragraphInView, ref: paragraphRef } = useAnimation();

  const imageAnimation = imageInView && "animated-element";
  const titleAnimation = titleInView && "animate-element__delay-2s";
  const paragraphAnimation = paragraphInView && "animate-element__delay-3s";


  return (
    <>
      <div className="bg-white">
        <div
          className={`max-w-[1300px] mx-auto p-6  justify-center items-center text-center `}
        >
          <div
            ref={imageRef}
            className="flex tracking-widest flex-col space-y-4"
          >
            <img
              src="./b2.png"
              className={`w-[100px] mx-auto h-[100px] ${imageAnimation}`}
              alt=""
            />
            <h1 ref={titleRef} className={`text-5xl  ${titleAnimation}`}>
              Stylish. Functional. Quality.
            </h1>
            <p
              ref={paragraphRef}
              className={`text-sm text-[#383f40] ${paragraphAnimation}`}
            >
              Our goal is to provide products that stand the test of time
            </p>
          </div>
        </div>
        <HomeStylishPhotos />
        <HomeShopAnimation />
      </div>
    </>
  );
}
