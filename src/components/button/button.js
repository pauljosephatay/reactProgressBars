import React from "react";
import PropTypes from "prop-types";
import "./button.css";

const Button = ({ label = "", onClick = () => {} }) => {
  return (
    <button
      className="Button"
      onClick={e => {
        e.preventDefault();
        onClick();
      }}
    >
      {label}
    </button>
  );
};

Button.propTypes = {
  label: PropTypes.string,
  onClick: PropTypes.func.isRequired
};

export default Button;
