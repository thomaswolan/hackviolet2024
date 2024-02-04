import React from 'react';
import { Container, Row, Col } from "react-bootstrap";
import { ProjectCard } from "./ProjectCard";
import projImg1 from "../assets/img/article1.png";
import projImg2 from "../assets/img/article2.png";
import projImg6 from "../assets/img/article3.png";
import colorSharp2 from "../assets/img/color-sharp2.png";
import 'animate.css';
import TrackVisibility from 'react-on-screen';

export const Projects = () => {
  const projects = [
    {
      imgUrl: projImg1,
      githubLink: "https://www.cnbc.com/2024/01/05/female-founders-say-it-is-an-amazing-time-for-women-to-be-in-business.html"
    },
    {
      imgUrl: projImg2,
      githubLink: "https://buffer.com/resources/women-owned-small-businesses/"
    },
    {
      imgUrl: projImg6,
      githubLink: "https://www.constantcontact.com/blog/women-owned-business/"
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
                  Explore the remarkable stories of women entrepreneurs transforming the business landscape. This collection of articles underlines the innovative spirit, resilience, and groundbreaking achievements of women-owned businesses, as well as links to support businesses. By diving into these stories, you not only gain valuable insights but also support the visibility and growth of these remarkable ventures.
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
