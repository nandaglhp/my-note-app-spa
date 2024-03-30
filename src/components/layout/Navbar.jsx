import React from "react";
import { Link, useNavigate } from "react-router-dom";
import PropTypes from "prop-types";
import { getAccessToken, logout } from "../../utils/network-data"; // Import fungsi getAccessToken dan logout

const Navbar = ({ links }) => {
  const navigate = useNavigate();
  const handleLogout = () => {
    logout();
    navigate("/login");
  };

  return (
    <div className="bg-gray-800 p-4 text-white flex justify-between items-center">
      <Link to="/" className="text-2xl font-bold">
        My Note App
      </Link>
      {links.map(({ title, path }) => (
        <Link key={path} to={path} className="text-xl">
          {title}
        </Link>
      ))}
      {getAccessToken() && <button onClick={handleLogout}>Logout</button>}
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

export default Navbar;
