"use client";

import Link from "next/link";
import Button from "../Button";
import "./styles.css";
import { useState } from "react";

const headerItemsConfig = [
  { label: "Home", link: "/" },
  { label: "About Us", link: "/" },
  { label: "Our services", link: "/" },
  { label: "Our experience", link: "/" },
  { label: "Resources", link: "/" },
];

const Header = () => {
  const [open, setOpen] = useState(false);

  console.log(open);

  return (
    <>
      {open && (
        <>
          <div onClick={() => setOpen(false)}>
            <img className="cross" alt="cross" src="/assets/cross.png" />
          </div>
          <div className="menu">
            <div className="res-menu-items">
              {headerItemsConfig.map(({ label, link }) => {
                console.log(label);
                return (
                  <div key={label} className="menu-item">
                    {label.toUpperCase()}
                  </div>
                );
              })}
            </div>
          </div>
        </>
      )}
      <div className="header-wrapper">
        <div className="header-top-section">
          Turning Uncertainity Into your advantage
        </div>
        <div className="header-bottom-section">
          <Link href="/" className="logo">
            <img
              style={{
                width: "142px",
                height: "33px",
              }}
              src="/assets/logo.png"
              alt="Socially"
              className="logo-image"
            />
          </Link>
          <div className="menu-items">
            {headerItemsConfig.map(({ label, link }) => (
              <div className="menu-item">{label.toUpperCase()}</div>
            ))}
          </div>
          <div className="contact-btn-wrapper">
            <Button label="CONTACT US" className={"custom-button"} />
            <div className="social-sites">
              <img className="social-icon" src="/assets/facebook.png" />
              <img className="social-icon" src="/assets/instagram.png" />
              <img className="social-icon" src="/assets/linkedin.png" />
            </div>
          </div>
        </div>

        <div onClick={() => setOpen(true)}>
          <img className="burger" alt="burger" src="/assets/burger.png" />
        </div>
      </div>
    </>
  );
};

export default Header;
