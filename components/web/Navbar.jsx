"use client";
import React, { useState } from "react";
import Link from "next/link";
import "./Style/Navbar.css";

import { RiMenuLine, RiCloseLine } from "react-icons/ri";
import { FaRegHeart } from "react-icons/fa";

const NavLinks = ["home", "events", "about"];
const NavLinkGroup = () => {
  return (
    <div id="nav-links" className="text-white">
      {NavLinks.map((link, index) => {
        return (
          <Link
            key={index}
            className="capitalize block md:inline-block md:mr-6 md:hover:border-b-2 border-white list-disc leading-10 md:leading-none md:list-none md:hover:text-white hover:font-bold"
            href={link == "home" ? "/" : `/${link}`}
          >
            {link}
          </Link>
        );
      })}
    </div>
  );
};

const MenuLinks = ["contact", "brochure", "co-ordinators"];
const MenuLinkGroup = () => {
  return (
    <div id="nav-links" className="text-white">
      <ul>
        {MenuLinks.map((link, index) => {
          return (
            <li key={index}>
              {/* Check if the current link is "brochure" */}
              {link === "brochure" ? (
                <Link
                  className="capitalize list-disc leading-10 hover:font-bold"
                  href="https://drive.google.com/uc?export=download&id=1C6TpAXViHBOdFeSPtfdXSfwr9-7XvpSW" // Link to the file to download
                  download // Add the 'download' attribute to force download
                  target="_blank" // Open the link in a new tab
                >
                  {link}
                </Link>
              ) : link === "co-ordinators" ? (
                <Link
                  className="capitalize list-disc leading-10 hover:font-bold"
                  href="https://drive.google.com/uc?export=download&id=1_i98FfZoCQt_NK8buWWrR2KFZliZZx9L
                  " // Link to coordinator file to download
                  download // Add the 'download' attribute to force download
                  target="_blank" // Open the link in a new tab
                >
                  {link}
                </Link>
              ) : (
                // For other links, use Link component
                <Link
                  className="capitalize list-disc leading-10 hover:font-bold"
                  href={link === "home" ? "/" : `/${link}`}
                >
                  {link}
                </Link>
              )}
            </li>
          );
        })}
      </ul>
    </div>
  );
};

const Navbar = () => {
  const [toggle, setToggle] = useState(false);

  const handleToggle = () => {
    setToggle(!toggle);
  };

  return (
    <div className="fixed top-0  w-full">
      <div className="h-6 bg-slate-900/50 flex items-center tracking-wider justify-center text-center font-mono">
        Made with
        <span className="px-2">
          <FaRegHeart />
        </span>
        by ArunaBytes
      </div>
      <div
        className="nav-cont flex justify-between items-center px-10 md:px-20 bg-blur backdrop-blur md:h-16"
        style={{
          zIndex: 1000,
        }}
      >
        <Link href="/">
          <img className="w-16" src={"/assets/renutech_logo.svg"} alt="logo" />
        </Link>
        <div className="hidden md:block">
          <NavLinkGroup />
        </div>

        <div className="">
          <input
            type="checkbox"
            id="check"
            className="hidden"
            onClick={handleToggle}
          />
          <label
            htmlFor="check"
            className=" float-right p-2 bg-slate-200 rounded-lg"
          >
            {toggle ? <RiCloseLine /> : <RiMenuLine />}
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
    </div>
  );
};

export default Navbar;
