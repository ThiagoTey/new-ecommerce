"use client"

import { useCartSideBarStore } from "@/store/cartSideBarSote";
import { useCartStore } from "@/store/cartStore"
import Image from "next/image"
import { useEffect, useMemo } from "react";

const CartIcon = () => {
    const { cart, clearCart } = useCartStore();
    const { setIsOpening } = useCartSideBarStore();

    // Usando useMemo para memorizar a soma da quantidade de itens
    const totalQuantity = useMemo(() => {
        return cart.reduce((total, item) => total + item.quantity, 0);
    }, [cart]);

    // useEffect(() => {
    //     clearCart();
    // },[])

    return (
        <button className="cursor-pointer hover:bg-gray-200 p-2 rounded-full relative" onClick={() => setIsOpening(true)}>
            <Image width={24} height={24} src={"/cart.svg"} alt="CartPicture" />
            <div className="absolute right-0 top-0 rounded-full bg-blue-400 w-4 h-4 items-center justify-center flex aspect-square text-white text-xs">
                {totalQuantity}
            </div>
        </button>
    )
}

export default CartIcon