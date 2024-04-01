import React from "react";
import { Link, useNavigate } from "react-router-dom";
import PropTypes from "prop-types";
import { useAuth } from "../../context/AuthContext"; // Import useAuth hook

const Navbar = ({ links }) => {
  const navigate = useNavigate();
  const { isLoggedIn, logout } = useAuth(); // Gunakan useAuth untuk mendapatkan state isLoggedIn dan fungsi logout

  // Fungsi untuk menangani logout
  const handleLogout = () => {
    logout(); // Panggil fungsi logout dari context
    navigate("/login"); // Arahkan pengguna ke halaman login setelah logout
  };

  return (
    <div className="bg-gray-800 p-4 text-white flex justify-between items-center">
      <Link to="/" className="text-2xl font-bold">
        My Note App
      </Link>
      {links
        .filter((link) => !(isLoggedIn && link.title === "Login")) // Filter link berdasarkan status login
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
