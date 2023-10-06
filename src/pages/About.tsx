import React, { useEffect } from "react";
import AbouCommunity from "../components/aboutComponent/AbouCommunity";
import AboutFrontPageImg from "../components/aboutComponent/AboutFrontPageImg";
import AboutHeader from "../components/aboutComponent/AboutHeader";
import AboutInfo from "../components/aboutComponent/AboutInfo";
import HomeTestimonials from "../components/HomeComponents/Testimonials/HomeTestimonials";

export default function About() {
  useEffect(() => {
    window.scrollTo({ top: 0 });
  }, []);
  return (
    <>
      <AboutFrontPageImg />
      <AboutHeader />
      <AboutInfo />
      <AbouCommunity />
      <HomeTestimonials
        title="EXCEPTIONAL"
        header="Customer Experience"
        para="We are dedicated to providing an exceptional customer experience from start to finish. We believe that every customer is unique, and we strive to create a shopping experience that reflects that individuality."
      />
    </>
  );
}
