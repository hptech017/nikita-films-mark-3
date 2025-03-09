import React, { useState } from "react";
import "../styles/Header.css";
import facebookIcon from "../assets/facebook.png";
import twitterIcon from "../assets/twitter.png";
import linkedinIcon from "../assets/linkedin.png";
import youtubeIcon from "../assets/youtube.png";

const Header = ({ setCurrentPage }) => {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header>
      <nav className="navbar">
        <div className="justice-container">
          <h1 className="logo">NIKITA FILMS</h1>
        </div>

        <div className="harshit">
          <div className="top-bar">
            <div className="contact-info">
              <span>📧 awadheshp1972@gmail.com</span>
              <span>📞 +91 7024113000</span>
            </div>
            <div className="social-icons">
              <a href="#">
                <img src={facebookIcon} alt="Facebook" width="30" height="30" />
              </a>
              <a href="#">
                <img src={twitterIcon} alt="Twitter" width="30" height="30" />
              </a>
              <a href="#">
                <img src={linkedinIcon} alt="LinkedIn" width="30" height="30" />
              </a>
              <a href="#">
                <img src={youtubeIcon} alt="YouTube" width="30" height="30" />
              </a>
            </div>
          </div>

          {/* Hamburger Menu Button */}
          <div className="hamburger" onClick={() => setMenuOpen(!menuOpen)}>
            {menuOpen ? "✖" : "☰"}
          </div>

          {/* Navigation Links */}
          <ul className={`nav-links ${menuOpen ? "show" : ""}`}>
            <li>
              <a href="#" onClick={() => { setCurrentPage("home"); setMenuOpen(false); }}>Home</a>
            </li>
            <li>
              <a href="#" onClick={() => { setCurrentPage("about"); setMenuOpen(false); }}>About</a>
            </li>
            <li>
              <a href="#" onClick={() => { setCurrentPage("practice"); setMenuOpen(false); }}>Practice</a>
            </li>
            <li>
              <a href="#" onClick={() => { setCurrentPage("attorneys"); setMenuOpen(false); }}>Team</a>
            </li>
            <li className="dropdown">
              <a href="#">Dropdown ▾</a>
              <ul className="dropdown-menu">
                <li><a href="#">Menu Item 1</a></li>
                <li><a href="#">Menu Item 2</a></li>
                <li><a href="#">Menu Item 3</a></li>
              </ul>
            </li>
            <li>
              <a href="#" onClick={() => { setCurrentPage("contact"); setMenuOpen(false); }}>Contact</a>
            </li>
            <li>
              <button className="quote-btn">Get A Quote</button>
            </li>
          </ul>
        </div>
      </nav>
    </header>
  );
};

export default Header;
