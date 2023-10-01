import React, { useEffect, useState } from "react";
import { BsArrowDown } from "react-icons/bs";
import { Link } from "react-router-dom";

export default function HomeFrontPage() {
  const [showScroll, setShowScroll] = useState<boolean>(false);
  useEffect(() => {}, []);

  function handleMouseMove() {
    const currentScrollY = window.scrollY;
    const navHeight = 80;
    const scrollToPostions = currentScrollY + window.innerHeight - navHeight;
    window.scrollTo({ top: scrollToPostions, behavior: "smooth" });
  }

  useEffect(() => {
    if (window.scrollY >= 600) {
      setShowScroll(true);
    } else {
      setShowScroll(false);
    }
  }, []);
  return (
    <>
      <div
        className="relative w-full bg-center  bg-cover h-full pointer-events-none"
        style={{
          minHeight: "calc(100vh)",
          backgroundImage: `url("./headerNav.jpeg") `,
        }}
      >
        <div
          className="absolute inset-0 bg-black bg-opacity-20"
          style={{ content: "" }}
        ></div>

        <div className="text-white text-center pointer-events-auto md:text-left h-screen flex items-center mx-auto max-w-[1300px] w-full top-10 p-6">
          <div className="w-[550px] tracking-widest space-y-4 text-white translate-x-0 ">
            <h1 className="text-7xl scrolling-text__top">Timeless.</h1>
            <p className="text-2xl text-white scrolling-text__top">
              Discover Elegance and Luxury: Your Premier Destination for Watches
              and Sunglasses
            </p>
            <Link to="/about">
              <button
                className="border mt-4 scrolling-text__bottom px-6 py-2 hover:text-black duration-500 hover:bg-white hover:duration-500
              ease-in-out transition-colors pointer-events-auto uppercase tracking-widest"
              >
                shop product
              </button>
            </Link>
          </div>

          {/* {showScroll && ()} */}
          <div
            onClick={() => handleMouseMove()}
            className="text-white cursor-pointer hover:bg-[#1b1b1b] duration-500 transition-colors ease-in-out hover:duration-500
              rounded-t-2xl rounded-b-2xl border py-4 absolute bottom-4 px-2 left-1/2 -translate-x-1/2"
          >
            <BsArrowDown className=" rounded-ful animate-bouncing" />
            {/* <div className="w-1 h-1 bg-white rounded-full animate-bouncing"></div> */}
          </div>
        </div>
      </div>
    </>
  );
}
