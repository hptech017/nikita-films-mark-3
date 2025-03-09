import React from "react";
import "../styles/Attorney.css";
import image1 from "../assets/director.jpeg";
import image2 from "../assets/director.jpeg";
import image3 from "../assets/director.jpeg";
import image4 from "../assets/director.jpeg";
import image5 from "../assets/director.jpeg";
import image6 from "../assets/director.jpeg";

const Attorney = () => {
  const filmmakers = [
    { name: "Awadhesh Pandey", role: "Cinematographer", image: image1 },
    { name: "Awadhesh Pandey", role: "Screenwriter", image: image2 },
    { name: "Awadhesh Pandey", role: "Producer", image: image3 },
    { name: "Awadhesh Pandey", role: "Film Editor", image: image4 },
    { name: "Awadhesh Pandey", role: "Sound Designer", image: image5 },
    { name: "Awadhesh Pandey", role: "VFX Artist", image: image6 },
  ];

  return (
    <div className="attorney-section">
      <h2>OUR TEAM</h2>
      <h3>Meet Our Filmmakers</h3>

      <div className="attorney-slider">
        {/* Duplicating the cards to create a seamless infinite scrolling effect */}
        <div className="attorney-track">
          {[...filmmakers, ...filmmakers].map((filmmaker, index) => (
            <div key={index} className="attorney-card">
              <img src={filmmaker.image} alt={filmmaker.name} className="attorney-image" />
              <h4>{filmmaker.name}</h4>
              <p>{filmmaker.role}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Attorney;
