// src/pages/NoteDetailPage.jsx
import React from "react";
import { useParams } from "react-router-dom";

function NoteDetailPage() {
  let { noteId } = useParams();

  return (
    <div className="max-w-2xl mx-auto px-4 py-8">
      <h1 className="text-2xl font-semibold text-gray-800">Detail Catatan</h1>
      <p className="mt-4 text-gray-600">ID Catatan: {noteId}</p>
      {/* Detail catatan akan diambil berdasarkan `noteId` dan ditampilkan di sini */}
    </div>
  );
}

export default NoteDetailPage;
