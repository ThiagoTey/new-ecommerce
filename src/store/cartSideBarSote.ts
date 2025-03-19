import { create } from 'zustand';

interface CartState {
    isOpening: boolean;
    setOpening: () => void;
}

export const useCartSideBarStore = create<CartState>((set) => ({
    isOpening: false,

    setOpening : () => set({isOpening : true})
}));