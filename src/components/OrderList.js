import React from "react";
import { AccessTimeTwoTone } from "@material-ui/icons";
import Checkout from "./Checkout";
import "./OrderList.css";

function OrderList() {
  function currentTime(date) {
    var hours = date.getHours();
    var minutes = date.getMinutes();
    var ampm = hours >= 12 ? "PM" : "AM";
    hours = hours % 12;
    hours = hours ? hours : 12; // the hour '0' should be '12'
    minutes = minutes < 10 ? "0" + minutes : minutes;
    var strTime = hours + ":" + minutes + " " + ampm;
    return strTime;
  }
  return (
    <div className="order-list">
      <div className="right-title">
        <h3>My Order</h3>
        <span>Edit</span>
      </div>
      <div className="right-time">
        <AccessTimeTwoTone fontSize="small" className="access-time" />
        <span>{currentTime(new Date())}</span>
      </div>
      <div className="extraa"></div>
      <Checkout
        id="12361341"
        title="Cabage salad"
        price={4.99}
        rating={4.2}
        quantity="300g"
        image="https://images.unsplash.com/photo-1546069901-ba9599a7e63c?ixid=MnwxMjA3fDB8MHxzZWFyY2h8NTB8fGZvb2R8ZW58MHx8MHx8&ixlib=rb-1.2.1&w=1000&q=80"
        alt=""
      />
      <div className="drag-and-drop">
        <p>Drag&Drop</p>
      </div>
      <div className="checkout-total">
        <span>Total</span>
        <h4>$16.99</h4>
      </div>
    </div>
  );
}

export default OrderList;
