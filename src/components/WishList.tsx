import React, { useState, useEffect } from "react";
import { WishItem } from "../types";
import { wishService } from "../services/wishService";
import WishItemComponent from "./WishItem";
import SkeletonLoader from "./SkeletonLoader";

const WishList: React.FC = () => {
  const [items, setItems] = useState<WishItem[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [updatingItems, setUpdatingItems] = useState<Set<string>>(new Set());

  useEffect(() => {
    loadItems();
  }, []);

  const loadItems = async () => {
    try {
      setLoading(true);
      setError(null);
      const response = await wishService.getItems();

      if (response.success) {
        setItems(response.data);
      } else {
        setError(response.error || "Error al cargar los regalos");
      }
    } catch (err) {
      setError("Error de conexión. Por favor, intenta de nuevo.");
    } finally {
      setLoading(false);
    }
  };

  const handleToggleItem = async (id: string, currentSelected: boolean) => {
    // Optimistic UI update
    const previousItems = [...items];
    setItems((prevItems) =>
      prevItems.map((item) =>
        item.id === id ? { ...item, selected: !currentSelected } : item,
      ),
    );

    // Add to updating set
    setUpdatingItems((prev) => new Set(prev).add(id));

    try {
      const response = await wishService.toggleItem(id, currentSelected);

      if (!response.success) {
        // Revert on error
        setItems(previousItems);
        setError(response.error || "Error al actualizar el regalo");
      } else {
        setError(null);
      }
    } catch (err) {
      // Revert on error
      setItems(previousItems);
      setError("Error de conexión. Por favor, intenta de nuevo.");
    } finally {
      // Remove from updating set
      setUpdatingItems((prev) => {
        const newSet = new Set(prev);
        newSet.delete(id);
        return newSet;
      });
    }
  };

  const availableItems = items.filter((item) => !item.selected);
  const selectedItems = items.filter((item) => item.selected);

  if (loading) {
    return (
      <div className="space-y-4">
        <SkeletonLoader />
        <SkeletonLoader />
        <SkeletonLoader />
        <SkeletonLoader />
      </div>
    );
  }

  if (error) {
    return (
      <div className="bg-red-50 border border-red-200 rounded-lg p-6 text-center">
        <div className="text-red-600 text-lg font-medium mb-2">❌ {error}</div>
        <button
          onClick={loadItems}
          className="mt-4 px-4 py-2 bg-red-600 text-white rounded-lg hover:bg-red-700 transition-colors"
        >
          Reintentar
        </button>
      </div>
    );
  }

  return (
    <div className="space-y-8">
      {/* Statistics */}
      <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-6">
        <div className="grid grid-cols-2 gap-4 text-center">
          <div>
            <div className="text-2xl font-bold text-green-600">
              {availableItems.length}
            </div>
            <div className="text-sm text-gray-600">Disponibles</div>
          </div>
          <div>
            <div className="text-2xl font-bold text-red-600">
              {selectedItems.length}
            </div>
            <div className="text-sm text-gray-600">Seleccionados</div>
          </div>
        </div>
      </div>

      {/* Available Items */}
      {availableItems.length > 0 && (
        <div>
          <h2 className="text-xl font-semibold text-gray-900 mb-4 flex items-center">
            <span className="mr-2">✨</span> Regalos Disponibles
          </h2>
          <div className="space-y-3">
            {availableItems.map((item) => (
              <WishItemComponent
                key={item.id}
                item={item}
                onToggle={handleToggleItem}
                isLoading={updatingItems.has(item.id)}
              />
            ))}
          </div>
        </div>
      )}

      {/* Selected Items */}
      {selectedItems.length > 0 && (
        <div>
          <h2 className="text-xl font-semibold text-gray-900 mb-4 flex items-center">
            <span className="mr-2">✅</span> Regalos Seleccionados
          </h2>
          <div className="space-y-3">
            {selectedItems.map((item) => (
              <WishItemComponent
                key={item.id}
                item={item}
                onToggle={handleToggleItem}
                isLoading={updatingItems.has(item.id)}
              />
            ))}
          </div>
        </div>
      )}

      {/* Empty State */}
      {items.length === 0 && (
        <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-12 text-center">
          <div className="text-gray-400 text-6xl mb-4">🎁</div>
          <h3 className="text-lg font-medium text-gray-900 mb-2">
            No hay regalos disponibles
          </h3>
          <p className="text-gray-600">
            Por favor, intenta recargar la página.
          </p>
        </div>
      )}
    </div>
  );
};

export default WishList;
