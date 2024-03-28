// src/components/layout/FormContainer.jsx

import React from "react";
import PropTypes from "prop-types";

const FormContainer = ({ children }) => {
  return <div className="max-w-2xl mx-auto p-4 bg-blue-100 shadow rounded-lg mt-16">{children}</div>;
};

FormContainer.propTypes = {
  children: PropTypes.node.isRequired,
};

export default FormContainer;
