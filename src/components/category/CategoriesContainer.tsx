import React from "react";
import Container from "../layout/Container";
import Category from "./Category";

const mock = [
  { link: "/", title: "Casual", backgroundLink: "/" },
  { link: "/", title: "Formal", backgroundLink: "/" },
];

const CategoriesContainer = () => {
  return (
    <section className="mt-16">
      <Container className="bg-amber-50 rounded-3xl">
        <h3>Procure Estilos</h3>
        <div className="flex">
            {mock.map((category, index) => (
            <div className={`h-[300px] ${index%2 == 0 ? 'w-[500px]' : 'w-[700px]'}`} key={category.title}>
                <Category
                link={category.link}
                backgroundLink={category.backgroundLink}
                title={category.title}
                />
            </div>
            ))}
        </div>
      </Container>
    </section>
  );
};

export default CategoriesContainer;
