import React, { useState } from "react";

export default function CartTotal({ total }: { total: string }) {
  const [clicked, setClicked] = useState<boolean>(false);
  function handleClick() {
    setClicked((prev) => !prev);
  }
  return (
    <div className="text-sm ">
      <div className="p-3 border-y border-black">
        <span className="text-[#a27a25] border-[#a27a25] border-b hover:border-b-2 cursor-pointer">
          Add a coupon
        </span>
      </div>
      <div className="p-3 border-b border-black flex justify-between">
        <p className="">Subtotal</p>
        <p className="font-bold">${total}</p>
      </div>
      <div className="p-3 border-b border-black flex justify-between">
        <div>
          <p className="">Shopping</p>
          <p className="">Free shipping</p>
        </div>
        <p>${0}.00</p>
      </div>
      <div className="p-3 border-b border-black flex justify-between">
        <p className="font-bold text-[14px]">Total</p>
        <p>${total}</p>
      </div>
      <div className="p-3 border-b space-y-2 border-black">
        <div className="flex items-center gap-x-2">
          <input onClick={() => handleClick()} type="checkbox" />
          <p className="text-[14px] text-[#a27a25]">Add a note to your order</p>
        </div>
        {clicked && (
          <>
            <textarea
            placeholder="Notes about your order, e.g. special notes for delivery."
              className="w-full placeholder: outline-none border-black border bg-white p-4 h-[80px] overflow-hidden resize-none"
            ></textarea>
          </>
        )}
      </div>
    </div>
  );
}
