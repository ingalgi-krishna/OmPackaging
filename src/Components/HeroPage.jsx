import React from "react";
import "../Css/HeroPage.css"; // Ensure the path is correct

function HeroPage() {
  return (
    <section id="home" className="hero-container">
      <div className="hero-content">
        <h1>Welcome to Om India Pvt Ltd</h1>
        <p className="hero-subtitle">COMPLETE PACKING SOLUTIONS</p>
        <p className="hero-description">
          “Om India Pvt Ltd” is a leading manufacturer and supplier of
          industrial packaging materials, such as wooden pallets, crates, and
          packaging boxes, designed for light, medium, and heavy-duty packaging.
          Conveniently located in the Bhosari and Pimpri-Chinchwad MIDC region,
          we provide reliable solutions across industries.
        </p>
        <div className="hero-buttons">
          <a href="#services" className="button-primary">
            OUR SERVICES
          </a>
          <a href="#contact" className="button-secondary">
            CONTACT US
          </a>
        </div>
      </div>
    </section>
  );
}

export default HeroPage;
