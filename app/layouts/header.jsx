import Image from "next/image";
import React from "react";
import logo from "@/public/logo.png";
import { MegaMenu, Searchbar, ShoppingCart } from "../(components)";

const Header = () => {
  return (
    <div className="flex-col sticky top-0 justify-center items-center">
      <div className="flex-col bg-slate-400 justify-center items-center">
        <div className="grid grid-cols-4 items-center  py-2  px-8 w-[85%]">
          <Image
            src={logo}
            alt="ManiaTech"
            width={100}
            height={50}
            priority={true}
          />
          <Searchbar />
          <p>Customer Support </p>
          <ShoppingCart />
          {/* <Image src="" /> */}
        </div>
      </div>

      <MegaMenu />
    </div>
  );
};

export default Header;
