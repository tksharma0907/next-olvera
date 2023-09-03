import "./styles.css";

const statsConfig = [
  {
    label: "150+",
    des: "Projects",
  },
  {
    label: "80+",
    des: "Clients",
  },
  {
    label: "200+",
    des: "Professionals",
  },
  {
    label: "97+",
    des: "Clients",
  },
];

const pictorialRepConfig = [
  {
    sNo: "01.",
    title: "Sustainability",
    value: "10",
  },
  {
    sNo: "02.",
    title: "Small Business",
    value: "10",
  },
  {
    sNo: "03.",
    title: "Forensic Services",
    value: "10",
  },
  {
    sNo: "04.",
    title: "Risk Management",
    value: "10",
  },
  {
    sNo: "05.",
    title: "CFO Advisory",
    value: "10",
  },
];

const StatRenderer = ({ label, des }) => {
  return (
    <div>
      <div className="value-label-typo">{label}</div>
      <div className="value-des-typo">{des}</div>
    </div>
  );
};

const PictorialRep = ({ sNo, title, value }) => {
  return (
    <div className="pictorial-representation-wrapper">
      <div className="s-no-typo">{sNo}</div>
      <div className="arrow-title-wrapper">
        <div className="representation-title">{title}</div>
        <img className="arrow" alt="arrow" src="/assets/arrow.png" />
      </div>
      <div className="progress-bar-container">
        <div className="progress-bar" style={{ width: `${value}%` }} />
      </div>
    </div>
  );
};

const Stats = () => {
  return (
    <div className="stats-wrapper">
      <div className="values-wrapper ">
        {statsConfig.map(({ ...rest }) => (
          <StatRenderer key={rest.label} {...rest} />
        ))}
      </div>
      <div className="services-section">
        <div className="services-left-section">
          <img
            className="secondary-bg"
            alt="secondary-bg"
            src="/assets/secondary-circle.png"
          />
          <div className="services-title-typo">SERVICES</div>
          <div className="services-des-typo">
            Our services that can help your business
          </div>
          <div className="services-details-typo">
            <div>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua.
            </div>
            <div>
              Duis aute irure dolor in reprehenderit in voluptate velit esse
              cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat
              cupidatat non proident, sunt in culpa qui officia deserunt
            </div>
          </div>
        </div>
        <div className="services-right-section">
          <div className="representations-wrapper">
            {pictorialRepConfig.map(({ ...rest }) => (
              <PictorialRep key={rest.title} {...rest} />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Stats;
