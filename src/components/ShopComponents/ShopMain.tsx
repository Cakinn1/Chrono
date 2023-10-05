import React, { useState } from "react";
import { products } from "../../ApiServices/Api";
import HomeProductCards, {
  HomeProductCardsProps,
} from "../HomeComponents/Shop/HomeProductCards";

export default function ShopMain({
  filteredProducts,
}: {
  filteredProducts: HomeProductCardsProps[];
}) {
  const [currentPage, setCurrentPage] = useState<number>(1);
  const [selected, setSelected] = useState<number>(1);

  const productsPerPage = 8;
  const totalPages = Math.ceil(filteredProducts.length / productsPerPage);
  const startIndex = (currentPage - 1) * productsPerPage;
  const endIndex = startIndex + productsPerPage;
  const page = [];
  
  for (let i = 0; i < totalPages; i++) {
    page.push(i);
  }

  function handleNewPage(newPage: number) {
    setCurrentPage(newPage);
    setSelected(newPage);
  }

  let homeCompare = true;
  let homeTopSellingHeight = true;
  let homeTopSelling = true;

  return (
    <>
      <div className="max-w-[1300px] mx-auto p-6 flex-wrap flex gap-x-7">
        <>
          {filteredProducts.slice(startIndex, endIndex).map((item) => (
            <div
              className={` ${
                homeTopSellingHeight
                  ? "lg:w-[23%] border  w-full md:w-[48%]"
                  : ""
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
                src={item.image}
                alt=""
              />

              <div
                className={`flex r tracking-widest flex-col  justify-center items-center text-center`}
              >
                {item.prices?.map((item) => (
                  <>
                    {item.salePrice && (
                      <p className="absolute right-3 top-3 text-sm bg-black px-4 py-1 rounded-md text-white ">
                        {item.salePrice ? "Sale" : ""}
                      </p>
                    )}
                  </>
                ))}
                <p className="mb-4">{item.code}</p>

                {item.prices?.map((item) => (
                  <p className="text-[#666] mb-4">{item.price}</p>
                ))}
                <button
                  className={`hover:bg-white duration-500 bg-black text-white hover:text-black ease-in-out hover:border-black border tracking-widest text-sm uppercase  rounded-lg ${
                    homeCompare ? "px-4 py-2" : "px-10 py-3"
                  }`}
                >
                  View Product
                </button>
              </div>
            </div>
          ))}
        </>
      </div>
      <div className="flex justify-center items-center p-6  bg-white ">
        {page.map((pageNumber) => (
          <div
            className={`border cursor-pointer  border-black  py-1 px-4 ${
              pageNumber === page.length - 1 ? "border-r" : "border-r-0"
            }  ${selected === pageNumber + 1 ? "bg-black bg-opacity-30" : ""}`}
            onClick={() => handleNewPage(pageNumber + 1)}
          >
            {pageNumber + 1}
          </div>
        ))}
      </div>
    </>
  );
}

// implement a button that shows next and prev based on location of page number

/* {endIndex >= productsPerPage &&
pageNumber === page.length - 1 &&
endIndex <= productsPerPage * 2 ? (
<>next</>
) : (
pageNumber === page.length - 1 && pageNumber + 1
)}

{pageNumber === 1 && pageNumber + 1}
{endIndex > productsPerPage && pageNumber === 0 ? (
<>back</>
) : (
pageNumber === 0 && pageNumber + 1
)} */

// This was my previous button may do something with this code

// const [startingIndex, setStartingIndex] = useState<number>(0);
// const [endingIndex, setEndingIndex] = useState<number>(8);
// function handleNextClick() {
//   if (endingIndex > products.length - 1) {
//     setEndingIndex((prevValue) => (prevValue = 8));
//     setStartingIndex((prevValue) => (prevValue = 0));
//   } else {
//     setEndingIndex((prevValue) => prevValue + 8);
//     setStartingIndex((prevValue) => prevValue + 8);
//   }
// }
// function handlePrevClick() {
//   if (endingIndex < products.length) {
//     setStartingIndex((prevValue) => (prevValue = 0));
//     setEndingIndex((prevValue) => (prevValue = 8));
//   } else {
//     setStartingIndex((prevValue) => prevValue - 8);
//     setEndingIndex((prevValue) => prevValue - 8);
//   }
// }
/* {endingIndex <= 16 && (
<button onClick={() => handleNextClick()}>next</button>
)}{" "}
{startingIndex >= 8 && (
<button onClick={() => handlePrevClick()}>prev</button>
)} */
