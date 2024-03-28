import React, { useState, useEffect } from "react";
import { getActiveNotes } from "../utils/local-data"; // Gunakan fungsi getActiveNotes
import NoteCard from "../components/notes/NoteCard";
import FloatingActionButton from "../components/ui/FloatingActionButton";
import EmptyState from "../components/ui/EmptyState";

function NotesPage() {
  const [activeNotes, setActiveNotes] = useState([]);

  useEffect(() => {
    // Memanggil fungsi untuk mengambil semua catatan aktif dan menyimpannya ke state
    const notes = getActiveNotes();
    setActiveNotes(notes);
  }, []);

  return (
    <div className="max-w-4xl mx-auto px-4 py-8 relative">
      <h1 className="text-3xl font-bold text-gray-800 mb-6">Daftar Catatan</h1>
      {activeNotes.length > 0 ? (
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {activeNotes.map((note) => (
            <NoteCard key={note.id} note={note} />
          ))}
        </div>
      ) : (
        <EmptyState message="Tidak ada catatan aktif." />
      )}
      <FloatingActionButton to="/notes/new" />
    </div>
  );
}

export default NotesPage;
