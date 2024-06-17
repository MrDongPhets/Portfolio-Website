import React from 'react'
import { BsFillTelephoneFill } from "react-icons/bs";
import { IoIosMail } from "react-icons/io";
import { FaFacebookSquare } from "react-icons/fa";
import { FaSquareInstagram } from "react-icons/fa6";
import { FaLinkedin } from "react-icons/fa";

const Footer = () => {
  return (
    <div className="fifth-container">
      <div className="container">
        <div className="row">
          <div className="col mt-2">
            <div className="text-white">
              <h1>Chris Tian</h1>
              <div className="social-media1">
                <p>
                  <FaFacebookSquare size={20} />
                </p>
                <p>
                  <FaSquareInstagram size={20} />
                </p>
                <p>
                  <FaLinkedin size={20} />
                </p>
              </div>
            </div>
          </div>
          <div className="col">
            <div className="footer-nav">
              <a href="">Home</a>
              <a href="">About</a>
              <a href="">Mywork</a>
              <a href="">Contact</a>
            </div>
          </div>
          <div className="col mt-2">
            <div className="text-white">
              <h3>Get In Touch</h3>
              <div className="icon">
                <p>
                  <BsFillTelephoneFill size={20} /> + 9456999370
                </p>
              </div>

              <div>
                <p>
                  <IoIosMail size={20} /> christiandodong0825@gmail.com
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Footer