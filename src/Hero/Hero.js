import React from "react";
import { motion } from "framer-motion";
import "./Hero.css";

import logoImg from "../assets/logo.png";
import meImg from "../assets/me.png";

const Hero = () => {
  return (
    <motion.div
      className="container mt-5 p-4"
      style={{
        backgroundColor: "#fef7ed",
        borderRadius: "10px",
        boxShadow: "0px 2px 3px rgba(0, 0, 0, 0.1)",
      }}
      initial={{ opacity: 0, y: -50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8 }}
    >
      {/* Navbar Section */}
      <nav className="navbar navbar-expand-lg navbar-light">
        <div className="container-fluid">
          {/* Logo on the left */}
          <a className="navbar-brand" href="#">
            <motion.img 
              src={logoImg} 
              alt="Logo" 
              width="100" 
              height="100" 
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6 }}
            />
          </a>

          {/* Navbar toggler for mobile view */}
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNav"
            aria-controls="navbarNav"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>

          {/* Menu items on the right */}
          <div className="collapse navbar-collapse justify-content-end" id="navbarNav">
            <ul className="navbar-nav">
              <motion.li 
                className="nav-item" 
                whileHover={{ scale: 1.1 }}
              >
                <a className="nav-link fw-bold" href="#about">About</a>
              </motion.li>
              <motion.li className="nav-item" whileHover={{ scale: 1.1 }}>
                <a className="nav-link fw-bold" href="#me">Me</a>
              </motion.li>
              <motion.li className="nav-item" whileHover={{ scale: 1.1 }}>
                <a className="nav-link fw-bold" href="#contact">Contact</a>
              </motion.li>
            </ul>
          </div>
        </div>
      </nav>

      {/* Header Section */}
      <div className="row align-items-center mt-4 mb-4">
        {/* Image on the left */}
        <div className="col-lg-5 col-md-12 text-center">
          <motion.img
            src={meImg}
            alt="Profile"
            className="img-fluid rounded"
            style={{ maxWidth: "100%", height: "auto" }}
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8 }}
          />
        </div>
        {/* Content on the right */}
        <div className="col-lg-7 col-md-12 d-flex justify-content-center">
          <motion.div 
            className="text-black text-justify fs-4 p-4 rounded w-100"
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h1><b>Hi, I am Anushan 👋</b></h1>
            <p>
              I am a <span className="fw-bold animated-text">Full-Stack Developer</span> and
              <span className="fw-bold animated-text"> Software Engineer</span> specializing
              in MERN Stack (MongoDB, Express.js, React, Node.js) with a passion
              for building high-performance digital solutions. At Hexa Code, we
              craft scalable, secure, and innovative applications tailored to meet
              business needs.
            </p>
          </motion.div>
        </div>
      </div>
    </motion.div>
  );
};

export default Hero;
