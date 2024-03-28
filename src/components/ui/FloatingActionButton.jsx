// src/components/FloatingActionButton.jsx

import React from "react";
import { Link } from "react-router-dom";
import PropTypes from "prop-types";

const FloatingActionButton = ({ to }) => {
  return (
    <Link to={to} className="flex items-center justify-center bg-blue-500 hover:bg-blue-600 text-white p-2 rounded-md shadow-lg text-4xl font-semibold fixed bottom-8 right-8 transition duration-300 ease-in-out">
      +
    </Link>
  );
};

FloatingActionButton.propTypes = {
  to: PropTypes.string.isRequired,
};

export default FloatingActionButton;
