import Home from "./pages/Home";
import LimtedTime from "./pages/LimtedTime";
import Nav from "./pages/Nav";
import NavSmallBar from "./pages/NavSmallBar";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import About from "./pages/About";
import Shop from "./pages/Shop";
import News from "./pages/News";
import Contact from "./pages/Contact";
import { useEffect, useState } from "react";
import { IsActiveState } from "./redux/features/isactiveSlice";
import { useDispatch, useSelector } from "react-redux";
import { isActiveClose } from "./redux/features/isactiveSlice";
import { AiOutlineLoading } from "react-icons/ai";

function App() {
  const [showScroll, setShowScroll] = useState<boolean>(false);
  const homePageLoading = useSelector(
    (state: IsActiveState) => state.isActive.active
  );
  const dispatch = useDispatch();

  useEffect(() => {
    setTimeout(() => {
      dispatch(isActiveClose());
    }, 1000);
  }, []);

  if (homePageLoading) {
    document.body.classList.add("disable-scroll");
  } else {
    document.body.classList.remove("disable-scroll");
  }

  useEffect(() => {
    if (window.scrollY >= 600) {
      setShowScroll(true);
    } else {
      setShowScroll(false);
    }
  }, []);

  return (
    <>
      <Router>
        {homePageLoading && (
          <div
            className={`h-[100vh] animate-appear  flex justify-center items-center text-white bg-[#1b1b1b] z-50 ${
              homePageLoading ? "" : ""
            }`}
          >
            <AiOutlineLoading className="animate-spin text-4xl" />
          </div>
        )}


        <LimtedTime />
        <NavSmallBar />
        <Nav />

        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/About" element={<About />} />
          <Route path="/Shop" element={<Shop />} />
          <Route path="/News" element={<News />} />
          <Route path="/Contact" element={<Contact />} />
          {/* Single card item needs adding  */}
        </Routes>
        {/*  Open sign up modal, sign in modal */}
      </Router>
    </>
  );
}

export default App;
