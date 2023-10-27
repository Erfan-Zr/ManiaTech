import React from "react";
import { Menus } from "../(data)/MegaMenuData";
import ArrowDown from "@/public/icons/arrow-down.svg";
import Image from "next/image";
const MegaMenu = () => {
  return (
    <div className="flex flex-row gap-2 px-8 py-2">
      {Menus.map((menu) => {
        return (
          <div key={menu.id} className="flex cursor-pointer group gap-1">
            <p className="group-hover: pb-1 relative">
              {menu.title}

              <span
                className="group-hover:scale-x-100 transform transition-transform scale-x-0 w-full absolute bottom-0 left-0 border-black"
                style={{ border: "1px solid #5f5f5f" }}
              ></span>
            </p>
            <Image
              src={ArrowDown}
              width={20}
              height={20}
              alt="arrow down"
              className="group-hover:rotate-180 transition-transform transform duration-500"
            />
          </div>
        );
      })}
    </div>
  );
};

export default MegaMenu;
