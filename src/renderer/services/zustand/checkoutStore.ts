import create from 'zustand';

export interface CartType {
  id: number;
  title: string;
  price: number;
  url: string;
  alt?: string;
}

interface CheckoutState {
  cart: CartType[];
  setCart: (cart: CartType[]) => void;
  addToCart: (product: CartType) => void;
  removeFromCart: (id: number) => void;
  clearCart: () => void;
  totalPrice: number;
}

export const useCheckoutStore = create<CheckoutState>((set) => ({
  totalPrice: 0,
  cart: [],
  setCart: (cart: CartType[]) => set((state) => ({ cart })),
  addToCart: (product: CartType) =>
    set((state) => {
      const itemIndex = state.cart.findIndex((item) => item.id === product.id);

      if (itemIndex === -1) {
        const newCart = [...state.cart, product];
        const totalPrice = newCart.reduce(
          (total, item) => total + item.price,
          0,
        );
        return { ...state, cart: newCart, totalPrice };
      }
      return state;
    }),
  removeFromCart: (id: number) =>
    set((state) => {
      const itemIndex = state.cart.findIndex((item) => item.id === id);

      if (itemIndex !== -1) {
        const newCart = [...state.cart];
        newCart.splice(itemIndex, 1);
        const totalPrice = newCart.reduce(
          (total, item) => total + item.price,
          0,
        );
        return { ...state, cart: newCart, totalPrice };
      }
      return state;
    }),
  clearCart: () =>
    set((state) => ({
      cart: [],
      totalPrice: 0,
    })),
}));
