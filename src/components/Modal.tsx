"use client";
import React from "react";

interface ModalProps {
  isOpen: boolean;
  onClose: () => void;
  login: () => void;
}

const AuthModal: React.FC<ModalProps> = ({ isOpen, onClose, login }) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-80">
      <div className="bg-white p-12 rounded-2xl shadow-lg max-w-sm w-full text-center relative">
        <button
          onClick={onClose}
          className="absolute top-4 right-4 text-black  hover:text-black text-lg"
        >
          &#10005;
        </button>
        <h2 className="text-lg font-bold text-black mt-4">
          Please log in to get started.
        </h2>
        <button
          className="w-full text-sm  mt-6 bg-primary text-white font-bold py-4 rounded-full shadow-md hover:bg-primary"
          onClick={login}
        >
          LOGIN
        </button>
        <p className="mt-10 text-lg text-black font-semibold ">
          Don't have an account?
        </p>
        <button className="w-full mt-4 border border-primary text-primary font-bold py-4 text-sm rounded-full shadow-md hover:bg-pink-100">
          SIGNUP
        </button>
      </div>
    </div>
  );
};

export default AuthModal;
