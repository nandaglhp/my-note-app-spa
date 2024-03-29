import React from "react";
import PropTypes from "prop-types";

const ArchiveButton = ({ onClick, isArchived }) => {
  return (
    <button onClick={onClick} className="px-4 py-2 bg-blue-500 hover:bg-blue-700 text-white font-bold rounded">
      {isArchived ? "Unarchive" : "Archive"}
    </button>
  );
};

ArchiveButton.propTypes = {
  onClick: PropTypes.func.isRequired,
  isArchived: PropTypes.bool,
};

export default ArchiveButton;
