// src/App.js
import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/layout/Navbar";
import NotesPage from "./pages/NotesPage";
import NoteDetailPage from "./pages/NoteDetailPage";
import AddNotePage from "./pages/AddNotePage";
import ArchivedNotesPage from "./pages/ArchivedNotesPage";
import NotFoundPage from "./pages/NotFoundPage"; // Pastikan untuk mengimpor NotFoundPage

function App() {
  return (
    <Router>
      <Navbar
        links={[
          { title: "Arsip", path: "/archived" },
          // Tambahkan link tambahan di sini jika diperlukan
        ]}
      />
      <Routes>
        <Route path="/" element={<NotesPage />} />
        <Route path="/note/:noteId" element={<NoteDetailPage />} />
        <Route path="/notes/new" element={<AddNotePage />} />
        <Route path="/archived" element={<ArchivedNotesPage />} />
        <Route path="*" element={<NotFoundPage />} /> {/* Tambahkan ini untuk 404 Page */}
      </Routes>
    </Router>
  );
}

export default App;
