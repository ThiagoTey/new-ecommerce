"use client";
import React, { useState } from "react";
import FilterTitle from "./FilterTitle";

const colorsMock = [
  { name: "Marrom", rgb: "138,63,0" },
  { name: "Azul", rgb: "48, 170, 241" },
  { name: "Preto", rgb: "0,0,0" },
];

const ColorFilter = () => {
  const [colorIndex, setColorIndex] = useState(0);

  return (
    <div>
      <FilterTitle title="Cor" />
      <div className="flex gap-2 mt-2">
        {colorsMock.map((color, index) => (
          <div
            key={`${color.name} ${index}`}
            className={`p-0.5 m-0 aspect-square border-2 rounded-full w-fit ${
              colorIndex != index && "border-transparent"
            }`}
          >
            <div
              className={`w-7 p-0 m-0 rounded-full aspect-square`}
              style={{ backgroundColor: `rgb(${colorsMock[index].rgb})` }}
              onClick={() => setColorIndex(index)}
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default ColorFilter;
