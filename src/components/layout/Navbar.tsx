import Link from "next/link";
import React from "react";
import Search from "./Search";
import NavIcons from "./NavIcons";
import Logo from "../ui/Logo";
import Container from "./Container";

const Navbar = () => {
  return (
    <nav className="bg-gray-100">
      <Container className="w-full h-24  flex items-center gap-x-8">
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
    </nav>
  );
};

export default Navbar;
