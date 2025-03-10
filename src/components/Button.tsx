import React from "react";

const CustomButton = ({ onClick }) => {
  return (
    <button
      className="w-1/4 max-w-xs bg-primary text-white font-medium py-3 px-4 rounded-full shadow-lg transition hover:bg-primary text-xs tracking-wider"
      onClick={onClick}
    >
      VIEW ALL
    </button>
  );
};

export default CustomButton;
