import React, { useRef, useState } from "react";
import { useNavigate } from "react-router-dom";
import { addNote } from "../utils/local-data";
import InputField from "../components/form/InputField";
import Button from "../components/ui/SaveButton";
import FormContainer from "../components/layout/FormContainer";

function AddNotePage() {
  const [title, setTitle] = useState("");
  const bodyRef = useRef(null);
  const navigate = useNavigate();

  const handleSubmit = (event) => {
    event.preventDefault();
    const note = {
      id: `note-${+new Date()}`,
      title,
      body: bodyRef.current.innerHTML,
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
        <div ref={bodyRef} className="mt-1 block w-full rounded-md border-2 border-gray-400 focus:border-blue-500 focus:ring-blue-500 p-2" contentEditable role="textbox" aria-multiline="true"></div>
        <Button type="submit">Simpan Catatan</Button>
      </form>
    </FormContainer>
  );
}

export default AddNotePage;
