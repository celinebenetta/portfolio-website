import { assets } from "@/assets/assets";
import Image from "next/image";
import React, { useEffect, useRef, useState } from "react";

const Navbar = () => {
  const sideMenuRef = useRef();
  const [isScroll, setIsScroll] = useState(false);
  const openMenu = () => {
    sideMenuRef.current.style.transform = "translateX(-16rem)";
  };
  const closeMenu = () => {
    sideMenuRef.current.style.transform = "translateX(16rem)";
  };

  useEffect(() => {
    window.addEventListener("scroll", () => {
      if (scrollY > 50) {
        setIsScroll(true);
      } else {
        setIsScroll(false);
      }
    });
  });

  return (
    <>
      <div className="fixed top-0 right-0 w-11/12 -z-10 translate-y-[-80%] dark:hidden">
        <Image
          alt="header-bg"
          src={assets.header_bg_color}
          className="w-full"
        />
      </div>
      <nav
        className={`w-full fixed px-5 lg:px-8 xl:px-[8%] py-4 flex items-center justify-between ${
          isScroll
            ? "bg-white/50 backdrop-blur-lg shadow-sm dark:bg-darkTheme dark:shadow-white/20"
            : ""
        }`}
      >
        <a href="#top">
        </a>
        <ul
          className={`hidden md:flex items-center gap-6 lg:gap-8 rounded-full px-12 py-3 z-50 ${
            isScroll
              ? ""
              : "bg-white/50 backdrop-blur-lg shadow-sm dark:border dark:border-color-white/50 dark:bg-transparent"
          }`}
        >
          <li> <a href="#top">Home</a> </li>
          <li> <a href="#about">About Me</a> </li>
          <li> <a href="#portfolio">Portfolio</a> </li>
          <li> <a href="#contact">Contact Me</a> </li>
        </ul>
        <div className="flex items-center gap-4">

          <button
            className="block md:hidden ml-3 cursor-pointer"
            onClick={openMenu}
          >
            <Image
              alt="menu-icon"
              src={assets.menu_black}
              className="w-6"
            />
          </button>
        </div>

        {/* {MOBILE MENU} */}
        <ul
          ref={sideMenuRef}
          className="flex md:hidden flex-col gap-4 py-20 px-10 fixed -right-64 top-0 bottom-0 w-64 z-50 h-screen bg-rose-50 transition duration-500 dark:bg-darkHover dark:text-white"
        >
          <div className="absolute right-6 top-6" onClick={closeMenu}>
            <Image
              alt="close-icon"
              src={assets.close_black}
              className="w-5 cursor-pointer"
            />
          </div>
          <li> <a onClick={closeMenu} href="#top"> Home </a> </li>
          <li> <a onClick={closeMenu} href="#about"> About </a> </li>
          <li> <a onClick={closeMenu} href="#portfolio"> Portfolio</a> </li>
          <li> <a onClick={closeMenu} href="#contact"> Contact Me </a> </li>
        </ul>
      </nav>
    </>
  );
};

export default Navbar;
