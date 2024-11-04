import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <div className="z-50 ml-[4vw] mr-[4vw]">
      <div className="flex font-bob h-[57px]">
        <Link to="/" className="pl-1 mt-auto font-bold text-2xl">
          <h1>McHugh & Gallagher Builders Ltd</h1>
        </Link>
        <div className="ml-auto mt-auto text-lg">
          <ul className="flex">
            <li className="rounded-md pl-2.5 pr-2.5 hover:bg-slate-200">
              <Link to="/">Home</Link>
            </li>
            <li className="rounded-md pl-2.5 pr-2.5 hover:bg-slate-200">
              <Link to="/Gallery">Gallery</Link>
            </li>
            <li className="rounded-md pl-2.5 pr-2.5 hover:bg-slate-200">
              <Link to="/Services">Services</Link>
            </li>
            <li className="rounded-md pl-2.5 hover:bg-slate-200">
              <Link to="/Contact">Contact</Link>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
