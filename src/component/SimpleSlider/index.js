import React, { Component } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

export default class SimpleSlider extends Component {
  render() {
    const settings = {
      dots: true,
      infinite: true,
      speed: 800,
      slidesToShow: 1,
      slidesToScroll: 1
    };
    return (
      <div>
        {/* <h2> Single Item</h2> */}
        <Slider {...settings}>
          <div>
            <h3><img style={{
              width: "100%",
              height: "20 %"
            }} src="2.jpg" alt="img" /> </h3>
          </div>
          <div>
            <h3><img style={{
              width: "100%",
            }} src="1.jpg" alt="" /></h3>
          </div>
          <div>
            <h3><img style={{
              width: "100%",
            }} src="3.jpg" alt="" /></h3>
          </div>
          <div>
            <h3><img style={{
              width: "100%",
            }} src="4.jpg" alt="" /></h3>
          </div>
          <div>
            <h3><img style={{
              width: "100%",
            }} src="5.jpg" alt="" /></h3>
          </div>
        </Slider>
      </div>
    );
  }
}
