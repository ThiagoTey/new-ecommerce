import Filter from "@/components/filter/Filter";
import Container from "@/components/layout/Container";
import React from "react";



const Products = () => {
  return (
    <main>
      <Container className="flex gap-4 mt-16">
        <Filter />
        <div className="border flex-3/4"></div>
      </Container>
    </main>
  );
};

export default Products;
