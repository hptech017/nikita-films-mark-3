import React from "react";
import "../styles/Attorney.css";
import image1 from "../assets/director.jpeg";
import image2 from "../assets/attorney-2.jpg";
import image3 from "../assets/attorney-3.jpg";
import image4 from "../assets/attorney-4.jpg";
import image5 from "../assets/attorney-5.jpg";
import image6 from "../assets/attorney-6.jpg";

const Attorney = () => {
  const filmmakers = [
    { name: "Awadhesh Pandey", role: "Cinematographer", image: image1 },
    { name: "Director Name 2", role: "Screenwriter", image: image2 },
    { name: "Director Name 3", role: "Producer", image: image3 },
    { name: "Director Name 4", role: "Film Editor", image: image4 },
    { name: "Director Name 5", role: "Sound Designer", image: image5 },
    { name: "Director Name 6", role: "VFX Artist", image: image6 },
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
