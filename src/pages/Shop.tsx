import React, { useEffect, useState } from "react";
import { products } from "../ApiServices/Api";
import { HomeProductCardsProps } from "../components/HomeComponents/Shop/HomeProductCards";
import ShopMain from "../components/ShopComponents/ShopMain";
import ShopTopBar from "../components/ShopComponents/ShopTopBar";

export default function Shop() {
  const [filteredProducts, setFilteredProducts] = useState<
    HomeProductCardsProps[]
  >([]);

  function handleFilteredProducts(value: string) {
    // if (value === "Watch") {
    //   const filtered = products.filter((item) => item.category === value);
    //   setFilteredProducts(filtered);
    // } else if (value === "Bracelet") {
    //   const filtered = products.filter((item) => item.category === value);
    //   setFilteredProducts(filtered);
    // } else if (value === "Smartwatch") {
    //   const filtered = products.filter((item) => item.category === value);
    //   setFilteredProducts(filtered);
    // } else if (value === "Glasses") {
    //   const filtered = products.filter((item) => item.category === value);
    //   setFilteredProducts(filtered);
    // } else if (value === "") {
    //   const defaultProducts = products;
    //   setFilteredProducts(defaultProducts);
    // }
    const defaultProducts = products;
    const filtered =
      value === ""
        ? defaultProducts
        : defaultProducts.filter((item) => item.category === value);
        setFilteredProducts(filtered)
  }

  useEffect(() => {
    setFilteredProducts(products);
  }, []);
  console.log(products);
  return (
    <section className="bg-white">
      <ShopTopBar handleFilteredProducts={handleFilteredProducts} />
      <ShopMain filteredProducts={filteredProducts} />
    </section>
  );
}
