import { useState } from "react";
import { HiXMark } from "react-icons/hi2";
import { useDispatch, useSelector } from "react-redux";
import {
  ModalState,
  storeFilterIsClose,
  storeFilterIsOpen,
} from "../../redux/features/modalSlice";
import ShopFilterBy from "./ShopFilterBy";

export default function ShopTopBar({
  handleFilteredProducts,
}: {
  handleFilteredProducts: (value: string) => void;
}) {
  const dispatch = useDispatch();
  const [isClosing, setIsClosing] = useState<boolean>(true);
  const isOpen = useSelector(
    (state: ModalState) => state.navSmallBar.storeFilterModal
  );
  function handleTimeout() {
    setIsClosing(false);
    const timer = setTimeout(() => {
      dispatch(storeFilterIsClose());
      setIsClosing(true);
    }, 1000);

    return () => {
      clearTimeout(timer);
    };
  }

  console.log(isOpen);
  return (
    <div className="bg-white  pt-[116px] relative">
      {isOpen && (
        <div
          className={`fixed z-50  top-0 right-0 w-1/3 h-[116vh] bg-white ${
            isClosing ? "slide-in-right" : "slide-in__right-to__left"
          }`}
        >
          <div className="p-6 space-y-4">
            <div className="flex justify-between items-center">
              <h1 className="uppercase tracking-wider">Filters</h1>
              <HiXMark
                className="cursor-pointer border text-3xl
                border-black active:scale-90"
                onClick={() => handleTimeout()}
              />
            </div>
            <div className="space-y-4 flex flex-col ">
              <hr className="border-black" />
              <h1 className="uppercase tracking-wider">Categorys</h1>
              <ShopFilterBy
                handleFilteredProducts={handleFilteredProducts}
                stringValue={"Watch"}
                title="Watch"
              />
              <ShopFilterBy
                handleFilteredProducts={handleFilteredProducts}
                stringValue={"Smartwatch"}
                title="Smartwatch"
              />
              <ShopFilterBy
                handleFilteredProducts={handleFilteredProducts}
                stringValue={"Bracelet"}
                title="Bracelet"
              />
              <ShopFilterBy
                handleFilteredProducts={handleFilteredProducts}
                stringValue={"Glasses"}
                title="Glasses"
              />
              <ShopFilterBy
                handleFilteredProducts={handleFilteredProducts}
                stringValue={""}
                title="Default"
              />
            </div>
          </div>
        </div>
      )}
      <div className="border flex justify-between items-center   border-black border-t-0">
        <div className="flex items-center gap-x-2 px-6 text-sm">
          <h1 className="text-[#a27a25] border-b border-b-[#a27a25]">Home</h1>
          <span>/</span>
          <h2>Shop</h2>
        </div>
        <div
          className="py-2 px-6 cursor-pointer border-l border-black"
          onClick={() => dispatch(storeFilterIsOpen())}
        >
          <h1>Filters</h1>
        </div>
      </div>
    </div>
  );
}
