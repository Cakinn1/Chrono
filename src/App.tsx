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
import { IsActiveState, isActiveOpen } from "./redux/features/isactiveSlice";
import { useDispatch, useSelector } from "react-redux";
import { isActiveClose } from "./redux/features/isactiveSlice";
import { AiOutlineLoading } from "react-icons/ai";
import Footer from "./pages/Footer";
import Account from "./components/accountComponents/Account";
import Login from "./components/accountComponents/Login";
import Testing from "./pages/LoadingPage";
import LoadingPage from "./pages/LoadingPage";
import Cart from "./pages/Cart";

function App() {
  const homePageLoading = useSelector(
    (state: IsActiveState) => state.isActive.active
  );
  const dispatch = useDispatch();

  useEffect(() => {
    if (homePageLoading) {
      document.body.classList.add("disable-scroll");
    } else {
      document.body.classList.remove("disable-scroll");
    }
    const timer = setTimeout(() => {
      dispatch(isActiveClose());
    }, 1900);

    return () => {
      clearTimeout(timer);
    };
  }, []);

  return (
    <>
      <Router>
        {homePageLoading && <LoadingPage />}
        <LimtedTime />
        <NavSmallBar />
        <Nav />

        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/About" element={<About />} />
          <Route path="/Shop" element={<Shop />} />
          <Route path="/News" element={<News />} />
          <Route path="/Contact" element={<Contact />} />
          <Route path="/Account" element={<Account />} />
          <Route path="/Cart" element={<Cart />} />
          {/* Single card item needs adding  */}
        </Routes>
        {/*  Open sign up modal, sign in modal */}
        <Footer />
      </Router>
    </>
  );
}

export default App;

// Account Page
//Can add real auth in future

//Set it so that if the user has not typed .trim() &
//includes '@' then the success and loading we will if not
//show something that says please include all valid information

// Contact page
// Can implement same as Account page with actinng like a message has been
// sent.

// Make everything required

// Go through newly created pages and make everything reponsive.
// Thinking of completeting everything else first then coming back
// to finish the landing page fixed position part
