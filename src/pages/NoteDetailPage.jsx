import React, { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { getNote, deleteNote } from "../utils/local-data";
import NoteMetadata from "../components/notes/NoteMetadata";
import NoteContent from "../components/notes/NoteContent";
import DeleteButton from "../components/ui/DeleteButton"; // Impor baru

function NoteDetailPage() {
  const { noteId } = useParams();
  const [note, setNote] = useState(null);
  const navigate = useNavigate();

  useEffect(() => {
    const fetchedNote = getNote(noteId);
    setNote(fetchedNote);
  }, [noteId]);

  const handleDelete = () => {
    deleteNote(noteId);
    navigate("/"); // Kembali ke halaman utama setelah menghapus
  };

  if (!note) {
    return <p className="text-gray-600">Catatan tidak ditemukan.</p>;
  }

  return (
    <div className="max-w-2xl mx-auto px-4 py-8 relative">
      <article className="rounded-lg shadow-lg p-6 bg-white relative">
        <NoteMetadata title={note.title} createdAt={note.createdAt} />
        <NoteContent content={note.body} />
        <DeleteButton onClick={handleDelete} />
      </article>
    </div>
  );
}

export default NoteDetailPage;
