import React from "react";
import "../css/About.css"; // Ensure the path to your CSS file is correct

function AboutUs() {
  return (
    <section id="about" className="about-us-container">
      {" "}
      {/* Added id="about" */}
      {/* About Us Title */}
      <section className="about-us-header">
        <h1>About Us</h1>
      </section>
      {/* Vision Section with Background Image */}
      <section className="vision-section section-with-image">
        <div className="text-content">
          <h2>Our Vision</h2>
          <p>
            Strategic thinking to make customers successful with on-time
            delivery and quality supply. Our vision is to become the best
            service provider in the industry.
          </p>
        </div>
        <div className="section-image vision-image"></div>
      </section>
      {/* About the Company Section */}
      <section className="about-section">
        <div className="text-content">
          <h2>About Om India</h2>
          <blockquote>
            “Delivering innovative packaging solutions that make a difference.”
          </blockquote>
          <p>
            Om India is one of the leading manufacturers and suppliers of
            industrial packaging materials, serving various industries such as
            heavy manufacturing, electronics, and agriculture. Located in the
            Bhosari and Pimpri-Chinchwad MIDC Region, our reputation is built on
            quality, reliability, and service.
          </p>
        </div>
        <div className="section-image about-image"></div>
      </section>
      {/* Our Core Values Section with Cards */}
      <section className="values-section">
        <h2>Our Core Values</h2>
        <div className="value-cards">
          <div className="value-card">
            <h3>Respect</h3>
            <p>
              We value the individuality of every employee, client, and partner.
            </p>
          </div>
          <div className="value-card">
            <h3>Excellence</h3>
            <p>
              Our commitment to quality drives our everyday actions and
              decisions.
            </p>
          </div>
          <div className="value-card">
            <h3>Learning</h3>
            <p>
              We constantly seek to improve our products, services, and
              ourselves.
            </p>
          </div>
        </div>
      </section>
      {/* Why Us Section with Hover Effect */}
      <section className="why-us-section">
        <h2>Why Choose Us?</h2>
        <div className="why-us-list">
          <div className="why-us-item">
            <i className="fas fa-cogs"></i>
            <p>State-of-the-art Manufacturing</p>
          </div>
          <div className="why-us-item">
            <i className="fas fa-handshake"></i>
            <p>Client-Focused Solutions</p>
          </div>
          <div className="why-us-item">
            <i className="fas fa-tags"></i>
            <p>Competitive Pricing</p>
          </div>
          <div className="why-us-item">
            <i className="fas fa-thumbs-up"></i>
            <p>Unmatched Quality</p>
          </div>
        </div>
      </section>
      {/* Industries We Serve with Subtle Animation */}
      <section className="industries-section">
        <h2>Industries We Serve</h2>
        <p>
          Our packaging solutions are utilized across various industries
          including heavy industries, electronics, dairy plants, and agro
          sectors, ensuring protection and reliability for your products.
        </p>
        <div className="industries-logos">
          <img src="heavy-industry.jpg" alt="Agro Industry" />
          <img src="electronics.jpg" alt="Electronics Industry" />
          <img src="heavy-industry.jpg" alt="Heavy Industry" />
          <img src="agro.png" alt="Dairy Industry" />
        </div>
      </section>
      {/* Quality Assurance Section as Badge */}
      <section className="quality-badge-section">
        <div className="quality-badge">
          <i className="fas fa-check-circle"></i>
        </div>
        <div className="quality-badge-text">
          <h2>Quality Assurance</h2>
          <p>
            We are committed to delivering defect-free components by using the
            best raw materials and following stringent quality processes. Our
            quality is our promise to the clients we serve.
          </p>
        </div>
      </section>
    </section>
  );
}

export default AboutUs;
