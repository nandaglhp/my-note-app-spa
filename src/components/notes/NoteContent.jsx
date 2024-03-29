import React from "react";
import PropTypes from "prop-types";
import parse from "html-react-parser";

const NoteContent = ({ content }) => {
  return <div>{parse(content)}</div>;
};

NoteContent.propTypes = {
  content: PropTypes.string.isRequired,
};

export default NoteContent;
