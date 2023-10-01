import React from "react";
import { Link } from "react-router-dom";

export default function HomeStylishPhotos() {
  return (
    <div className="max-w-[1300px] h-full w-full mx-auto p-6 flex flex-col md:flex-row space-y-8 md:space-y-0 gap-x-4">
      <div className="relative h-[80vh] overflow-hidden md:w-[75%]">
        <img
          src="r.png"
          className="w-full  h-full object-cover -z-50 duration-500 hover:duration-500 ease-in-out hover:scale-125 cursor-pointer"
          alt=""
        />
        <div className="z-10  text-center space-y-4 uppercase bottom-4 left-1/2 -translate-x-1/2 -translate-y-1/2 text-white absolute">
          <h1 className="text-4xl tracking-widest">sunglasses</h1>
          <button className="border uppercase tracking-widest px-8 py-2 rounded-md">
            <Link className="mt-4" to="/">
              view collection
            </Link>
          </button>
        </div>
      </div>
      <div className="h-[80vh] md:w-[25%] md:space-y-4 space-y-8 ">
        <div className="h-[39vh] relative overflow-hidden">
          <img
            src="tr.png"
            className="w-full h-full object-cover duration-500 hover:duration-500 ease-in-out hover:scale-125 cursor-pointer"
            alt=""
          />
          <div className="z-10  text-center space-y-4 uppercase bottom-2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-white absolute">
            <h1 className="text-4xl md:text-lg lg:text-2xl tracking-widest">
              Watches
            </h1>
            <button className="border uppercase tracking-widest px-8 py-2 rounded-md">
              <Link className="mt-4" to="/">
                view collection
              </Link>
            </button>
          </div>
        </div>
        <div className="h-[39vh] relative overflow-hidden">
          <img
            src="br.png"
            className="w-full h-full object-cover duration-500 hover:duration-500 ease-in-out hover:scale-125 cursor-pointer"
            alt=""
          />
          <div className="z-10  text-center space-y-4 uppercase bottom-2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-white absolute">
            <h1 className="text-4xl md:text-lg lg:text-2xl tracking-widest">
              bracelets
            </h1>
            <button className="border uppercase tracking-widest px-8 py-2 rounded-md">
              <Link className="mt-4" to="/">
                view collection
              </Link>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
