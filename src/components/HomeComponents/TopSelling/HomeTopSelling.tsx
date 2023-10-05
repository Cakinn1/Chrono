import React from "react";
import useAnimation from "../../../animationHook/useAnimation";
import HomeProductCards from "../Shop/HomeProductCards";
import { products } from "../../../ApiServices/Api";

export default function HomeTopSelling() {
  const { inViewPort: titleInView, ref: titleRef } = useAnimation();
  const { inViewPort: paragraphInView, ref: paragraphRef } = useAnimation();
  const { inViewPort: topParagraph, ref: topParagraphRef } = useAnimation();
  const { inViewPort: itemsInView, ref: itemsInRef } = useAnimation();

  const topParagraphAnimation = topParagraph && "animated-element";
  const titleAnimation = titleInView && "animate-element__delay-2s";
  const paragraphAnimation = paragraphInView && "animate-element__delay-4s";
  const itemsAnimation = itemsInView && "animate-element__delay-5s";
  return (
    <div className="max-w-[1300px] p-6 mx-auto">
      <div className="flex flex-col space-y-4 justify-center items-center tracking-widest">
        <p
          ref={topParagraphRef}
          className={`${topParagraphAnimation} uppercase`}
        >
          Top sellers
        </p>
        <h1 ref={titleRef} className={`text-5xl  ${titleAnimation}`}>
          Trending Styles
        </h1>
        <p
          ref={paragraphRef}
          className={`text-sm text-[#383f40]  ${paragraphAnimation}`}
        >
          Take a look at these top performers
        </p>
      </div>

      <div className={`flex flex-wrap my-[40px] gap-x-6 ${itemsAnimation} `} ref={itemsInRef}>
        {products.slice(3, 7).map((item) => (
          <HomeProductCards
            homeTopSelling={true}
            image={item.image}
            code={item.code}
            name={item.name}
            prices={item.prices}
            homeTopSellingHeight={true}
          />
        ))}
      </div>
    </div>
  );
}
