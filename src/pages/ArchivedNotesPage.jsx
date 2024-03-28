import React, { useState, useEffect } from "react";
import { getArchivedNotes } from "../utils/local-data";
import NoteCard from "../components/notes/NoteCard";
import EmptyState from "../components/ui/EmptyState";

const ArchivedNotesPage = () => {
  const [notes, setNotes] = useState([]);

  useEffect(() => {
    setNotes(getArchivedNotes());
  }, []);

  return (
    <div>
      <h1 className="text-3xl font-bold">Catatan Terarsip</h1>
      {notes.length > 0 ? (
        <div className="notes-grid">
          {notes.map((note) => (
            <NoteCard key={note.id} note={note} />
          ))}
        </div>
      ) : (
        <EmptyState message="Arsip kosong" />
      )}
    </div>
  );
};

export default ArchivedNotesPage;
