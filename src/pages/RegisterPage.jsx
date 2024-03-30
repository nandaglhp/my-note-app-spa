// src/pages/RegisterPage.jsx
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import InputField from "../components/form/InputField";
import Button from "../components/ui/SaveButton";
import FormContainer from "../components/layout/FormContainer";
import { register } from "../utils/network-data"; // Import fungsi register

const RegisterPage = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const handleSubmit = async (event) => {
    event.preventDefault();

    // Gunakan fungsi register dari network-data.js
    const { error } = await register({ name, email, password });

    if (!error) {
      // Jika registrasi berhasil, navigasikan user ke halaman login atau beranda
      navigate("/login");
    }
  };

  return (
    <FormContainer>
      <h2 className="text-xl font-semibold mb-4">Registrasi</h2>
      <form onSubmit={handleSubmit}>
        <InputField id="name" label="Nama" type="text" value={name} onChange={(e) => setName(e.target.value)} />
        <InputField id="email" label="Email" type="email" value={email} onChange={(e) => setEmail(e.target.value)} />
        <InputField id="password" label="Password" type="password" value={password} onChange={(e) => setPassword(e.target.value)} />
        <Button type="submit">Daftar</Button>
      </form>
    </FormContainer>
  );
};

export default RegisterPage;
