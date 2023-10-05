import React from "react";
import { BsArrowRight } from "react-icons/bs";
import useAnimation from "../../../animationHook/useAnimation";
import { products } from "../../../ApiServices/Api";

export default function HomeProductOfWeek() {
  const { inViewPort: titleInView, ref: titleRef } = useAnimation();
  const { inViewPort: paragraphInView, ref: paragraphRef } = useAnimation();
  const { inViewPort: paragraph2InView, ref: paragraph2Ref } = useAnimation();
  const { inViewPort: viewProductInView, ref: viewProductRef } = useAnimation();
  const titleAnimation = titleInView && "animated-element";
  const paragraphAnimation = paragraphInView && "animate-element__delay-2s";
  const paragraph2Animation = paragraph2InView && "animate-element__delay-3s";
  const viewProductAnimation = viewProductInView && "animate-element__delay-4s";
  const { inViewPort: imgInView, ref: imgRef } = useAnimation();
  const { inViewPort: buttonInView, ref: buttonRef } = useAnimation();
  const { inViewPort: button2InView, ref: button2Ref } = useAnimation();
  const { inViewPort: button3InView, ref: button3Ref } = useAnimation();
  const imgAnimation = imgInView && "animate-element__delay-2s";
  const buttonAnimation = buttonInView && "animate-element__delay-4s";
  const button2Animation = button2InView && "animate-element__delay-5s";
  const button3Animation = button3InView && "animate-element__delay-6s";

  return (
    <div className="max-w-[1300px] flex-col lg:flex-row px-6 py-12 mx-auto flex gap-x-6">
      <div className="w-full lg:w-1/2 p-6  flex flex-col lg:h-[800px] ">
        <div className="my-auto space-y-6 tracking-wider">
          <h1 ref={titleRef} className={`uppercase ${titleAnimation}`}>
            Hand-picked
          </h1>
          <h1 ref={paragraphRef} className={`text-5xl ${paragraphAnimation}`}>
            Product of the week
          </h1>

          <p
            ref={paragraph2Ref}
            className={`text-[#383f40] ${paragraph2Animation}`}
          >
            Experience the pinnacle of eyewear innovation with Flare Glaciers.
            These sunglasses are meticulously crafted to elevate your style
            while providing unmatched visual clarity.
          </p>

          <div
            ref={viewProductRef}
            className={`flex w-[140px] items-center gap-x-4 text-[#a27a25] border-[#a27a25] border-b ${viewProductAnimation}`}
          >
            <p>View Product</p>
            <BsArrowRight />
          </div>
        </div>
      </div>

      <div className="w-full lg:w-1/2 h-[800px] relative  border">
        <img
          ref={imgRef}
          src={products[6].image}
          className={`w-full h-[550px] object-cover ${imgAnimation}`}
          alt=""
        />
        <div
          ref={paragraph2Ref}
          className={`absolute left-6 top-[450px] space-y-2 ${paragraph2Animation}`}
        >
          <p>{products[6]?.prices[0].price}</p>
          <p className="tracking-widest uppercase text-lg">
            {products[6].name}
          </p>
        </div>
        <div className={`p-6 flex flex-col text-center space-y-4`}>
          <button
            ref={buttonRef}
            className={`border tracking-widest rounded-lg uppercase hover:bg-black hover:text-white transition-colors duration-500 hover:duration-500 ease-in-out border-black w-full py-2 ${buttonAnimation}`}
          >
            Add to cart
          </button>
          <p
            ref={button2Ref}
            className={`text-[#a27a25] border-[#a27a25] border-b w-[75px] mx-auto ${button2Animation}`}
          >
            View Cart
          </p>
          <button
            ref={button3Ref}
            className={`hover:bg-white duration-500 bg-black text-white hover:text-black ease-in-out
            hover:border-black border tracking-widest text-sm uppercase px-10 py-3 rounded-lg ${button3Animation}`}
          >
            View Product
          </button>
        </div>
      </div>
    </div>
  );
}
