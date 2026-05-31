import React from "react";
import { WishItem as WishItemType } from "../types";

interface WishItemProps {
  item: WishItemType;
  onToggle: (id: string, currentSelected: boolean) => void;
  onImageClick: (imageUrl: string, itemName: string) => void;
  isLoading?: boolean;
}

const WishItem: React.FC<WishItemProps> = ({
  item,
  onToggle,
  onImageClick,
  isLoading = false,
}) => {
  const handleImageClick = () => {
    if (item.link) {
      onImageClick(item.link, item.name);
    }
  };
  const handleToggle = () => {
    if (!isLoading) {
      onToggle(item.id, item.selected);
    }
  };

  return (
    <div
      className={`bg-white rounded-lg shadow-sm border-2 transition-all duration-300 ${
        item.selected
          ? "border-red-300 bg-red-50"
          : "border-gray-200 hover:border-gray-300 hover:shadow-md"
      }`}
    >
      <div className="p-4">
        <div className="flex items-center space-x-4">
          {/* Image */}
          <div className="flex-shrink-0">
            {item.link ? (
              <img
                src={item.link}
                alt={item.name}
                className="w-16 h-16 object-cover rounded-lg cursor-pointer hover:opacity-80 transition-opacity"
                loading="lazy"
                onClick={handleImageClick}
                title="Click para ver imagen más grande"
              />
            ) : (
              <div className="w-16 h-16 bg-gray-200 rounded-lg flex items-center justify-center">
                <span className="text-gray-400 text-2xl">🎁</span>
              </div>
            )}
          </div>

          {/* Content */}
          <div className="flex-1 min-w-0">
            <h3
              className={`text-lg font-medium ${
                item.selected ? "text-red-700" : "text-gray-900"
              }`}
            >
              {item.name}
            </h3>

            {/* Status */}
            <div className="mt-1">
              {item.selected ? (
                <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-red-100 text-red-800">
                  ✅ Seleccionado
                </span>
              ) : (
                <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-green-100 text-green-800">
                  ✨ Disponible
                </span>
              )}
            </div>
          </div>

          {/* Action Button */}
          <div className="flex-shrink-0">
            <button
              onClick={handleToggle}
              disabled={isLoading}
              className={`px-4 py-2 rounded-lg font-medium text-sm transition-all duration-200 ${
                item.selected
                  ? "bg-red-600 text-white hover:bg-red-700 disabled:bg-red-300"
                  : "bg-primary-600 text-white hover:bg-primary-700 disabled:bg-primary-300"
              } disabled:cursor-not-allowed transform active:scale-95`}
            >
              {isLoading ? (
                <span className="flex items-center">
                  <svg
                    className="animate-spin -ml-1 mr-2 h-4 w-4 text-white"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                  >
                    <circle
                      className="opacity-25"
                      cx="12"
                      cy="12"
                      r="10"
                      stroke="currentColor"
                      strokeWidth="4"
                    ></circle>
                    <path
                      className="opacity-75"
                      fill="currentColor"
                      d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                    ></path>
                  </svg>
                  Cargando...
                </span>
              ) : item.selected ? (
                "Liberar"
              ) : (
                "Lo compro"
              )}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default WishItem;
