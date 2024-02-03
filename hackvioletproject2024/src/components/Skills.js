import React from 'react';
import myImage from "../assets/img/CompanyLogo.png";
import colorSharp from "../assets/img/LuminaBackground2.jpg";

export const Skills = () => {
  return (
    <section className="skill" id="skills" style={{ background: `url(${colorSharp}) center bottom 299px / cover no-repeat`, backgroundSize: 'cover' }}>
      <div className="container">
        <div className="row">
          <div className="col-12">
            <div className="skill-bx wow zoomIn">
              <div className="item">
                <div className="about-me-text">
                  <h2>About Me</h2>
                  <p>
                  At Lumina, we're dedicated to illuminating the path to financial empowerment for women-owned small businesses. Our platform serves as a beacon, offering access to a curated selection of micro-loans and grants designed specifically for the unique challenges and aspirations of women entrepreneurs. By simplifying the search for vital capital, Lumina not only supports the growth and sustainability of women-led ventures but also contributes to the broader economic landscape by fostering diversity, innovation, and resilience within the business community. Our commitment extends beyond mere access to funds; we empower women with the knowledge and tools necessary to navigate the financial terrain confidently. Through personalized recommendations and a focus on reducing the time and resources typically spent on securing funding, Lumina ensures that every woman entrepreneur can find and seize opportunities tailored to her vision. This is more than a platform; it's a movement towards a more inclusive and equitable entrepreneurial ecosystem.

                  </p>
                </div>
                <img src={myImage} alt="" className="right-aligned-image" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
