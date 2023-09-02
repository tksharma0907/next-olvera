import React from "react";
import "./styles.css";

const Button = ({ label, customStyles, className }) => {
  // onClick to be done
  return (
    <button style={customStyles} className={`button ${className}`}>
      {label}
    </button>
  );
};

export default Button;
