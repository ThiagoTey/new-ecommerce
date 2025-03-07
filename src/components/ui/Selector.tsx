"use client";

import { useState } from "react";
import Button from "./Button";

type Props = {
  title: string;
};

const sizeMock = [
  {
    name: "Pequeno",
  },
  {
    name: "Médio",
  },
  {
    name: "Grande",
  },
  {
    name: "Extra-Grande",
  },
];

const Selector = ({ title }: Props) => {
  const [selectedIndex, setSelectedIndex] = useState(0);

  return (
    <div>
      <p className="bg-">{title}</p>
      <div className="flex gap-2 mt-2">
        {sizeMock.map((size, index) => (
          <Button
            onClick={() => setSelectedIndex(index)}
            border
            black={selectedIndex == index}
            key={size.name + index}
          >
            {size.name}
          </Button>
        ))}
      </div>
    </div>
  );
};

export default Selector;
