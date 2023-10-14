import React, { useState } from "react";
import { AiOutlineLoading } from "react-icons/ai";
import { BsArrowLeft, BsChevronDoubleLeft, BsChevronLeft, BsCircle, BsCircleHalf, BsPlayCircle } from "react-icons/bs";
import { Link } from "react-router-dom";

interface CartFormProps {
  para: string;
  header: string;
  setName: (value: string) => void;
  name: string;
}
export default function CartContactMain({
  header,
  para,
  setName,
  name,
  
}: CartFormProps) {
  const [loading, setLoading] = useState<boolean>(false);
  const [success, setSuccess] = useState<boolean>(false);

  function handleButtonLoading() {
    if (name.length > 3) {
      setLoading(true);
      const loadingTimer = setTimeout(() => {
        setLoading(false);
      }, 2000);

      const successTrue = setTimeout(() => {
        setSuccess(true);
      }, 2000);

      const successFalse = setTimeout(() => {
        setSuccess(false);
      }, 4000);

      const clearTimers = () => {
        return () => {
          clearTimeout(successFalse);
          clearTimeout(loadingTimer);
          clearTimeout(successTrue);
        };
      };
      return clearTimers;
    }
  }

  return (
    <>
      <div className="p-3 space-y-4 text-[#383f40]">
        <h1>{header}</h1>
        <p className="text-sm">{para}</p>
        <div className="space-y-6 text-black">
          <div className="space-x-4">
            <input
              type="text"
              value={name}
              onChange={(e) => setName(e.target.value)}
              required
              className="border border-black w-[48%] py-2 placeholder:text-sm text-black  placeholder: focus:outline-none px-4"
              placeholder="First Name"
            />
            <input
              type="text"
              required
              className="border border-black w-[48%] py-2 placeholder:text-sm text-black  placeholder: focus:outline-none px-4"
              placeholder="Last Name"
            />
          </div>
          <input
            type="text"
            required
            className="border border-black w-full py-2 placeholder:text-sm text-black  placeholder: focus:outline-none px-4"
            placeholder="Address"
          />
          <input
            type="text"
            required
            className="border border-black w-full py-2 placeholder:text-sm text-black  placeholder: focus:outline-none px-4"
            placeholder="Apartment, suite, etc. (optional)"
          />
          <div className="space-x-4">
            <input
              type="text"
              required
              className="border border-black w-[48%] py-2 placeholder:text-sm text-black  placeholder: focus:outline-none px-4"
              placeholder="Country/Region"
            />
            <input
              type="text"
              required
              className="border border-black w-[48%] py-2 placeholder:text-sm text-black  placeholder: focus:outline-none px-4"
              placeholder="City"
            />
          </div>
          <div className="space-x-4">
            <input
              type="text"
              required
              className="border border-black w-[48%] py-2 placeholder:text-sm text-black  placeholder: focus:outline-none px-4"
              placeholder="State"
            />
            <input
              type="text"
              required
              className="border border-black w-[48%] py-2 placeholder:text-sm text-black  placeholder: focus:outline-none px-4"
              placeholder="ZIP Code"
            />
          </div>
          <input
            type="text"
            required
            className="border border-black w-full py-2 placeholder:text-sm text-black  placeholder: focus:outline-none px-4"
            placeholder="Phone (optional)"
          />
          <div className="flex items-center justify-between">
            <input required type="checkbox" />
            {loading ? (
              <button className="bg-black w-[165px] h-[40px] flex justify-center items-center border-black border rounded-md  text-white px-10 py-2">
                <AiOutlineLoading className="animate-spin" />
              </button>
            ) : success ? (
              <button className="bg-green-500 border-green-500 border rounded-md text-white px-10 py-2">
                Thank you
              </button>
            ) : (
              <button
                onClick={() => handleButtonLoading()}
                className="bg-black border-black border rounded-md hover:duration-500 ease-in-out duration-500 transition-colors hover:bg-transparent hover:text-black text-white px-10 py-2"
              >
                Place order
              </button>
            )}
          </div>
          <Link className="text-sm hover:text-[#a27a25] flex gap-x-2 items-center" to="/Shop">
            <BsArrowLeft />
            <p >Return to shopping</p>
          </Link>
          
        </div>
      </div>
    </>
  );
}
