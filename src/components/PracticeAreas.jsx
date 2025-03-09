import React, { useEffect } from "react";
import $ from "jquery";
import "../styles/PracticeAreas.css";

const practiceAreas = [
  {
    title: "Screenwriting",
    icon: "✍️",
    description:
      "Crafting compelling stories and scripts that bring characters and narratives to life on the big screen.",
  },
  {
    title: "Cinematography",
    icon: "🎥",
    description:
      "Capturing stunning visuals and storytelling through the art of camera work, lighting, and composition.",
  },
  {
    title: "Production",
    icon: "🎬",
    description:
      "Managing film production from pre to post, ensuring smooth execution of creative visions.",
  },
  {
    title: "Post-Production",
    icon: "🖥️",
    description:
      "Editing, visual effects, and sound design to bring the final cinematic masterpiece to life.",
  },
  
];

const PracticeAreas = () => {
  useEffect(() => {
    if (window.$) {
      window.$(document).ready(() => {
        window.$(".practice-slider").owlCarousel({
          loop: true,
          margin: 10,
          nav: true,
          autoplay: true,
          autoplayTimeout: 3000,
          dots: true,
          responsive: {
            0: { items: 1 },
            600: { items: 1 },
            1000: { items: 1 },
          },
        });
      });
    }
  }, []);

  return (
    <section className="practice-section">
      <div className="practice-content">
        <h4>OUR PRACTICE</h4>
        <h2>Our Practice Areas</h2>
        <p>
          Invidunt lorem justo clita. Erat lorem labore ea, justo dolor lorem
          ipsum ut sed eos.
        </p>
        <button className="practice-btn">More Services</button>
      </div>

      <div className="practice-slider owl-carousel owl-theme">
        {practiceAreas.map((area, index) => (
          <div key={index} className="practice-card">
            <span className="icon">{area.icon}</span>
            <h3>{area.title}</h3>
            <p>{area.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default PracticeAreas;
