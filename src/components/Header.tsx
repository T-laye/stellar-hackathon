"use client";

import React, { useState, useEffect, useRef } from "react";
import { IoIosMenu } from "react-icons/io";
import { IoClose } from "react-icons/io5";
import Logo from "./ui/Logo";
import Link from "next/link";
import Button from "./ui/Button";

const Header = () => {
  const [open, setOpen] = useState(false);
  const menuRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleClick = (e: MouseEvent) => {
      if (menuRef.current && !menuRef.current.contains(e.target as Node)) {
        setOpen(false);
      }
    };
    if (open) document.addEventListener("mousedown", handleClick);
    return () => document.removeEventListener("mousedown", handleClick);
  }, [open]);

  return (
    <header className="sm:px-4 reltive fixed inset-x-0 z-100" ref={menuRef}>
      <div className="flex items-center justify-between max-w-350 mx-auto bg-primary/75 backdrop-blur-md sm:rounded-[97px] py-6 md:py-8 pr-8 pl-7 sm:pr-16 sm:mt-8.25 max-h-27.5 transition-all duration-300">
        {/* Logo */}
        <div className="max-sm:-ml-5">
          <Logo />
        </div>

        {/* Desktop Nav */}
        <nav className="hidden md:block">
          <ul className="flex items-center gap-10 font-semibold sm:text-lg">
            {["program", "timeline", "mentors"].map((item) => (
              <li key={item} className="relative group">
                <Link
                  href={`/#${item}`}
                  className="capitalize transition-all duration-200 hover:opacity-70 relative after:content-[''] after:absolute after:left-0 after:-bottom-0.5 after:h-0.5 after:w-0 after:bg-current after:transition-all after:duration-300 group-hover:after:w-full"
                >
                  {item.charAt(0).toUpperCase() + item.slice(1)}
                </Link>
              </li>
            ))}
          </ul>
        </nav>

        {/* Actions */}
        <div className="flex items-center gap-4">
          <Button className="max-md:hidden -mr-5">Apply Now</Button>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden relative w-9 h-9 flex items-center justify-center transition-all duration-200 hover:opacity-70 active:scale-90"
            onClick={() => setOpen((prev) => !prev)}
            aria-label="Toggle menu"
          >
            <span
              className={`absolute transition-all duration-300 ${
                open ? "rotate-90 opacity-0" : "rotate-0 opacity-100"
              }`}
            >
              <IoIosMenu size={36} />
            </span>
            <span
              className={`absolute transition-all duration-300 ${
                open ? "rotate-0 opacity-100" : "-rotate-90 opacity-0"
              }`}
            >
              <IoClose size={36} />
            </span>
          </button>
        </div>
      </div>

      {/* Mobile Nav */}
      <div
        className={`md:hidden absolute top-full left-0 w-full px-2 mt-3 transition-all duration-300 ease-in-out z-50 ${
          open
            ? "opacity-100 translate-y-0 pointer-events-auto"
            : "opacity-0 -translate-y-2 pointer-events-none"
        }`}
      >
        <div className="bg-white rounded-2xl shadow-md overflow-hidden border border-gray-100">
          {/* Top accent bar */}
          <div className="h-0.5 w-full bg-linear-tor from-primary via-primary/70 to-transparent" />

          <ul className="flex flex-col px-4 py-3">
            {["program", "timeline", "mentors"].map((item, i) => (
              <li
                key={item}
                className={`transition-all duration-300 ${
                  open
                    ? "opacity-100 translate-x-0"
                    : "opacity-0 -translate-x-3"
                }`}
                style={{ transitionDelay: open ? `${i * 60}ms` : "0ms" }}
              >
                <Link
                  href={`/#${item}`}
                  onClick={() => setOpen(false)}
                  className="flex items-center gap-3 py-3.5 px-3 rounded-xl text-gray-800 font-semibold text-base capitalize transition-all duration-200 hover:bg-gray-50 hover:text-primary hover:translate-x-1 group"
                >
                  <span className="w-1.5 h-1.5 rounded-full bg-black/50 transition-all duration-200 group-hover:scale-125" />
                  {item.charAt(0).toUpperCase() + item.slice(1)}
                </Link>
                {i < 2 && <div className="h-px bg-gray-100 mx-3" />}
              </li>
            ))}

            {/* Apply CTA */}
            <li
              className={`transition-all duration-300 mt-2 mb-1 ${
                open ? "opacity-100 translate-x-0" : "opacity-0 -translate-x-3"
              }`}
              style={{ transitionDelay: open ? "180ms" : "0ms" }}
            >
              <Button className="w-full">Apply Now</Button>
            </li>
          </ul>
        </div>
      </div>
    </header>
  );
};

export default Header;
