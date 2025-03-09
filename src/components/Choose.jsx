import React from "react";
import "../styles/Choose.css"; 
import studioImage from "../assets/chooseUsImage.jpg"; 

const Choose = () => {
  return (
    <div className="choose-container">
      <div className="choose-image">
        <img src={studioImage} alt="Film Studio" />
      </div>
      <div className="choose-content">
        <h3>OUR FEATURES</h3>
        <h2>Why Choose Us</h2>
        <div className="choose-item">
          <div className="choose-icon">01</div>
          <div className="choose-text">
            <h4>Exceptional Storytelling</h4>
            <p>
              Crafting engaging narratives that captivate audiences and bring visions to life.
            </p>
          </div>
        </div>
        <div className="choose-item">
          <div className="choose-icon">02</div>
          <div className="choose-text">
            <h4>Cutting-Edge Production</h4>
            <p>
              Utilizing the latest technology and expertise to deliver high-quality visuals and sound.
            </p>
          </div>
        </div>
        <div className="choose-item">
          <div className="choose-icon">03</div>
          <div className="choose-text">
            <h4>Unmatched Creativity</h4>
            <p>
              From concept to final cut, we push creative boundaries to create unforgettable cinematic experiences.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Choose;
