// ProductCard.js

import React from "react";
import "./ProductCard.css";
import Cloths2 from "../../images/cloth5.png";

const ProductCard = () => {
  return (
    <>
      <div className="container">
        <div className="product-card">
          <div className="image-container">
            <img
              src={Cloths2}
              alt="Product Image"
              className="product-image"
            />
          </div>
          <button className="buy-button">Explore</button>
        </div>
        <div className="product-card">
          <div className="image-container">
            <img
              src={Cloths2}
              alt="Product Image"
              className="product-image"
            />
          </div>
          <button className="buy-button">Explore</button>
        </div>
        <div className="product-card">
          <div className="image-container">
            <img
              src={Cloths2}
              alt="Product Image"
              className="product-image"
            />
          </div>
          <button className="buy-button">Explore</button>
        </div>
      </div>
    </>
  );
};

export default ProductCard;
