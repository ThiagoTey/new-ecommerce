"use client";

import { useState } from "react";

const PriceFilter = ({ min = 0, max = 1000 }) => {
  const [range, setRange] = useState({ min: min, max: max });
  const [leftMargin, setLeftMargin] = useState(0);

  const startWidth =
    100 - (range.min / max) * 100 + ((range.max / max) * 100 - 100);
  const [slideWidth, setSlideWidth] = useState(startWidth);

  const handleChangeMin = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = Number(e.target.value);
    setRange((prev) => ({ ...prev, min: Math.min(value, prev.max - 1) }));
    setLeftMargin((range.min / max) * 100);
    setSlideWidth(
      100 - (range.min / max) * 100 + ((range.max / max) * 100 - 100)
    );
  };

  const handleChangeMax = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = Number(e.target.value);
    setRange((prev) => ({ ...prev, max: Math.max(value, prev.min + 1) }));
    setSlideWidth(
      100 - (range.min / max) * 100 + ((range.max / max) * 100 - 100)
    );
  };

  return (
    <div className="flex flex-col gap-3">
      {/* Valores exibidos */}
      <div className="flex justify-between text-sm font-medium">
        <span>R$ {range.min}</span>
        <span>R$ {range.max}</span>
      </div>

      {/* Slider Container */}
      <div className="relative h-6 flex items-center">
        {/* Barra de fundo */}
        <div className="absolute top-1/2 h-[6px] w-full -translate-y-1/2 bg-gray-300 rounded-full"/>

        {/* Input Min */}
        <input
          type="range"
          min={min}
          max={max}
          value={range.min}
          onChange={handleChangeMin}
          className="absolute w-full h-2 appearance-none bg-transparent pointer-events-none"
          style={{ zIndex: range.min < max - 10 ? 2 : 1 }} // Garante que o min fique acima do max quando necessário
        />
        <div
          className="w-full bg-black h-[6px] absolute mb-1"
          style={{
            left: `${leftMargin}%`,
            width: `${slideWidth}%`,
          }}
        />

        {/* Input Max */}
        <input
          type="range"
          min={min}
          max={max}
          value={range.max}
          onChange={handleChangeMax}
          className="absolute w-full h-2 appearance-none bg-transparent pointer-events-none"
        />
      </div>
    </div>
  );
};

export default PriceFilter;
