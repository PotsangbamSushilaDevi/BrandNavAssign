import React from "react";
import "./Portfolio.css";

// import {Swiper, SwiperSlide} from 'swiper/react';
const Portfolio = () => {
  const clients = [{}];
  return (
    <div className="portfolio">
      <span>
        Trusted by Thousands of <br />
        Happy Customer
      </span>
      <div className="heading">
        <span>
          These are the stories of our customers who have joined us with great
          <br />
          pleasure when using this crazy feature.
        </span>
      </div>
      {/* Carousel */}
      <div className="contain-1">
        {/* Card-1 */}
        <div className="card1">
          <img src="./Images/Ellipse175.png " className="pic" />
        </div>

        {/* Card-2 */}
        <div className="card2">
          <img src="./Images/Ellipse 175 (1).png" className="pic" />
        </div>

        {/* Card-3 */}
        <div className="card3">
          <img src="./Images/Ellipse 175 (2).png" className="pic" />
        </div>
      </div>
    </div>
  );
};
export default Portfolio;
