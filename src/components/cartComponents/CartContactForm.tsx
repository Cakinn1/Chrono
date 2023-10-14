import React, { useState } from "react";


interface CartFormProps {
  type: string
  para: string
  header: string
  placeholder: string
}
export default function CartContactForm({header, para, placeholder, type}: CartFormProps) {
  return (
    <>
      <div className="p-3 space-y-4 text-[#383f40]">
        <h1>{header}</h1>
        <p className="text-sm">
         {para}
        </p>
        <input type={type} required className={`border placeholder:text-sm border-black py-2 clic focus:outline-none px-4 w-full`} placeholder={placeholder} />
      </div>
    </>
  );
}
