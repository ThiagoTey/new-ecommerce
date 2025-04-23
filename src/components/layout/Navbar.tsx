import Link from "next/link";
import React from "react";
import Search from "./Search";
import NavIcons from "./NavIcons";
import Logo from "../ui/Logo";
import Container from "./Container";
import CartIcon from "../ui/CartIcon";
import NavSidebar from "./NavSidebar";

const Navbar = () => {
  return (
    <nav className="bg-gray-100">
      {/* Desktop */}
      <Container className="w-full h-28 gap-4 hidden lg:flex justify-center flex-col">
        <div className="flex w-full items-center gap-x-8">
          <div>
            <Logo />
          </div>
          <Search />
          <NavIcons />
        </div>
        <div className="flex gap-x-8">
          <Link href={"/"}>Inicio</Link>
          <Link href={"/products"}>Comprar</Link>
          <Link href={"/"}>Mais Vendidos</Link>
          <Link href={"/"}>Moda Masculina</Link>
          <Link href={"/"}>Esportes Lazer</Link>
        </div>
      </Container>
      {/* Mobile */}
      <div className="lg:hidden">
        <Container className="pt-4 ">
          <div className="flex justify-between">
            {/* Hamburguer */}
            <NavSidebar />
            {/* Logo */}
            <Logo />
            {/* Carrinho */}
            <CartIcon />
          </div>
        </Container>
        {/* Pesquisa */}
        <div className="py-2">
          <Search />
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
