import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { getNote } from "../utils/local-data";
import NoteMetadata from "../components/NoteMetaData"; // Impor baru
import NoteContent from "../components/NoteContent"; // Impor baru

function NoteDetailPage() {
  const { noteId } = useParams();
  const [note, setNote] = useState(null);

  useEffect(() => {
    const fetchedNote = getNote(noteId);
    setNote(fetchedNote);
  }, [noteId]);

  if (!note) {
    return <p className="text-gray-600">Catatan tidak ditemukan.</p>;
  }

  return (
    <div className="max-w-2xl mx-auto px-4 py-8">
      <article className="rounded-lg shadow-lg p-6 bg-white">
        <NoteMetadata title={note.title} createdAt={note.createdAt} />
        <NoteContent content={note.body} />
      </article>
    </div>
  );
}

export default NoteDetailPage;
