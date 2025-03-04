import React, { ButtonHTMLAttributes } from "react";

type Props = {
  children: React.ReactNode;
  black?: boolean;
  size?: "base" | "xl";
  border?: boolean;
} & ButtonHTMLAttributes<HTMLButtonElement>;

const sizeClasses = {
  base: "px-4 py-2",
  xl: "px-12 py-3 text-xl font-medium",

};

const Button = ({ children, border, size = "base", black, ...rest }: Props) => {
  const paddingClasses = sizeClasses[size];

  return (
    <button
      {...rest}
      className={`hover:cursor-pointer hover:bg-gray-300 transition-all ${
        border && "border-[1px]"
      } border-gray-300 ${
        black && "bg-black text-white hover:bg-gray-700"
      } py-2 px-4 rounded-4xl  ${paddingClasses}`}
    >
      {children}
    </button>
  );
};

export default Button;
