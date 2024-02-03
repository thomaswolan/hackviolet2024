import React from 'react';
import myImage from "../assets/img/myImage.jpg";
import colorSharp from "../assets/img/mountains3.jpg";

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
                  Hey! I'm Thomas Wolan, a sophomore in computer Science at Virginia Tech. I have a passion for learning new things and expanding my knowledge, as shown by my recent creation of this website. I'm currently on the lookout for internship opportunities to further develop my skills. Beyond programming, I have a love for traveling the world, listening to all kinds of music, and following my favorite sports teams. Feel free to explore my website!
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
