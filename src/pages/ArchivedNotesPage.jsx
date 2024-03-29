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
    <div className="max-w-4xl mx-auto px-4 py-8">
      <h1
        style={{
          fontSize: "2.25rem",
          fontWeight: "bold",
          textAlign: "center",
          color: "#2c3e50",
          marginBottom: "1rem",
          textTransform: "uppercase",
          letterSpacing: "1px",
        }}
      >
        Catatan Terarsip
      </h1>
      {notes.length > 0 ? (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
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
