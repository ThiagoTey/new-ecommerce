import Filter from "@/components/filter/Filter";
import Container from "@/components/layout/Container";
import Pagination from "@/components/layout/Pagination";
import ProductCard from "@/components/product/ProductCard";
import { ProductType } from "@/types/ProductType";
import React from "react";

async function getProducts() {
  const res = await fetch("https://fakestoreapi.com/products");

  if (!res.ok) {
    throw new Error("Failed to fetch data");
  }

  return res.json();
}

const Products = async () => {
  const products = await getProducts();

  return (
    <main>
      <Container className="flex gap-4 mt-16">
        <Filter />
        <div className="flex-3/4">
        <div className="px-10 flex justify-between">
         <p className="font-semibold text-2xl">Casual</p>
         <p>16 Produtos</p>
        </div>
          <div className="flex gap-y-4 flex-wrap justify-around mt-8">
            {products.slice(0,9).map((product: ProductType) => (
              <ProductCard small product={product} key={product.id} />
            ))}
          </div>
          <Pagination />
        </div>
      </Container>
    </main>
  );
};

export default Products;
