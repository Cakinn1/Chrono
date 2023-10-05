import React from "react";

export default function ShopFilterBy({
  handleFilteredProducts,
  stringValue,
  title
}: {
  handleFilteredProducts: (value: string) => void;
  stringValue: string;
  title: string
}) {
  return (
    <span onClick={() => handleFilteredProducts(stringValue)}>
      <div className="text-[#a27a25] border-b border-b-[#a27a25] cursor-pointer inline">
      {title}
      </div>
    </span>
  );
}
