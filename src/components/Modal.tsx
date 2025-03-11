import React from "react";

interface ModalProps {
  isOpen: boolean;
  onClose: () => void;
  onLeave: () => void;
  title?: string;
  children: React.ReactNode;
}

const Modal: React.FC<ModalProps> = ({
  isOpen,
  onClose,
  onLeave,
  title,
  children,
}) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50">
      <div className="bg-white p-12 rounded-2xl shadow-lg  max-w-lg w-full text-center py-20">
        {title && (
          <h2 className="text-2xl font-bold text-black mb-4">{title}</h2>
        )}
        <div className="mt-4 text-black text-lg">{children}</div>
        <div className="mt-8 flex justify-center gap-4">
          <button
            onClick={onLeave}
            className="px-8 py-2 text-white bg-primary rounded-full font-semibold hover:bg-primary w-40"
          >
            LEAVE
          </button>
          <button
            onClick={onClose}
            className="px-8 py-2 text-primary border border-primary rounded-full font-semibold hover:bg-pink-50 w-40"
          >
            CANCEL
          </button>
        </div>
      </div>
    </div>
  );
};

export default Modal;
