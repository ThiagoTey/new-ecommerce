import { create } from 'zustand';
import { persist, createJSONStorage } from 'zustand/middleware';


import { ProductType } from '@/types/ProductType';

interface CartState {
    cart: ProductType[];
    total: number;
    addToCart: (product: ProductType) => void;
    removeFromCart: (id: number) => void;
    clearCart: () => void;
    updateQuantity: (id: number, quantity: number) => void;
}

export const useCartStore = create<CartState>()(persist(
    (set, get) => ({
        cart: [],
        total: 0,

        addToCart: (product) => {
            const existingProduct = get().cart.find((item) => item.id === product.id);
            let newTotal = get().total;
            if (existingProduct) {
                newTotal = product.price * product.quantity;
                set({
                    
                    cart: get().cart.map((item) =>
                        item.id === product.id ? { ...item, quantity: item.quantity + product.quantity } : item
                    ),
                    total: newTotal
                });
            } else {
                newTotal = product.price * product.quantity;
                set({
                    cart: [...get().cart, product],
                    total: newTotal
                });
            }
        },

        removeFromCart: (id) => {
            const productToRemove = get().cart.find((item) => item.id === id);
            let newTotal = get().total;
            if(productToRemove) {
                newTotal -= productToRemove.price * productToRemove?.quantity;
            }
            set({
                cart: get().cart.filter((item) => item.id !== id),
                total: newTotal
            });
        },

        updateQuantity: (id, quantity) => {
            const existingProduct = get().cart.find((item) => item.id === id);
            if (existingProduct) {
                const quantityDifference = Math.max(1, quantity) - existingProduct.quantity;
                const newTotal = get().total + (existingProduct.price * quantityDifference);
                set({
                    cart: get().cart.map((item) =>
                        item.id === id ? { ...item, quantity: Math.max(1, quantity) } : item
                    ),
                    total: newTotal
                });
            }
        },

        clearCart: () => set({ cart: [], total: 0 }),

    }),
    {
        name: 'cart-storage', // Nome para o localStorage
        storage: createJSONStorage(() => localStorage), // Persiste no localStorage
    }
))

// export const useCartStore = create<CartState>((set) => ({
//     cart: [],
//     total: 0,

//     addToCart: (product) => set((state) => {
//         const existingProduct = state.cart.find((item) => item.id === product.id);
//         const updatedCart = existingProduct
//             ? state.cart.map((item) => item.id === product.id ? { ...item, quantity: item.quantity + 1 } : item)
//             : [...state.cart, { ...product, quantity: 1 }];

//         const total = updatedCart.reduce((acc, item) => acc + item.price * item.quantity, 0);

//         return { cart: updatedCart, total }
//     }),

//     removeFromCart: (id) => set((state) => {
//         const updatedCart = state.cart.filter((item) => item.id !== id);
//         const total = updatedCart.reduce((acc, item) => acc + item.price * item.quantity, 0);

//         return { cart: updatedCart, total };
//     }),

//     updateQuantity: (id, quantity) => set((state) => {
//         const updatedCart = state.cart.map((item) =>
//             item.id === id ? { ...item, quantity: Math.max(1, quantity) } : item
//         );
//         const total = updatedCart.reduce((acc, item) => acc + item.price * item.quantity, 0);

//         return { cart: updatedCart, total };
//     }),

//     clearCart: () => set({ cart: [], total: 0 }),

// }));