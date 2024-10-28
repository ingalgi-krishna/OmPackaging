import React, { useState } from "react";
import "../css/Navbar.css"; // Make sure the path is correct for your project structure

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  // Toggle the mobile menu
  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  // Close the menu when a link is clicked
  const closeMenu = () => {
    setIsOpen(false);
  };

  return (
    <nav className="navbar">
      <div className="navbar-brand">
        <a href="#home">
          {/* Add your logo image path from public folder */}
          <img src="/logo.png" alt="Om India" className="navbar-logo" />
        </a>
      </div>

      {/* Hamburger menu icon */}
      <div className="hamburger" onClick={toggleMenu}>
        <span className="bar"></span>
        <span className="bar"></span>
        <span className="bar"></span>
      </div>

      {/* Menu links, toggle visibility based on 'isOpen' */}
      <ul className={`navbar-nav ${isOpen ? "open" : ""}`}>
        <li>
          <a href="#home" onClick={closeMenu}>
            Home
          </a>
        </li>
        <li>
          <a href="#services" onClick={closeMenu}>
            Services
          </a>
        </li>
        <li>
          <a href="#about" onClick={closeMenu}>
            About
          </a>
        </li>
        <li>
          <a href="#contact" onClick={closeMenu}>
            Contact
          </a>
        </li>
        <li>
          <a href="#quote" className="quote-button" onClick={closeMenu}>
            Get A Quote
          </a>
        </li>
      </ul>
    </nav>
  );
}

export default Navbar;
