import { Divider } from "@mui/material";
import React from "react";
import "./Cart.css";
const Cart = () => {
  return (
    <div className="cart_section">
      <div className="cart_container">
        <div className="left_cart">
          <img
            src="https://st.depositphotos.com/1085342/1888/i/600/depositphotos_18885485-stock-photo-nothing-to-wear-concept-young.jpg"
            alt="Cart_img"
          />
          <div className="cart_btn">
            <button className="cart_btn1">Add to Cart</button>
            <button className="cart_btn2">Buy Now</button>
          </div>
        </div>

        <div className="right_cart">
          <h3>Shirt</h3>
          <h4>Pigeon </h4>
          <Divider />
          <p className="mrp">
            M.R.P. : <del>₹00</del>
          </p>
          <p>
            Deal of the Day : <span style={{ color: "#B12704" }}>₹.00</span>
          </p>
          <p>
            You save : <span style={{ color: "#B12704" }}> ₹55 </span>
          </p>

          <div className="discount_box">
            <h5>
              Discount : <span style={{ color: "#111" }}>Extra 10% off</span>{" "}
            </h5>
            <h4>
              FREE Delivery :{" "}
              <span style={{ color: "#111", fontWeight: "600" }}>
                Oct 8 - 21
              </span>{" "}
              Details
            </h4>
            <p style={{ color: "#111" }}>
              Fastest delivery:{" "}
              <span style={{ color: "#111", fontWeight: "600" }}>
                {" "}
                Tomorrow 11AM
              </span>
            </p>
          </div>
          <p className="description">
            About the Iteam :{" "}
            <span
              style={{
                color: "#565959",
                fontSize: "14px",
                fontWeight: "500",
                letterSpacing: "0.4px",
              }}
            >
              Describe as your wish.
            </span>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Cart;
