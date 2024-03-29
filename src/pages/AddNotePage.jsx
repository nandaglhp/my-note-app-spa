import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { addNote } from "../utils/local-data";
import InputField from "../components/form/InputField"; // Impor baru
import TextAreaField from "../components/form/TextAreaField"; // Impor baru
import Button from "../components/ui/SaveButton";
import FormContainer from "../components/layout/FormContainer";

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
    <FormContainer>
      <h2 className="text-2xl font-semibold mb-6 text-gray-800">Tambah Catatan Baru</h2>
      <form onSubmit={handleSubmit} className="space-y-6">
        <InputField id="title" label="Judul" value={title} onChange={(e) => setTitle(e.target.value)} />
        <TextAreaField id="body" label="Isi Catatan" value={body} onChange={(e) => setBody(e.target.value)} />
        <Button type="submit">Simpan Catatan</Button>
      </form>
    </FormContainer>
  );
}

export default AddNotePage;
