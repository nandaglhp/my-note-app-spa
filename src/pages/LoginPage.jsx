// src/pages/LoginPage.jsx
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import InputField from "../components/form/InputField";
import Button from "../components/ui/SaveButton";
import FormContainer from "../components/layout/FormContainer";
import { login } from "../utils/network-data";

function LoginPage() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const handleSubmit = async (event) => {
    event.preventDefault();
    const { error } = await login({ email, password });
    if (!error) {
      // Assumption: navigate to home page on successful login
      navigate("/");
    } else {
      // Handle login failure
      alert("Login failed. Please check your email and password.");
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
    </FormContainer> // This was missing in the previous snippet
  );
}

export default LoginPage;
