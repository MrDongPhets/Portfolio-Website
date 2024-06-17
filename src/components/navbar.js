import React, { useState } from "react";

import {
  Link,
  Button,
  Element,
  Events,
  animateScroll as scroll,
  scrollSpy,
} from "react-scroll";

const Navbar = () => {


  const [click, setClick] = useState(false);

  const closeMenu = () => setClick(false);


 
 
  return (
    <div>

      <nav>
        <div className="logo">
          <a href="/">Chris Tian</a>
        </div>

        <div className="navbar-links-container">
          <ul>
            <li>
              <Link
                to="/"
                spy={true}
                smooth={true}
                offset={50}
                duration={500}
                onClick={closeMenu}
              >
                Home
              </Link>
            </li>
            <li>
              <Link
                to="about"
                spy={true}
                smooth={true}
                offset={50}
                duration={500}
                onClick={closeMenu}
              >
                About
              </Link>
            </li>

            <li>
              <Link
                to="mywork"
                spy={true}
                smooth={true}
                offset={50}
                duration={500}
                onClick={closeMenu}
              >
                My Work
              </Link>
            </li>
            <li>
              <Link
                to="contact"
                spy={true}
                smooth={true}
                offset={50}
                duration={500}
                onClick={closeMenu}
              >
                Contact
              </Link>
            </li>
          </ul>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
