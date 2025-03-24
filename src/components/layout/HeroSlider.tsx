"use client";

import React, { useState } from "react";
import Container from "./Container";
import Button from "../ui/Button";
import Image from "next/image";

const HeroSlider = () => {
  const [isImageLoaded, setIsImageLoaded] = useState(false);
  return (
    <section className="w-full lg:h-[672px] bg-gray-200">
      <Container className="grid-cols-2 lg:grid flex flex-col h-full">
        <div className="flex flex-col justify-center gap-y-14 ">
          <h2 className="lg:text-6xl sm:text-4xl text-2xl font-semibold">
            ENCONTRE ROUPAS QUE COMBINEM COM SEU ESTILO!
          </h2>
          <p className="text-gray-600 text-xl">
            Navegue pela nossa diversificada variedade de peças meticulosamente
            elaboradas, projetadas para realçar sua individualidade e atender ao
            seu senso de estilo.
          </p>
          <Button black>Comprar</Button>
        </div>
        <div className="w-full relative h-10/12 self-end">
          <Image
            fill
            objectFit="cover"
            src={"/fashion-model-girl.webp"}
            alt="Hero Slider Image"
            onLoad={() => setIsImageLoaded(true)}
            className={`object-cover ${!isImageLoaded && "blur-sm"}`}
          />
        </div>
      </Container>
    </section>
  );
};

export default HeroSlider;
