// src/pages/NotesPage.jsx
import React, { useState, useEffect } from "react";
import { getAllNotes } from "../utils/local-data";
import { showFormattedDate } from "../utils";
import { Link } from "react-router-dom";
import NoteCard from "../components/NoteCard"; // Diperbarui untuk mencocokkan lokasi baru

function NotesPage() {
  const [notes, setNotes] = useState([]);

  useEffect(() => {
    // Memanggil fungsi untuk mengambil semua catatan dan menyimpannya ke state
    const notesData = getAllNotes();
    setNotes(notesData);
  }, []);

  return (
    <div className="max-w-4xl mx-auto px-4 py-8 relative">
      <h1 className="text-3xl font-bold text-gray-800 mb-6">Daftar Catatan</h1>
      {notes.length > 0 ? (
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {notes.map((note) => (
            <NoteCard key={note.id} note={note} />
          ))}
        </div>
      ) : (
        <p className="text-gray-600">Tidak ada catatan.</p>
      )}
      <Link to="/notes/new" className="flex items-center justify-center bg-blue-500 hover:bg-blue-600 text-white p-2 rounded-md shadow-lg text-4xl font-semibold fixed bottom-8 right-8 transition duration-300 ease-in-out">
        +
      </Link>
    </div>
  );
}

export default NotesPage;
