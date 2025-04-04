import React, { useState } from "react";
import { BrowserRouter as Router, Route, Routes, Link } from "react-router-dom";
import Sidebar from "./components/Sidebar";
import About from "./components/About";
import Resume from "./components/Resume";
import Portfolio from "./components/Portfolio";
import Contact from "./components/Contact";
import "./styles/global.css"; // Ensure you have global styles

function App() {
  const [isSidebarOpen, setSidebarOpen] = useState(false);
  const [darkMode, setDarkMode] = useState(true);

  const toggleSidebar = () => {
    setSidebarOpen(!isSidebarOpen);
  };

  const toggleTheme = () => {
    setDarkMode(!darkMode);
    document.body.classList.toggle("light-theme");
  };

  return (
    <Router>
      <div className={`container ${darkMode ? "dark-mode" : "light-mode"}`}>
        <Sidebar isOpen={isSidebarOpen} toggleSidebar={toggleSidebar} />
        
        <div className="main-content">
          <nav className="top-nav">
            <img
              className="hamburger"
              src={`${process.env.PUBLIC_URL}/hamburger.png`}
              alt="hamburger"
              onClick={toggleSidebar} // Open sidebar on click
            />
            <ul>
              <li><Link to="/">About</Link></li>
              <li><Link to="/resume">Resume</Link></li>
              <li><Link to="/portfolio">Portfolio</Link></li>
              <li><Link to="/contact">Contact</Link></li>
            </ul>
            <div className="theme-toggle-container" onClick={toggleTheme}>
              <div className={`theme-toggle ${darkMode ? "dark" : "light"}`}>
                <div className="icon">{darkMode ? "🌙" : "☀️"}</div>
              </div>
            </div>
          </nav>

          <div className="content">
            <Routes>
              <Route path="/" element={<About />} />
              <Route path="/resume" element={<Resume />} />
              <Route path="/portfolio" element={<Portfolio />} />
              <Route path="/contact" element={<Contact />} />
            </Routes>
          </div>
        </div>
      </div>
    </Router>
  );
}

export default App;
