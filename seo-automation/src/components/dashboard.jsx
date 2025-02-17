import React, { useState } from "react";
import { RxHamburgerMenu, RxCross1 } from "react-icons"; // Import icons
import  "../styles/dashboard.css";
import Results from "../images/results.png"

const dashboard = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <div>
      {/* Navbar */}
      <header className="navbar">
        <div className="logo">SEO Site Checkup</div>
        <nav className={`nav-links ${menuOpen ? "open" : ""}`}>
          <a href="#">Home</a>
          <a href="#">Keyword Analysis</a>
          <a href="#">Competitor Analysis</a>
          <a href="#">Backlink Monitoring</a>
          <a href="#">Settings</a>
        </nav>
        <button className="hamburger" onClick={toggleMenu}>
          {menuOpen ? <RxCross1 /> : <RxHamburgerMenu />}
        </button>
      </header>

      {/* Hero Section */}
      <main className="hero">
        <h1>Search Engine Optimization Made Easy</h1>
        <p>Supercharged analysis & monitoring tools</p>
        <div className="search-bar">
          <input type="text" placeholder="Website URL" />
          <button className="checkup-btn">Checkup</button>
        </div>
        <div id="result-image">
        <img src={Results} alt="Image" className="image" />
        </div>
      </main>
    </div>
  );
};

export default dashboard;
