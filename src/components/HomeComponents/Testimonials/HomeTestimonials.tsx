import React, { useEffect, useState } from "react";
import { BsChevronLeft, BsChevronRight, BsStarFill } from "react-icons/bs";
import useAnimation from "../../../animationHook/useAnimation";

export interface TestimonialsProps {
  image: string;
  name: string;
  paragraph: string;
}

export default function HomeTestimonials() {
  const [currentIndex, setCurrentIndex] = useState<number>(0);
  const [startIndex, setStartIndex] = useState<number>(0);
  const [endIndex, setEndIndex] = useState<number>(0);

  const { inViewPort: titleInView, ref: titleRef } = useAnimation();
  const { inViewPort: headerInView, ref: headerRef } = useAnimation();
  const { inViewPort: paragraphInView, ref: paragraphRef } = useAnimation();

  const { inViewPort: ratingInView, ref: ratingRef } = useAnimation();
  const { inViewPort: paragraph2InView, ref: paragraph2Ref } = useAnimation();
  const { inViewPort: nameInView, ref: nameRef } = useAnimation();
  const { inViewPort: imageInView, ref: imageRef } = useAnimation();
  

  const titleAnimation = titleInView && "animated-element";
  const headerAnimation = headerInView && "animate-element__delay-2s";
  const paragraphAnimation = paragraphInView && "animate-element__delay-3s";

  const ratingAnimation = ratingInView && "animate-element__delay-4s";
  const paragraph2Animation = paragraph2InView && "animate-element__delay-5s";
  const nameAnimation = nameInView && "animate-element__delay-6s";
  const imageAnimation = imageInView && "animate-element__delay-7s";

  function handlePrevClick() {
    setCurrentIndex((prevValue) =>
      prevValue === 0 ? testimonials.length - 1 : prevValue - 1
    );
  }

  function handleNextClick() {
    setCurrentIndex((prevValue) =>
      prevValue === testimonials.length - 1 ? 0 : prevValue + 1
    );
  }

  useEffect(() => {
    setStartIndex(currentIndex);
    setEndIndex(currentIndex + 1);
  }, [currentIndex]);

  const testimonials: TestimonialsProps[] = [
    {
      image: "./face1.png",
      name: "Michael Hickman",
      paragraph:
        "Chrono has truly become my go-to destination for all my accessory needs. Not only do they offer a fantastic range of products, but the attention to detail and craftsmanship are impeccable. From the moment I placed my order to the moment I received it, the entire experience was seamless, and the customer support team was […]",
    },
    {
      image: "./face2.png",
      name: "Sam Gonzalez",
      paragraph:
        "I am extremely satisfied with my experience shopping at Chrono. The wide selection of accessories, combined with the easy navigation and smooth checkout process, made my purchase a breeze. The item arrived promptly and was exactly as described, showcasing the store’s commitment to quality. I highly recommend this store to anyone looking for stylish and […]",
    },
    {
      image: "./pace3.png",
      name: "John Malone",
      paragraph:
        "I couldn’t be more thrilled with my recent purchase from Chrono. The quality of the product exceeded my expectations, and the customer service was outstanding. I’ll definitely be coming back for more stylish accessories to elevate my wardrobe!”",
    },
    {
      image: "./face4.png",
      name: "James Williams",
      paragraph:
        "I can’t express enough how impressed I am with the online men’s accessories store. The quality, style, and variety of their products are unmatched. Whether I’m in need of a sleek leather wallet, a stylish tie, or a statement bracelet, I always find exactly what I’m looking for. The attention to detail in packaging and […]",
    },
  ];

  return (
    <section className="mx-auto bg-[#1b1b1b] ">
      <div className="max-w-[1300px] mx-auto p-6 text-white ">
        <div className="flex text-center md:text-left justify-center space-y-4 pt-6  items-center flex-col">
          <h1
            className={`uppercase tracking-wider ${titleAnimation}`}
            ref={titleRef}
          >
            testimonials
          </h1>
          <h2 className={`text-6xl ${headerAnimation}`} ref={headerRef}>
            Happy Customers
          </h2>
          <p className={`${paragraphAnimation}`} ref={paragraphRef}>
            Don't take it from us. Check out the glowing testimonials from our
            satisfied customers.
          </p>
        </div>

        <div className="p-20 text-white relative">
          <div
            className={`absolute border text-black  md:left-4 hover:bg-black duration-500 hover:text-white ease-in-out hover:border-black   top-[180px] cursor-pointer left-8 bg-white shadow-lg p-2`}
            onClick={() => {
              handlePrevClick();
            }}
          >
            <BsChevronLeft />
          </div>
          <div className="">
            {testimonials.slice(startIndex, endIndex).map((item) => (
              <div className="flex  flex-col md:flex-row gap-x-4">
                <img
                  src={item.image}
                  ref={imageRef}
                  className={`${imageAnimation} w-[200px] mx-auto h-[235px] object-cover border rounded-lg`}
                  alt=""
                />
                <div className="space-y-4">
                  <div className={`${ratingAnimation} flex items-center gap-x-1 text-[#a27a25] my-4`} ref={ratingRef}>
                    <BsStarFill />
                    <BsStarFill />
                    <BsStarFill />
                    <BsStarFill />
                    <BsStarFill />
                  </div>
                  <p className={`${paragraph2Animation}`} ref={paragraph2Ref}>"{item.paragraph}</p>
                  <p className={`text-[#eee] ${nameAnimation}`} ref={nameRef} >
                    {" "}
                    -{" "}
                    <span ref={nameRef} className={`${nameAnimation} italic hover:border-b cursor-pointer hover:border-[#eee]`}>
                      {item.name}
                    </span>
                  </p>
                </div>
              </div>
            ))}
          </div>

          <div
            className="absolute  top-[180px] md:right-4 text-black hover:bg-black duration-500 hover:text-white ease-in-out hover:border-black cursor-pointer right-8 bg-white shadow-lg border p-2"
            onClick={() => handleNextClick()}
          >
            <BsChevronRight />
          </div>
        </div>
      </div>
    </section>
  );
}
