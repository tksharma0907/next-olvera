"use client";

import React from "react";
import "./styles.css";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";

const responsive = {
  superLargeDesktop: {
    breakpoint: { max: 4000, min: 3000 },
    items: 3,
  },
  desktop: {
    breakpoint: { max: 3000, min: 1024 },
    items: 3,
  },
  medium: {
    breakpoint: { max: 1024, min: 700 },
    items: 2,
  },
  tablet: {
    breakpoint: { max: 700, min: 464 },
    items: 1,
  },
  mobile: {
    breakpoint: { max: 464, min: 0 },
    items: 1,
  },
};

const Card = ({
  name = "Aaron Boby",
  des = "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed doeiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim adminim veniam",
  date = "2 November 2021",
  isPink = true,
}) => {
  return (
    <div
      className="review-card"
      style={{ ...(!isPink && { backgroundColor: "#C2278E08" }) }}
    >
      <div>
        <img className="review-quote" alt="quote" src="/assets/quote.svg" />
        <div
          className="review-des"
          style={{ ...(!isPink && { color: "#5E84A1" }) }}
        >
          {des}
          <img
            className="review-quote-spe"
            alt="quote"
            src="/assets/quote2.svg"
          />
        </div>
      </div>
      <div className="review-card-bottom ">
        <div
          className="placeholder-wrapper"
          style={{
            ...(!isPink && { backgroundColor: "#C2278E", fill: "#fff" }),
          }}
        >
          <img
            className="review-placeholder"
            alt="quote"
            src={
              isPink ? "/assets/placeholder.svg" : "/assets/placeholder-w.svg"
            }
          />
        </div>
        <div>
          <div
            className="review-name"
            style={{ ...(!isPink && { color: "#1E5068" }) }}
          >
            {name}
          </div>
          <div
            className="review-date"
            style={{ ...(!isPink && { color: "#5E84A1" }) }}
          >
            {date}
          </div>
        </div>
      </div>
    </div>
  );
};

const arrowStyle = {
  background: "transparent",
  border: 0,
  color: "#000",
  fontSize: "80px",
  position: "absolute",
  top: "40%",
};

const CustomRight = ({ onClick }) => (
  <button
    className="arrow right"
    onClick={onClick}
    style={{ ...arrowStyle, right: "30px" }}
  >
    <img alt="arrow" src="/assets/carousal.svg" />
  </button>
);
const CustomLeft = ({ onClick }) => (
  <button
    className="arrow left"
    onClick={onClick}
    style={{ ...arrowStyle, left: "30px" }}
  >
    <img
      style={{
        transform: "rotate(180deg)",
      }}
      alt="arrow"
      src="/assets/carousal.svg"
    />
  </button>
);

const Reviews = () => {
  return (
    <div className="reviews-wrapper">
      <img className="review-quote" alt="quote" src="/assets/quote.svg" />
      <div className="review-title">What our clients say about us</div>
      <div style={{ width: "100%", padding: "0 12%", position: "relative" }}>
        <Carousel
          ssr
          infinite
          swipeable
          draggable
          responsive={responsive}
          autoPlay
          renderButtonGroupOutside={true}
          customRightArrow={<CustomRight />}
          customLeftArrow={<CustomLeft />}
          renderArrowsWhenDisabled
        >
          <Card />
          <Card isPink={false} />
          <Card isPink={false} />
          <Card isPink={false} />
        </Carousel>
      </div>
    </div>
  );
};

export default Reviews;
