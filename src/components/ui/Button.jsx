// src/components/ui/Button.jsx

import React from "react";
import PropTypes from "prop-types";

const Button = ({ text, onClick, className }) => {
  return (
    <button onClick={onClick} className={`px-4 py-2 rounded shadow ${className}`}>
      {text}
    </button>
  );
};

Button.propTypes = {
  text: PropTypes.string.isRequired,
  onClick: PropTypes.func.isRequired,
  className: PropTypes.string,
};

Button.defaultProps = {
  className: "bg-blue-500 text-white hover:bg-blue-700",
};

export default Button;
