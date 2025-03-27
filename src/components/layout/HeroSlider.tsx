"use client";

import React, { useState } from "react";
import Container from "./Container";
import Button from "../ui/Button";
import Image from "next/image";

const HeroSlider = () => {
  const [isImageLoaded, setIsImageLoaded] = useState(false);
  return (
    <section className="w-full lg:h-[672px] bg-gray-200">
      <Container className="pt-8 lg:pt-0 grid-cols-2 lg:grid flex flex-col h-full">
        <div className="flex flex-col justify-center gap-y-2 lg:gap-y-14 ">
          <h2 className="lg:text-6xl sm:text-4xl text-3xl font-extrabold">
            ENCONTRE ROUPAS QUE COMBINEM COM SEU ESTILO!
          </h2>
          <p className="text-gray-600 font-light lg:text-xl">
            Navegue pela nossa diversificada variedade de peças meticulosamente
            elaboradas, projetadas para realçar sua individualidade e atender ao
            seu senso de estilo.
          </p>
          <Button className="py-4 mt-4" black>
            Comprar
          </Button>
        </div>
        <div className="relative aspect-square mt-4 lg:mt-0 lg:aspect-auto lg:w-full lg:h-10/12 lg:self-end">
          <Image
            fill
            src={"/fashion-model-girl.webp"}
            alt="Hero Slider Image"
            onLoad={() => setIsImageLoaded(true)}
            className={`object-cover lg:object-cover ${
              !isImageLoaded && "blur-sm"
            }`}
          />
        </div>
      </Container>
    </section>
  );
};

export default HeroSlider;
