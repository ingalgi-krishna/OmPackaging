import React from "react";
import "../Css/OurServices.css"; // Ensure the path to your CSS file is correct

const services = [
  {
    title: "Relocation Service",
    image: "Relocation-Service.jpg", // Replace with your actual image path
    description:
      "Comprehensive relocation services for plant and assets to ensure safe transit.",
  },
  {
    title: "Plant & Asset Relocation",
    image: "Plant-and-Asset-Relocation.jpg",
    description:
      "Specialized in relocating heavy machinery, plants, and critical assets with precision.",
  },
  {
    title: "Container Lashing & Choking",
    image: "Container-Lashing-and-Choking-1.jpg",
    description:
      "Container lashing and choking services to secure cargo during transportation.",
  },
  {
    title: "Export Packaging Cases",
    image: "Export-packaging-Cases-2.jpg",
    description:
      "Durable export packaging cases designed for international shipments.",
  },
  {
    title: "Two Way Pallets",
    image: "Two-Way-Pallets-1.jpg",
    description:
      "Strong two-way pallets for efficient storage and transport of goods.",
  },
  {
    title: "Four Way Pallets",
    image: "Four-Way-Pallets-1.jpg",
    description:
      "Heavy-duty four-way pallets designed for multi-directional handling.",
  },
  {
    title: "Seaworthy Export Cases",
    image: "Seaworthy-Export-Cases-4.jpg",
    description:
      "High-quality seaworthy export cases to protect goods during long-distance sea journeys.",
  },
  {
    title: "Plywood Export Boxes",
    image: "Plywood-Export-Boxes-4.jpg",
    description: "Plywood export boxes for light to heavy-duty shipping needs.",
  },
  {
    title: "Seaworthy Packing Service",
    image: "Seaworthy-Packing-Service-2.jpg",
    description:
      "Full seaworthy packing service to protect goods from moisture, shock, and damage.",
  },
  {
    title: "Plain Corrugated Boxes",
    image: "Plain-Corrugated-Boxes-1.jpg",
    description:
      "Cost-effective corrugated boxes for light and medium packaging.",
  },
  {
    title: "Onsite Palletizing Services",
    image: "Onsite-Palletizing-Services-2.jpg",
    description:
      "Onsite palletizing services for securely packaging goods at your location.",
  },
  {
    title: "Saddle (Solid)",
    image: "Saddle-Solid-2.jpg",
    description:
      "Solid saddles for heavy-duty packaging of machinery and industrial equipment.",
  },
  {
    title: "Onsite Export Packaging",
    image: "Onsite-Export-Packaging-2.jpg",
    description:
      "Onsite export packaging for fast and efficient export shipments.",
  },
  {
    title: "Seaworthy Wooden Packaging",
    image: "Seaworthy-Wooden-Packaging-2.jpg",
    description:
      "Durable seaworthy wooden packaging for long-haul shipments by sea.",
  },
  {
    title: "Export Packaging",
    image: "Export-Packaging-3.jpg",
    description:
      "Reliable export packaging solutions for international transport.",
  },
  {
    title: "Domestic Heavy Packaging",
    image: "Domestic-Heavy-Packaging-3.jpg",
    description:
      "Heavy-duty packaging for domestic transport of industrial goods.",
  },
  {
    title: "Plywood Export Boxes",
    image: "Plywood-Export-Boxes-2-2.jpg",
    description:
      "Sturdy plywood boxes designed for export packaging solutions.",
  },
  {
    title: "Bubble Wrapping",
    image: "Bubble-Wrapping-1-2.jpg",
    description:
      "Protective bubble wrapping to secure fragile items during transport.",
  },
  {
    title: "Bubble Wrapping",
    image: "Bubble-Wrapping-2-3.jpg",
    description:
      "Protective bubble wrapping to secure fragile items during transport.",
  },
  {
    title: "Bubble Wrapping",
    image: "Bubble-Wrapping-3-1.jpg",
    description:
      "Protective bubble wrapping to secure fragile items during transport.",
  },
];

function OurServices() {
  return (
    <section id="services" className="our-services-container">
      {/* Portfolio Hero Section */}

      <h2>Our Packaging Services</h2>
      <p>
        We offer a wide variety of packaging services to meet the needs of
        various industries. From industrial packaging to relocation services, we
        have you covered with reliable, durable solutions.
      </p>

      <div className="services-grid">
        {services.map((service, index) => (
          <div className="service-item" key={index}>
            <img
              src={service.image}
              alt={service.title}
              className="service-image"
            />
            <h3>{service.title}</h3>
            <p>{service.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
}

export default OurServices;
