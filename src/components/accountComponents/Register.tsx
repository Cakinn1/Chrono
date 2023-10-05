import React, { useState } from "react";
import { AiOutlineLoading } from "react-icons/ai";
import { useDispatch, useSelector } from "react-redux";
import { loginModalIsClose, loginModalIsOpen, ModalState, signupModalIsClose, signupModalIsOpen } from "../../redux/features/modalSlice";
import AccountInputs from "./AccountInputs";

export default function Register() {
  const [loading, setLoading] = useState<boolean>(false)
  const [success, setSuccess] = useState<boolean>(false)
  const isOpen = useSelector(
    (state: ModalState) => state.navSmallBar.signupModal
  );
  const dispatch = useDispatch();
  function handleDispatch () {
    dispatch(signupModalIsClose())
    dispatch(loginModalIsOpen())
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
              Register
            </button>
          )}

          <div>
            <span
              onClick={() => handleDispatch()}
              className="text-[#a27a25] cursor-pointer pb-1 hover:border-b-2 border-b border-[#a27a25]"
            >
             Login instead
            </span>
          </div>
        </form>
      )}
    </>
  );
}
