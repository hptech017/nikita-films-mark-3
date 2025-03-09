import React from "react";
import Hero from "../components/Hero.jsx";
import About from "../components/About.jsx";
import Practice from "../components/Practice.jsx";
import PracticeAreas from "../components/PracticeAreas.jsx";
import AppointmentForm from "../components/AppointmentForm.jsx";
import Choose from "../components/Choose.jsx";
import CallUs from "../components/CallUs.jsx";
import Attorney from "../components/Attorney.jsx";
import Footer from "../components/Footer.jsx";

const Home = () => {
  return (
    <div>
      
          <Hero />
          <About />
          <PracticeAreas/>
          <Practice />
          <AppointmentForm />
          <Choose />
          <CallUs />
      <Attorney />
      <Footer/>
          
    </div>
  );
};

export default Home;
