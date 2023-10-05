import React, { useEffect } from "react";

export default function Contact() {
  useEffect(() => {
    window.scrollTo({ top: 0 });
  }, []);
  return (
    <form
      onSubmit={(e) => e.preventDefault()}
      className="mx-auto max-w-[1300px]  py-[116px] space-y-4 bg-white"
    >
      <div className="flex justify-center items-center py-12">
        <h1 className="text-6xl">Contact</h1>
      </div>
      <div className="w-[800px] mx-auto px-6">
        <p className="text-[#383f40] text-[17px]">
          We value open communication with our customers and are here to assist
          you every step of the way. Feel free to reach out to us through our
          contact form or email, and our dedicated customer support team will
          promptly address any inquiries, concerns, or feedback you may have,
          ensuring that your experience with us is nothing short of exceptional.
          We look forward to hearing from you.
        </p>
        <div className="mt-[40px] flex gap-x-8">
          <div className="w-1/2 space-y-1 ">
            <h1 className="font-bold">
              Name{" "}
              <span className="font-normal text-[#383f40]">(required)</span>
            </h1>
            <input
              type="text"
              placeholder="Name"
              className="w-full rounded-md border border-black focus:outline-none py-3 px-4 "
            />
          </div>
          <div className="w-1/2 space-y-1">
            <h1 className="font-bold">
              Email{"   "}
              <span className="font-normal text-[#383f40]">(required)</span>
            </h1>
            <input
              type="email"
              placeholder="Email"
              className="w-full rounded-md border border-black focus:outline-none py-3 px-4 "
            />
          </div>
        </div>
      </div>
      <div className="w-[800px] mx-auto space-y-3 px-6">
        <div className="flex gap-x-4">
          <h1 className="font-bold">Message</h1>
        </div>
        <textarea
          placeholder="Write a message here, please!"
          className="border p-4 focus:outline-none h-[200px] w-full border-black rounded-md"
          name=""
          id=""
        ></textarea>
        <button className="border-black py-2 px-4 hover:bg-white hover:text-black bg-black border text-white tracking-widest uppercase rounded-md duration-500 ease-in-out transition-colors hover:duration-500 ">
          contact us
        </button>
      </div>
    </form>
  );
}
