import React, { useState } from "react";
import Home from "./component/Home";
import About from "./component/About";
import Skills from "./component/Skills";
import Contact from "./component/Contact";

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
    <div>
      <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
        <div className="container">
          <span className="navbar-brand">My Profile</span>
          <div className="navbar-nav ms-auto">
            <button className="btn btn-link nav-link text-white" onClick={() => setCurrentPage("home")}>Home</button>
            <button className="btn btn-link nav-link text-white" onClick={() => setCurrentPage("about")}>About</button>
            <button className="btn btn-link nav-link text-white" onClick={() => setCurrentPage("skills")}>Skills</button>
            <button className="btn btn-link nav-link text-white" onClick={() => setCurrentPage("contact")}>Contact</button>
          </div>
        </div>
      </nav>

      <div className="container mt-5">
        {renderPage()}
      </div>
    </div>
  );
}

export default App;
