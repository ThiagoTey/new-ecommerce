"use client"

import SplitBar from "../ui/SplitBar"
import { useCartStore } from "@/store/cartStore"
import { useCartSideBarStore } from "@/store/cartSideBarSote"

const CartSidebar = () => {

    const {isOpening, setIsOpening} = useCartSideBarStore();

    const { cart } = useCartStore();

    return (
        // Container
        <div className={`z-10 w-full h-full fixed ${isOpening ? "block" : "hidden"}`}>
            <div className="w-full h-full bg-black/25" />
            {/* SideBar */}
            <div className="absolute right-0 top-0 h-full w-[500px] bg-white p-8 gap-4 flex flex-col">
                <div className="flex justify-between">
                    <span className="font-medium text-xl">Seu carrinho</span>
                    <button onClick={() => setIsOpening(false)}>X</button>
                </div>
                <SplitBar />

                {cart.map((product) => (
                    <div key={product.id}>
                        Teste
                    </div>
                ))}
            </div>


        </div>
    )
}

export default CartSidebar