// src/pages/LoginPage.jsx
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import InputField from "../components/form/InputField";
import Button from "../components/ui/SaveButton";
import { login, putAccessToken } from "../utils/network-data";
import FormContainer from "../components/layout/FormContainer";
import { useAuth } from "../context/AuthContext";

function LoginPage() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();
  const { login: loginUser } = useAuth();

  const handleSubmit = async (event) => {
    event.preventDefault();
    const response = await login({ email, password });

    if (!response.error) {
      // Menyimpan access token ke local storage
      putAccessToken(response.data.accessToken);
      loginUser(response.data.user);
      // Asumsi: navigasi ke halaman utama setelah login berhasil
      navigate("/");
    } else {
      // Menangani kegagalan login
      alert("Login gagal. Silakan periksa email dan password Anda.");
    }
  };

  return (
    <FormContainer>
      <h2>Login</h2>
      <form onSubmit={handleSubmit} className="login-form">
        <InputField id="email" label="Email" type="email" value={email} onChange={(e) => setEmail(e.target.value)} />
        <InputField id="password" label="Password" type="password" value={password} onChange={(e) => setPassword(e.target.value)} />
        <Button type="submit">Login</Button>
      </form>
    </FormContainer>
  );
}

export default LoginPage;
