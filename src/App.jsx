import React, { Suspense, lazy } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";

// Lazy load halaman
const NotesPage = lazy(() => import("./pages/NotesPage.jsx"));
const NoteDetailPage = lazy(() => import("./pages/NoteDetailPage.jsx"));
const AddNotePage = lazy(() => import("./pages/AddNotePage"));

function App() {
  return (
    <Router>
      <Navbar />
      <Suspense fallback={<div>Loading...</div>}>
        <Routes>
          <Route path="/" element={<NotesPage />} />
          <Route path="/note/:noteId" element={<NoteDetailPage />} />
          <Route path="/notes/new" element={<AddNotePage />} />
        </Routes>
      </Suspense>
    </Router>
  );
}

export default App;
