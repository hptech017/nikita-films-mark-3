import React from "react";
import "../styles/Footer.css";
import facebookIcon from "../assets/facebook.png";
import twitterIcon from "../assets/twitter.png";
import linkedinIcon from "../assets/linkedin.png";
import youtubeIcon from "../assets/youtube.png";

const Footer = () => {
  return (
    <div className="footer-container">
      <div className="footer-top">
        <div className="footer-box">
          <i className="fa fa-map-marker-alt icon"></i>
          <div>
            <h5>Our Office</h5>
            <p>M/S Nikita Films
              19 ,Sudarshan Apartment ,Proffessors Colony Bhopal (M.P)
              462002
            </p>
          </div>
        </div>
        <div className="footer-box">
          <i className="fa fa-envelope-open icon"></i>
          <div>
            <h5>Email Us</h5>
            <p>awadheshp1972@gmail.com</p>
          </div>
        </div>
        <div className="footer-box">
          <i className="fa fa-phone-alt icon"></i>
          <div>
            <h5>Call Us</h5>
            <p>+91 7024113000</p>
          </div>
        </div>
      </div>

      <div className="footer-middle">
        <div className="footer-section">
          <h1 className="brand">Nikita Films</h1>
          <p>
          Subscribe to our newsletter for the latest updates on upcoming projects, behind-the-scenes insights, and exclusive filmmaker interviews.
          </p>
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
        <div className="footer-section">
          <h4>Popular Links</h4>
          <ul>
            <li><a href="#">Home</a></li>
            <li><a href="#">About</a></li>
            <li><a href="#">Services</a></li>
            <li><a href="#">Attorney</a></li>
            <li><a href="#">Contact</a></li>
          </ul>
        </div>
        <div className="footer-section">
          <h4>Quick Links</h4>
          <ul>
            <li><a href="#">FAQs</a></li>
            <li><a href="#">Help</a></li>
            <li><a href="#">Terms</a></li>
            <li><a href="#">Privacy</a></li>
            <li><a href="#">Site Map</a></li>
          </ul>
        </div>
        <div className="footer-section">
          <h4>Newsletter</h4>
          <p>
          Subscribe to our newsletter for the latest updates on upcoming projects, behind-the-scenes insights, and exclusive filmmaker interviews.
          </p>
          <div className="newsletter">
            <input type="text" placeholder="Your Email" />
            <button>Sign Up</button>
          </div>
        </div>
      </div>

      <div className="footer-bottom">
        <p>© Your Site Name. All Rights Reserved.</p>
        <p>Designed by <a href="https://htmlcodex.com" className="harshit">Harshit Pandey</a></p>
      </div>
    </div>
  );
};

export default Footer;