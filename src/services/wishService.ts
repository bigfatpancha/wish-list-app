import {
  collection,
  doc,
  getDocs,
  onSnapshot,
  updateDoc,
} from "firebase/firestore";
import { db } from "../firebase/config";
import { ApiResponse, WishItem } from "../types";

const WISH_LIST_COLLECTION = "wishList";

export const wishService = {
  // Get all items from Firestore
  async getItems(): Promise<ApiResponse<WishItem[]>> {
    try {
      const querySnapshot = await getDocs(collection(db, WISH_LIST_COLLECTION));
      const items: WishItem[] = querySnapshot.docs.map((doc) => {
        const data = doc.data();
        return {
          id: doc.id,
          name: data.name || "",
          link: data.link || "",
          selected: data.selected || false,
        };
      });

      return { data: items, success: true };
    } catch (error) {
      console.error("Error fetching items:", error);
      return {
        data: [],
        success: false,
        error: "Error al cargar los regalos",
      };
    }
  },

  async toggleItem(
    id: string,
    currentSelected: boolean,
  ): Promise<ApiResponse<boolean>> {
    try {
      const docRef = doc(db, WISH_LIST_COLLECTION, id);
      await updateDoc(docRef, { selected: !currentSelected });

      return { data: !currentSelected, success: true };
    } catch (error) {
      console.error("Error toggling item:", error);
      return {
        data: currentSelected,
        success: false,
        error: "Error al actualizar el regalo",
      };
    }
  },

  subscribeToUpdates(callback: (items: WishItem[]) => void) {
    const unsubscribe = onSnapshot(
      collection(db, WISH_LIST_COLLECTION),
      (querySnapshot) => {
        const items: WishItem[] = querySnapshot.docs.map((doc) => {
          const data = doc.data();
          return {
            id: doc.id,
            name: data.name || "",
            link: data.link || "",
            selected: data.selected || false,
          };
        });
        callback(items);
      },
    );

    return unsubscribe;
  },
};
