import React from "react";
import "../Css/Footer.css"; // Ensure the path is correct

function Footer() {
  return (
    <footer id="quote" className="footer">
      {" "}
      {/* Added id="quote" */}
      <div className="footer-container">
        <div className="footer-column">
          <h3>OM INDIA PVT LTD</h3>
          <p>
            We are one of the leading manufacturers and suppliers of industrial
            packaging material such as wooden pallets, wooden packaging boxes.
          </p>
          <p>Mon - Sat: 8:00 - 17:30, Sunday: CLOSED</p>
        </div>

        <div className="footer-column">
          <h3>Our Services</h3>
          <ul>
            <li>Relocation Services</li>
            <li>Wooden Pallet Two Way</li>
            <li>Seaworthy Export Cases</li>
            <li>Onsite Palletizing Services</li>
            <li>Heavy Boxes</li>
            <li>International Packaging</li>
          </ul>
        </div>

        <div className="footer-column">
          <h3>Contact Us</h3>
          <p>
            Kasturi business centre,
            <br /> Mahalunge Ingle, Chakan,
            <br /> Pune - 411044
          </p>
          <p>
            <strong>Email:</strong> info@omindiapvt.com
            <br />
            <strong>Phone:</strong> +91 99214 42533
          </p>
        </div>
      </div>
      <hr />
      <div className="footer-bottom">
        <p>© 2024 OM INDIA PVT LTD. All rights reserved.</p>
      </div>
    </footer>
  );
}

export default Footer;
