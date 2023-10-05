import React from "react";
import { BsArrowReturnLeft, BsBox, BsBox2, BsBox2Fill, BsCreditCard } from "react-icons/bs";
import { HiMiniGlobeAlt } from "react-icons/hi2";
import HomeInfomation from "./HomeInfomation";

export default function HomeFeatured() {
  return (
    <>
      <div className="bg-[#1b1b1b] min-h-[200px] h-full border-b">
        <div className="max-w-[1300px] p-12 text-white mx-auto flex justify-center items-center flex-col">
          <h1 className="uppercase tracking-widest">featured on</h1>
          <div className="flex gap-x-8 flex-col space-y-8 md:space-y-0 md:flex-row py-4">
            <img src="/1.png" className="w-[100px] object-contain" alt="" />
            <img src="/2.png" className="w-[100px] object-contain" alt="" />
            <img src="/3.png" className="w-[100px] object-contain" alt="" />
            <img src="/4.png" className="w-[100px] object-contain" alt="" />
            <img src="/5.png" className="w-[100px] object-contain" alt="" />
          </div>
        </div>
      </div>
      <div className="bg-white min-h-[200px] h-full border-b">
        <div className="max-w-[1300px] text-center p-12 text-black mx-auto">
          <div className="flex flex-wrap gap-x-4">
            <HomeInfomation
              icon={<BsBox2 />}
              title="Express delivery"
              para="We'll ship the order immediately after your purchase."
            />
            <HomeInfomation
              icon={<BsArrowReturnLeft />}
              title="Free returns"
              para="All returns are free within 30 days of your order."
            />
            <HomeInfomation
              icon={<HiMiniGlobeAlt />}
              title="Helpful support"
              para="Our support staff is ready 24/7 to answer any questions."
            />
            <HomeInfomation
              icon={<BsCreditCard />}
              title="Secure payment"
              para="All payments on our site are processed securely."
            />
          </div>
        </div>
      </div>
    </>
  );
}
