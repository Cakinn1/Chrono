import React from "react";
import { Link } from "react-router-dom";
import useAnimation from "../../../animationHook/useAnimation";

export default function HomeMaterials() {
  const { inViewPort: titleInView, ref: titleRef } = useAnimation();
  const { inViewPort: paragraphInView, ref: paragraphRef } = useAnimation();
  const { inViewPort: buttonInView, ref: buttonRef } = useAnimation();

  const titleAnimation = titleInView && "animated-element";
  const paragraphAnimation = paragraphInView && "animate-element__delay-2s";
  const buttonAnimation = buttonInView && "animate-element__delay-3s";

  return (
    <>
      <div className="max-h-[400px]">
        <video
          src="./video.mp4"
          className="-z-50 object-cover w-full absolute h-[400px]"
          autoPlay
          muted
          loop
        ></video>
      </div>
      <div className="mx-auto max-w-[1200px] z-50 p-10">
        <div
          className="shadow-2xl tracking-wider rounded-lg w-[400px] bg-white h-[300px] space-y-6 p-6">
          <h1 ref={titleRef} className={`text-5xl font-bold ${titleAnimation}`}>
            Materials.
          </h1>
          <p className={`${paragraphAnimation}`} ref={paragraphRef}>
            Crafted from premium, hand-selected leather, our products exude
            timeless elegance and showcase the impeccable quality that is
            synonymous with our brand.
          </p>
          <div ref={buttonRef} className={`space-y-6 ${buttonAnimation}`}>
            <Link to="/about">
              <button className="px-4 py-1 border-black rounded-lg hover:bg-white hover:text-black bg-black text-white hover:border hover:duration-500 duration-500 ease-in-out border">
                About us
              </button>
            </Link>
          </div>
        </div>
      </div>
    </>
  );
}
