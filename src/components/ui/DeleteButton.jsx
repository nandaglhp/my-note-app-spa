// src/components/ui/DeleteButton.jsx

import React from "react";

const DeleteButton = ({ onClick }) => {
  return (
    <button onClick={onClick} className="fixed bottom-8 right-8 bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded-full">
      Hapus
    </button>
  );
};

export default DeleteButton;
