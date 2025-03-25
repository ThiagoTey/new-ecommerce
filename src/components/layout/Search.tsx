"use client";

import { useWindowSize } from "@/hooks/useWindowSize";
import Image from "next/image";
import React from "react";

const Search = () => {
  const { width } = useWindowSize();

  if (width < 768)
    return (
      <form className="flex items-center justify-between gap-2 md:gap-4 border-gray-300 border py-2 px-4 flex-1">
        <input
          type="text"
          name="name"
          placeholder="Pesquisar por produtos"
          className="flex-1 bg-transparent outline-none"
        />
        <Image width={24} height={24} src={"/search.png"} alt="searchImage" />
      </form>
    );

  return (
    <form className="flex items-center justify-between gap-2  md:gap-4 bg-gray-300 py-2 px-4 rounded-4xl flex-1">
      <Image width={24} height={24} src={"/search.png"} alt="searchImage" />
      <input
        type="text"
        name="name"
        placeholder="Pesquisar por produtos"
        className="flex-1 bg-transparent outline-none"
      />
    </form>
  );
};

export default Search;
