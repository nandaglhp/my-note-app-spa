import React from "react";
import PropTypes from "prop-types";

const EditableTextArea = ({ content, onContentChange }) => {
  const handleInput = (event) => {
    onContentChange(event.currentTarget.innerHTML);
  };

  return (
    <div
      className="mt-1 block w-full rounded-md border-2 border-gray-400 focus:border-blue-500 focus:ring-blue-500 p-2"
      contentEditable
      onInput={handleInput}
      role="textbox"
      aria-multiline="true"
      dangerouslySetInnerHTML={{ __html: content }}
    ></div>
  );
};

EditableTextArea.propTypes = {
  content: PropTypes.string.isRequired,
  onContentChange: PropTypes.func.isRequired,
};

export default EditableTextArea;
