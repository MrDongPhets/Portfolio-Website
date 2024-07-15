import React from "react";
import { BsFillTelephoneFill } from "react-icons/bs";
import { IoIosMail } from "react-icons/io";
import { FaFacebookSquare } from "react-icons/fa";
import { FaSquareInstagram } from "react-icons/fa6";
import { FaLinkedin } from "react-icons/fa";

const Contact = () => {
  return ( 
    <div className="fourth-container" id="contact">
      <div className="contact">CONTACT ME</div>
      <div className="container">
        <div className="row">
          <div className="col form-container pt-5 ">
            <form>
              <div className="row mb-5">
                <div className="col">
                  <h5 className="">Firstname</h5>
                  <input placeholder=""></input>
                </div>
                <div className="col">
                  <h5>Lastname</h5>
                  <input placeholder=""></input>
                </div>
              </div>
              <div className="row mb-5">
                <div className="col">
                  <h5 className="">Mail</h5>
                  <input placeholder=""></input>
                </div>
                <div className="col">
                  <h5>Phone</h5>
                  <input placeholder=""></input>
                </div>
              </div>
              <div className="row">
                <div className="">
                  <h5 className="">Message</h5>
                  <textarea name="comment" rows="5" cols="58"></textarea>
                </div>
              </div>
              <div className="row">
                <div className="">
                  <button type="button" class="btn btn-dark">
                    Send
                  </button>
                </div>
              </div>
            </form>
          </div>
          <div className="col">
            <div>
              <div className="contact-sphere">
                <div className="icon">
                  <p>
                    <BsFillTelephoneFill size={40} /> + 9456999370
                  </p>
                </div>

                <div>
                  <p>
                    <IoIosMail size={40} /> mendozachristian0825@gmail.com
                  </p>
                </div>
                <div className="social-media">
                  <p>
                    <FaFacebookSquare size={40} />
                  </p>
                  <p>
                    <FaSquareInstagram size={40} />
                  </p>
                  <p>
                    <FaLinkedin size={40} />
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
