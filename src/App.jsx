import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/layout/Navbar";
import NotesPage from "./pages/NotesPage";
import NoteDetailPage from "./pages/NoteDetailPage";
import AddNotePage from "./pages/AddNotePage";
import ArchivedNotesPage from "./pages/ArchivedNotesPage";
import NotFoundPage from "./pages/NotFoundPage";
import RegisterPage from "./pages/RegisterPage";
import LoginPage from "./pages/LoginPage";
import { AuthProvider } from "./context/AuthContext";

function App() {
  return (
    <AuthProvider>
      {" "}
      {/* Gunakan AuthProvider untuk menyelimuti Router dan komponen di dalamnya */}
      <Router>
        <Navbar
          links={[
            { title: "Arsip", path: "/archived" },
            { title: "Login", path: "/login" }, // Mungkin Anda ingin memperbarui ini nanti berdasarkan status login
          ]}
        />
        <Routes>
          <Route path="/" element={<NotesPage />} />
          <Route path="/note/:noteId" element={<NoteDetailPage />} />
          <Route path="/notes/new" element={<AddNotePage />} />
          <Route path="/archived" element={<ArchivedNotesPage />} />
          <Route path="/register" element={<RegisterPage />} />
          <Route path="/login" element={<LoginPage />} />
          <Route path="*" element={<NotFoundPage />} />
        </Routes>
      </Router>
    </AuthProvider>
  );
}

export default App;
