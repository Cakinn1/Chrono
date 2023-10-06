import React from "react";

export default function AbouCommunity() {
  return (
    <div className="max-w-[800px] space-y-6 mx-auto p-6 py-12">
      <h1 className=" text-5xl">Join the Chrono Community</h1>
      <p className="text-[#383f40]">
        At Chrono, we are not just a store; we are a community of style
        enthusiasts who appreciate the art of accessorizing. We invite you to
        join our community, where you can stay updated on the latest trends,
        styling tips, and exclusive offers. Connect with us through our blog,
        social media platforms, and newsletter to be part of a dynamic community
        that shares a passion for men’s accessories.
      </p>
      <p className="text-[#383f40]">
        Thank you for choosing Chrono as your trusted source for men’s
        accessories. We are honored to be a part of your style journey and look
        forward to helping you discover the perfect accessories to express your
        unique personality and enhance your overall look.
      </p>
      <div className="flex justify-center items-center">
      <button className="tracking-widest bg-black rounded-md hover:bg-white hover:border py-2 px-6 uppercase hover:border-black duration-500 hover:text-black text-white hover:duration-500 ease-in-out transition-colors">
        join us
      </button>
      </div>
    </div>
  );
}
