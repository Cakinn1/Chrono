import { useState } from "react";
import { BsArrowUp, BsInstagram } from "react-icons/bs";
import { FaFacebook, FaTiktok, FaTwitter } from "react-icons/fa";
import FooterLinks from "../components/FooterComponents/FooterLinks";

export default function Footer() {
  const [name, setName] = useState<string>("");
  const [email, setEmail] = useState<string>("");
  const [loading, setLoading] = useState<boolean>(false);

  function handleMouseMove() {
    const currentScrollY = window.scrollY;
    const scrollToPostions = currentScrollY + window.innerHeight;
    window.scrollTo({ top: -scrollToPostions, behavior: "smooth" });
  }

  function handleSendMessage() {
    if (name.trim() !== "" && email.trim() !== "" && email.includes("@")) {
      setLoading(true);
      setTimeout(() => {
        setLoading(false);
      }, 4000);
    }
  }

  return (
    <div className="bg-black">
      <footer className="mx-auto max-w-[1300px]  px-6 py-12  text-white">
        <div className="flex flex-col lg:flex-row space-y-8 lg:space-y-0">
          <div className="flex flex-col space-y-8 lg:space-y-0 lg:flex-row w-1/2">
            <FooterLinks
              title="About"
              boldTitle="chrono"
              para1="Block-Based Theme"
              para2="Full Site Editing"
              para3="Patterns"
              para4="Pricing"
            />
            <FooterLinks
              title="Organic"
              boldTitle="Themes"
              para1="About Us"
              para2="Contact"
              para3="Products"
              para4="Services"
              para5="News"
            />
            <FooterLinks
              boldTitle="Blocks"
              title="Organic"
              para1="Block Collection"
              para2="Why Blocks?"
              para3="ES5 Javascript"
              para4="View Demos"
              para5="Documentation"
            />
          </div>
          <div className="flex flex-col lg:flex-row lg:w-1/2 gap-x-6 space-y-8 lg:space-y-0">
            <div className="w-full space-y-6">
              <h1 className="tracking-widest">Our Mission</h1>
              <p>
                Organic Themes humanizes products, brands, and processes. We
                take the complicated, and make it simple and accessible.
                Ultimately, our goal is to provide tools to empower people to
                build online business and free themselves from the chains of the
                corporate world.
              </p>
              <button className="text-[#a27a25] cursor-not-allowed border border-[#a27a25] px-6 hover:font-bold hover:border-2 py-3">
                Read Our Story
              </button>
            </div>
            <form
              onSubmit={(e) => e.preventDefault()}
              className="w-full space-y-6"
            >
              <h1 className="uppercase tracking-widest">newsletter</h1>
              <input
                type="text"
                name=""
                onChange={(e) => setName(e.target.value)}
                id=""
                required
                className="w-full py-3 focus:outline-none placeholder:text-black placeholder:font-bold rounded-md text-black px-3"
                placeholder="Name"
              />
              <input
                type="text"
                name=""
                onChange={(e) => setEmail(e.target.value)}
                id=""
                required
                className="w-full py-3 focus:outline-none placeholder:text-black placeholder:font-bold rounded-md text-black px-3"
                placeholder="Email"
              />
              {loading ? (
                <button
                  onClick={() => handleSendMessage()}
                  className="border-none bg-green-500 text-white border  px-6 hover:font-bold hover:border-2 py-3"
                >
                  Thank You
                </button>
              ) : (
                <button
                  onClick={() => handleSendMessage()}
                  className="text-[#a27a25] border border-[#a27a25] px-6 hover:font-bold hover:border-2 py-3"
                >
                  Subscribe
                </button>
              )}
            </form>
          </div>
        </div>
        <hr className="mt-8 border-[#a27a25]" />
        <div className="flex pt-8 flex-col lg:flex-row  lg:space-y-0 space-y-20 lg:justify-between items-center relative">
          <div>
            <h1 className="text-sm">Copy &copy; 2023 all rights Cakin</h1>
          </div>
          <div
            onClick={() => handleMouseMove()}
            className="text-white cursor-pointer hover:bg-[#1b1b1b] duration-500 transition-colors ease-in-out hover:duration-500
              rounded-t-2xl  rounded-b-2xl border-[#a27a25] border-2 py-4 absolute -top-4 lg:top-4 lg:-bottom-4 px-2 left-1/2 -translate-x-1/2"
          >
            <BsArrowUp className="animate-bouncing text-[#a27a25]" />
          </div>
          <div className="mt-10 flex gap-x-4">
            <FaFacebook className="cursor-not-allowed" />
            <BsInstagram className="cursor-not-allowed" />
            <FaTwitter className="cursor-not-allowed" />
            <FaTiktok className="cursor-not-allowed" />
          </div>
        </div>
      </footer>
    </div>
  );
}
