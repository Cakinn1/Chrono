import useAnimation from "../../../animationHook/useAnimation";

export default function HomeEyewear() {
  const { inViewPort: titleInView, ref: titleRef } = useAnimation();
  const { inViewPort: paragraphInView, ref: paragraphRef } = useAnimation();
  const { inViewPort: buttonInView, ref: buttonRef } = useAnimation();
  const { inViewPort: imageInView, ref: imageRef } = useAnimation();

  const titleAnimation = titleInView && "animated-element";
  const paragraphAnimation = paragraphInView && "animate-element__delay-2s";
  const buttonAnimation = buttonInView && "animate-element__delay-3s";
  const imageAnimation = imageInView && "animate-element__delay-6s";

  return (
    <>
      <div className="w-full absolute h-[480px] -z-50 mb-[10px]">
        <img
          src="/bg1.jpeg"
          className={`h-full object-cover md:object-lef object-left w-full`}
          alt=""
        />
      </div>
      <div
        className="max-w-[1300px] font-bold flex-col mx-auto
         flex justify-center items-center text-center h-[480px] md:w-2/3 text-white z-10 relative"
      >
        <div className="absolute md:right-0 tracking-widest space-y-4 w-[300px]">
          <h1 className={`text-5xl ${titleAnimation}`} ref={titleRef}>
            Elegant Eyewear.
          </h1>
          <p className={`text-[12px] ${paragraphAnimation}`} ref={paragraphRef}>
            Check out our collection of stylish shades.
          </p>
          <button
            ref={buttonRef}
            className={`uppercase px-8 py-3 hover:border-black duration-500 transition-colors hover:duration-500 hover:bg-white hover:text-black ease-in-out text-sm rounded-lg  border-white border ${buttonAnimation}`}
          >
            View Sunglasses
          </button>
        </div>
      </div>
    </>
  );
}
