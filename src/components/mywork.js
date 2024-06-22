import React, { useEffect } from "react";
import image1 from "../asset/mywork.jpg";
import image2 from "../asset/mywork1.jpg";
import image3 from "../asset/mywork2.jpg";
import AOS from "aos";
import "aos/dist/aos.css";
import { useNavigate } from "react-router-dom";

const Mywork = () => {
   const navigate = useNavigate();
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
                  Some quick example text to build on the card title and make up
                  the bulk of the card's content.
                </p>
              </div>
            </div>
          </div>
          <div className="carousel-inner col " data-aos="fade-left">
            <div className="carousel-item active"></div>
            <div className="card">
              <img src={image2} className="card-img-top" alt="..." />
              <div className="card-body">
                <p className="card-text">
                  Some quick example text to build on the card title and make up
                  the bulk of the card's content.
                </p>
              </div>
            </div>
          </div>
          <div className="carousel-inner col " data-aos="fade-left">
            <div className="carousel-item active"></div>
            <div className="card">
              <img src={image3} className="card-img-top" alt="..." />
              <div className="card-body">
                <button
                  onClick={() => navigate("/myworkpage")}
                  type="button"
                  class="btn btn-dark"
                >
                  Load More
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="container">
        <button
          className="carousel-control-prev"
          type="button"
          data-bs-target="#carouselExample"
          data-bs-slide="prev"
        >
          <span
            className="carousel-control-prev-icon"
            aria-hidden="true"
          ></span>
          <span className="visually-hidden">Previous</span>
        </button>
        <button
          className="carousel-control-next"
          type="button"
          data-bs-target="#carouselExample"
          data-bs-slide="next"
        >
          <span
            className="carousel-control-next-icon"
            aria-hidden="true"
          ></span>
          <span className="visually-hidden">Next</span>
        </button>
      </div>
    </div>
  );
};

export default Mywork;
