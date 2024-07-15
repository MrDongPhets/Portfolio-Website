import Navbar from "./navbar"; // Importing the Navbar component
import BannerBackground from "../asset/me1.png"; // Importing the background image
import React, { useEffect, useRef, useState } from "react"; // Importing necessary React hooks
import Sidebar from "./sidebar";
import AOS from "aos";
import "aos/dist/aos.css";
import { TfiAlignJustify } from "react-icons/tfi";

const Home = () => {
   useEffect(() => {
     AOS.init({
       duration: 1000, // duration of the animations in milliseconds
     });
   }, []);
    const [pop, setPop] = useState(false);

    const popUP = () => {
      if (window.scrollY >= 90) {
        setPop(true);
      } else {
        setPop(false);
      }
    };
  window.addEventListener("scroll", popUP);

    const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };

  const [scrollDirection, setScrollDirection] = useState("center"); // State variable for scroll direction
  const movingTextRef = useRef(null); // Ref for the moving text span

  useEffect(() => {
    // Effect hook for handling scroll events
    let lastScrollTop = 0;

    const handleScroll = () => {
      // Function to handle scroll events
      const scrollTop = window.scrollY;
      if (scrollTop > lastScrollTop) {
        setScrollDirection("rightToLeft");
      } else {
        setScrollDirection("leftToRight");
      }
      lastScrollTop = scrollTop;
    };

    window.addEventListener("scroll", handleScroll); // Adding scroll event listener
    return () => {
      window.removeEventListener("scroll", handleScroll); // Removing scroll event listener on component unmount
    };
  }, []);



  return (
    <div className="home-container" id="/">
      {/* Navbar component */}
      <div
        className={pop ? "navbar-circle " : ""}
        onClick={toggleSidebar}
      >
        <div>
          <span></span>
          <span></span>
          <span></span>
        </div>
      </div>
      <Navbar />
      <Sidebar isOpen={isSidebarOpen} toggleSidebar={toggleSidebar} />
      <div className="background">
        <div className="">
          {/* Image component */}
          <img className="me" src={BannerBackground} alt="" />
        </div>
        <div className={`moving-text ${scrollDirection}`}>
          {/* Dynamic moving text */}
          <span ref={movingTextRef}>CHRISTIAN BRUCE MENDOZA</span>
        </div>
      </div>
    </div>
  );
};

export default Home;
