import type { ModalProps } from "./Modal.types";

export const Modal: React.FC<ModalProps> = ({ isOpen, onClose, children }) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 flex items-center justify-center bg-black/30 z-50 animate-(--animate-fade-in)" onClick={onClose}>
      <div className="bg-white rounded-lg shadow-lg md:p-6 p-4 lg:w-1/3 sm:w-2/3 w-full relative z-50 dark:bg-gray-800 animate-(--animate-slide-down)" onClick={e => e.stopPropagation()}>
        <button onClick={onClose} className="absolute top-2 right-4 text-gray-600 hover:text-gray-800 cursor-pointer dark:text-gray-300 dark:hover:text-gray-100">
         &times;
        </button>
        {children}
      </div>
    </div>
  );
}
