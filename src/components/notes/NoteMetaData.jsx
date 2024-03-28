// src/components/NoteMetadata.jsx

import React from "react";
import { showFormattedDate } from "../../utils";

const NoteMetadata = ({ title, createdAt }) => {
  return (
    <>
      <h1 className="text-3xl font-bold text-gray-800 mb-3">{title}</h1>
      <p className="text-sm text-gray-500 mb-6">{showFormattedDate(createdAt)}</p>
    </>
  );
};

export default NoteMetadata;
