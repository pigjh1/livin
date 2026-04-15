import { create } from "zustand";

type Product = {
  id: number;
  name: string;
  price: number;
  image: string;
  category: string;
  description: string;
};

type CartItem = Product & {
  quantity: number;
};

type CartStore = {
  items: CartItem[];

  addItem: (product: Product) => void;
  removeItem: (id: number) => void;
  updateQuantity: (id: number, quantity: number) => void;
  clearCart: () => void;

  getTotalPrice: () => number;
  getTotalCount: () => number;
};

const useCartStore = create<CartStore>((set, get) => ({
  items: [],

  addItem: (product) => {
    const existing = get().items.find((item) => item.id === product.id);

    if (existing) {
      set({
        items: get().items.map((item) =>
          item.id === product.id
            ? { ...item, quantity: item.quantity + 1 }
            : item,
        ),
      });
    } else {
      set({
        items: [...get().items, { ...product, quantity: 1 }],
      });
    }
  },

  removeItem: (id) => {
    set({
      items: get().items.filter((item) => item.id !== id),
    });
  },

  updateQuantity: (id, quantity) => {
    if (quantity < 1) return;

    set({
      items: get().items.map((item) =>
        item.id === id ? { ...item, quantity } : item,
      ),
    });
  },

  clearCart: () => set({ items: [] }),

  getTotalPrice: () => {
    return get().items.reduce(
      (total, item) => total + item.price * item.quantity,
      0,
    );
  },

  getTotalCount: () => {
    return get().items.reduce((total, item) => total + item.quantity, 0);
  },
}));

export default useCartStore;
