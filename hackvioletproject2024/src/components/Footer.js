import { Container, Row, Col } from "react-bootstrap";
import logo from "../assets/img/logo-again.png";
import navIcon1 from "../assets/img/nav-icon1.svg";
import navIcon2 from "../assets/img/nav-icon2.svg";
import navIcon3 from "../assets/img/nav-icon3.svg";

export const Footer = () => {
  return (
    <footer className="footer">
      <Container>
        <Row className="align-items-center">
          <Col size={12} sm={6}>
            <img src={logo} alt="Logo" />
          </Col>
          <Col size={12} sm={6} className="text-center text-sm-end">
            <div className="social-icon">
              <a href="https://www.linkedin.com/in/thomas-wolan/"><img src={navIcon1} alt="" /></a>
              <a href="https://www.instagram.com/twolan34/"><img src={navIcon3} alt="" /></a>
              <a href="https://www.facebook.com/tom.wolan.5/"><img src={navIcon2} alt="" /></a>
            </div>
            <p>Copyright 2023. All Rights Reserved</p>
          </Col>
        </Row>
      </Container>
    </footer>
  )
}