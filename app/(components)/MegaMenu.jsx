"use client";
import React, { useEffect, useState } from "react";
import { Menus } from "../(data)/MegaMenuData";
import ArrowDown from "@/public/icons/arrow-down.svg";
import Image from "next/image";
import "./MegaMenu.css";

const MegaMenu = () => {
  const [scrollDirection, setScrollDirection] = useState("up");
  const [prevScrollPos, setPrevScrollPos] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollPos = window.scrollY;

      // Determine the scrolling direction
      if (currentScrollPos > prevScrollPos) {
        setScrollDirection("down");
      } else {
        setScrollDirection("up");
      }

      setPrevScrollPos(currentScrollPos);
    };

    // Attach the scroll event listener
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [prevScrollPos]);
  return (
    <div className={` px-8 relative z-50 ${scrollDirection} max-md:hidden`}>
      <div className="flex flex-row  gap-5 z-50 relative">
        {Menus.map((menu) => {
          return (
            <div
              key={menu.id}
              className={
                " group  block transform transition-all duration-500 relative z-50 py-2 "
              }
            >
              <div className="flex cursor-pointer gap-2">
                <p className="group-hover: relative">
                  {menu.title}
                  <span
                    className="group-hover:scale-x-100 transform transition-transform duration-500 scale-x-0 w-full absolute bottom-0 left-0 border-black"
                    style={{ border: "1px solid #000000" }}
                  ></span>
                </p>
                <Image
                  src={ArrowDown}
                  width={20}
                  height={20}
                  alt="arrow down"
                  className="group-hover:rotate-180 transition-transform transform duration-500 "
                />
              </div>
              <div className="relative">
                <div className="grid-flow-col scale-y-0 group-hover:scale-y-100 transform transition-transform duration-500 bg-white rounded-md shadow pt-1 absolute top-2 right-0 min-w-[150px]">
                  {menu.items.map((item, itemIndex) => {
                    return (
                      <div
                        key={item.id}
                        className="relative flex group/subItem w-[100%] rounded-md"
                      >
                        <div className="p-2 cursor-pointer hover:bg-slate-50 flex justify-between w-[100%]">
                          <p>{item.title}</p>
                          {item.subItems?.length > 0 && (
                            <Image
                              src={ArrowDown}
                              width={20}
                              height={20}
                              alt="arrow down"
                              className="transition-transform transform duration-500  group-hover/subItem:rotate-90"
                            />
                          )}
                        </div>
                        <div
                          className="absolute rounded-md bg-white right-[150px] flex-col transition-all transform duration-500 shadow w-[150px] opacity-0 scale-y-0 group-hover/subItem:opacity-100 group-hover/subItem:scale-100 "
                          // className="scale-y-0  flex-col w-[150px] group-hover/subItem:scale-y-100 shadow absolute left-0"
                          // {`absolute flex-col w-[150px] shadow right-[150px] bottom-auto transition-transform transform duration-500`}
                        >
                          {item.subItems?.map((subItem, subItemIndex) => {
                            return (
                              <div
                                key={subItem.id}
                                className="grid-flow-col p-2 cursor-pointer hover:bg-slate-50"
                              >
                                <p>{subItem.title}</p>
                              </div>
                            );
                          })}
                        </div>
                      </div>
                    );
                  })}
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default MegaMenu;
