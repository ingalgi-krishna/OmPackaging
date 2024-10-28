import React, { useState } from "react";
import emailjs from "emailjs-com";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css"; // Import Toastify CSS
import "../Css/FAQ.css"; // Ensure the path to your CSS file is correct

function ContactAndFAQ() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  // Handle input changes
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  // Handle form submission
  const handleSubmit = (e) => {
    e.preventDefault();

    // Access environment variables for EmailJS configuration
    const serviceID = process.env.REACT_APP_EMAILJS_SERVICE_ID;
    const templateID = process.env.REACT_APP_EMAILJS_TEMPLATE_ID;
    const userID = process.env.REACT_APP_EMAILJS_USER_ID;

    emailjs
      .send(serviceID, templateID, formData, userID)
      .then((response) => {
        console.log("SUCCESS!", response.status, response.text);
        setFormData({ name: "", email: "", subject: "", message: "" }); // Reset form

        // Show success toast
        toast.success("Your message has been sent successfully!", {
          position: "top-center",
          autoClose: 3000, // Auto-close after 3 seconds
        });
      })
      .catch((error) => {
        console.error("Failed to send message:", error);
        toast.error("Error sending message. Please try again.", {
          position: "top-center",
          autoClose: 3000,
        });
      });
  };

  return (
    <section id="contact" className="contact-us-container">
      {/* Toast container for displaying toasts */}
      <ToastContainer />

      {/* Contact Us Title */}
      <section className="contact-us-header">
        <h1>Contact Us</h1>
      </section>

      {/* Contact Form Section */}
      <section className="form-section">
        <div className="text-content">
          <h2>Get in Touch</h2>
          <p>
            Have any questions or need a quote? Reach out to us and we’ll be
            happy to help!
          </p>
        </div>
        <form onSubmit={handleSubmit}>
          <input
            type="text"
            name="name"
            placeholder="Your Name"
            value={formData.name}
            onChange={handleChange}
            required
          />
          <input
            type="email"
            name="email"
            placeholder="Your Email"
            value={formData.email}
            onChange={handleChange}
            required
          />
          <input
            type="text"
            name="subject"
            placeholder="Subject"
            value={formData.subject}
            onChange={handleChange}
            required
          />
          <textarea
            name="message"
            placeholder="Your Message"
            rows="4"
            value={formData.message}
            onChange={handleChange}
            required
          ></textarea>
          <button type="submit" className="submit-button">
            Send Message
          </button>
        </form>
      </section>

      {/* FAQ Section */}
      <section className="faq-section">
        <h2>Frequently Asked Questions</h2>
        <div className="faq-item">
          <h3>1. What services do you offer?</h3>
          <p>
            We provide a wide range of packaging solutions for industries of all
            sizes, including custom packaging, protective materials, and more.
            Let us help keep your products safe during transport and storage.
          </p>
        </div>
        <div className="faq-item">
          <h3>2. Do you offer custom packaging options?</h3>
          <p>
            Yes, our team specializes in creating tailored packaging solutions
            that fit your product's specific needs. Whether it's size, material,
            or design, we've got you covered.
          </p>
        </div>
        <div className="faq-item">
          <h3>3. How can I get a price estimate?</h3>
          <p>
            You can request a quote through our form or give us a call. We'll
            discuss your requirements and provide a detailed, transparent
            pricing estimate for your packaging needs.
          </p>
        </div>
      </section>
    </section>
  );
}

export default ContactAndFAQ;
