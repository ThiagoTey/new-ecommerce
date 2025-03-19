"use client"

import { ProductType } from "@/types/ProductType";
import React from "react";
import Title from "../typography/Title";
import ColorSelector from "../ui/ColorSelector";
import Selector from "../ui/Selector";
import QuantitySelector from "../ui/QuantitySelector";
import Button from "../ui/Button";
import SplitBar from "../ui/SplitBar";
import { useCartStore } from "@/store/cartStore";

type ProductDetailsProps = {
  product: ProductType;
};

const ProductDetails = ({ product }: ProductDetailsProps) => {

  const { addToCart } = useCartStore();

  return (
    <div className="flex flex-1/2 flex-col gap-3">
      <Title as="h1" size="xl">
        {product.title}
      </Title>
      <span className="text-3xl font-medium">R$ {product.price}</span>
      <p>{product.description}</p>

      <SplitBar />
      <ColorSelector />
      <SplitBar />
      <Selector title="Tamanho" />
      <SplitBar />

      <div className="flex w-full gap-2">
        <QuantitySelector />
        <Button black className="w-full" onClick={() => addToCart(product)}>
          Comprar
        </Button>
      </div>
    </div>
  );
};

export default ProductDetails;
