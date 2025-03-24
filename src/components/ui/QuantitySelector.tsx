"use client";
import React, { useState } from "react";

type QuantitySelectorProps = {
  small?: boolean;
}

const QuantitySelector = ({ small }: QuantitySelectorProps) => {
  const [quantity, setQuantity] = useState(1);

  const handleDecrease = () => {
    if (quantity > 1) setQuantity((e) => e - 1);
  };

  if (small) return (
    <div className={`flex items-center rounded-full border border-neutral-300  w-fit p-1 gap-1`}>
      <button className="text-xl cursor-pointer" onClick={handleDecrease}>
        -
      </button>
      <input
        type="number"
        value={quantity}
        min="1"
        onChange={(e) => setQuantity(parseInt(e.target.value))}
        className="w-10 text-center border-none bg-transparent outline-none no-spinner "
      />
      <button className="text-xl cursor-pointer" onClick={() => setQuantity((e) => e + 1)}>
        +
      </button>
    </div>
  )

  return (
    <div className={`flex items-center rounded-full bg-gray-200  w-fit px-4 py-2 gap-4`}>
      <button className="text-3xl cursor-pointer" onClick={handleDecrease}>
        -
      </button>
      <input
        type="number"
        value={quantity}
        min="1"
        onChange={(e) => setQuantity(parseInt(e.target.value))}
        className="w-10 text-center border-none bg-transparent outline-none no-spinner"
      />
      <button className="text-3xl cursor-pointer" onClick={() => setQuantity((e) => e + 1)}>
        +
      </button>
    </div>
  );
};

export default QuantitySelector;
