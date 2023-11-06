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
  let [activeItemIndex, setActiveItemIndex] = useState(false);
  let [activeSubItemIndex, setActiveSubItemIndex] = useState(false);

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
          setActiveItemIndex();
        }}
      ></div>

      <div
        className={showMenu ? "menu-open" : "menu-close"}
        onClick={(e) => {
          e.preventDefault();
        }}
      >
        <div className="py-4">
          {Menus.map((menu, index) => (
            <div key={menu.id}>
              <div
                className="flex justify-between group px-4 py-2"
                onClick={() => {
                  if (index === activeItemIndex) {
                    setActiveItemIndex();
                  } else {
                    setActiveItemIndex(index);
                  }
                }}
              >
                <h3>{menu.title}</h3>
                <Image
                  src={ArrowDown}
                  width={20}
                  height={20}
                  alt="arrow down"
                  className={
                    index === activeItemIndex
                      ? "rotate-180 transition-transform transform duration-500"
                      : "rotate-360 transition-transform transform duration-500"
                  }
                />
              </div>
              <div className="bg-slate-200">
                {activeItemIndex === index &&
                  menu.items.map((item, itemIndex) => {
                    return (
                      <div key={item.id}>
                        <div
                          className="flex justify-between group  px-4 py-2"
                          onClick={() => {
                            if (itemIndex === activeSubItemIndex) {
                              setActiveSubItemIndex();
                            } else {
                              setActiveSubItemIndex(itemIndex);
                            }
                          }}
                        >
                          {console.log(activeSubItemIndex, itemIndex)}
                          <h3>{item.title}</h3>
                          {item.subItems?.length > 0 && (
                            <Image
                              src={ArrowDown}
                              width={20}
                              height={20}
                              alt="arrow down"
                              className={
                                itemIndex === activeSubItemIndex
                                  ? "rotate-180 transition-transform transform duration-500"
                                  : "rotate-360 transition-transform transform duration-500"
                              }
                            />
                          )}
                        </div>
                        <div className="bg-slate-300">
                          {activeSubItemIndex === itemIndex &&
                            item.subItems?.length > 0 &&
                            item.subItems.map((subItem) => {
                              return (
                                <div
                                  className="flex justify-between group px-4 py-2"
                                  key={subItem.id}
                                >
                                  <h2>{subItem.title}</h2>
                                </div>
                              );
                            })}
                        </div>
                      </div>
                    );
                  })}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
