import React from "react";
import useAnimation from "../../../animationHook/useAnimation";
import Blogs from "./Blogs";

export default function HomeBlog() {
  const { inViewPort: titleInView, ref: titleRef } = useAnimation();
  const { inViewPort: headerInView, ref: headerRef } = useAnimation();
  const { inViewPort: buttonInView, ref: buttonRef } = useAnimation();

  const titleAnimation = titleInView && "animated-element";
  const headerAnimation = headerInView && "animate-element__delay-2s";
  const buttonAnimation = buttonInView && "animate-element__delay-5s";

  return (
    <div className="bg-white">
      <div className="mx-auto max-w-[1300px] p-6 py-12">
        <div className="flex tracking-widest justify-center items-center flex-col space-y-4">
          <h1 ref={titleRef} className={`uppercase ${titleAnimation}`}>
            latest news
          </h1>
          <h2 ref={headerRef} className={`${headerAnimation} text-5xl`}>
            From The Blog
          </h2>
        </div>

        <div className="mt-10 flex justify-center flex-col space-y-12 md:space-y-0 md:flex-row flex-wrap  gap-x-8">
          <Blogs
            image="./blog1.jpeg"
            category="Watches"
            paragraph="Sports Watches: Functionality and Style for the Active Gentleman"
          />
          <Blogs
            image="./blog2.jpeg"
            category="Sunglasses"
            paragraph="The Power of Sunglasses: Finding the Ideal Shades for Your Face Shape"
          />
          <Blogs
            image="./blog3.jpeg"
            categoryBefore="Accessories "
            category="Bracelets"
            paragraph={`From Casual to Dapper: The Versatility of Men's Bracelets`}
          />
        </div>
        <div className="flex justify-center items-center">
          <button
            ref={buttonRef}
            className={`border uppercase tracking-widest mt-8 lg:mt-0  hover:bg-transparent px-14 py-2 bg-black text-white hover:border-black hover:text-black duration-500 hover:duration-500 ease-in-out transition-colors rounded-md ${buttonAnimation}`}
          >
            more from the blog
          </button>
        </div>
      </div>
    </div>
  );
}
