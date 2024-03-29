import React from "react";
import PropTypes from "prop-types";

const DeleteButton = ({ onClick }) => {
  return (
    <button onClick={onClick} className="fixed bottom-8 right-14 bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded-full">
      Hapus
    </button>
  );
};

DeleteButton.propTypes = {
  onClick: PropTypes.func.isRequired,
};

export default DeleteButton;
