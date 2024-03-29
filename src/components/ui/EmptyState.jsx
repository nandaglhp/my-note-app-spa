import React from "react";
import PropTypes from "prop-types";

const EmptyState = ({ message, onRetry }) => {
  return (
    <div className="text-center">
      <p className="text-gray-600">Tidak ada catatan.</p>
    </div>
  );
};

EmptyState.propTypes = {
  message: PropTypes.string,
  onRetry: PropTypes.func,
};

EmptyState.defaultProps = {
  message: "Tidak ada data.",
};

export default EmptyState;
