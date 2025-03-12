"use client";
import React, { useState } from "react";
import { MdArrowOutward } from "react-icons/md";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <nav className="bg-black/90 text-white fixed top-0 left-0 w-full z-10">
      <div className="max-w-7xl mx-auto flex justify-between items-center py-4 px-4 md:px-10">
        <div className="text-xl md:text-2xl font-bold flex items-center gap-2">
          <a href="/">
            <img
              src="/assets/logo-re.png"
              alt="vivly brand logo"
              className="w-[2rem] md:w-[3rem] mx-auto rounded-xl "
            />
          </a>
          <a href="/" className="hover:underline">
            Vivly
          </a>
        </div>

        <div className="md:hidden">
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="focus:outline-none"
          >
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d={isOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16M4 18h16"}
              ></path>
            </svg>
          </button>
        </div>

        {/* Desktop Menu */}
        <ul className="hidden md:flex space-x-6">
          <li>
            <a href="/" className="hover:underline">
              Home
            </a>
          </li>
          <li>
            <a href="/services" className="hover:underline">
              Services
            </a>
          </li>
          <li>
            <a href="/portfolio" className="hover:underline">
              Portfolio
            </a>
          </li>

          <li>
            <a
              href="/contact-us"
              className="bg-white text-black rounded-xl px-3 py-1 flex items-center gap-2"
            >
              Connect with Us
              <MdArrowOutward />
            </a>
          </li>
        </ul>
      </div>

      {isOpen && (
        <div className="md:hidden">
          <ul className="flex flex-col space-y-4 px-4 py-6">
            <li>
              <a href="/" className="hover:underline">
                Home
              </a>
            </li>
            <li>
              <a href="/services" className="hover:underline">
                Services
              </a>
            </li>
            <li>
              <a href="/portfolio" className="hover:underline">
                Portfolio
              </a>
            </li>
            <li>
              <a
                href="/contact-us"
                className="bg-white text-black rounded-xl px-3 py-1 flex items-center gap-2"
              >
                Connect with Us
                <MdArrowOutward />
              </a>
            </li>
          </ul>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
