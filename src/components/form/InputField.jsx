// src/components/form/InputField.jsx

import React from "react";
import PropTypes from "prop-types";

const InputField = ({ id, label, value, onChange, type }) => {
  return (
    <div>
      <label htmlFor={id} className="block text-sm font-medium text-gray-700">
        {label}
      </label>
      <input type={type} id={id} value={value} onChange={onChange} className="mt-1 block w-full rounded-md border-2 border-gray-400 focus:border-blue-500 focus:ring-blue-500" required />
    </div>
  );
};

InputField.propTypes = {
  id: PropTypes.string.isRequired,
  label: PropTypes.string.isRequired,
  value: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
  type: PropTypes.string,
};

InputField.defaultProps = {
  type: "text",
};

export default InputField;
