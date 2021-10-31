import React from "react";
import "./MenuItem.css";
import { FavoriteBorder } from "@material-ui/icons";

function MenuItem({ id, title, image, price, rating, quantity }) {
  return (
    <div className="menu-item">
      <div className="item-container">
        <span className="rating">⭐{rating}</span>
        <span className="favorite">
          <FavoriteBorder fontSize="small" />
        </span>
        <img src={image} alt="" className="menu-item-img" />
        <div className="item-info">
          <span className="item-name">{title}</span>
          <span className="item-quantity">{quantity}</span>
          <h6 className="price">${price}</h6>
        </div>
      </div>
    </div>
  );
}

export default MenuItem;
