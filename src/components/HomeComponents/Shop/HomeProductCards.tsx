import React, { useEffect, useState } from "react";
import { BsChevronLeft, BsChevronRight } from "react-icons/bs";
import { products } from "../../../ApiServices/Api";

export interface HomeProductCardsProps {
  name?: string;
  code?: string;
  image: string;
  category?: string
  prices?: {
    price?: number;
    salePrice?: number | null;
  }[];
  handleNextClick?: () => void;
  handlePrevClick?: () => void;
  homeTopSelling?: boolean;
  homeCompare?: boolean;
  homeTopSellingHeight?: boolean;
}

export default function HomeProductCards({
  image,
  name,
  prices,
  code,
  handleNextClick,
  handlePrevClick,
  homeTopSelling,
  homeCompare,
  homeTopSellingHeight,
}: HomeProductCardsProps) {
  function handleClick() {
    if (handleNextClick) {
      handleNextClick();
    }
  }

  return (
    <>
      {homeTopSelling ? (
        ""
      ) : (
        <div
          className={` absolute border hover:bg-black duration-500 hover:text-white ease-in-out hover:border-black  top-[240px] cursor-pointer left-8 bg-white shadow-lg p-2 
      `}
          onClick={() => {
            if (handlePrevClick) {
              handlePrevClick();
            }
          }}
        >
          <BsChevronLeft />
        </div>
      )}

      <div
        className={` ${
          homeTopSellingHeight ? "lg:w-[23%] border  w-full md:w-[48%]" : ""
        } space-y-4 relative ${
          homeCompare
            ? "w-[30%] gap-x-4 cursor-pointer pb-4 mb-6 hover:border hover:border-black duration-500 ease-in-out rounded-lg"
            : ""
        }  ${
          homeTopSelling
            ? "  cursor-pointer pb-4 mb-6  hover:border-black duration-500 ease-in-out rounded-lg"
            : "w-full md:w-1/2 lg:w-1/4"
        } `}
      >
        <img
          className={`object-cover relative  w-full  ${
            homeTopSelling ? "rounded-t-lg" : ""
          } ${homeCompare ? "h-[200px]" : "h-[300px]"}`}
          src={image}
          alt=""
        />

        <div
          className={`flex r tracking-widest flex-col  justify-center items-center text-center`}
        >
          {prices?.map((item) => (
            <>
              {item.salePrice && (
                <p className="absolute right-3 top-3 text-sm bg-black px-4 py-1 rounded-md text-white ">
                  {item.salePrice.toFixed(2) ? "Sale" : ""}
                </p>
              )}
            </>
          ))}
          <p className="mb-4">{code}</p>

          {prices?.map((item) => (
            <p className="text-[#666] mb-4">${item.price?.toFixed(2)}</p>
          ))}
          <button
            className={`hover:bg-white duration-500 bg-black text-white hover:text-black ease-in-out hover:border-black border tracking-widest text-sm uppercase  rounded-lg ${
              homeCompare ? "px-4 py-2" : "px-10 py-3"
            }`}
          >
            View Product
          </button>
        </div>
        {/* {homeCompare && <div className="text-center pt-[40px]">dassdasd</div>} */}
      </div>
      {homeTopSelling ? (
        ""
      ) : (
        <div
          className="absolute top-[240px]  hover:bg-black duration-500 hover:text-white ease-in-out hover:border-black cursor-pointer right-8 bg-white shadow-lg border p-2"
          onClick={() => handleClick()}
        >
          <BsChevronRight />
        </div>
      )}
    </>
  );
}
