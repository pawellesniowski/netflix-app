import React from "react";
import "./Button.scss";

const Button = ({ message, mode = "default" }) => (
  <button
    className={`button ${
      mode == "default" ? "option-button" : "submit-button"
    }`}
  >
    {message}
  </button>
);

export default Button;
