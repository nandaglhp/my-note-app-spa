import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import NotesPage from "./pages/NotesPage.jsx";
import NoteDetailPage from "./pages/NoteDetailPage.jsx";
import AddNotePage from "./pages/AddNotePage";

function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<NotesPage />} />
        <Route path="/note/:noteId" element={<NoteDetailPage />} />
        <Route path="/notes/new" element={<AddNotePage />} />
      </Routes>
    </Router>
  );
}

export default App;
