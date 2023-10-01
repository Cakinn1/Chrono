import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import NavLinks from "../components/NavComponents/NavLinks";
import NavMiddle from "../components/NavComponents/NavMiddle";
import NavRight from "../components/NavComponents/NavRight";
import { IsActiveState } from "../redux/features/isactiveSlice";
import { ModalState } from "../redux/features/modalSlice";

export default function Nav() {
  const [isVisible, setIsVisible] = useState<boolean>(true);
  const isModalOpen = useSelector(
    (state: ModalState) => state.navSmallBar.navModal
  );
  const homePageLoading = useSelector((state: IsActiveState) => state.isActive.active)
  console.log(homePageLoading)

  useEffect(() => {
    function handleScroll() {
      if (window.scrollY > 100) {
        setIsVisible(false);
      } else {
        setIsVisible(true);
      }
    }
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <>
      <section
        className={` ${isModalOpen || homePageLoading ? "hidden z-2" : "z-10"}   fixed w-full ${
          isVisible
            ? "top-[56px] md:top-[36px] text-white"
            : " shadow-2xl bg-white"
        } `}
      >
        <div
          className={` h-20 max-w-[1300px] p-6 mx-auto flex justify-between items-center`}
        >
          <NavMiddle />
          <NavLinks />
          <NavRight />
        </div>
      </section>
    </>
  );
}
