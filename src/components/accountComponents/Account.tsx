import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  loginModalIsOpen,
  ModalState,
  signupModalIsOpen,
} from "../../redux/features/modalSlice";
import Login from "./Login";
import Register from "./Register";

export default function Account() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(signupModalIsOpen());
    window.scrollTo({ top: 0 });
  }, []);

  const isOpen = useSelector(
    (state: ModalState) => state.navSmallBar.loginModal
  );

  return (
    <div className="mx-auto max-w-[1300px] py-[116px] bg-white">
      <div className="flex justify-center items-center py-12">
        <h1 className="text-6xl">Account</h1>
      </div>
      <div className="w-[800px] mx-auto space-y-3 px-6">
        <div className="flex gap-x-4">
          <h1 className="cursor-pointer text-4xl">
            {isOpen ? "Login" : "Register"}
          </h1>
        </div>
        <div className="border border-black rounded-md">
          {isOpen ? <Login /> : <Register />}
        </div>
      </div>
    </div>
  );
}
