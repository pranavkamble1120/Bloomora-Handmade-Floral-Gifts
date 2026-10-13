import React from "react";

function Navbar() {
  const phone = "919876543210"; // Replace with your WhatsApp number

  return (
    <header className="navbar">
      <a href="#home" className="logo">
        <span>✿</span> Chinelle Flowers
      </a>

      <nav className="nav-links">
        <a href="#home">Home</a>
        <a href="#products">Products</a>
        <a href="#about">About Us</a>
        <a href="#contact">Contact</a>
      </nav>

      <a
        className="nav-contact"
        href={`https://wa.me/${phone}?text=${encodeURIComponent(
          "Hello! I would like to enquire about your handmade products."
        )}`}
        target="_blank"
        rel="noreferrer"
      >
        Contact Us ↗
      </a>
    </header>
  );
}

export default Navbar;