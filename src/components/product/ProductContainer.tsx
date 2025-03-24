import React from "react";
import Container from "../layout/Container";
import ProductCard from "./ProductCard";
import { ProductType } from "@/types/ProductType";
import Button from "../ui/Button";
import Title from "../typography/Title";

type ProductContainerProps = {
  title: string;
  showMoreButton?: boolean;
};

async function getProducts() {
  const res = await fetch("https://fakestoreapi.com/products");

  if (!res.ok) {
    throw new Error("Failed to fetch data");
  }

  return res.json();
}

const ProductContainer = async ({
  title,
  showMoreButton = true,
}: ProductContainerProps) => {
  const products = await getProducts();

  return (
    <section className="mt-16">
      <Container>
        <Title as="h3" size="2xl" className="w-fit m-auto">
          {title}
        </Title>

        <div className="md:flex md:gap-5 justify-between mt-8">
          {products.slice(0, 4).map((product: ProductType) => (
            <ProductCard product={product} key={product.id} />
          ))}
        </div>

        {showMoreButton && (
          <div className="m-auto w-fit mt-8">
            <Button border size="xl">
              Ver Mais
            </Button>
          </div>
        )}

        <div className="w-full bg-gray-200 h-0.5 mt-16" />
      </Container>
    </section>
  );
};

export default ProductContainer;
