import React from "react";
import "../styles/Practice.css";

const Practice = () => {
  return (
    <section className="practice">
    <h2>Our Studio Services</h2>
    <div className="practice-grid">
      <div className="practice-item">
        <h3>Screenwriting</h3>
        <p>Crafting compelling scripts and storytelling.</p>
      </div>
      <div className="practice-item">
        <h3>Film Production</h3>
        <p>Bringing stories to life with expert production.</p>
      </div>
      <div className="practice-item">
        <h3>Post-Production</h3>
        <p>Editing, VFX, and sound design for a perfect finish.</p>
      </div>
    </div>
  </section>
  
  );
};

export default Practice;
