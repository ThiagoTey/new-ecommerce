"use client";
import React, { useState } from "react";

const QuantitySelector = () => {
  const [quantity, setQuantity] = useState(1);

  const handleDecrease = () => {
    if (quantity > 1) setQuantity((e) => e - 1);
  };

  return (
    <div className="flex items-center gap-4 rounded-full bg-gray-200 px-4 py-2 w-fit">
      <button className="text-3xl" onClick={handleDecrease}>
        -
      </button>
      <input
        type="number"
        value={quantity}
        min="1"
        onChange={(e) => setQuantity(parseInt(e.target.value))}
        className="w-10 text-center border-none bg-transparent outline-none no-spinner"
      />
      <button className="text-3xl" onClick={() => setQuantity((e) => e + 1)}>
        +
      </button>
    </div>
  );
};

export default QuantitySelector;
