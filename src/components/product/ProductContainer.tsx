import React from "react";
import Container from "../layout/Container";
import ProductCard from "./ProductCard";
import { ProductType } from "@/types/ProductType";
import Button from "../ui/Button";

type ProductContainerProps = {
  title: string;
};

async function getProducts() {
  const res = await fetch("https://fakestoreapi.com/products");

  if (!res.ok) {
    throw new Error("Failed to fetch data");
  }

  return res.json();
}

const ProductContainer = async ({ title }: ProductContainerProps) => {
  const products = await getProducts();


  return (
    <section className="mt-16">
      <Container>
        <h3 className="text-5xl w-fit font-extrabold m-auto">{title}</h3>

        <div className="flex gap-5 justify-between mt-8">
          {products.slice(0,4).map((product: ProductType) => (
            <ProductCard product={product} key={product.id}/>
          ))}
        </div>

        <div className="m-auto w-fit mt-8">
          <Button border size="xl">Ver Mais</Button>
        </div>

        <div className="w-full bg-gray-200 h-0.5 mt-16"/>
      </Container>
    </section>
  );
};

export default ProductContainer;
