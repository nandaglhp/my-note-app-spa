import React, { createContext, useContext, useState } from "react";

// Membuat context
const AuthContext = createContext();

// Fungsi untuk menggunakan context
export function useAuth() {
  return useContext(AuthContext);
}

// Provider untuk menyediakan state dan fungsi ke komponen child
export function AuthProvider({ children }) {
  const [currentUser, setCurrentUser] = useState(null);

  // Fungsi untuk "login", menyimpan user ke state
  function login(userData) {
    setCurrentUser(userData);
  }

  // Fungsi untuk "logout", menghapus user dari state
  function logout() {
    setCurrentUser(null);
  }

  // Nilai yang disediakan oleh provider
  const value = {
    currentUser,
    login,
    logout,
  };

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
}
