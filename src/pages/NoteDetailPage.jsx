import React, { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { getNote, deleteNote, archiveNote, unarchiveNote } from "../utils/local-data";
import NoteMetadata from "../components/notes/NoteMetaData";
import NoteContent from "../components/notes/NoteContent";
import DeleteButton from "../components/ui/DeleteButton";
import ArchiveButton from "../components/ui/ArchiveButton";

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
    navigate("/");
  };

  const handleArchive = () => {
    archiveNote(noteId);
    navigate("/");
  };

  const handleUnarchive = () => {
    unarchiveNote(noteId);
    navigate("/");
  };

  if (!note) {
    return <p className="text-gray-600">Catatan tidak ditemukan.</p>;
  }

  return (
    <div className="max-w-2xl mx-auto px-4 py-8 relative">
      <article className="rounded-lg shadow-lg p-6 bg-white">
        <NoteMetadata title={note.title} createdAt={note.createdAt} />
        <NoteContent content={note.body} />
      </article>
      <div className="fixed bottom-8 right-40 flex space-x-2">
        <ArchiveButton onClick={note.archived ? handleUnarchive : handleArchive} isArchived={note.archived} />
        <DeleteButton onClick={handleDelete} />
      </div>
    </div>
  );
}

export default NoteDetailPage;
