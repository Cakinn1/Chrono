import React from "react";
import useAnimation from "../../../animationHook/useAnimation";

export default function Blogs({
  image,
  category,
  paragraph,
  categoryBefore,
}: {
  image: string;
  category: string;
  paragraph: string;
  categoryBefore?: string;
}) {

  const { inViewPort: imageInView, ref: imageRef } = useAnimation();
  const { inViewPort: titleInView, ref: titleRef } = useAnimation();
  const { inViewPort: paragraphInView, ref: paragraphRef } = useAnimation();
  const { inViewPort: buttonInView, ref: buttonRef } = useAnimation();

  const imageAnimation = imageInView && "animated-element";
  const titleAnimation = titleInView && "animate-element__delay-2s";
  const paragraphAnimation = paragraphInView && "animate-element__delay-3s";
  const buttonAnimation = buttonInView && "animate-element__delay-4s";
  





  return (
    <div className="border rounded-md border-black w-full md:w-[44%] h-[450px]  md:mb-12 lg:w-[30%] p-6 space-y-4">
      <img ref={imageRef} src={image} className={`h-[140px] w-full object-cover ${imageAnimation}`} alt="" />
      <div ref={titleRef} className={`text-sm text-[#a27a25] ${titleAnimation}`} >
        <span className="hover:border-[#a27a25] hover:border-b hover:duration-500 cursor-pointer duration-500 ease-in-out">
          {categoryBefore}
        </span>
        {categoryBefore && <>|</>}{" "}
        <span className="hover:border-[#a27a25] hover:border-b hover:duration-500 cursor-pointer duration-500 ease-in-out">
          Blog
        </span>{" "}
        |{" "}
        <span className="hover:border-[#a27a25] hover:border-b hover:duration-500 cursor-pointer duration-500 ease-in-out">
          {" "}
          {category}
        </span>
      </div>
      <p ref={paragraphRef} className={`text-[29px] leading-8 cursor-pointer hover:text-[#a27a25] hover:duration-500 duration-500 ease-in-out ${paragraphAnimation}`}>
        {paragraph}
      </p>
      <button ref={buttonRef} className={`border uppercase tracking-widest  border-black duration-500 hover:duration-500 ease-in-out 
       hover:bg-black hover:text-white transition-colors rounded-md px-4 py-2 ${buttonAnimation}`}>
        read more
      </button>
    </div>
  );
}
