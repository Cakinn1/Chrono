import useAnimation from "../../../animationHook/useAnimation";
import HomeShopAnimation from "../Shop/HomeShopAnimation";

export default function HomeNewsletter() {
  const { inViewPort: titleInView, ref: titleRef } = useAnimation();
  const { inViewPort: headerInView, ref: headerRef } = useAnimation();
  const { inViewPort: paragraphInView, ref: paragraphRef } = useAnimation();

  const titleAnimation = titleInView && "animated-element";
  const headerAnimation = headerInView && "animate-element__delay-2s";
  const paragraphAnimation = paragraphInView && "animate-element__delay-3s";

  return (
    <section
      className="md:h-[400px] bg-cover bg-center"
      style={{ backgroundImage: `url("bg4.jpeg")` }}
    >
      <div className="h-full py-10 bg-black bg-opacity-50">
        <div className="flex flex-col md:flex-row h-full mx-auto max-w-[1300px]">
          <div className="text-white space-y-4  mx-auto max-w-[1300px] w-full md:w-1/2 tracking-widest flex h-full flex-col p-6 justify-center">
            <h1 ref={titleRef} className={`uppercase ${titleAnimation}`}>
              stay updated
            </h1>
            <h1 ref={headerRef} className={`text-7xl ${headerAnimation}`}>
              Newsletter.
            </h1>
            <p ref={paragraphRef} className={`${paragraphAnimation}`}>
              By subscribing to our newsletter, you gain exclusive access to the
              latest updates on new arrivals, limited-edition releases, and
              special promotions.
            </p>
          </div>

          <div className="text-white tracking-widest flex flex-col justify-center p-6 space-y-8  h-full w-full md:w-1/2">
            <input
              ref={titleRef}
              type="text"
              placeholder="Name (required)"
              className={`bg-white ${titleAnimation} placeholder:text-black placeholder:font-bold text-black focus:outline-none placeholder:after:text-black py-4 px-3 rounded-lg `}
            />
            <input
              ref={headerRef}
              type="text"
              placeholder="Email (required)"
              className={`bg-white ${headerAnimation} placeholder:text-black placeholder:font-bold text-black focus:outline-none placeholder:after:text-black py-4 px-3 rounded-lg `}
            />
            <button
              ref={paragraphRef}
              className={`border-white ${paragraphAnimation} border w-[200px] hover:bg-black tracking-widest text-sm uppercase px-10 py-3 rounded-lg hover:border-black hover:text-white transition-colors duration-500 hover:duration-500 ease-in-out  `}
            >
              Subscribe
            </button>
          </div>
        </div>
      </div>
      <HomeShopAnimation />
    </section>
  );
}
