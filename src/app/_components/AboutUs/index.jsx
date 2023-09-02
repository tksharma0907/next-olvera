import "./styles.css";

const AboutUs = () => {
  return (
    <div className="about-us-wrapper">
      <div className="about-title-typo">About Olvera</div>
      <div className="additional">
        Change is the one true constant in business
      </div>
      <div className="about-des-wrapper">
        <div className="about-des-typo">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua.
        </div>
      </div>
      <div className="about-images-wrapper">
        <img className="harward" alt="harwards" src="/assets/harward.png" />
        <img
          className="rest-image"
          alt="common"
          src="/assets/common-welth.png"
        />
        <img className="ellery" alt="ellery" src="/assets/ellery.png" />
        <img className="rest-image" alt="ginger" src="/assets/ginger.png" />
      </div>
    </div>
  );
};

export default AboutUs;
