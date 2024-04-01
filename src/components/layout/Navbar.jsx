// src/components/layout/Navbar.jsx
import React from "react";
import { Link, useNavigate } from "react-router-dom";
import PropTypes from "prop-types";
import { getAccessToken, logout } from "../../utils/network-data"; // Pastikan import fungsi logout

const Navbar = ({ links }) => {
  const navigate = useNavigate(); // Gunakan useNavigate untuk melakukan navigasi
  const isLoggedIn = getAccessToken() !== null;

  // Fungsi untuk menangani logout
  const handleLogout = () => {
    logout(); // Panggil fungsi logout
    navigate("/login"); // Arahkan pengguna ke halaman login setelah logout
  };

  return (
    <div className="bg-gray-800 p-4 text-white flex justify-between items-center">
      <Link to="/" className="text-2xl font-bold">
        My Note App
      </Link>
      {links
        .filter((link) => !(isLoggedIn && link.title === "Login"))
        .map(({ title, path }) => (
          <Link key={path} to={path} className="text-xl">
            {title}
          </Link>
        ))}
      {isLoggedIn && (
        <button onClick={handleLogout} className="text-xl">
          Logout
        </button>
      )}
    </div>
  );
};

Navbar.propTypes = {
  links: PropTypes.arrayOf(
    PropTypes.shape({
      title: PropTypes.string.isRequired,
      path: PropTypes.string.isRequired,
    })
  ).isRequired,
};

export default Navbar;
