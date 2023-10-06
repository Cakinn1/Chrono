import React from "react";
import AboutInfoSingle from "./AboutInfoSingle";

export interface AboutInfoProps {
  image: string;
  info: {
    title: string;
    paragraph: string;
  };
  isRight: boolean;
}

export const AboutData: AboutInfoProps[] = [
  {
    image: "./a.jpeg",
    info: {
      title: "Our Philosophy",
      paragraph:
        "At Chrono, we understand that accessories are not merely add-ons to an outfit; they are an expression of personal style and individuality. Our philosophy is rooted in the belief that every accessory tells a story, and we strive to offer a diverse range of products that enable you to create your own unique narrative",
    },
    isRight: false,
  },
  {
    image: "./b.jpeg",
    info: {
      title: "Quality Craftsmanship",
      paragraph:
        "We take pride in sourcing accessories that embody the highest standards of craftsmanship and quality. Our products are meticulously crafted using premium materials, ensuring durability and longevity. From the finest leather bracelets to intricately designed cufflinks, every item in our collection undergoes a rigorous selection process to ensure it meets our stringent criteria.",
    },
    isRight: true,
  },
  {
    image: "./c.jpeg",
    info: {
      title: "Unparalleled Variety",
      paragraph:
        "At Chrono, we believe that style knows no boundaries, which is why we offer a wide range of accessories to suit every taste and occasion. From classic and timeless pieces to contemporary designs that push the boundaries of fashion, our collection boasts an unparalleled variety. Whether you’re looking for a sleek and minimalist watch or a statement-making bracelet, we have something to suit your personal style.",
    },
    isRight: false,
  },
];

export default function AboutInfo() {
  return (
    <>
      {AboutData.map((item) => (
        <AboutInfoSingle isRight={item.isRight} image={item.image} info={item.info} />
      ))}
    </>
  );
}
