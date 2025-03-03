"use client";
import React, { useState } from "react";
import Button from "../ui/Button";
import Image from "next/image";

const NavIcons = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  if (isLoggedIn) {
  }

   const handleClick = () => {
    setIsLoggedIn(e => !e);
  }

  return (
    <div>
      {isLoggedIn ? (
        <div className="flex gap-2">
          <Image
            width={24}
            height={24}
            src={"/cart.svg"}
            alt="CartPicture"
          />
          <Image
            width={24}
            height={24}
            src={"/profile.svg"}
            alt="ProdilePicture"
          />
        </div>
      ) : (
        <div className="flex gap-2">
          <Button onClick={() => handleClick()}>Logar</Button>
          <Button onClick={() => handleClick()} black>Registrar</Button>
        </div>
      )}
    </div>
  );
};

export default NavIcons;
