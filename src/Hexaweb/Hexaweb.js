import React ,{ useEffect } from "react";
import "./Hexaweb.css"; // Custom CSS for animations
const Hexaweb = () => {
  useEffect(() => {
    const handleScroll = () => {
      const elements = document.querySelectorAll(".fade-in-left, .fade-in-right");
      elements.forEach((el) => {
        const rect = el.getBoundingClientRect();
        if (rect.top < window.innerHeight * 0.9) {
          el.classList.add("visible");
        }
      });
    };
    
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);
  return (
    <>
    
    <div className="container d-flex justify-content-center mt-5" style={{ }}>
      <div className="row w-100 text-center box-container p-5 animated-box" style={{ backgroundColor: "#fef7ed", borderRadius: "15px", boxShadow: "5px 5px 15px rgba(0, 0, 0, 0.2)" }}>
        {/* Left Side */}
        <div className="col-md-5 d-flex align-items-center justify-content-center fade-in-left">
          <h1 className="left-text display-1 fw-bold">What is <br /> Hexa Web</h1>
        </div>
        
        {/* Right Side */}
        <div className="col-md-7 d-flex align-items-center justify-content-center fade-in-right">
          <p className="right-text fs-4 text-justify">
            HexaWeb is a freelance web development brand dedicated to crafting
            high-performance, visually stunning, and user-friendly websites.
            Whether you're a startup, small business, or an entrepreneur, we help
            bring your digital vision to life with cutting-edge web solutions.
          </p>
        </div>
      </div>
    </div>
    </>
  );
};

export default Hexaweb;


