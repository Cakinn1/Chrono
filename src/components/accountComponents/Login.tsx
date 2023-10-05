import React, { useState } from "react";
import { AiOutlineLoading } from "react-icons/ai";
import { BsCircleHalf } from "react-icons/bs";
import { useDispatch, useSelector } from "react-redux";
import {
  loginModalIsClose,
  loginModalIsOpen,
  ModalState,
  signupModalIsOpen,
} from "../../redux/features/modalSlice";
import AccountInputs from "./AccountInputs";
export default function Login() {
  const dispatch = useDispatch();
  const [loading, setLoading] = useState<boolean>(false);
  const [success, setSuccess] = useState<boolean>(false);
  const [name, setName] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  const isOpen = useSelector(
    (state: ModalState) => state.navSmallBar.loginModal
  );
  function handleDispatch() {
    dispatch(loginModalIsClose());
    dispatch(signupModalIsOpen());
  }

  async function handleLoading() {
    setLoading(true);
    await new Promise((resolve) => setTimeout(resolve, 2000));
    setLoading(false);
    setSuccess(true);
    await new Promise((resolve) => setTimeout(resolve, 2000));
    setSuccess(false);
  }


  return (
    <>
      {isOpen && (
        <form
          onSubmit={(e) => e.preventDefault()}
          className="py-12 px-6 space-y-8"
        >
          <AccountInputs
            placeholder="Enter Username"
            type="text"
            title="Username"
          />
          <AccountInputs
            placeholder="Enter Password"
            type="password"
            title="Password"
          />

          {loading ? (
            <button
              className="border py-2 px-4 border-black bg-black
         text-white tracking-widest duration-500 uppercase hover:text-black hover:bg-white ease-in-out
          hover:duration-500  transition-colors"
            >
              <AiOutlineLoading className="animate-spin w-[42px]" />
            </button>
          ) : success ? (
            <button className="border  py-2 px-4 text-white uppercase tracking-widest  bg-green-500">
              Success!
            </button>
          ) : (
            <button
              className="border py-2 px-4 border-black bg-black
         text-white tracking-widest duration-500 uppercase hover:text-black hover:bg-white ease-in-out
          hover:duration-500  transition-colors"
              onClick={() => handleLoading()}
            >
              Login
            </button>
          )}

          <div>
            <span
              onClick={() => handleDispatch()}
              className="text-[#a27a25] cursor-pointer pb-1 hover:border-b-2 border-b border-[#a27a25]"
            >
              Sign up instead
            </span>
          </div>
        </form>
      )}
    </>
  );
}
