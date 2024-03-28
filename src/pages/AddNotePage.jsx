// src/pages/AddNotePage.jsx
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { addNote } from "../utils/local-data";

function AddNotePage() {
  const [title, setTitle] = useState("");
  const [body, setBody] = useState("");
  const navigate = useNavigate();

  const handleSubmit = (event) => {
    event.preventDefault();
    const note = {
      id: `note-${+new Date()}`,
      title,
      body,
      archived: false,
      createdAt: new Date().toISOString(),
    };
    addNote(note);
    navigate("/");
  };

  return (
    <div className="max-w-2xl mx-auto p-4 bg-blue-100 shadow rounded-lg mt-16">
      {" "}
      {/* Perhatikan mt-16 */}
      <h2 className="text-2xl font-semibold mb-6 text-gray-800">Tambah Catatan Baru</h2>
      <form onSubmit={handleSubmit} className="space-y-6">
        <div>
          <label htmlFor="title" className="block text-sm font-medium text-gray-700">
            Judul
          </label>
          <input type="text" id="title" value={title} onChange={(e) => setTitle(e.target.value)} className="mt-1 block w-full rounded-md border-2 border-gray-400 focus:border-blue-500 focus:ring-blue-500" required />
        </div>
        <div>
          <label htmlFor="body" className="block text-sm font-medium text-gray-700">
            Isi Catatan
          </label>
          <textarea id="body" rows="4" value={body} onChange={(e) => setBody(e.target.value)} className="mt-1 block w-full rounded-md border-2 border-gray-400 focus:border-blue-500 focus:ring-blue-500" required />
        </div>
        <button type="submit" className="px-4 py-2 bg-blue-500 text-white rounded-md hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2">
          Simpan Catatan
        </button>
      </form>
    </div>
  );
}

export default AddNotePage;