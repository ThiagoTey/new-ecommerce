import React from "react";
import Container from "../layout/Container";
import ProductCard from "./ProductCard";
import { ProductType } from "@/types/ProductType";
import Button from "../ui/Button";
import Title from "../typography/Title";

type ProductContainerProps = {
  title: string;
  showMoreButton?: boolean;
  products: ProductType[];
};



const ProductContainer = ({
  title,
  showMoreButton = true,
  products
}: ProductContainerProps) => {

  return (
    <section className="mt-16">
      <Container>
        <Title as="h3" size="2xl" className="w-fit m-auto">
          {title}
        </Title>

        <div
          className={`grid grid-cols-2 gap-4 lg:grid-cols-4 lg:gap-5 lg:gap-y-12 justify-between mt-8 w-full h-full`}
        >
          {products.map((product: ProductType) => (
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
