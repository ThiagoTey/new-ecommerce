"use client"

import { useCartStore } from "@/store/cartStore"
import Image from "next/image"

const CartIcon = () => {
    const { cart } = useCartStore();

    let totalQuantity = 0;

    cart.forEach(item => {
        totalQuantity += item.quantity
    });

    return (
        <div className="cursor-pointer hover:bg-gray-200 p-2 rounded-full relative">
            <Image width={24} height={24} src={"/cart.svg"} alt="CartPicture" />
            <div className="absolute right-0 top-0 rounded-full bg-blue-400 w-4 h-4 items-center justify-center flex aspect-square text-white text-xs">
                {totalQuantity}
            </div>
        </div>
    )
}

export default CartIcon