import React from "react";
import Banner from "./Banner";
// import Location from "./location";
import "./home.css";
import Slide from "./Slide.js";

const Maincomponents = () => {
  return (
    <div className="home_section">
      <div className="banner_part">
        <Banner />
      </div>

      <div className="slide_part">
        <div className="left_slide">
          <Slide title="Summer Clothes" />
        </div>

        <div className="right_slide">
          <h4>Festive latest launches</h4>
          <img src="Vs_mall1.jpeg" alt="" />
          {/* <Location /> */}
          <p>See More</p>
        </div>
      </div>

      <Slide title="Gents Wear" />
      <div className="center_img">
        <img
          src="https://m.media-amazon.com/images/G/31/AMS/IN/970X250-_desktop_banner.jpg"
          alt=""
        />
      </div>
      <Slide title="Winter Cloths" />
      <Slide title="Leadies Wear" />
    </div>
  );
};

export default Maincomponents;
