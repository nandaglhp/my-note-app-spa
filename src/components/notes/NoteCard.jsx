// src/components/NoteCard/index.jsx
import React from "react";
import { Link } from "react-router-dom";
import { showFormattedDate } from "../../utils";
import PropTypes from "prop-types";

const NoteCard = ({ note }) => {
  return (
    <div className="p-6 bg-white rounded-lg shadow-md border border-gray-200 hover:shadow-lg transition-shadow duration-200 ease-in-out">
      <Link to={`/note/${note.id}`} className="text-xl font-semibold text-gray-900 hover:text-blue-500">
        {note.title}
      </Link>
      <p className="text-sm text-gray-600 mt-2">{showFormattedDate(note.createdAt)}</p>
      <p className="mt-4 text-gray-700">{note.body.length > 100 ? `${note.body.substring(0, 100)}...` : note.body}</p>
    </div>
  );
};

NoteCard.propTypes = {
  note: PropTypes.shape({
    id: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    createdAt: PropTypes.string.isRequired,
    body: PropTypes.string.isRequired,
  }).isRequired,
};

export default NoteCard;
