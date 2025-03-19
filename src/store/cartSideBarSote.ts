import { create } from 'zustand';

interface CartState {
    isOpening: boolean;
    setIsOpening: (value : boolean) => void;
}

export const useCartSideBarStore = create<CartState>((set) => ({
    isOpening: false,

    setIsOpening : (value) => set({isOpening : value})
}));