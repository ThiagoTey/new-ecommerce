import React from "react";
import Container from "../layout/Container";

type ProductContainerProps = {
  title: string;
};

const ProductContainer = ({ title }: ProductContainerProps) => {
  return (
    <section>
      <Container>
        <h3>{title}</h3>
      </Container>
    </section>
  );
};

export default ProductContainer;
