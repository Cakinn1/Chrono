import React, { useEffect, useState } from "react";
import { BsChevronBarUp } from "react-icons/bs";
import { CartProps } from "../redux/features/cartSlice";
import { useSelector } from "react-redux";
import CartContactForm from "../components/cartComponents/CartContactForm";
import CartContactMain from "../components/cartComponents/CartContactMain";
import CartTotal from "../components/cartComponents/CartTotal";
import CartSingleProduct from "../components/cartComponents/CartSingleProduct";

export default function Cart() {
  const [name, setName] = useState<string>("");

  const cart = useSelector((state: CartProps) => state.cart.cart);
  const mappedCartToPrices = cart
    .map((item) => item.prices?.map((item) => item.price))
    .flat();
  // fix later for some reason 'null' doesn't work ???
  const total = mappedCartToPrices
    .reduce((acc: number, curr: number | undefined) => {
      return curr ? acc + curr : acc;
    }, 0)
    .toFixed(2);

  useEffect(() => {
    window.scrollTo({ top: 0 });
  }, []);

  return (
    <div className="mx-auto max-w-[1300px] py-[116px] ">
      <h1 className="pt-6 pl-6 lg:pl-0 tracking-wide text-3xl">Checkout</h1>
      <div className="flex-col md:flex-row  flex">
        <div className="mt-6  border-t-black border-t  p-3 text-[#383f40] md:w-[50%]">
          <CartSingleProduct />
          <CartTotal total={total} />
        </div>
        <form className="md:w-[50%]" onSubmit={(e) => e.preventDefault()}>
          <CartContactForm
            header="1. Contact Infomration"
            para="We'll use this email to send you details and updates about your order."
            placeholder="Email address"
            type="email"
          />
          <CartContactMain
            name={name}
            setName={setName}
            header="2. Shipping address"
            para="Enter the address where you want your order delivered."
          />
        </form>
      </div>
    </div>
  );
}
