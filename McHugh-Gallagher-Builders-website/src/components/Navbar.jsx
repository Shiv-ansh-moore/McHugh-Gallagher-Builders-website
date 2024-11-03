import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <div className="sticky top-0 z-50">
      <div className="flex font-bob  bg-slate-100 h-[57px]">
        <Link to="/" className="pl-1 mt-auto font-bold text-2xl ml-[4vw]">
          <h1>McHugh & Gallagher Builders Ltd</h1>
        </Link>
        <div className="ml-auto mt-auto text-lg mr-[4vh]">
          <ul className="flex">
            <li className="pl-2.5 pr-2.5 hover:bg-slate-200">
              <Link to="/">Home</Link>
            </li>
            <li className="pl-2.5 pr-2.5 hover:bg-slate-200">
              <Link to="/Gallery">Gallery</Link>
            </li>
            <li className="pl-2.5 pr-2.5 hover:bg-slate-200">
              <Link to="/Services">Services</Link>
            </li>
            <li className="pl-2.5 pr-5 hover:bg-slate-200">
              <Link to="/Contact">Contact</Link>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
