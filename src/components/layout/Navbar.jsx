import React from "react";
import { Link } from "react-router-dom";
import PropTypes from "prop-types";

const Navbar = ({ links }) => {
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
