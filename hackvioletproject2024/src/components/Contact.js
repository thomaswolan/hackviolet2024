import React from 'react';
import { Container, Row, Col } from "react-bootstrap";
import { ProjectCard } from "./ProjectCard";
import projImg1 from "../assets/img/loan.png";
import projImg2 from "../assets/img/investigators.png";
import projImg6 from "../assets/img/bank.png";
import colorSharp2 from "../assets/img/color-sharp2.png";
import 'animate.css';
import TrackVisibility from 'react-on-screen';

export const Contact = () => {
  const projects = [
    {
      imgUrl: projImg1,
      githubLink: "https://github.com/thomaswolan/handify/tree/main"
    },
    {
      imgUrl: projImg2,
      githubLink: "https://github.com/thomaswolan/solar-panel/tree/main"
    },
    {
      imgUrl: projImg6,
      githubLink: "https://github.com/thomaswolan/personal-portfolio"
    },
  ];

  return (
    <section className="project" id="projects">
      <Container>
        <Row>
          <Col size={12}>
            <TrackVisibility>
              {({ isVisible }) => (
                <div className={isVisible ? "animate__animated animate__fadeIn" : ""}>
                  <h2>Membership</h2>
                  <p>
                  Discover the power of tailored financial opportunities with Lumina's specialized membership options! Whether you're a loan applicant seeking funding, a loan investigator exploring viable options, or a bank looking to connect with potential clients on our website, this platform offers a distinct membership path to suit your unique needs and facilitate meaningful financial connections.
                  </p>
                  <Row>
                    {projects.map((project, index) => (
                      <ProjectCard key={index} {...project} />
                    ))}
                  </Row>
                </div>
              )}
            </TrackVisibility>
          </Col>
        </Row>
      </Container>
      <img className="background-image-right" src={colorSharp2} alt="Background" />
    </section>
  );
};
