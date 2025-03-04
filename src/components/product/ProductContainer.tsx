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
        <h3 className="text-4xl w-fit font-bold m-auto">{title}</h3>

        <div className="flex gap-5 justify-between mt-8">
          {products.slice(0,4).map((product: ProductType) => (
            <ProductCard product={product} key={product.id}/>
          ))}
        </div>

        <div className="m-auto w-fit mt-8">
          <Button>Ver Mais</Button>
        </div>
      </Container>
    </section>
  );
};

export default ProductContainer;
