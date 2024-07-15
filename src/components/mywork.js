import React, { useEffect } from "react";
import image1 from "../asset/Crud.PNG";
import image2 from "../asset/mathQuiz.PNG";
import image3 from "../asset/invoice.PNG";
import AOS from "aos";
import "aos/dist/aos.css";
import { useNavigate } from "react-router-dom";

const Mywork = () => {
   const navigate = useNavigate();
      const openExternalWebsite = (url) => {
        window.open(url, "_blank");
      };
  useEffect(() => {
    AOS.init({
      duration: 1000, // duration of the animations in milliseconds
    });
  }, []);
  return (
    <div className="third-container" id="mywork">
      <div className="banner mb-5 pb-3 pt-5">
        <h1>MY WORK</h1>
      </div>
      <div className="carousel slide container ">
        <div className="row justify-content-start">
          <div className="carousel-inner col" data-aos="fade-left">
            <div className="carousel-item active"></div>
            <div className="card">
              <img src={image1} className="card-img-top" alt="..." />
              <div className="card-body">
                <p className="card-text">
                  This project showcases my ability to develop end-to-end web
                  applications and my commitment to delivering high-quality and
                  maintainable code.
                </p>
                <button
                  onClick={() =>
                    openExternalWebsite(
                      "https://github.com/MrDongPhets/CRUD-Search"
                    )
                  }
                  type="button"
                  class="btn btn-dark"
                >
                  Github
                </button>
              </div>
            </div>
          </div>
          <div className="carousel-inner col " data-aos="fade-left">
            <div className="carousel-item active"></div>
            <div className="card">
              <img src={image2} className="card-img-top" alt="..." />
              <div className="card-body">
                <p className="card-text">
                  The Math Quest system is designed to cater to each child's
                  unique learning needs and preferences, providing a tailored
                  educational experience.
                </p>
                <button
                  onClick={() =>
                    openExternalWebsite(
                      "https://github.com/MrDongPhets/Children-Math-Quiz"
                    )
                  }
                  type="button"
                  class="btn btn-dark"
                >
                  Github
                </button>
              </div>
            </div>
          </div>
          <div className="carousel-inner col " data-aos="fade-left">
            <div className="carousel-item active"></div>
            <div className="card">
              <img src={image3} className="card-img-top" alt="..." />
              <div className="card-body">
                <p>Invoice Website is ongoing</p>
                <button
                  onClick={() =>
                    openExternalWebsite(
                      "https://github.com/MrDongPhets/Invoice-Website-Ongoing"
                    )
                  }
                  type="button"
                  class="btn btn-dark"
                >
                  Github
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Mywork;
