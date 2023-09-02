import "./styles.css";

const Careers = () => {
  return (
    <div className="careers-wrapper">
      <div className="careers-left-wrapper">
        <img
          className="careers-add-circle"
          alt="first-circle"
          src="/assets/secondary-circle.png"
        />
        <img
          className="careers-circle-top"
          alt="first-circle"
          src="/assets/circle.png"
        />
        <img
          className="careers-circle-bottom"
          alt="first-circle"
          src="/assets/circle.png"
        />
        <div className="careers-title">CAREERS</div>
        <div className="careers-sub-title">Careers at Olvera</div>
        <div className="careers-des">
          Navigate change, develop on-demand skills. Your turnaround journey
          starts with Olvera.
        </div>
        <button className="careers-btn">Search Careers</button>
      </div>
      <div className="careers-right-wrapper"></div>
    </div>
  );
};

export default Careers;
