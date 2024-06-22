import Navbar from "./navbar"; // Importing the Navbar component
import BannerBackground from "../asset/me1.png"; // Importing the background image
import React, { useEffect, useRef, useState } from "react"; // Importing necessary React hooks
import Sidebar from "./sidebar";
import { TfiAlignJustify } from "react-icons/tfi";

const Home = () => {
    const [color, setColor] = useState(false);

    const changeColor = () => {
      if (window.scrollY >= 90) {
        setColor(true);
      } else {
        setColor(false);
      }
    };
  window.addEventListener("scroll", changeColor);

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
      <div className={color ? "navbar-circle" : ""} onClick={toggleSidebar}>
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
