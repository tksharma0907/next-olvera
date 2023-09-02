"use client";

import "./styles.css";
import useWindowDimensions from "@/app/_lib/hooks/useDimensions";

const Banner = () => {
  const [{ width }] = useWindowDimensions();

  const isResp = width > 600;

  return (
    <div className="banner-wrapper">
      <div className="title-section">
        <div className="typo">Start your story with Olvera</div>
        <button className="custom-button banner-btn">CONTACT US</button>
      </div>
      <div className="banner-image-wrapper">
        <img
          src={
            isResp ? "/assets/delivery-guy.png" : "/assets/res-delivery-guy.png"
          }
          alt="banner1"
          className="banner-image"
        />
      </div>
    </div>
  );
};

export default Banner;
