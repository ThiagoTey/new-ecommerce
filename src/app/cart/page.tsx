import CartSummary from "@/components/cart/CartSummary";
import ProductGrid from "@/components/cart/ProductGrid";
import Container from "@/components/layout/Container";
import Title from "@/components/typography/Title";
import React from "react";

const Cart = () => {
  return (
    <main>
      <Container className="mt-16">
        <Title size="2xl">Carrinho</Title>
      </Container>
      <Container className="flex justify-between gap-8 mt-8">
        <ProductGrid />
        <CartSummary />
      </Container>
    </main>
  );
};

export default Cart;
