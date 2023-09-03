"use client";

import "./styles.css";
import useWindowDimensions from "@/app/_lib/hooks/useDimensions";

const resourceConfig = [
  { label: "Home", id: "" },
  { label: "Articles", id: "" },
  { label: "Videos & Guides", id: "" },
  { label: "About Us", id: "" },
];

const careersConfig = [
  { label: "Olevera academy", id: "" },
  { label: "Privacy Policy", id: "" },
  { label: "Cookies", id: "" },
];

const Footer = () => {
  const [{ width, height }] = useWindowDimensions();

  const isResp = width > 600;

  return (
    <div className="footer-wrapper">
      <img
        className="footer-waves"
        alt="waves"
        src={isResp ? "/assets/pattern.png" : "/assets/res-wave.png"}
      />
      <div className="footer-secondary-wrapper">
        <div className="footer-title">
          We are open and accepting to all. Come work with us
        </div>
        <div className="footer-des">
          Experts teach you everything from the comfort of your own home.
          Improve your career today by enrolling in excellent courses at
          affordable prices.
        </div>
        <button className="footer-btn ">Get Started</button>

        <div className="footer-add">
          <img className="" alt="village" src="/assets/village.png" />
          <img className="" alt="climate" src="/assets/climate.png" />
          <img className="" alt="jaaims" src="/assets/jaaims.png" />
          <img className="" alt="dover" src="/assets/dover.png" />
        </div>

        <div className="footer-item-wrapper">
          <div className="footer-item-first-section">
            <img
              className="footer-item-img"
              alt="first"
              src="/assets/first.png"
            />
            <img
              className="footer-item-img"
              alt="capital"
              src="/assets/capital.png"
            />
            <div>Turning Uncertainty Into Your Advantage</div>
          </div>
          <div>
            <div className="footer-item-title">Resources</div>
            <div className="footer-item">
              {resourceConfig.map(({ label, id }) => (
                <a key={label} href={`#${id}`}>
                  {label}
                </a>
              ))}
            </div>
          </div>
          <div>
            <div className="footer-item-title">Careers</div>
            <div className="footer-item">
              {careersConfig.map(({ label, id }) => (
                <a key={label} href={`#${id}`}>
                  {label}
                </a>
              ))}
            </div>
          </div>
          <div className="footer-address">
            <div>
              Liability Limited By A Scheme Approved Under Professional Services
            </div>
            <div>Scheme Phone: (64) 09 973 4905</div>
            <div>
              Email: ezibuyenquiries@olveraadvisors.com Website:
              olvera.co.nz/ezibuy
            </div>
          </div>
        </div>
      </div>
      <hr />
      <div className="footer-bottom-section">
        <div>©2023 olevra advisors. All rights reserved</div>
        <div className="footer-icons">
          <img
            className="footer-icon"
            alt="facebook"
            src="/assets/white-facebook.svg"
          />
          <img
            className="footer-icon"
            alt="facebook"
            src="/assets/white-insta.svg"
          />
          <img
            className="footer-icon"
            alt="facebook"
            src="/assets/white-twitter.svg"
          />
          <img
            className="footer-icon"
            alt="facebook"
            src="/assets/white-linkedin.svg"
          />
        </div>
      </div>
    </div>
  );
};

export default Footer;
