import React from "react";

function Footer() {
  return (
    <footer className="footer">
      <a href="#home" className="footer-logo">
        ✿ Chenille Flowers
      </a>

      <p>
        Made with love, creativity and a personal touch.
      </p>

      <div className="footer-links">
        <a href="#products">Our Products</a>
        <a href="#about">About Us</a>
        <a href="#contact">Contact</a>
      </div>

      <small>
        © {new Date().getFullYear()} Craftora. Handmade with love.
      </small>
    </footer>
  );
}

export default Footer;