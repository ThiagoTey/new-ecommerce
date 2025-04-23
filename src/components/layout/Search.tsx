"use client";

import Image from "next/image";
import React from "react";

const Search = () => {
  return (
    <form className="flex items-center justify-between gap-2  md:gap-4 border-gray-300 border rounded-xl py-2 px-4  flex-1">
      <input
        type="text"
        name="name"
        placeholder="Pesquisar por produtos"
        className="flex-1 bg-transparent outline-none placeholder:text-black"
      />
      <Image width={24} height={24} src={"/search.svg"} alt="searchImage" />
    </form>
  );
};

export default Search;
