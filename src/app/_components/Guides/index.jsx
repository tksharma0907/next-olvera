import "./styles.css";

const Guide = () => {
  return (
    <div className="guide-wrapper">
      <div className="guide-left-wrapper">
        <div className="guide-title">Olvera Guides</div>

        <div className="guide-additional ">
          <div className="guide-additional-heading">Olvera Guides</div>
          <div className="guide-additional-sub-heading">Careers at Olvera</div>
          <div className="guide-additional-info-heading">
            Ollie Restructuring Guide
          </div>
        </div>

        <div className="guide-des">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua.
        </div>
      </div>
      <div className="guide-right-wrapper">
        <div className="guide-btn">
          <div className="view-more-typo">View More</div>
          <img
            className="guide-arrow"
            alt="arrow"
            src="/assets/circular-arrow.png"
          />
        </div>
      </div>
    </div>
  );
};

export default Guide;
