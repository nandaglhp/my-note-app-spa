// src/components/form/TextAreaField.jsx

import React from "react";
import PropTypes from "prop-types";

const TextAreaField = ({ id, label, value, onChange }) => {
  return (
    <div>
      <label htmlFor={id} className="block text-sm font-medium text-gray-700">
        {label}
      </label>
      <textarea id={id} rows="4" value={value} onChange={onChange} className="mt-1 block w-full rounded-md border-2 border-gray-400 focus:border-blue-500 focus:ring-blue-500" required />
    </div>
  );
};

TextAreaField.propTypes = {
  id: PropTypes.string.isRequired,
  label: PropTypes.string.isRequired,
  value: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
};

export default TextAreaField;
