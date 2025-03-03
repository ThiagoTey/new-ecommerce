import Image from "next/image";
import React from "react";

const Search = () => {
  return (
    <form className="flex items-center justify-between gap-4 bg-gray-300 py-2 px-4 rounded-4xl flex-1">
        <Image
            width={24}
            height={24}
            src={"/search.png"}
            alt="searchImage"
        />
      <input type="text" name="name" placeholder="Pesquisar por produtos" className="flex-1 bg-transparent outline-none"/>
    </form>
  );
};

export default Search;
