
import React, { useEffect, useMemo, useState } from "react";
import Navbar from "./components/Navbar";
import ProductCard from "./components/ProductCard";
import Footer from "./components/Footer";
import products from "./data/products";
import "./App.css";

const CONTACT_PHONE = "8412801181";
const DISPLAY_PHONE = "+91 8412801181";
const EMAIL = "vpk2489@gmail.com";

const normalize = (value) =>
  String(value ?? "")
    .trim()
    .toLowerCase()
    .replace(/\s+/g, " ");

function App() {
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [search, setSearch] = useState("");
  const [showScrollTop, setShowScrollTop] = useState(false);

  // Show the scroll-to-top button after scrolling down
  useEffect(() => {
    const handleScroll = () => {
      setShowScrollTop(window.scrollY > 300);
    };

    window.addEventListener("scroll", handleScroll, {
      passive: true,
    });

    handleScroll();

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  // Smoothly scroll to the top
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  // Get unique product categories
  const categories = useMemo(
    () => [
      "All",
      ...new Set(
        products
          .map((product) => product.category?.trim())
          .filter(Boolean)
      ),
    ],
    []
  );

  // Filter products by category and search text
  const filteredProducts = useMemo(() => {
    const query = normalize(search);

    return products.filter((product) => {
      const matchesCategory =
        normalize(selectedCategory) === "all" ||
        normalize(product.category) === normalize(selectedCategory);

      const searchableText = [
        product.name,
        product.category,
        product.description,
        product.uses,
      ]
        .filter(Boolean)
        .map(normalize)
        .join(" ");

      return matchesCategory && searchableText.includes(query);
    });
  }, [selectedCategory, search]);

  const generalMessage =
    "Hello! I would like to know more about your handmade products.";

  // Reset category and search
  const resetFilters = () => {
    setSelectedCategory("All");
    setSearch("");
  };

  return (
    <div className="app">
      <Navbar />

      <main>
        {/* Hero Section */}
        <section className="hero" id="home">
          <div className="hero-content">
            <span className="eyebrow">
              ✦ HANDMADE WITH LOVE
            </span>

            <h1>
              Little Things.
              <br />
              <span>Made with Heart.</span>
            </h1>

            <p>
              Discover thoughtful handmade creations, from beautiful
              bouquets to personalized keychains and unique gifts.
              Every piece tells a story.
            </p>

            <div className="hero-actions">
              <a href="#products" className="primary-button">
                Explore Products ↗
              </a>

              <a href="#about" className="secondary-button">
                Our Story
              </a>
            </div>

            <div className="hero-note">
              <span>✿</span>
              Unique creations, made with care.
            </div>
          </div>

          <div className="hero-visual">
            <img
              src="https://images.unsplash.com/photo-1490750967868-88aa4486c946?auto=format&fit=crop&w=1100&q=85"
              alt="Beautiful flowers"
            />

            <div className="floating-note">
              <span>♡</span>

              <div>
                <strong>Made just for you</strong>
                <small>Thoughtful. Personal. Handmade.</small>
              </div>
            </div>
          </div>
        </section>

        {/* Intro Strip */}
        <section className="intro-strip">
          <span>♡ Handmade</span>
          <span>✿ Creative Gifts</span>
          <span>✧ Personalized Ideas</span>
          <span>♡ Made with Care</span>
        </section>

        {/* Products Section */}
        <section className="products-section" id="products">
          <div className="section-heading">
            <span className="eyebrow">
              OUR LITTLE COLLECTION
            </span>

            <h2>Handmade Treasures</h2>

            <p>
              Find something special for yourself or someone you love.
            </p>
          </div>

          {/* Category Buttons and Search */}
          <div className="product-toolbar">
            <div className="category-list">
              {categories.map((category) => {
                const active =
                  normalize(selectedCategory) === normalize(category);

                return (
                  <button
                    key={category}
                    type="button"
                    className={`category-button${active ? " active" : ""}`}
                    onClick={() => setSelectedCategory(category)}
                    aria-pressed={active}
                  >
                    {category}
                  </button>
                );
              })}
            </div>

            <input
              className="search-input"
              type="search"
              placeholder="Search handmade products..."
              aria-label="Search handmade products"
              value={search}
              onChange={(event) => setSearch(event.target.value)}
            />
          </div>

          {/* Results Count */}
          <div className="results-count" aria-live="polite">
            Category: {selectedCategory} · Showing{" "}
            {filteredProducts.length} product
            {filteredProducts.length !== 1 ? "s" : ""}
          </div>

          {/* Product Grid */}
          {filteredProducts.length > 0 ? (
            <div className="product-grid">
              {filteredProducts.map((product) => (
                <ProductCard
                  key={product.id}
                  product={product}
                  phone={CONTACT_PHONE}
                />
              ))}
            </div>
          ) : (
            <div className="empty-state">
              <span>♡</span>

              <h3>No products found</h3>

              <p>
                Try another category or search term to find your products.
              </p>

              <button
                type="button"
                className="primary-button"
                onClick={resetFilters}
              >
                Show All Products
              </button>
            </div>
          )}
        </section>

        {/* About Section */}
        <section className="about-section" id="about">
          <div className="about-image">
            <img
              src="https://images.unsplash.com/photo-1452860606245-08befc0ff44b?auto=format&fit=crop&w=1000&q=85"
              alt="Creative handmade craft workspace"
              loading="lazy"
            />
          </div>

          <div className="about-content">
            <span className="eyebrow">A LITTLE ABOUT US</span>

            <h2>Every Creation Has a Story.</h2>

            <p>
              We believe the most meaningful gifts are the ones made
              with love. Our collection celebrates creativity and
              thoughtful details.
            </p>

            <p>
              Whether you need a birthday surprise, a personalized
              keepsake, or a beautiful decoration, we would love to help.
            </p>

            <a href="#contact" className="primary-button">
              Get in Touch ↗
            </a>
          </div>
        </section>

        {/* Contact Section */}
        <section className="contact-section" id="contact">
          <div className="contact-card">
            <span className="eyebrow">
              LET'S CREATE SOMETHING
            </span>

            <h2>Have an Idea in Mind?</h2>

            <p>
              Want a customized bouquet, personalized keychain or
              something unique? Contact us to discuss your idea.
            </p>

            <div className="contact-details">
              <a href={`tel:${CONTACT_PHONE}`}>
                <span className="contact-icon">☎</span>

                <span>
                  <small>Call us directly</small>
                  <strong>{DISPLAY_PHONE}</strong>
                </span>
              </a>

              <a href={`mailto:${EMAIL}`}>
                <span className="contact-icon">✉</span>

                <span>
                  <small>Email us</small>
                  <strong>{EMAIL}</strong>
                </span>
              </a>
            </div>

            <a
              className="whatsapp-button"
              href={`https://wa.me/${CONTACT_PHONE}?text=${encodeURIComponent(
                generalMessage
              )}`}
              target="_blank"
              rel="noopener noreferrer"
            >
              Chat on WhatsApp ↗
            </a>
          </div>
        </section>
      </main>

      {/* Footer */}
      <Footer />

      {/* Floating WhatsApp Button */}
      <a
        className="floating-whatsapp"
        href={`https://wa.me/${CONTACT_PHONE}?text=${encodeURIComponent(
          generalMessage
        )}`}
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Contact us on WhatsApp"
      >
        WhatsApp ↗
      </a>

      {/* Floating Scroll-to-Top Button */}
      {showScrollTop && (
        <button
          type="button"
          className="scroll-to-top"
          onClick={scrollToTop}
          aria-label="Scroll to top"
          title="Back to top"
        >
          ↑
        </button>
      )}
    </div>
  );
}

export default App;
