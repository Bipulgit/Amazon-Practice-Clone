import React from "react";

const Right = () => {
  return (
    <div className="right_buy">
      <img src="Vs_mall1.jpeg" alt="" />
      <div className="cost_right">
        <p>Your order is eligible for FREE Delivery</p>
        <br />
        <span style={{ color: "#565959" }}>
          Select this option at checkout. Details
        </span>
        <h3>
          Subtotal (1 iteam): <span style={{ fontWeight: 700 }}>Rs4343.44</span>
        </h3>
        <button className="rightbuy_btn">Procede to buy</button>
        <div className="emi">EMI Available</div>
      </div>
    </div>
  );
};

export default Right;
