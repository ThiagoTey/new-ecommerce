import { ProductType } from "@/types/ProductType";
import React from "react";
import Title from "../typography/Title";
import ColorSelector from "../ui/ColorSelector";
import Selector from "../ui/Selector";

type ProductDetailsProps = {
  product: ProductType;
};

const ProductDetails = ({ product }: ProductDetailsProps) => {
  return <div className="flex flex-1/2 flex-col gap-3">
    <Title as="h1" size="xl">{product.title}</Title>
    <span className="text-3xl font-medium">R$ {product.price}</span>
    <p>{product.description}</p>

    <div className="w-full bg-gray-200 h-0.5"/>

    <ColorSelector />

    <div className="w-full bg-gray-200 h-0.5"/>
    
    <Selector title="Tamanho"/>
  </div>;
};

export default ProductDetails;
