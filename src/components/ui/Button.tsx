import React, { ButtonHTMLAttributes } from "react";

type Props = {
  children: React.ReactNode;
  black?: boolean;
} & ButtonHTMLAttributes<HTMLButtonElement>;;

const Button = ({ children, black, ...rest }: Props) => {
  return (
    <button
      className={`hover:cursor-pointer hover:bg-gray-300 transition-all border-black ${
        black && "bg-black text-white hover:bg-gray-700"
      } py-2 px-4 rounded-4xl `}
      {...rest}
    >
      {children}
    </button>
  );
};

export default Button;
