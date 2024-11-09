import React, { useState } from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  // State to manage the mobile menu toggle
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <div className="z-50 px-4 md:px-[4vw] font-bob">
      <div className="flex h-[57px] items-center justify-between">
        {/* Company Name */}
        <Link to="/" className="pl-1 font-bold text-xl md:text-2xl">
          <h1>McHugh & Gallagher Builders Ltd</h1>
        </Link>

        {/* Desktop Menu */}
        <div className="hidden md:flex text-lg">
          <ul className="flex">
            <li className="rounded-md px-2.5 hover:bg-slate-200">
              <Link to="/">Home</Link>
            </li>
            <li className="rounded-md px-2.5 hover:bg-slate-200">
              <Link to="/Gallery">Gallery</Link>
            </li>
            <li className="rounded-md px-2.5 hover:bg-slate-200">
              <Link to="/Services">Services</Link>
            </li>
            <li className="text-lg rounded-md hover:bg-slate-300 bg-slate-200 px-2.5">
              <Link to="/Contact">Contact</Link>
            </li>
          </ul>
        </div>

        {/* Mobile Menu Button */}
        <div className="md:hidden">
          <button onClick={() => setMenuOpen(!menuOpen)}>
            {/* Hamburger icon changes to 'X' when menu is open */}
            <svg
              className="w-6 h-6 text-gray-800"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d={
                  menuOpen
                    ? "M6 18L18 6M6 6l12 12" // 'X' icon
                    : "M4 6h16M4 12h16M4 18h16" // Hamburger icon
                }
              />
            </svg>
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {menuOpen && (
        <div className="md:hidden bg-white shadow-lg rounded-lg mt-2">
          <ul className="flex flex-col">
            <li className="border-b">
              <Link
                to="/"
                className="block px-4 py-2 hover:bg-slate-200"
                onClick={() => setMenuOpen(false)}
              >
                Home
              </Link>
            </li>
            <li className="border-b">
              <Link
                to="/Gallery"
                className="block px-4 py-2 hover:bg-slate-200"
                onClick={() => setMenuOpen(false)}
              >
                Gallery
              </Link>
            </li>
            <li className="border-b">
              <Link
                to="/Services"
                className="block px-4 py-2 hover:bg-slate-200"
                onClick={() => setMenuOpen(false)}
              >
                Services
              </Link>
            </li>
            <li>
              <Link
                to="/Contact"
                className="block px-4 py-2 hover:bg-slate-200"
                onClick={() => setMenuOpen(false)}
              >
                Contact
              </Link>
            </li>
          </ul>
        </div>
      )}
    </div>
  );
};

export default Navbar;
