// src/components/NoteContent.jsx

import React from "react";
import PropTypes from "prop-types";

const NoteContent = ({ content }) => {
  return <section className="text-gray-700">{content}</section>;
};

NoteContent.propTypes = {
  content: PropTypes.string.isRequired,
};

export default NoteContent;
