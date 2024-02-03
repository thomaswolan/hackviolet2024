import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import 'animate.css';
import TrackVisibility from 'react-on-screen';
import contactImg from "../assets/img/contact.png";


export const Contact = () => {
  return (
    <section className="contact" id="connect">
      <Container>
        <Row className="align-items-center">
          <Col size={12} md={6}>
            <TrackVisibility>
              {({ isVisible }) =>
                <div className={isVisible ? "animate__animated animate__zoomIn" : ""}>
                  {/* You can use the existing contactImg or replace it with any other image */}
                  <img src={contactImg} alt="Contact Us" />
                </div>
              }
            </TrackVisibility>
          </Col>
          <Col size={12} md={6}>
            <TrackVisibility>
              {({ isVisible }) =>
                <div className={isVisible ? "animate__animated animate__fadeIn" : ""}>
                  <h2>Want to get in touch?</h2>
                  <a href="https://www.linkedin.com/in/thomas-wolan/" target="_blank" rel="noopener noreferrer">
                    <h2>Connect with me on LinkedIn!</h2>
                    <span></span>
                  </a>
                </div>
              }
            </TrackVisibility>
          </Col>
        </Row>
      </Container>
    </section>
  )
}
