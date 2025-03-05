import Image from "next/image";
import Link from "next/link";
import React from "react";

type CategoryProps = {
  link: string;
  title: string;
  backgroundLink: string;
};

const Category = ({ backgroundLink, link, title }: CategoryProps) => {
  return (
    <div>
      <Link href={link}>
        <p className="absolute z-20 top-6 left-6 font-medium text-3xl">{title}</p>
        <Image className="brightness-[95%] hover:scale-105 transition-all" fill objectFit="cover" src={backgroundLink} alt={`${title}-Background`} />
      </Link>
    </div>
  );
};

export default Category;
