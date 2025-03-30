import React, { useState } from "react";
import { Bars3Icon } from "@heroicons/react/24/solid";

function Header() {
  const [toggleMenu, setToggleMenu] = useState(false);
  return (
    <header className="fixed top-0 left-0 w-full flex justify-between items-center px-5 sm:px-10 py-3 bg-secondary z-50 shadow-md">
      {/* Logo */}
      <a className="font-bold text-lg sm:text-xl text-[#F4EBD0]" href="#">
        Praveenkumar
      </a>

      {/* Desktop Navigation */}
      <nav className="hidden md:block">
        <ul className="flex space-x-6 text-[#F4EBD0]">
          <li>
            <a href="/" className="hover:underline">
              Home
            </a>
          </li>
          <li>
            <a href="#about" className="hover:underline">
              About
            </a>
          </li>
          <li>
            <a href="#skills" className="hover:underline">
              Skills
            </a>
          </li>
          <li>
            <a href="#project" className="hover:underline">
              Project
            </a>
          </li>
          <li>
            <a href="#resume" className="hover:underline">
              Resume
            </a>
          </li>
          <li>
            <a href="#contact" className="hover:underline">
              Contact
            </a>
          </li>
        </ul>
      </nav>

      {/* Mobile Navigation */}
      {toggleMenu && (
        <nav className="absolute top-[60px] left-0 w-full bg-secondary shadow-md md:hidden">
          <ul
            onClick={() => setToggleMenu(!toggleMenu)}
            className="flex flex-col items-center space-y-4 py-4 text-[#F4EBD0]"
          >
            <li>
              <a href="/" className="hover:underline">
                Home
              </a>
            </li>
            <li>
              <a href="#about" className="hover:underline">
                About
              </a>
            </li>
            <li>
              <a href="#skills" className="hover:underline">
                Skills
              </a>
            </li>
            <li>
              <a href="#project" className="hover:underline">
                Project
              </a>
            </li>
            <li>
              <a href="#resume" className="hover:underline">
                Resume
              </a>
            </li>
            <li>
              <a href="#contact" className="hover:underline">
                Contact
              </a>
            </li>
          </ul>
        </nav>
      )}

      {/* Mobile Menu Button */}
      <button
        onClick={() => setToggleMenu(!toggleMenu)}
        className="block md:hidden text-[#F4EBD0]"
      >
        <Bars3Icon className="h-6 w-6" />
      </button>
    </header>
  );
}

export default Header;
