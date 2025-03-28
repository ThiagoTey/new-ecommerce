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
      <Container className="w-full h-24 items-center gap-x-8 hidden lg:flex">
        <div>
          <Logo />
        </div>
        <div className="gap-x-4 flex font-medium">
          <Link href={"/"}>Inicio</Link>
          <Link href={"/"}>Comprar</Link>
          <Link href={"/"}>Mais Vendidos</Link>
        </div>
        <Search />
        <NavIcons />
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
