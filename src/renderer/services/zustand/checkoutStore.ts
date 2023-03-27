import create from 'zustand';

export interface CartType {
  id: number;
  name: string;
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
}

export const useCheckoutStore = create<CheckoutState>((set) => ({
  cart: [],
  setCart: (cart: any[]) => set((state) => ({ cart })),
  addToCart: (product: any) =>
    set((state) => {
      const itemIndex = state.cart.findIndex((item) => item.id === product.id);

      if (itemIndex === -1) {
        return { ...state, cart: [...state.cart, product] };
      }
      return state;
    }),
  removeFromCart: (product: any) =>
    set((state) => ({
      cart: state.cart.filter((item) => item.id !== product.id),
    })),
  clearCart: () =>
    set((state) => ({
      cart: [],
    })),
}));
