"use client"

import SplitBar from "../ui/SplitBar"
import { useCartStore } from "@/store/cartStore"
import { useCartSideBarStore } from "@/store/cartSideBarSote"
import Image from "next/image"
import QuantitySelector from "../ui/QuantitySelector"
import Link from "next/link"
import Button from "../ui/Button"

const CartSidebar = () => {

    const { isOpening, setIsOpening } = useCartSideBarStore();

    const { cart, removeFromCart } = useCartStore();

    return (
        // Container
        <div className={`z-10 w-full h-full fixed ${isOpening ? "visible" : "invisible"}`}>
            <div onClick={() => setIsOpening(false)} className={`w-full h-full ${isOpening ? "bg-black/25" : ""} transition-all`} />
            {/* SideBar */}
            <div className={`absolute transition-all h-full w-[500px] bg-white p-8 gap-4 flex top-0 flex-col ${isOpening ? "right-0" : "-right-[500px]"}`}>
                <div className="flex justify-between">
                    <span className="font-medium text-xl">Seu carrinho</span>
                    <button className="cursor-pointer" onClick={() => setIsOpening(false)}>X</button>
                </div>
                <SplitBar />
                {/* Produtos */}
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
                {/* Botao de finalziar compra */}
                <Link className="mt-auto w-full" href={"/cart"}>
                    <Button className="w-full" black>Finalizar Compra</Button>
                </Link>
            </div>
        </div>
    )
}

export default CartSidebar