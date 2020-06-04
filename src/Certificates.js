import React from "react";
import { Element } from "react-scroll";
const Certificates = (props) => {
  return (
    <Element name="certificate" className="element">
      <section className="certificate" id="certificate">
        <div className="container">
          <div className="section-heading">
            <h1>Certificates</h1>
            <h6>View some of my certifications</h6>
          </div>
          <div className="certificate-item">
            <div
              className="certificate-img has-margin-right"
              data-aos="fade-right"
              data-aos-delay="300"
            >
              <img
                src="https://i.ibb.co/r0FCy3S/Certificate.jpg"
                alt="CTP Certification"
              />
            </div>
            <div
              className="certificate-description"
              data-aos="fade-left"
              data-aos-delay="600"
            >
              <h6>CUNY Tech Prep</h6>
              <p>
                Certification I got from completing my full stack bootcamp
                program.
              </p>
            </div>
          </div>
        </div>
      </section>
    </Element>
  );
};
export default Certificates;
