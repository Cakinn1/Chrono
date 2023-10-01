import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { IsActiveState } from "../redux/features/isactiveSlice";
import { ModalState } from "../redux/features/modalSlice";

export default function LimtedTime() {
  const [isOpen, setIsOpen] = useState<boolean>(true);
  const isModalOpen = useSelector(
    (state: ModalState) => state.navSmallBar.navModal
  );
  const homePageLoading = useSelector(
    (state: IsActiveState) => state.isActive.active
  );

  console.log(homePageLoading);
  useEffect(() => {
    function handleScroll() {
      if (window.scrollY > 100) {
        setIsOpen(false);
      } else {
        setIsOpen(true);
      }
    }

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <>
      {homePageLoading
        ? ""
        : isOpen && (
            <div
              className={`bg-[#1b1b1b] ${
                isModalOpen ? "-z-40 hidden" : "z-40"
              } text-white fixed top-0 w-full`}
            >
              <div className="max-w-[1300px] text-center flex items-center flex-col md:flex-row md:justify-between text-sm uppercase py-2 mx-auto w-full px-6">
                <p>
                  Get up to <span className="font-bold">50%</span> off limited
                  time{" "}
                  <span className="text-yellow-500 ml-4 border-b-yellow-500 border-b">
                    shop now
                  </span>
                </p>
                <p>put timers here</p>
              </div>
            </div>
          )}
    </>
  );
}
