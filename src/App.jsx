import React, { useState } from "react";
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Header from "./components/Header";
import Home from "./pages/Home";
import About from "./components/About";
import Practice from "./components/Practice";
import Attorney from "./components/Attorney";
import Contact from "./components/CallUs";

const App = () => {
  const [currentPage, setCurrentPage] = useState("home");

  // Function to render components based on state
  const renderComponent = () => {
    switch (currentPage) {
      case "home":
        return <Home />;
      case "about":
        return <About />;
      case "practice":
        return <Practice />;
      case "attorneys":
        return <Attorney />;
      case "contact":
        return <Contact />;
      default:
        return <Home />;
    }
  };

  return (
    <div>
      <Header setCurrentPage={setCurrentPage} />
      {renderComponent()}

 

    </div>
    
  );
};

export default App;
