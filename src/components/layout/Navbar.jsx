import React from "react";
import { Link, useNavigate, useLocation } from "react-router-dom"; // Import useLocation
import PropTypes from "prop-types";
import Button from "../ui/Button"; // Pastikan path ini sesuai

const Navbar = ({ links }) => {
  const navigate = useNavigate();
  const location = useLocation(); // Dapatkan lokasi saat ini

  // Fungsi untuk menangani proses logout
  const handleLogout = () => {
    // Proses menghapus token (misalnya)
    localStorage.removeItem("accessToken");
    // Redirect ke halaman login setelah logout
    navigate("/login");
  };

  return (
    <div className="bg-gray-800 p-4 text-white flex justify-between items-center">
      <Link to="/" className="text-2xl font-bold">
        My Note App
      </Link>
      <div className="flex items-center gap-4">
        {links.map(({ title, path }) => (
          <Link key={path} to={path} className="text-xl">
            {title}
          </Link>
        ))}
        {/* Render tombol logout berdasarkan path */}
        {location.pathname !== "/login" && location.pathname !== "/register" && <Button text="Logout" onClick={handleLogout} />}
      </div>
    </div>
  );
};

Navbar.propTypes = {
  links: PropTypes.arrayOf(
    PropTypes.shape({
      title: PropTypes.string.isRequired,
      path: PropTypes.string.isRequired,
    })
  ),
};

Navbar.defaultProps = {
  links: [],
};

export default Navbar;
