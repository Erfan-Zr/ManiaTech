import Image from "next/image";
import React from "react";
import logo from "@/public/logo.png";
import { MegaMenu, Searchbar, ShoppingCart } from "../(components)";
import { Sidebar } from ".";
import profile from "@/public/icons/profile.svg";

const Header = () => {
  return (
    <div className="flex-col sticky top-0 justify-center items-center">
      <div className="flex-col bg-slate-400 justify-center items-center">
        <div className="grid grid-cols-5 items-center py-2 md:px-8 max-md:justify-items-center ">
          <Sidebar />
          <div className="md:hidden">
            <Searchbar />
          </div>
          <Image
            src={logo}
            alt="ManiaTech"
            width={100}
            height={50}
            priority={true}
          />

          <Image
            src={profile}
            alt="profile icon"
            width={30}
            height={30}
            priority={true}
            className=""
          />
          <div className="max-md:hidden">
            <Searchbar />
          </div>
          <p className="max-md:hidden">Customer Support </p>
          <ShoppingCart />
          {/* <Image src="" /> */}
        </div>
      </div>
      <MegaMenu />
    </div>
  );
};

export default Header;
