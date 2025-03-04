import Link from "next/link";
import React from "react";
import Search from "./Search";
import NavIcons from "./NavIcons";
import Logo from "../ui/Logo";

const Navbar = () => {
  return (
    <header className="w-full h-24 bg-gray-100 flex items-center px-24 gap-x-8">
      <div>
        <Logo />
      </div>
      <div className="gap-x-4 flex font-medium">
        <Link href={"/"}>Em Promoção</Link>
        <Link href={"/"}>Novidades</Link>
        <Link href={"/"}>Mais Vendidos</Link>
      </div>
      <Search />
      <NavIcons />
    </header>
  );
};

export default Navbar;
