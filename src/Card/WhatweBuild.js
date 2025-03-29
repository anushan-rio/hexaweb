import React, { useEffect } from "react";
import { Card, Container, Row, Col } from "react-bootstrap";
import "./Card.css"; // Import CSS file
import Saas from  "../assets/Saas.webp";
import ecom from "../assets/ecom.webp"
import website from "../assets/website.webp"



const WhatweBuild = () => {
  useEffect(() => {
    const handleScroll = () => {
      const elements = document.querySelectorAll(".custom-card");
      elements.forEach((el) => {
        const rect = el.getBoundingClientRect();
        if (rect.top < window.innerHeight * 0.9) {
          el.classList.add("visible");
        }
      });
    };

    window.addEventListener("scroll", handleScroll);
    handleScroll();

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <Container className="text-center my-5 position-relative">
      <h1 className="fw-bold" style={{ fontSize: "90px" }}>What We Build</h1>
      {/* Decorative Arrow */}
      <div className="arrow-down"></div>
      <Row className="mt-5 d-flex justify-content-center">
        <Col md={4} className="d-flex justify-content-center" style={{ marginTop: "-30px" }}>
          <Card className="custom-card p-3 shadow">
            <Card.Img variant="top" src={Saas} className="mx-auto img-fluid" />
            <Card.Body>
              <Card.Title>
                <b>Saas</b>
                
              </Card.Title>
              <Card.Text>Hexa Web creates innovative SaaS solutions that empower businesses with seamless, scalable, and custom digital experiences.</Card.Text>
            </Card.Body>
          </Card>
        </Col>
        <Col md={4} className="d-flex justify-content-center" style={{ marginTop: "30px" }}>
          <Card className="custom-card p-3 shadow">
            <Card.Img variant="top" src={website} className="mx-auto img-fluid" />
            <Card.Body>
              <Card.Title>
                <b>Website</b>
              </Card.Title>
              <Card.Text>Hexa Web creates custom, responsive websites tailored to enhance user experience and business growth..</Card.Text>
            </Card.Body>
          </Card>
        </Col>
        <Col md={4} className="d-flex justify-content-center" style={{ marginTop: "-10px" }}>
          <Card className="custom-card p-3 shadow">
            <Card.Img variant="top" src={ecom} className="mx-auto img-fluid" />
            <Card.Body>
              <Card.Title>
                <b>e-commerce</b>
              </Card.Title>
              <Card.Text>Hexa Web designs seamless e-commerce solutions at very affordable prices to boost sales and enhance customer experience.</Card.Text>
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </Container>
  );
};

export default WhatweBuild;
