// src/pages/NoteDetailPage.jsx
import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { getNote } from "../utils/local-data";
import { showFormattedDate } from "../utils";

function NoteDetailPage() {
  const { noteId } = useParams();
  const [note, setNote] = useState(null);

  useEffect(() => {
    const fetchedNote = getNote(noteId);
    setNote(fetchedNote);
  }, [noteId]); // Rerun ketika noteId berubah

  if (!note) {
    return <p className="text-gray-600">Catatan tidak ditemukan.</p>;
  }

  return (
    <div className="max-w-2xl mx-auto px-4 py-8">
      <h1 className="text-2xl font-semibold text-gray-800">Detail Catatan</h1>
      <p className="text-gray-600 mt-2">{showFormattedDate(note.createdAt)}</p>
      <h2 className="mt-4 text-xl font-semibold text-gray-900">{note.title}</h2>
      <p className="mt-2 text-gray-700">{note.body}</p>
    </div>
  );
}

export default NoteDetailPage;
