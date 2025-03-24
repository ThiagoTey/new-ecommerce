import React from "react";
import Container from "../layout/Container";
import Category from "./Category";
import Title from "../typography/Title";

const mock = [
  { link: "/", title: "Casual", backgroundLink: "/casual.png" },
  { link: "/", title: "Formal", backgroundLink: "/formal.webp" },
  { link: "/", title: "Festa", backgroundLink: "/party.png" },
  { link: "/", title: "Academia", backgroundLink: "/gym.png" },
];

const CategoriesContainer = () => {

  
  return (
    <section className="mt-16">
      <Container>
        <div className="bg-neutral-100 rounded-3xl py-8 lg:py-16 px-2 lg:px-28">
          <Title as="h4" size="2xl" className="m-auto w-64 text-center md:w-fit">
            NAVEGUE POR QUALQUER ESTILO
          </Title>
          <div className="flex flex-col md:flex-row relative gap-x-[2%] flex-wrap mt-16 w-full gap-y-6">
            {mock.map((category, index) => (
              <div
                className={`h-[300px] relative overflow-hidden rounded-2xl transition-all ${
                  [0, 3, 4, 7].includes(index % 5) ? "lg:w-[36%]" : "lg:w-[62%]"
                }`}
                key={category.title}
              >
                <Category
                  link={category.link}
                  backgroundLink={category.backgroundLink}
                  title={category.title}
                />
              </div>
            ))}
          </div>
        </div>
      </Container>
    </section>
  );
};

export default CategoriesContainer;
