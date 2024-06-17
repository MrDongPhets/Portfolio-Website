import React, { useState } from "react";
import { IoMdClose } from "react-icons/io";
import {
  Link,
  Button,
  Element,
  Events,
  animateScroll as scroll,
  scrollSpy,
} from "react-scroll";

const Sidebar = ({ isOpen, toggleSidebar }) => {
  const [click, setClick] = useState(false);

  const closeMenu = () => setClick(false);

  const [menuOpen, setMenuOpen] = useState(false);
  return (
    <div className={`sidebar ${isOpen ? "open" : ""}`}>
      <div className="close-btn" onClick={toggleSidebar}>
        <IoMdClose size={60} />
      </div>
     
        <div className="sidebar-content">
          <ul>
            <li>
              <Link
                className="custom-link"
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
                className="custom-link"
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
                className="custom-link"
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
                className="custom-link"
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
     
    </div>
  );
};

export default Sidebar;
