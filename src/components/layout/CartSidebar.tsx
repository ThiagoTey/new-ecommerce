"use client"

import SplitBar from "../ui/SplitBar"
import { useCartStore } from "@/store/cartStore"
import { useCartSideBarStore } from "@/store/cartSideBarSote"
import Image from "next/image"
import QuantitySelector from "../ui/QuantitySelector"
import Link from "next/link"

const CartSidebar = () => {

    const { isOpening, setIsOpening } = useCartSideBarStore();

    const { cart, removeFromCart } = useCartStore();

    return (
        // Container
        <div className={`z-10 w-full h-full fixed ${isOpening ? "block" : "hidden"}`}>
            <div onClick={() => setIsOpening(false)} className="w-full h-full bg-black/25" />
            {/* SideBar */}
            <div className="absolute right-0 top-0 h-full w-[500px] bg-white p-8 gap-4 flex flex-col">
                <div className="flex justify-between">
                    <span className="font-medium text-xl">Seu carrinho</span>
                    <button className="cursor-pointer" onClick={() => setIsOpening(false)}>X</button>
                </div>
                <SplitBar />
                <div className="flex flex-col gap-8">
                    {cart.map((product) => (
                        <div key={product.id} className="flex gap-4 text-sm font-light">
                            <div className="flex-1/6">
                                <Link href={`/product/${product.id}`}>
                                    <Image alt={product.title} src={product.image} width={80} height={80} objectFit="contain" />
                                </Link>
                            </div>
                            <div className="flex-3/6 flex flex-col gap-2">
                                <Link href={`/product/${product.id}`}>
                                    <span>{product.title}</span>
                                </Link>
                                <span className="text-neutral-500">Preto/G</span>
                                <span className="flex gap-2">
                                    <QuantitySelector small />
                                    <button onClick={() => removeFromCart(product.id)} className="cursor-pointer underline">Remover</button>
                                </span>
                            </div>
                            <span className="flex-1/6 right-0 font-normal">R$ {product.price}</span>
                        </div>
                    ))}
                </div>
            </div>


        </div>
    )
}

export default CartSidebar