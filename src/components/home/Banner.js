import React from "react";
import Carousel from "react-material-ui-carousel";
// import "./banner.css";
import "../home/banner.css";

const data = [
  "Vs_mall3.jpeg",
  " Vs_mall1.jpeg",
  "Vs_mall4.jpeg",
  "Vs_mall2.jpeg",
];

const Banner = () => {
  return (
    <Carousel
      className="carasousel"
      autoPlay={true}
      animation="slide"
      indicators={false}
      navButtonsAlwaysVisible={true}
      cycleNavigation={true}
      navButtonsProps={{
        style: {
          background: "#fff",
          color: "#494949",
          borderRadius: 0,
          marginTop: -22,
          height: "104px",
        },
      }}
    >
      {data.map((img, i) => {
        return (
          <div key={i}>
            <img src={img} alt="" className="banner_img" />
          </div>
        );
      })}
    </Carousel>
  );
};

export default Banner;
