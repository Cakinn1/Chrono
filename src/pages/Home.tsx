import HomeNewsletter from "../components/HomeComponents/News/HomeNewsletter";
import HomeProductOfWeek from "../components/HomeComponents/ProductOfWeek/HomeProductOfWeek";
import HomeEyewear from "../components/HomeComponents/Shop/HomeEyewear";
import HomeShopAnimation from "../components/HomeComponents/Shop/HomeShopAnimation";
import HomeShopArrivals from "../components/HomeComponents/Shop/HomeShopArrivals";
import HomeStylishQuality from "../components/HomeComponents/Stylish/HomeStylishQuality";
import HomeTopSelling from "../components/HomeComponents/TopSelling/HomeTopSelling";
import HomeMaterials from "../components/HomeComponents/Material/HomeMaterials";
import HomeCompare from "../components/HomeComponents/Compare/HomeCompare";
import HomeLanding from "../components/HomeComponents/LandingPage/HomeLanding";
import HomeBlog from "../components/HomeComponents/Blog/HomeBlog";
import HomeTestimonials from "../components/HomeComponents/Testimonials/HomeTestimonials";
import HomeFeatured from "../components/HomeComponents/Featured/HomeFeatured";
import { useEffect } from "react";
export default function Home() {
  useEffect(() => {
    window.scrollTo({ top: 0 });
  }, []);
  return (
    <>
      <HomeLanding />
      <HomeShopArrivals />
      <HomeShopAnimation />
      <HomeEyewear />
      <HomeStylishQuality />
      <HomeTopSelling />
      <HomeMaterials />
      <HomeProductOfWeek />
      <HomeNewsletter />
      <HomeCompare />
      <HomeBlog />
      <HomeFeatured />
      <HomeTestimonials />
    </>
  );
}
