// src/components/Navbar.jsx

import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <div className="bg-gray-800 p-4 text-white">
      <Link to="/" className="text-2xl font-bold">
        My Note App
      </Link>
      {/* Tempat untuk menu tambahan atau link */}
    </div>
  );
};

export default Navbar;
