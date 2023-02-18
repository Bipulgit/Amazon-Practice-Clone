import { Divider } from "@mui/material";
import React from "react";
import "./Buynow.css";
import Option from "./Option";
import Subtotal from "./Subtotal";
import Right from "./Right";
const Buynow = () => {
  return (
    <div className="buynow_section">
      <div className="buynow_container">
        <div className="left_buy">
          <h1>Shopping Cart</h1>
          <p>Select all iteam</p>
          <span className="leftbuyprice">Price</span>
          <Divider />

          <div className="item_containert">
            <img src="./Vs_mall3.jpeg" alt=""></img>
            <div className="item_details">
              <h3>Very Good Clothes</h3>
              <h3 className="diffrentprice">Rs4049.00</h3>
              <p className="unusuall">Usually dispatched in 8 days.</p>
              <p> Eligibal for FREE Shipping</p>
              <img src="Vs_mall2.jpeg" alt=""></img>
              <Option />
            </div>
            <h3 className="item_price">Rs4049.00</h3>
          </div>
          <Divider />
          <Subtotal />
        </div>
        <Right />
      </div>
    </div>
  );
};

export default Buynow;
