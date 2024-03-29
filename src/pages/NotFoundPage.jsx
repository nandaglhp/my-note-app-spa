// src/pages/NotFoundPage.jsx
import React from "react";
import { Link } from "react-router-dom";

const NotFoundPage = () => {
  return (
    <div className="text-center mt-20">
      <h1 className="text-6xl font-bold mb-4">404</h1>
      <p className="text-xl mb-8">Page Not Found</p>
      <Link to="/" className="text-blue-500 hover:text-blue-700">
        Back to Home
      </Link>
    </div>
  );
};

export default NotFoundPage;
