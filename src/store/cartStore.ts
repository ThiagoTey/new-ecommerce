import { create } from 'zustand';
import { ProductType } from '@/types/ProductType';

interface CartState {
    cart: ProductType[];
    total: number;
    addToCart: (product: Omit<ProductType, 'quantity'>) => void;
    removeFromCart: (id: number) => void;
    clearCart: () => void;
    updateQuantity: (id: number, quantity: number) => void;
}

export const useCartStore = create<CartState>((set) => ({
    cart: [],
    total: 0,

    addToCart: (product) => set((state) => {
        const existingProduct = state.cart.find((item) => item.id === product.id);
        const updatedCart = existingProduct
            ? state.cart.map((item) => item.id === product.id ? { ...item, quantity: item.quantity + 1 } : item)
            : [...state.cart, { ...product, quantity: 1 }];

        const total = updatedCart.reduce((acc, item) => acc + item.price * item.quantity, 0);

        return { cart: updatedCart, total }
    }),

    removeFromCart: (id) => set((state) => {
        const updatedCart = state.cart.filter((item) => item.id !== id);
        const total = updatedCart.reduce((acc, item) => acc + item.price * item.quantity, 0);

        return { cart: updatedCart, total };
    }),

    updateQuantity: (id, quantity) => set((state) => {
        const updatedCart = state.cart.map((item) =>
            item.id === id ? { ...item, quantity: Math.max(1, quantity) } : item
        );
        const total = updatedCart.reduce((acc, item) => acc + item.price * item.quantity, 0);

        return { cart: updatedCart, total };
    }),

    clearCart: () => set({ cart: [], total: 0 }),

}));