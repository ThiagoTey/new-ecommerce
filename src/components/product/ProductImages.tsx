"use client";

import Image from "next/image";
import { useState } from "react";

type Props = {};

const imagesMock = [
  {
    url: "https://fakestoreapi.com/img/71-3HjGNDUL._AC_SY879._SX._UX._SY._UY_.jpg",
  },
  {
    url: "https://fakestoreapi.com/img/81fPKd-2AYL._AC_SL1500_.jpg",
  },
];

const ProductImages = (props: Props) => {
  const [selectedIndex, setSelectedIndex] = useState(0);

  return (
    <div className="flex flex-1/2">
      <div className="flex flex-col gap-3">
        {imagesMock.map((image, index) => (
          <button
            onClick={() => setSelectedIndex(index)}
            className={`w-[100px] h-[125px] border-[3px] relative transition-all bg-amber-50 rounded-2xl overflow-hidden cursor-pointer ${
              selectedIndex === index ? "border-black" : "border-transparent"
            }`}
            key={index}
          >
            <Image src={image.url} fill objectFit="cover" alt="ProductImage" />
          </button>
        ))}
      </div>
      <div className="relative w-full aspect-square rounded-2xl">
        <Image
          src={
            imagesMock[selectedIndex].url
          }
          className="object-"
          objectFit="contain"
          alt="Image"
          fill
        />
      </div>
    </div>
  );
};

export default ProductImages;
