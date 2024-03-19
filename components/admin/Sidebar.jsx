"use client";
import React from "react";
import Link from "next/link";

import { usePathname } from "next/navigation";

const Sidebar = () => {
  const pathname = usePathname();
  const sideLinks = [
    {
      link: "home",
      href: "/",
    },

    {
      link: "events",
      href: "/events",
    },

    {
      link: "participants",
      href: "/participants",
    },

    {
      link: "coordinators",
      href: "/coordinators",
    },

    {
      link: "signout",
      href: "/signout",
    },
  ];
  return (
    <div>
      <div className="text-white p-4">
        <div>
          <img src="/assets/renuTech.svg" alt="" />
        </div>
      </div>
      <nav className="px-4">
        <ul>
          {sideLinks.map((sideLink, index) => (
            <li
              key={index}
              className={`capitalize p-2 text-xl ${
                pathname == sideLink.href ? "font-medium" : "font-light"
              } hover:font-medium`}
            >
              <Link href={`/admin/${sideLink.href}`}>{sideLink.link}</Link>
            </li>
          ))}
        </ul>
        <p className="text-center font-light">&copy; ArunaBytes 2024</p>
      </nav>
    </div>
  );
};

export default Sidebar;
