import React from "react";

interface NavbarProps {}

const Navbar: React.FC<NavbarProps> = () => {
  return (
    <div
      className="mb-12 flex h-[52px] w-full items-center justify-center bg-white 
        text-base tracking-tight text-zinc-800 shadow-lg"
    >
      Binder
    </div>
  );
};

export default Navbar;
