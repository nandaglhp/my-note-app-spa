import React, { useState, useEffect } from "react";
import { useLocation, useNavigate } from "react-router-dom"; // Pastikan menggunakan useNavigate
import { getAllNotes } from "../utils/local-data";
import NoteCard from "../components/notes/NoteCard";
import SearchBar from "../components/form/SearchBar";
import EmptyState from "../components/ui/EmptyState";
import FloatingActionButton from "../components/ui/AddButton";

function useQuery() {
  return new URLSearchParams(useLocation().search);
}

const NotesPage = () => {
  const [notes, setNotes] = useState([]);
  const query = useQuery();
  const searchQuery = query.get("search") || "";
  const navigate = useNavigate(); // Menggunakan useNavigate

  const setSearchTerm = (searchTerm) => {
    navigate(searchTerm ? `/?search=${searchTerm}` : "/");
  };

  useEffect(() => {
    const filteredNotes = getAllNotes().filter((note) => note.title.toLowerCase().includes(searchQuery.toLowerCase()));
    setNotes(filteredNotes);
  }, [searchQuery]);

  return (
    <div className="max-w-4xl mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold text-gray-800 mb-4">Daftar Catatan</h1>
      <SearchBar searchTerm={searchQuery} setSearchTerm={setSearchTerm} />
      {notes.length > 0 ? (
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {notes.map((note) => (
            <NoteCard key={note.id} note={note} />
          ))}
        </div>
      ) : (
        <EmptyState message="Tidak ada catatan yang cocok." />
      )}
      <FloatingActionButton to="/notes/new" />
    </div>
  );
};

export default NotesPage;
