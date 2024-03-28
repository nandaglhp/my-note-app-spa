// src/App.js
import React from "react";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import NotesPage from "./pages/NotesPage.jsx";
import NoteDetailPage from "./pages/NoteDetailPage.jsx";
import AddNotePage from "./pages/AddNotePage";

function App() {
  return (
    <Router>
      <div className="bg-gray-800 p-4 text-white">
        <Link to="/" className="text-2xl font-bold">
          My Note App
        </Link>
      </div>
      <Routes>
        <Route path="/" element={<NotesPage />} />
        <Route path="/note/:noteId" element={<NoteDetailPage />} />
        <Route path="/notes/new" element={<AddNotePage />} />
      </Routes>
    </Router>
  );
}

export default App;
