// src/App.js
import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import NotesPage from "./pages/NotesPage.jsx";
import NoteDetailPage from "./pages/NoteDetailPage.jsx";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<NotesPage />} />
        <Route path="/note/:noteId" element={<NoteDetailPage />} />
      </Routes>
    </Router>
  );
}

export default App;
