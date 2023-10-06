import React from "react";

export default function AboutFrontPageImg() {
  return (
    <div className="bg-white h-[60vh] mt-[116px] bg-center relative bg-cover w-full " style={{backgroundImage: `url("./about.jpeg")`}}>
      <div className="bg-black absolute w-full h-full bg-opacity-60 flex justify-center items-center">
        <h1 className="text-5xl text-white">About</h1>
      </div>
    </div>
  );
}
