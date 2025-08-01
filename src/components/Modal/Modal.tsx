import type { ModalProps } from "./Modal.types";

export const Modal: React.FC<ModalProps> = ({ isOpen, onClose, children }) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 flex items-center justify-center bg-black/30" onClick={onClose}>
      <div className="bg-white rounded-lg shadow-lg p-6 w-1/3 relative" onClick={e => e.stopPropagation()}>
        <button onClick={onClose} className="absolute top-2 right-4 text-gray-600 hover:text-gray-800 cursor-pointer">
         &times;
        </button>
        {children}
      </div>
    </div>
  );
}
