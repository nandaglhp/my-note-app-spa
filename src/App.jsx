import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/layout/Navbar"; // Pastikan path ini benar sesuai struktur folder Anda
import NotesPage from "./pages/NotesPage";
import NoteDetailPage from "./pages/NoteDetailPage";
import AddNotePage from "./pages/AddNotePage";
import ArchivedNotesPage from "./pages/ArchivedNotesPage"; // Nama variabel diubah untuk konsistensi

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
        {/* Definisikan Route lainnya di sini */}
      </Routes>
    </Router>
  );
}

export default App;
