"use client";

import React, { useState } from "react";
import Logo from "../ui/Logo";
import SplitBar from "../ui/SplitBar";

const NavSidebar = () => {
  const [isOpen, setIsOpen] = useState(true);
  return (
    <div>
      <button onClick={() => setIsOpen(true)}> ||| </button>
      <div
        className={`fixed flex ${
          !isOpen && "invisible"
        } top-0 bottom-0 left-0 right-0 z-20`}
      >
        <div
          onClick={() => setIsOpen(false)}
          className={` w-full h-full transition-all absolute ${isOpen && "bg-black/20" }`}
        />

        <div className={`bg-white min-w-72 z-10 transition-all  p-4 ${isOpen ? "ml-0" : "-ml-72"}`}>
            {/* Titulo */}
          <div className="flex justify-between pb-2">
            <span className="font-medium text-xl"><Logo/></span>
            <button
              className="cursor-pointer text-xl"
              onClick={() => setIsOpen(false)}
            >
              X
            </button>
          </div>
          <SplitBar />
          {/* Conteúdo */}
        </div>
      </div>
    </div>
  );
};

export default NavSidebar;
