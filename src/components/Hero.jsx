import React, { useEffect } from "react";


import "../styles/Hero.css";

import image1 from "../assets/image-1.jpg";
import image2 from "../assets/image-2.jpg";
import image3 from "../assets/image-3.jpg";
import image1x from "../assets/image1.jpeg";
import image2x from "../assets/image2.jpeg";
import image3x from "../assets/image3.jpeg";

const slides = [
{ image: image1x, title: "Bringing Stories to Life", subtitle: "Cinematic Excellence" },
{ image: image2x, title: "Your Vision, Our Passion", subtitle: "Crafting Masterpieces" },
{ image: image3x, title: "Where Imagination Meets Reality", subtitle: "Creating Unforgettable Films" },

];

const Hero = () => {
  useEffect(() => {
    const initializeCarousel = () => {
      const carousel = document.querySelector(".owl-carousel");

      if (carousel) {
        // Initialize Owl Carousel using vanilla JavaScript (without jQuery)
        // Assuming owlCarousel method is available globally (after being loaded in index.html)
        if (window.$ && window.$.fn.owlCarousel) {
          $(carousel).owlCarousel({
            loop: true,
            margin: 0,
            nav: true,
            items: 1,
            autoplay: true,
            autoplayTimeout: 4000,
            dots: false,
            navText: ["❮", "❯"],
            responsive: {
              0: { items: 1 },
              600: { items: 1 },
              1000: { items: 1 },
            },
          });
        }
      }
    };

    // Initialize the carousel after the component is mounted
    initializeCarousel();

    // Cleanup function to destroy the carousel instance on component unmount
    return () => {
      const carousel = document.querySelector(".owl-carousel");
      if (carousel && window.$ && window.$.fn.owlCarousel) {
        $(carousel).owlCarousel("destroy");
      }
    };
  }, []);

  return (
    <section className="hero">
      <div className="owl-carousel owl-theme">
        {slides.map((slide, index) => (
          <div className="hero-slide" key={index}>
            <div className="hero-image" style={{ backgroundImage: `url(${slide.image})` }}></div>
            <div className="hero-overlay">
              <h3>{slide.subtitle}</h3>
              <h1>{slide.title}</h1>
              <button className="hero-btn">Call Us Now</button>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Hero;
