import React, { useState } from "react";
import { HiXMark } from "react-icons/hi2";
import { useDispatch, useSelector } from "react-redux";
import { IsActiveState } from "../redux/features/isactiveSlice";
import { modalIsClose, ModalState } from "../redux/features/modalSlice";

export default function NavSmallBar() {
  const [isAnimate, setIsAnimate] = useState<boolean>(false);
  const dispatch = useDispatch();
  const isModalOpen = useSelector(
    (state: ModalState) => state.navSmallBar.navModal
  );
  const homePageLoading = useSelector(
    (state: IsActiveState) => state.isActive.active
  );

  if (isModalOpen) {
    document.body.classList.add("disable-scroll");
  } else {
    document.body.classList.remove("disable-scroll");
  }

  function handleModalClose() {
    if (isModalOpen) {
      setIsAnimate(true);
    }
    const timer = setTimeout(() => {
      dispatch(modalIsClose());
      setIsAnimate(false);
    }, 600);

    return () => {
      clearTimeout(timer);
    };
  }

  return (
    <>
      {isModalOpen && (
        <div
          className={`h-[100vh] animate-slide-down text-white p-6 z-50 bg-black ${
            isAnimate && "animate-slide-up"
          }`}
        >
          <div className="text-white mx-auto max-w-[1300px]">
            <HiXMark
              className={`text-4xl ml-auto cursor-pointer links ${
                isAnimate && "animate-slide-up"
              } `}
              onClick={() => handleModalClose()}
            />
            <ul className="space-y-4 text-4xl text-center">
              <li className="links">Home</li>
              <li className="links">About</li>
              <li className="links">Shop</li>
              <li className="links">news</li>
              <li className="links">contact</li>
            </ul>
          </div>
        </div>
      )}
    </>
  );
}
