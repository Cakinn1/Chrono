import React, { useEffect, useState } from "react";
import { BsChevronLeft, BsChevronRight } from "react-icons/bs";
import { products } from "../../../ApiServices/Api";

export interface HomeProductCardsProps {
  name?: string;
  code?: string;
  image: string;
  prices?: {
    price?: string;
    salePrice?: string | null;
  }[];
  handleNextClick?: () => void;
  handlePrevClick?: () => void;
}

export default function HomeProductCards({
  image,
  name,
  prices,
  code,
  handleNextClick,
  handlePrevClick,
}: HomeProductCardsProps) {
  return (
    <>
      <div
        className="absolute hover:bg-black duration-500 hover:text-white ease-in-out hover:border-black  top-[240px] cursor-pointer left-8 bg-white shadow-lg border p-2"
        onClick={() => {
          if (handlePrevClick) {
            handlePrevClick();
          }
        }}
      >
        <BsChevronLeft />
      </div>
      <div className="w-full md:w-1/2 lg:w-1/4 space-y-4">
        <img className="object-cover w-full h-[300px]" src={image} alt="" />
        <div className="flex tracking-widest flex-col space-y-4 justify-center items-center text-center">
          <p>{code}</p>
          {prices?.map((item) => (
            <p className="text-[#666]">{item.price}</p>
          ))}
          <button
            className="hover:bg-white duration-500 bg-black text-white hover:text-black ease-in-out
           hover:border-black border tracking-widest text-sm uppercase px-10 py-3 rounded-lg"
          >
            View Product
          </button>
        </div>
      </div>
      <div
        className="absolute top-[240px] hover:bg-black duration-500 hover:text-white ease-in-out hover:border-black cursor-pointer right-8 bg-white shadow-lg border p-2"
        onClick={() => {
          if (handleNextClick) {
            handleNextClick();
          }
        }}
      >
        <BsChevronRight />
      </div>
    </>
  );
}
