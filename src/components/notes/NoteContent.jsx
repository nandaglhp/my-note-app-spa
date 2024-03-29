import React from "react";
import PropTypes from "prop-types";
import parse from "html-react-parser"; // Mengimpor html-react-parser

const NoteContent = ({ content }) => {
  return <div>{parse(content)}</div>; // Menggunakan parse untuk merender konten HTML
};

NoteContent.propTypes = {
  content: PropTypes.string.isRequired,
};

export default NoteContent;
