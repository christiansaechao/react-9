import { create } from "zustand";

export interface CartItem {
  id: string;
  name: string;
  price: number;
  quantity: number;
}

interface CartStore {
  items: CartItem[];
  addItem: (id: string, name: string, price: number) => void;
  removeItem: (id: string) => void;
  clearCart: () => void;
}

// Create a Zustand store
// Key advantages: No Provider component required, easy fine-grained subscriptions
export const useCartStore = create<CartStore>((set) => ({
  items: [],

  addItem: (id, name, price) =>
    set((state) => {
      const existingIndex = state.items.findIndex((item) => item.id === id);
      if (existingIndex > -1) {
        const updatedItems = [...state.items];
        updatedItems[existingIndex] = {
          ...updatedItems[existingIndex],
          quantity: updatedItems[existingIndex].quantity + 1,
        };
        return { items: updatedItems };
      }
      return { items: [...state.items, { id, name, price, quantity: 1 }] };
    }),

  removeItem: (id) =>
    set((state) => ({
      items: state.items.filter((item) => item.id !== id),
    })),

  clearCart: () => set({ items: [] }),
}));
