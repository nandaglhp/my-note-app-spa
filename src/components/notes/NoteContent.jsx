import React from "react";
import PropTypes from "prop-types";
import parser from "html-react-parser";

const NoteContent = ({ content }) => {
  return <div style={{ overflowWrap: "break-word" }}>{parser(content)}</div>;
};

NoteContent.propTypes = {
  content: PropTypes.string.isRequired,
};

export default NoteContent;
