import { useState } from "react";
import { AiOutlineUser } from "react-icons/ai";
import { BsCart3, BsSearch } from "react-icons/bs";
import { FaBars } from "react-icons/fa";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { CounterProps } from "../../redux/features/counterSlice";
import { modalIsOpen, ModalState } from "../../redux/features/modalSlice";

export default function NavRight() {
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const [text, setInput] = useState<string>("");
  const dispatch = useDispatch();
  const isModalOpen = useSelector(
    (state: ModalState) => state.navSmallBar.navModal
  );
  const counter = useSelector((state: CounterProps) => state.counter.counter);

  return (
    <div
      className={`flex gap-x-4 text-2xl items-center mx-auto md:mx-0 ${
        isModalOpen ? "hidden" : "flex"
      }`}
    >
      {isOpen && (
        <input
          type="text"
          placeholder="Search products...."
          onChange={(event) => setInput(event.target.value)}
          className="placeholder:text-sm text-sm border border-black text-black py-3 px-4 w-[200px] focus:outline-none rounded-3xl"
        />
      )}
      <div className="flex gap-x-2 ">
        <BsSearch className="links" onClick={() => setIsOpen(true)} />
        <Link to="/Account">
          <AiOutlineUser className="links" />
        </Link>
        <Link to="/Cart" className="relative">
          <BsCart3 className="links" />
          {counter > 0 && (
            <div className="absolute text-sm text-white flex justify-center items-center -right-1 -top-3 rounded-full w-5 h-5 bg-red-500">
              {counter}
            </div>
          )}
        </Link>
        <FaBars
          className="cursor-pointer md:hidden links"
          onClick={() => dispatch(modalIsOpen())}
        />
      </div>
    </div>
  );
}
