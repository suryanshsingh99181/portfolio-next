"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import React from "react";

export default function Navbar() {
  const navlinks = [
    {
      name: "Home",
      path: "/",
    },
    {
      name: "Skills",
      path: "/services",
    },
    {
      name: "Resume",
      path: "/resume",
    },
    {
      name: "Works",
      path: "/works",
    },
    {
      name: "Contact",
      path: "/contact",
    },
  ];
  const pathname = usePathname();
  return (
    <div className="w-full h-full flex items-center justify-center">
      <ul className="w-full flex justify-center gap-4 items-center h-full">
        {navlinks.map((link, index) => {
          return (
            <li
              key={index}
              className={`text-sm font-medium ${
                pathname === link.path ? "text-primarycolor" : "text-white"
              }`}
            >
              <Link
                href={link.path}
                className="hover:text-primarycolor transition-all ease-out duration-200"
              >
                {link.name}
              </Link>
            </li>
          );
        })}
      </ul>
      <a href="">
        <button className="bg-primarycolor px-4 rounded-2xl border-2 border-primarycolor whitespace-nowrap hover:bg-transparent hover:border-2 py-1 text-sm transition-all ease-out duration-200">
          Hire Me!!
        </button>
      </a>
    </div>
  );
}
