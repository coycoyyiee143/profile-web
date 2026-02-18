import React, { useState } from "react";
import "./App.css";
import Home from "./home";
import About from "./about";
import Skills from "./skills";
import Contact from "./contact";

function App() {
  const [currentPage, setCurrentPage] = useState("home");

  const renderPage = () => {
    switch (currentPage) {
      case "about":
        return <About />;
      case "skills":
        return <Skills />;
      case "contact":
        return <Contact />;
      default:
        return <Home />;
    }
  };

  return (
    <div className="App">
      <nav>
        <button onClick={() => setCurrentPage("home")}>Home</button>
        <button onClick={() => setCurrentPage("about")}>About</button>
        <button onClick={() => setCurrentPage("skills")}>Skills</button>
        <button onClick={() => setCurrentPage("contact")}>Contact</button>
      </nav>

      {renderPage()}
    </div>
  );
}

export default App;
