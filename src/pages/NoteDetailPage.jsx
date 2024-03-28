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
      <article className="rounded-lg shadow-lg p-6 bg-white">
        <h1 className="text-3xl font-bold text-gray-800 mb-3">{note.title}</h1>
        <p className="text-sm text-gray-500 mb-6">{showFormattedDate(note.createdAt)}</p>
        <section className="text-gray-700">{note.body}</section>
      </article>
    </div>
  );
}

export default NoteDetailPage;
