import React, { useState, useEffect } from "react";
import "../styles/sidebar.css";
import { FaLinkedin, FaXTwitter, FaWhatsapp, FaInstagram } from "react-icons/fa6";

function Sidebar({ isOpen, toggleSidebar }) {
  const [flipped, setFlipped] = useState(false);

  useEffect(() => {
    const interval = setInterval(() => {
      setFlipped(true);
      setTimeout(() => {
        setFlipped(false);
      }, 3000);
    }, 5000);

    return () => clearInterval(interval);
  }, []);

  return (
    <>
      {/* Overlay (Appears when sidebar is open) */}
      <div className={`overlay ${isOpen ? "show" : ""}`} onClick={toggleSidebar}></div>

      {/* Sidebar */}
      <aside className={`sidebar ${isOpen ? "open" : ""}`}>
        <div class="hamburger-wrapper">
          <img
            className="hamburger-close"
            src={`${process.env.PUBLIC_URL}/close-hamburger.png`}
            alt="close-hamburger"
            onClick={toggleSidebar} // Close sidebar on click
          />
        </div>
        <div className="profile">
          <div className={`flip-box ${flipped ? "flipped" : ""}`}>
            <div className="flip-box-inner">
              <div className="flip-box-front">
                <img src={`${process.env.PUBLIC_URL}/InFrame_1713726812885.jpg`} alt="Profile" />
              </div>
              <div className="flip-box-back">
                <img src={`${process.env.PUBLIC_URL}/my-avatar.png`} alt="Avatar" />
              </div>
            </div>
          </div>
          <h2>Abhishek Mandloi</h2>
          <p className="role">Web Developer</p>

          {/* Social Media Icons */}
          <div className="social-icons">
            <a href="https://www.linkedin.com/in/abhishek-mandloi-0120791a0" target="_blank" rel="noopener noreferrer">
              <FaLinkedin />
            </a>
            <a href="https://twitter.com/Abhi_mandloi_8" target="_blank" rel="noopener noreferrer">
            <FaXTwitter />
            </a>
            <a href="https://wa.me/918720069456" target="_blank" rel="noopener noreferrer">
              <FaWhatsapp />
            </a>
            <a href="https://www.instagram.com/__.abhi__8x" target="_blank" rel="noopener noreferrer">
              <FaInstagram />
            </a>
          </div>
        </div>

        <div className="contact-info">
          <p><strong>Email:</strong> <a href="mailto:mandloi.abhishek9451@gmail.com">mandloi.abhishek9451@gmail.com</a></p>
          <p><strong>Phone:</strong> <a href="tel:+91 8720069456">8720069456</a></p>
          <p><strong>Birthday:</strong> July 05, 2001</p>
          <p><strong>Location:</strong> 📍 Indore, Madhya Pradesh, India</p>
        </div>
      </aside>
    </>
  );
}

export default Sidebar;
