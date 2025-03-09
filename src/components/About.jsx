import React from "react";
import "../styles/About.css";
import aboutImage from "../assets/experience.jpeg"; // Replace with actual image

const About = () => {
  return (
      <section className="about" id="about">
          
      <div className="about-container">
        {/* Left Side: Image */}
        <div className="about-image">
          <img src={aboutImage} alt="About Us" />
          <span className="experience-badge">More than 30 Years Of Experience</span>
        </div>

        {/* Right Side: Text Content */}
        <div className="about-text">
          <h4>LEARN ABOUT US</h4>
          <h2>We Provide Reliable And Effective Shooting & Editing Services</h2>
          <p>
          We have a huge experience of Producing fictional / non-fictional programs and delivering quality product on time.
          </p>
          <button className="about-btn">Learn More</button>
        </div>
      </div>
    </section>
  );
};

export default About;
