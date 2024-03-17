import React from "react";
import Link from "next/link";

const Sidebar = () => {
  return (
    <div>
      <div className="text-white p-4">
        <h1 className="text-2xl font-bold">RenuTech</h1>
        <p>&copy; ArunaBytes 2024</p>
      </div>
      <nav className="px-4">
        <ul>
          <li className="font-bold bg-blue-400 p-1 my-2 rounded-md text-center tracking-wide">
            <Link href="/admin">Dashboard</Link>
          </li>
          <li className="font-bold bg-blue-400 p-1 my-2 rounded-md text-center tracking-wide">
            <Link href="/admin/events">events</Link>
          </li>
          <li className="font-bold bg-blue-400 p-1 my-2 rounded-md text-center tracking-wide">
            <Link href="/admin/alert">create alert</Link>
          </li>
        </ul>
      </nav>
    </div>
  );
};

export default Sidebar;
