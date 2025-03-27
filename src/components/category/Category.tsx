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
        <p className="absolute z-20 bottom-2 left-0 right-0 m-auto w-fit font-medium text-3xl bg-white px-4 py-2 rounded-md">
          {title}
        </p>
        <Image
          className="brightness-[95%] hover:scale-105 transition-all"
          fill
          objectFit="cover"
          src={backgroundLink}
          alt={`${title}-Background`}
        />
      </Link>
    </div>
  );
};

export default Category;
