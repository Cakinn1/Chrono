import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { products } from "../../ApiServices/Api";
import {
  addtoCart,
  CartItem,
  CartProps,
  Props1,
} from "../../redux/features/cartSlice";
import {
  CounterProps,
  increment,
  setCounter,
} from "../../redux/features/counterSlice";
import HomeProductCards, {
  HomeProductCardsProps,
} from "../HomeComponents/Shop/HomeProductCards";

export interface Props {
  name?: string;
  code?: string;
  image: string;
  category?: string;
  prices?: {
    price?: string;
    salePrice?: string | null;
  }[];
  quantity: number;
}

export default function ShopMain({
  filteredProducts,
}: {
  filteredProducts: HomeProductCardsProps[];
}) {
  const cart = useSelector((state: CartProps) => state.cart.cart);
  const counter = useSelector((state: CounterProps) => state.counter.counter);
  console.log(counter);
  console.log(cart);

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

  useEffect(() => {}, []);
  const dispatch = useDispatch();
  function handleCartAdd(item: HomeProductCardsProps) {
    if (item.name) {
      const newItem: CartItem = {
        name: item.name,
        image: item.image,
        prices: item.prices,
        quantity: 1,
      };
      dispatch(addtoCart(newItem));
      dispatch(increment());
    }
  }

  interface CharacterProps {
    name: string;
    height: number;
    mass: number;
    eyeColor: string;
    gender: string;
  }
  const characters: CharacterProps[] = [
    {
      name: "Luke Skywalker",
      height: 172,
      mass: 72,
      eyeColor: "blue",
      gender: "male",
    },
    {
      name: "Leia Organa",
      height: 150,
      mass: 49,
      eyeColor: "brown",
      gender: "female",
    },
    {
      name: "Han Solo",
      height: 180,
      mass: 80,
      eyeColor: "brown",
      gender: "male",
    },
    {
      name: "Darth Vader",
      height: 202,
      mass: 136,
      eyeColor: "yellow",
      gender: "male",
    },
    {
      name: "Princess Amidala",
      height: 185,
      mass: 45,
      eyeColor: "brown",
      gender: "female",
    },
    {
      name: "Obi-Wan Kenobi",
      height: 182,
      mass: 121,
      eyeColor: "blue",
      gender: "male",
    },
  ];

console.log(characters.reduce((acc, curr) => acc + curr.height, 0))
console.log(characters.reduce((acc, curr) => acc + Math.floor(curr.mass * 3 / 4), 0))

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
                  onClick={() => handleCartAdd(item)}
                  className={`hover:bg-white duration-500 bg-black text-white hover:text-black ease-in-out hover:border-black border tracking-widest text-sm uppercase  rounded-lg ${
                    homeCompare ? "px-4 py-2" : "px-10 py-3"
                  }`}
                >
                  Add to cart
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

// Add to cart feature:

// Todo:
// * Take filter product from array to object
// * when i click add to cart i will add the current item quanitiy to 1 or if item is already in
// array i will add prev item with quanity + 1
// * Nav counter will update based on items in cart
// * Add counter + cart in redux

// Task: 1
// Finding item based on ID:
// * I will use .find method to find item based on the current id or current name
// * Once item is found i will have terany opperator to check if item is already in cart
// if item is already in cart add the item's quanitiy + 1 if item is not in cart add the item
