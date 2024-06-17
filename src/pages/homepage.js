import React from "react";
import Home from "../components/home";
import About from "../components/about";
import Mywork from "../components/mywork";
import Contact from "../components/contact";

const HomePage = () => {
  return (
    <div>
      <Home />
      <About />
      <Mywork />
      <Contact />
    </div>
  );
};

export default HomePage;
