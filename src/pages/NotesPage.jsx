// src/pages/NotesPage.jsx
import React, { useState, useEffect } from "react";
import { getAllNotes } from "../utils/local-data";
import { showFormattedDate } from "../utils";
import { Link } from "react-router-dom";

function NotesPage() {
  const [notes, setNotes] = useState([]);

  useEffect(() => {
    // Memanggil fungsi untuk mengambil semua catatan dan menyimpannya ke state
    const notesData = getAllNotes();
    setNotes(notesData);
  }, []);

  return (
    <div className="max-w-4xl mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold text-gray-800 mb-6">Daftar Catatan</h1>
      {notes.length > 0 ? (
        <div className="grid grid-cols-1 gap-6">
          {notes.map((note) => (
            <div key={note.id} className="p-6 bg-white rounded-lg shadow-md">
              <Link to={`/note/${note.id}`} className="text-xl font-semibold text-gray-900 hover:text-gray-700">
                {note.title}
              </Link>
              <p className="text-gray-600">{showFormattedDate(note.createdAt)}</p>
              <p className="mt-4 text-gray-700">{note.body}</p>
            </div>
          ))}
        </div>
      ) : (
        <p className="text-gray-600">Tidak ada catatan.</p>
      )}
    </div>
  );
}

export default NotesPage;
