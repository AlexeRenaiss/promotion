"use client";

import React from "react";

interface ExitModalProps {
  isOpen: boolean;
  onClose: () => void;
  onLeave: () => void;
}

const ExitModal: React.FC<ExitModalProps> = ({ isOpen, onClose, onLeave }) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-80">
      <div className="bg-white p-6 md:p-16 rounded-lg shadow-lg max-w-md w-full text-center">
        <h2 className="text-lg md:text-xl font-semibold text-black">
          Leave site?
        </h2>
        <p className="text-black mt-2 text-sm">
          Changes you made may not be saved.
        </p>

        <div className="flex justify-center gap-4 mt-6">
          <button
            className="w-full mt-4 border border-primary bg-primary text-white font-bold py-2 rounded-full shadow-md "
            onClick={onLeave}
          >
            LEAVE
          </button>

          <button
            className="w-full mt-4 border border-primary text-primary font-bold py-2 rounded-full shadow-md "
            onClick={onLeave}
          >
            CANCEL
          </button>
        </div>
      </div>
    </div>
  );
};

export default ExitModal;
