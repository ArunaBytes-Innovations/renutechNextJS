import React from "react";
import Link from "next/link";
import "./Style/Navbar.css";

import { FcMenu } from "react-icons/fc";

const NavLinks = ["home", "events", "about"];
const NavLinkGroup = () => {
  return (
    <div id="nav-links" className="text-white">
      {NavLinks.map((link, index) => {
        return (
          <Link
            key={index}
            className="capitalize block md:inline-block md:mr-6 md:hover:border-b-2 border-white list-disc leading-10 md:list-none md:hover:text-white hover:font-bold"
            href={link == "home" ? "/" : `/${link}`}
          >
            {link}
          </Link>
        );
      })}
    </div>
  );
};

const MenuLinks = [
  "contact",
  "rules",
  "co-ordinators",
  "accommondation",
  "sponsor",
  "gallary",
  "F&Q",
];
const MenuLinkGroup = () => {
  return (
    <div id="nav-links" className="text-white">
      <ul>
        {MenuLinks.map((link, index) => {
          return (
            <li key={index}>
              <Link
                className="capitalize list-disc leading-10 hover:font-bold"
                href={link == "home" ? "/" : `/${link}`}
              >
                {link}
              </Link>
            </li>
          );
        })}
      </ul>
    </div>
  );
};

const Navbar = () => {
  return (
    <div
      className="nav-cont flex justify-between items-center px-10 md:px-20 bg-blur backdrop-blur md:h-20 fixed top-0  w-screen"
      style={{
        zIndex: 1000,
      }}
    >
      <img className="w-16" src={"/assets/renutech_logo.svg"} alt="logo" />
      <div className="hidden md:block">
        <NavLinkGroup />
      </div>

      <div className="">
        <input type="checkbox" id="check" className="hidden" />
        <label
          htmlFor="check"
          className=" float-right p-2 bg-slate-200 rounded-lg"
        >
          <FcMenu />
        </label>
        <ul className="menu-list hidden w-64 pt-6 float-right h-screen bg-black bg-opacity-50 fixed top-20 -mt-5 md:-mt-2.5 right-0 pl-16 z-20">
          <li className=" md:hidden text-start list-disc">
            <NavLinkGroup />
          </li>
          <li className=" text-start">
            <MenuLinkGroup />
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Navbar;
