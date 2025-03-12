"use client";
import React, { useState } from "react";
import Image from "next/image";

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
          <div className="cursor-pointer hover:bg-gray-200 p-2 rounded-full relative">
            <Image width={24} height={24} src={"/cart.svg"} alt="CartPicture" />
            <div className="absolute right-0 top-0 rounded-full bg-blue-400 w-4 h-4 items-center justify-center flex aspect-square text-white text-xs">
              1
            </div>
          </div>
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
          <div className="cursor-pointer hover:bg-gray-200 p-2 rounded-full relative">
            <Image width={24} height={24} src={"/cart.svg"} alt="CartPicture" />
            <div className="absolute right-0 top-0 rounded-full bg-blue-400 w-4 h-4 items-center justify-center flex aspect-square text-white text-xs">
              1
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default NavIcons;
