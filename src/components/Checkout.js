import React, { useState } from "react";
import "./Checkout.css";
import { Clear } from "@material-ui/icons";

function Checkout({ id, title, image, price, rating, quantity }) {
  const [counter, setCounter] = useState(1);
  function incrementValue() {
    setCounter(counter + 1);
  }
  function decrementValue() {
    if (counter > 1) {
      setCounter(counter - 1);
    }
  }
  return (
    <div className="checkout-item">
      <div className="checkout-item-container">
        <div className="items">
          <img src={image} alt="" className="checkout-img" />
          <div className="checkout-item-details">
            <span className="checkout-name">{title}</span>
            <span className="checkout-item-quantity">{quantity}</span>
          </div>
          <div className="container-amount">
            <input
              className="quantity-button-decrement"
              type="button"
              onClick={decrementValue}
              value="-"
            />
            <input
              type="text"
              name="quantity"
              value={counter}
              size="2"
              id="number"
              className="container-input-area"
            />
            <input
              className="quantity-button-increment"
              type="button"
              onClick={incrementValue}
              value="+"
            />
          </div>
          <div className="checkout-item-price">
            <span>
              <strong>${price}</strong>
            </span>
            <Clear fontSize="small" className="clear-icon" />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Checkout;
