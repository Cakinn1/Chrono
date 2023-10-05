import React from "react";
import { products } from "../../../ApiServices/Api";
import HomeProductCards from "../Shop/HomeProductCards";
import HomeInfo from "./HomeInfo";

export default function HomeCompare() {
  return (
    <section className="mt-[128px] flex mx-auto max-w-[1300px] gap-x-4 p-6 py-14">
      <div className="h-[600px]  w-full lg:w-1/3">
        <div className="h-full space-y-4 flex flex-col p-6 tracking-widest justify-center">
          <h1 className="uppercase">Compare</h1>
          <h1 className="text-4xl">Which Is The Better Choice?</h1>
          <p>
            Both timepieces offer exceptional craftsmanship and attention to
            detail. The choice is yours.
          </p>
          <button className="border tracking-widest uppercase w-[140px] text-sm py-2">
            shop more
          </button>
        </div>
      </div>

      <div className="border w-full h-[600px]  lg:w-2/3 border-black">
        <div className="flex  justify-end  py-12 pb-0 gap-x-4">
          {products
            .filter((_, index: number) => index === 4 || index === 14)
            .map((item) => (
              <HomeProductCards
                homeTopSelling={true}
                homeCompare={true}
                image={item.image}
                code={item.code}
                name={item.name}
                prices={item.prices}
              />
            ))}
        </div>

        <div className="p-6 ">
          <hr className="border-black" />
          <HomeInfo title="Battery" paragraph="72hrs" paragraph2="60hrs" />
          <hr className="border-black" />
          <HomeInfo title="Weight" paragraph="145g" paragraph2="190g" />
          <hr className="border-black" />
          <HomeInfo title="Strap" paragraph="Syntetic" paragraph2="Leather" />
        </div>
      </div>
    </section>
  );
}
