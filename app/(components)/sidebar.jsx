"use client";
import React, { useState } from "react";
import { Menus } from "../(data)/MegaMenuData";
import Link from "next/link";
import Image from "next/image";
import MenuIcon from "@/public/icons/menu.svg";
import "./sidebar.css";
import ArrowDown from "@/public/icons/arrow-down.svg";

const Sidebar = () => {
  let [showMenu, setShowMenu] = useState(false);

  return (
    <div className="sm:hidden">
      <Image
        src={MenuIcon}
        width={30}
        height={30}
        alt="Menu Icon"
        onClick={() => {
          setShowMenu(true);
        }}
      />
      <div
        className={`${showMenu ? "visible" : "overlay"}`}
        onClick={() => {
          setShowMenu(false);
        }}
      ></div>

      <div
        className={showMenu ? "menu-open" : "menu-close"}
        onClick={(e) => {
          e.preventDefault();
        }}
      >
        <div className="p-4">
          {Menus.map((menu, index) => (
            <div key={menu.id} className="flex justify-between group">
              <h3>{menu.title}</h3>
              <Image
                src={ArrowDown}
                width={20}
                height={20}
                alt="arrow down"
                className="group-hover:rotate-180 transition-transform transform duration-500 "
              />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
