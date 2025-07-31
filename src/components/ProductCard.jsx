import React from 'react';
import './ProductCard.css';

function ProductCard({ image, alt, title, description, linkText, linkHref }) {
    return (
       <div className="product-Card">
            <img src={image} alt= {alt} className="product-card-image" />
            <div className="product-card-content">
                <h3 className="product-card-title">{title}</h3>
                <p className="product-card-description">{description}</p>
                <a href={linkHref} className="product-card-button">{linkText}</a>
            </div>
       </div>
    );
}

export default ProductCard;