"use client";
import React, { useState } from "react";
import Image from "next/image";
import CartIcon from "../ui/CartIcon";

const NavIcons = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  if (isLoggedIn) {
  }

  const handleClick = () => {
    setIsLoggedIn((e) => !e);
  };

  return (
    <div>
      {isLoggedIn ? (
        <div className="flex gap-2">
          <div className="cursor-pointer hover:bg-gray-200 p-2 rounded-full">
            <Image
              width={24}
              height={24}
              src={"/profile.svg"}
              alt="ProfilePicture"
            />
          </div>
          <CartIcon />
        </div>
      ) : (
        <div className="flex gap-2">
          <div
            className="flex gap-2 cursor-pointer hover:bg-gray-200 p-2 rounded-2xl"
            onClick={() => handleClick()}
          >
            <span>Login</span>
            <Image
              width={24}
              height={24}
              src={"/profile.svg"}
              alt="ProfilePicture"
            />
          </div>
          <CartIcon />
        </div>
      )}
    </div>
  );
};

export default NavIcons;
