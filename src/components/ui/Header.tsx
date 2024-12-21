"use client";
import Link from "next/link";
import React, { useEffect, useState } from "react";
import Navbar from "./Navbar";

export default function Header() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }

      window.addEventListener("scroll", handleScroll);
      return () => window.removeEventListener("scroll", handleScroll);
    };
  }, []);
  return (
    <div
      className={`fixed top-0 left-0 z-50 w-full flex justify-center items-center ${
        scrolled ? "stickyheader" : ""
      }`}
    >
      <div
        className={`w-11/12 flex justify-center px-4 py-6 items-center${
          scrolled ? "py-3" : ""
        }`}
      >
        <div className="flex-1">
          <Link href={"/"}>
            <h4 className="text-xl font-semibold">
              Suryansh.<span className="text-primarycolor"></span>
            </h4>
          </Link>
        </div>
        <div className="flex-1">
          <Navbar />
        </div>
      </div>
    </div>
  );
}
