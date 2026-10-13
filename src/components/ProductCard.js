import React from "react";

function ProductCard({ product, phone }) {
  const message = `Hello! I am interested in ${product.name}. Please share more details.`;
  const image = product.images?.[0];

  return (
    <article className="product-card">
      <div className="product-image-wrap">
        {image ? (
          <img
            src={image}
            alt={product.name}
            className="product-image"
            loading="lazy"
          />
        ) : (
          <div className="product-image">Image unavailable</div>
        )}

        <span className="category-badge">{product.category}</span>
      </div>

      <div className="product-info">
        <h3>{product.name}</h3>

        <p className="product-description">
          {product.description}
        </p>

        <div className="product-uses">
          <strong>Perfect for</strong>
          <p>{product.uses}</p>
        </div>

        <a
          className="enquire-button"
          href={`https://wa.me/${phone}?text=${encodeURIComponent(message)}`}
          target="_blank"
          rel="noopener noreferrer"
        >
          Enquire on WhatsApp ↗
        </a>
      </div>
    </article>
  );
}

export default ProductCard;