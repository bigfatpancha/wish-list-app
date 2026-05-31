import React from 'react';

interface ImageModalProps {
  isOpen: boolean;
  onClose: () => void;
  imageUrl?: string;
  itemName?: string;
}

const ImageModal: React.FC<ImageModalProps> = ({ isOpen, onClose, imageUrl, itemName }) => {
  if (!isOpen || !imageUrl) return null;

  const handleBackdropClick = (e: React.MouseEvent) => {
    if (e.target === e.currentTarget) {
      onClose();
    }
  };

  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === 'Escape') {
      onClose();
    }
  };

  return (
    <div 
      className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-75 p-4"
      onClick={handleBackdropClick}
      onKeyDown={handleKeyDown}
      tabIndex={0}
      role="dialog"
      aria-modal="true"
      aria-labelledby="modal-title"
    >
      <div className="relative max-w-4xl max-h-full">
        {/* Close button */}
        <button
          onClick={onClose}
          className="absolute -top-10 right-0 text-white hover:text-gray-300 transition-colors"
          aria-label="Cerrar imagen"
        >
          <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
          </svg>
        </button>

        {/* Image container */}
        <div className="bg-white rounded-lg overflow-hidden">
          {itemName && (
            <div className="bg-gray-100 px-4 py-3 border-b">
              <h3 id="modal-title" className="text-lg font-medium text-gray-900 text-center">
                {itemName}
              </h3>
            </div>
          )}
          
          <div className="flex items-center justify-center p-4">
            <img
              src={imageUrl}
              alt={itemName || 'Imagen del regalo'}
              className="max-w-full max-h-[70vh] object-contain rounded-lg"
              loading="lazy"
            />
          </div>

          {/* Instructions */}
          <div className="bg-gray-50 px-4 py-3 border-t">
            <p className="text-center text-sm text-gray-600">
              Click fuera o presiona ESC para cerrar
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ImageModal;
