import React from 'react';
import { Container, Row, Col } from "react-bootstrap";
import { ProjectCard } from "./ProjectCard";
import projImg1 from "../assets/img/im1.jpg";
import projImg2 from "../assets/img/im2.jpg";
import projImg6 from "../assets/img/im3.jpg";
import colorSharp2 from "../assets/img/color-sharp2.png";
import 'animate.css';
import TrackVisibility from 'react-on-screen';

export const Projects = () => {
  const projects = [
    {
      title: "Handify",
      description: "Python, Roboflow, OpenCV",
      imgUrl: projImg1,
      githubLink: "https://github.com/thomaswolan/handify/tree/main"
    },
    {
      title: "Sunlight-Tracking Solar Panel",
      description: "Arduino",
      imgUrl: projImg2,
      githubLink: "https://github.com/thomaswolan/solar-panel/tree/main"
    },
    {
      title: "Personal Portfolio Website",
      description: "JavaScript, CSS, React",
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
                  <h2>News</h2>
                  <p>
                  BALLS!!!!!
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
