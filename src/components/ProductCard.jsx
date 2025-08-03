import React from 'react';
import './ProductCard.css';

function ProductCard({ image, title, description, linkText, linkHref }) {

    const cardStyle = {
        backgroundImage: `url(${image})`
    };

    return (
        <a href={linkHref} className="product-card" style={cardStyle}>
            <div className="product-card-overlay"></div>
            <div className="product-card-content">
                <h3 className="product-card-title">{title}</h3>
                <p className="product-card-description">{description}</p>
                <div className="product-card-button">{linkText}</div>
            </div>
        </a>
    );
}

export default ProductCard;