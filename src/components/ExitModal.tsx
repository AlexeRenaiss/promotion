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
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50">
      <div className="bg-white rounded-xl shadow-lg max-w-md w-full mx-4">
        <div className="p-8 text-center">
          <h2 className="text-2xl font-bold text-black mb-3">Leave site?</h2>
          <p className="text-gray-700 mb-6">
            Changes you made may not be saved.
          </p>

          {/* Responsive button layout: vertical on mobile, horizontal on desktop */}
          <div className="flex flex-col md:flex-row md:space-x-4 space-y-4 md:space-y-0">
            <button
              className="w-full bg-primary text-sm text-white font-bold py-3 px-6 rounded-full"
              onClick={onLeave}
            >
              LEAVE
            </button>

            <button
              className="w-full border text-sm border-gray-300 text-gray-500 font-bold py-3 px-6 rounded-full"
              onClick={onClose}
            >
              CANCEL
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ExitModal;
