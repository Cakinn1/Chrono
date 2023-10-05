import React from "react";

export default function AccountInputs({
  title,
  type,
  placeholder,
  setName,
  setPassword,
}: {
  title: string;
  type: string;
  placeholder: string;
  setName?: () => void;
  setPassword?: () => void;
}) {
  return (
    <div>
      <h1>
        {title} <span className="text-red-500">*</span>
      </h1>
      <input
        className="w-full py-3 text-lg border-black rounded-md border px-4 focus:outline-none"
        type={type}
        placeholder={placeholder}
        name=""
        id=""
        required
      />
    </div>
  );
}
