import Image from "next/image";
import React from "react";
import QuantitySelector from "../ui/QuantitySelector";

const CartProduct = () => {
  return (
    <div className="flex gap-4">
      {/* Imagem Produto */}
      <Image
        alt="Product"
        src={"/casual.png"}
        width={100}
        height={100}
        className="rounded-xl"
      />
      <div className="flex justify-between w-full py-2">
        {/* Descrições */}
        <div className="flex flex-col justify-between h-full ">
          <div className="flex flex-col gap-1">
            <p className="text-xl font-semibold">Gradient Graphic T-Shit</p>
            <span className="flex gap-1">
              <p>Tamanho:</p>
              <p className="text-gray-500">Grande</p>
            </span>
            <span className="flex gap-1">
              <p>Cor : </p>
              <p className="text-gray-500">Branco</p>
            </span>
          </div>
          <p className="text-xl font-semibold">R$ 225,49</p>
        </div>

        {/* Opções Adicionar e remover*/}
        <div className="flex flex-col items-center">
          <span className="text-sm text-gray-600">Quantidade</span>
          <QuantitySelector />
          <button className="text-red-500 text-sm underline cursor-pointer">
            Remover
          </button>
        </div>

        {/* Valor Total*/}
        <div>
          <span className="text-sm text-gray-600">Valor Total</span>
          <p className="text-xl font-semibold">R$ 400,49</p>
        </div>
      </div>
    </div>
  );
};

export default CartProduct;
