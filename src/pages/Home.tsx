import HomeFrontPage from "../components/HomeComponents/HomeFrontPage/HomeFrontPage";
import HomeEyewear from "../components/HomeComponents/HomeShopComponents/HomeEyewear";
import HomeShopAnimation from "../components/HomeComponents/HomeShopComponents/HomeShopAnimation";
import HomeShopArrivals from "../components/HomeComponents/HomeShopComponents/HomeShopArrivals";
import HomeStylishQuality from "../components/HomeComponents/HomeStylish/HomeStylishQuality.tsx/index.js.js";

export default function Home() {
  return (
    <>
      <HomeFrontPage />
      <HomeShopArrivals />
      <HomeShopAnimation />
      <HomeEyewear />
      <HomeStylishQuality />
    </>
  );
}
