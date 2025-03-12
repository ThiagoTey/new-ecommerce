import React from "react";

type TitleProps = {
  title: string;
};

const FilterTitle = ({ title }: TitleProps) => {
  return <p className="font-medium text-xl">{title}</p>;
};

export default FilterTitle;
