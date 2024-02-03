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
                    At [Your Company Name], we're committed to unlocking financial access for women entrepreneurs, championing the path towards gender equality in business. Our Microloan and Grant Finder App is at the heart of this mission, offering a transformative platform that simplifies the search for microloans and grants tailored to the unique needs of women-led businesses. We bridge the gap between ambitious women entrepreneurs and the capital they need to flourish, driven by a vision where every woman has the opportunity to achieve her entrepreneurial dreams.

                    Our foundation rests on innovation, inclusivity, and the profound belief in the ripple effect that empowered women can generate within their communities and the economy. By providing personalized funding solutions, we not only support women's business ventures but also contribute to broader economic growth and diversity. [Your Company Name] is not just creating a tool; we're fostering a future where access to business funding is equitable and boundless.


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
