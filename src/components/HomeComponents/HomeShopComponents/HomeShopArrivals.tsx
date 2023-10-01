import { useEffect, useState } from "react";
import { BsChevronLeft, BsChevronRight } from "react-icons/bs";
import { products } from "../../../ApiServices/Api";
import HomeEyewear from "./HomeEyewear";
import HomeProductCards, { HomeProductCardsProps } from "./HomeProductCards";
import HomeShopAnimation from "./HomeShopAnimation";

export default function HomeShopArrivals() {
  console.log(products);
  const [currentIndex, setCurrentIndex] = useState<number>(0);
  const [items, setItems] = useState<HomeProductCardsProps[] | null>(null);

  function handlePrevClick() {
    if (items) {
      setCurrentIndex((prevIndex) =>
        prevIndex === 0 ? items?.length - 1 : prevIndex - 1
      );
      if (currentIndex === 0) {
        setCurrentIndex(16);
      }
    }
  }

  function handleNextClick() {
    if (items) {
      setCurrentIndex((prevIndex) =>
        prevIndex === items.length - 1 ? 0 : prevIndex + 1
      );
      if (currentIndex === 16) {
        setCurrentIndex(0);
      }
    }
  }

  let startIndex;
  let endIndex;

  if (window.innerWidth <= 764) {
    startIndex = currentIndex;
    endIndex = startIndex + 1;
  } else if (window.innerWidth >= 768 && window.innerWidth <= 1023) {
    startIndex = currentIndex;
    endIndex = startIndex + 2;
  } else if (window.innerWidth >= 1024) {
    startIndex = currentIndex;
    endIndex = startIndex + 4;
  }
  useEffect(() => {
    setItems(products);
  }, []);

  return (
    <>
      <section className="max-w-[1300px] mx-auto relative">
        <div className="flex flex-wrap my-[60px]">
          {items?.slice(startIndex, endIndex).map((item) => (
            <HomeProductCards
              handleNextClick={handleNextClick}
              handlePrevClick={handlePrevClick}
              image={item.image}
              name={item.name}
              prices={item.prices}
              code={item.code}
            />
          ))}
        </div>
      </section>


 
    </>
  );
}
