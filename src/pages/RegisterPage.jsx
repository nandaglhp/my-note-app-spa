// src/pages/RegisterPage.jsx
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import InputField from "../components/form/InputField";
import Button from "../components/ui/SaveButton";
import { register } from "../utils/network-data";
import FormContainer from "../components/layout/FormContainer";

const RegisterPage = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const navigate = useNavigate();

  const handleSubmit = async (event) => {
    event.preventDefault();

    // Cek apakah password dan confirm password sama
    if (password !== confirmPassword) {
      alert("Password dan Confirm Password tidak sama.");
      return;
    }

    try {
      const { error } = await register({ name, email, password });
      if (!error) {
        navigate("/login");
      } else {
        console.error("Registrasi gagal");
      }
    } catch (err) {
      console.error("Terjadi kesalahan:", err);
    }
  };

  return (
    <div>
      <h2>Register</h2>
      <FormContainer>
        <form onSubmit={handleSubmit}>
          <InputField id="name" label="Name" value={name} onChange={(e) => setName(e.target.value)} />
          <InputField id="email" label="Email" value={email} onChange={(e) => setEmail(e.target.value)} />
          <InputField id="password" label="Password" value={password} onChange={(e) => setPassword(e.target.value)} />
          <InputField id="confirm-password" label="Confirm Password" type="password" value={confirmPassword} onChange={(e) => setConfirmPassword(e.target.value)} />
          <Button type="submit">Register</Button>
        </form>
      </FormContainer>
    </div>
  );
};

export default RegisterPage;
