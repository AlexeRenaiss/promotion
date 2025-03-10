import React from "react";

const CustomButton = ({ onClick }) => {
  return (
    <button
      className="w-full md:w-2/6 max-w-xs  bg-primary text-white font-bold py-4 px-4 rounded-full shadow-lg transition hover:bg-primary text-xs tracking-wider"
      onClick={onClick}
    >
      VIEW ALL
    </button>
  );
};

export default CustomButton;
