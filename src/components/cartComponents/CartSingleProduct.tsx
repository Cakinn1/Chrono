import React from 'react'
import { BsChevronBarUp } from 'react-icons/bs'
import { CartProps } from '../../redux/features/cartSlice';
import { useSelector } from 'react-redux';

export default function CartSingleProduct() {
  const cart = useSelector((state: CartProps) => state.cart.cart);

  return (
    <>
    <div className="flex justify-between items-center">
    <p className="text-sm ">Order summary</p>
    <BsChevronBarUp />
  </div>
  {cart.map((cartItem, index) => (
    <div
      className={` ${
        index === cart.length - 1 ? "border-b-0" : "border-b-black"
      } flex  border-b p-2 py-4 text-sm `}
    >
      <div
        className="relative"
        // style={{ backgroundImage: `url(${cartItem.image})` }}
      >
        <img src={`${cartItem.image}`} className="w-[80px]" alt="" />
        <div className="absolute top-0 bg-white border-black border w-10 rounded-2xl -right-3 flex justify-center items-center">
          {cartItem.quantity}
        </div>
      </div>
      {cartItem.prices?.map((prices) => (
        <>
          <div className="w-[60%] ml-4">
            <div className="flex flex-col">
              <h1>{cartItem.name}</h1>
              {prices.salePrice ? (
                <p className="line-through">
                  ${prices.salePrice.toFixed(2)}
                </p>
              ) : (
                ""
              )}
              <p>${prices.price?.toFixed(2)}</p>
            </div>
          </div>
          <div className="w-[40%] flex justify-end font-bold">
            ${prices.price?.toFixed(2)}
          </div>
        </>
      ))}
    </div>
  ))}
    </>

  )
}
