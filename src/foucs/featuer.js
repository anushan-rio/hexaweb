import React, { useState } from 'react';
import { Element } from 'react-scroll';
import { motion } from 'framer-motion';
import './featuer.css';

const Featuer = () => {
  const [hovered, setHovered] = useState(null);

  const handleMouseEnter = (index) => setHovered(index);
  const handleMouseLeave = () => setHovered(null);

  return (
    <div className="container-fluid py-5" style={{ 
      backgroundColor: '#fef7ed', 
      borderRadius: '30px', 
      padding: '50px 50px', // Added more space for left and right
      margin: '30px auto', // Centered with margin auto and space from top and bottom
      maxWidth: '1300px', // Shrink the background width
      boxShadow: '10px 10px 30px rgba(0, 0, 0, 0.1)' 
    }}>
      <div className="row">
        <div className="col-md-6 d-flex flex-column justify-content-center">
          <h2 className="fw-bold text-black" style={{ fontSize: '80px', textAlign: 'left' }}>What Hexa Web Focus On?</h2>
        </div>
        <div className="col-md-6">
          <div className="row">
            <div className="col-6">
              <Element name="fast">
                <motion.div 
                  className="box fast"
                  onMouseEnter={() => handleMouseEnter(0)}
                  onMouseLeave={handleMouseLeave}
                  initial={{ opacity: 0, y: 50 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -50 }}
                  transition={{ duration: 0.5 }}
                  viewport={{ once: false }}
                  style={{ backgroundColor: hovered === 0 ? '#ffcc00' : '#ff6b6b', width: '100%', padding: '20px', textAlign: 'center' }}
                >
                  Fast
                </motion.div>
              </Element>
            </div>
            <div className="col-6">
              <Element name="scalable">
                <motion.div 
                  className="box scalable"
                  onMouseEnter={() => handleMouseEnter(1)}
                  onMouseLeave={handleMouseLeave}
                  initial={{ opacity: 0, y: 50 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -50 }}
                  transition={{ duration: 0.5, delay: 0.2 }}
                  viewport={{ once: false }}
                  style={{ backgroundColor: hovered === 1 ? '#66ff66' : '#4dabf7', width: '100%', padding: '20px', textAlign: 'center' }}
                >
                  Scalable
                </motion.div>
              </Element>
            </div>
          </div>
          <div className="row mt-4">
            <div className="col-12">
              <Element name="reliable">
                <motion.div 
                  className="box reliable"
                  onMouseEnter={() => handleMouseEnter(2)}
                  onMouseLeave={handleMouseLeave}
                  initial={{ opacity: 0, y: 50 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -50 }}
                  transition={{ duration: 0.5, delay: 0.4 }}
                  viewport={{ once: false }}
                  style={{ backgroundColor: hovered === 2 ? '#ff66ff' : '#66bb6a', width: '100%', padding: '20px', textAlign: 'center' }}
                >
                  Reliable
                </motion.div>
              </Element>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Featuer;
