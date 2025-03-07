"use client";
import React, { useState } from "react";

type Props = {};

const colorsMock = [
  { name: "Marrom", rgb: "138,63,0" },
  { name: "Azul", rgb: "48, 170, 241" },
  { name: "Preto", rgb: "0,0,0" },
];

const ColorSelector = (props: Props) => {
  const [colorIndex, setColorIndex] = useState(0);

  return (
    <div>
      <span>Cor : {colorsMock[colorIndex].name}</span>
      <div className="flex gap-2">
        {colorsMock.map((color, index) => (
          <div
            key={`${color.name} ${index}`}
            className={`p-1 m-0 aspect-square border-2 rounded-full w-fit ${
              colorIndex != index && "border-transparent"
            }`}
          >
            <div
              className={`w-10 h-10 p-0 m-0 rounded-full `}
              style={{ backgroundColor: `rgb(${colorsMock[index].rgb})` }}
              onClick={() => setColorIndex(index)}
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default ColorSelector;
