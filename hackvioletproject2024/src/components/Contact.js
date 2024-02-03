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
                  Below are my projects. The first three have links to their individual GitHub pages, providing detailed insights into the codebase and development process. However, please note that the last three projects, while equally noteworthy, are former class assignments, and I'm unable to share their code publicly due to academic integrity policies. Feel free to reach out if you have any questions or would like to discuss these projects further.
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
