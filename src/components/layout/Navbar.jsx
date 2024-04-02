import React from "react";
import { Link, useNavigate } from "react-router-dom";
import PropTypes from "prop-types";
import { useAuth } from "../../context/AuthContext"; // Import useAuth hook

const Navbar = ({ links }) => {
  const navigate = useNavigate();
  const { isLoggedIn, currentUser, logout } = useAuth();

  const handleLogout = () => {
    logout();
    navigate("/login");
  };

  return (
    <div className="bg-gray-800 p-4 text-white flex justify-between items-center">
      <Link to="/" className="text-2xl font-bold">
        My Note App
      </Link>
      {/* Tampilkan nama pengguna jika sudah login */}
      {isLoggedIn && currentUser ? <span className="mr-4">Hi, {currentUser.name}</span> : <span className="mr-4">Hi, Guest</span>}
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
