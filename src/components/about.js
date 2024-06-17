import React, { useRef, useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import { useNavigate } from "react-router-dom";

const About = () => {
  const navigate = useNavigate();
   useEffect(() => {
     AOS.init({
       duration: 1000, // duration of the animations in milliseconds
     });
   }, []);


  const divRef = useRef(null);
  const MAX_DISTANCE = 100; // Adjust this value to define the maximum attraction distance

  useEffect(() => {
    
    const handleMouseMove = (event) => {
      const div = divRef.current;
      if (!div) return;

      const rect = div.getBoundingClientRect();
      const centerX = rect.left + rect.width / 2;
      const centerY = rect.top + rect.height / 2;

      // Calculate distance between cursor and center of the div
      const distanceX = event.clientX - centerX;
      const distanceY = event.clientY - centerY;

      // Limit the effective distance
      const limitedDistanceX = Math.min(Math.abs(distanceX), MAX_DISTANCE);
      const limitedDistanceY = Math.min(Math.abs(distanceY), MAX_DISTANCE);

      // Calculate effect strength based on limited distance
      const strength =
        Math.min(limitedDistanceX, limitedDistanceY) / MAX_DISTANCE;

      // Apply CSS translation within the distance limit
      const offsetX =
        Math.abs(distanceX) <= MAX_DISTANCE ? distanceX * strength : 0;
      const offsetY =
        Math.abs(distanceY) <= MAX_DISTANCE ? distanceY * strength : 0;
      div.style.transform = `translate(${offsetX}px, ${offsetY}px)`;
    };

    // Add event listener on component mount, remove on unmount
    document.addEventListener("mousemove", handleMouseMove);
    return () => document.removeEventListener("mousemove", handleMouseMove);
  }, []);
  return (
    <div className="second-container" id="about">
      <div className="sphere-background"></div>
      <div className="sphere-background1"></div>
      <div className="sphere-background2"></div>
      <div className="sphere" data-aos="fade-right">
        <p>
          Hi, I'm Christian B. Mendoza, a passionate graphic designer and
          frontend developer. With a keen eye for aesthetics and a solid
          foundation in modern web technologies, I specialize in creating
          visually stunning and highly functional websites. My expertise spans
          across user interface design, user experience optimization, and coding
          with HTML, CSS, and JavaScript. I thrive on transforming ideas into
          engaging digital experiences that leave a lasting impression. Let's
          connect and bring your vision to life!
        </p>
      </div>
      <div ref={divRef} className="magnetic-circle" data-aos="fade-left">
        <button onClick={() => navigate("/aboutpage")}>About More</button>
      </div>
    </div>
  );
};

export default About;
