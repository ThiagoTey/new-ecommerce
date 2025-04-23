"use client";

import { ProductType } from "@/types/ProductType";
import React, { useRef } from "react";
import Container from "../layout/Container";
import Title from "../typography/Title";
import Button from "../ui/Button";
import ProductCard from "./ProductCard";

type Props = {
  title: string;
  showMoreButton?: boolean;
  products: ProductType[];
};

const ProductSlider = ({ products, title, showMoreButton }: Props) => {
  const sliderRef = useRef<HTMLDivElement>(null);

  const handleNext = () => {
    if (sliderRef.current) {
      const scrollAmount = sliderRef.current.clientWidth;
      sliderRef.current.scrollBy({ left: scrollAmount, behavior: "smooth" });
    }
  };

  const handlePrev = () => {
    if (sliderRef.current) {
      const scrollAmount = sliderRef.current.clientWidth;
      sliderRef.current.scrollBy({ left: -scrollAmount, behavior: "smooth" });
    }
  };

  return (
    <section className="mt-16">
      <Container>
        <Title as="h3" size="2xl" className="w-fit m-auto">
          {title}
        </Title>
        {/* Conteúdo do slider */}
        <div className="relative">
          <button
            onClick={handlePrev}
            className="hidden md:block absolute left-0 top-1/2 -translate-y-1/2 z-10 bg-gray-200 p-2 rounded-full shadow-lg hover:bg-gray-300 transition"
          >
            ◀
          </button>
          {/* Slider */}
          <div
            ref={sliderRef}
            className={`flex overflow-x-scroll scroll-smooth no-scrollbar space-x-4 lg:gap-5 mt-8 p-4`}
          >
            {products.map((product: ProductType) => (
              <div
                key={product.id}
                className="flex-shrink-0 w-1/2 sm:w-1/2 md:w-1/3 lg:w-[23%]"
              >
                <ProductCard product={product} />
              </div>
            ))}
          </div>
          <button
            onClick={handleNext}
            className="hidden md:block absolute right-0 top-1/2 -translate-y-1/2 z-10 bg-gray-200 p-2 rounded-full shadow-lg hover:bg-gray-300 transition"
          >
            ▶
          </button>
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

export default ProductSlider;
