// src/pages/RegisterPage.jsx
import React, { useState } from "react";
import InputField from "../components/form/InputField";
import Button from "../components/ui/SaveButton"; // Menggunakan komponen Button yang telah diperbarui
import FormContainer from "../components/layout/FormContainer"; // Mengimpor FormContainer untuk styling

const RegisterPage = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = (event) => {
    event.preventDefault();
    // Logika untuk mengirim data ke API akan ditambahkan di sini
    console.log({ name, email, password });
  };

  return (
    // Menggunakan FormContainer untuk membungkus formulir registrasi
    <FormContainer>
      <div className="register-page">
        <h2 className="text-center text-2xl font-semibold mb-6">Registrasi</h2>
        <form onSubmit={handleSubmit} className="register-form">
          <InputField id="name" label="Nama" type="text" value={name} onChange={(e) => setName(e.target.value)} />
          <InputField id="email" label="Email" type="email" value={email} onChange={(e) => setEmail(e.target.value)} />
          <InputField id="password" label="Password" type="password" value={password} onChange={(e) => setPassword(e.target.value)} />
          <div className="flex justify-center mt-4">
            <Button type="submit">Daftar</Button>
          </div>
        </form>
      </div>
    </FormContainer>
  );
};

export default RegisterPage;
