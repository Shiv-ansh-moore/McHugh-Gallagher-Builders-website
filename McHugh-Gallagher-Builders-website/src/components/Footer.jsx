import React from "react";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="bg-gray-800 text-gray-300 py-10">
      <div className="max-w-6xl mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between">
          <div className="mb-6 md:mb-0 md:w-1/3">
            <h3 className="text-xl font-semibold mb-4">About Us</h3>
            <p className="text-gray-400">
              McHugh &amp; Gallagher Builders Ltd has over 40 years of
              experience in the construction industry, offering top-notch
              services in new builds, extensions, renovations, and interiors.
            </p>
          </div>
          <div className="mb-6 md:mb-0 md:w-1/3">
            <h3 className="text-xl font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <Link to="/" className="hover:text-yellow-300">
                  Home
                </Link>
              </li>
              <li>
                <Link to="/Services" className="hover:text-yellow-300">
                  Services
                </Link>
              </li>
              <li>
                <Link to="/Projects" className="hover:text-yellow-300">
                  Projects
                </Link>
              </li>
              <li>
                <Link to="/Contact" className="hover:text-yellow-300">
                  Contact
                </Link>
              </li>
            </ul>
          </div>
          <div className="md:w-1/3">
            <h3 className="text-xl font-semibold mb-4">Contact Us</h3>
            <p className="text-gray-400">
              <strong>Address:</strong> Cliffoney
            </p>
            <p className="text-gray-400">
              <strong>Email:</strong> mchughandgallagher@gmail.com
            </p>
            <p className="text-gray-400">
              <strong>Phone:</strong> +353 87 241 6400
            </p>
          </div>
        </div>
        <div className="border-t border-gray-700 my-6"></div>
        <div className="flex flex-col md:flex-row items-center justify-between">
          <p className="text-sm text-gray-500">
            &copy; {new Date().getFullYear()} McHugh &amp; Gallagher Builders
            Ltd. All rights reserved.
          </p>
          <div className="flex space-x-4 mt-4 md:mt-0">
            <a
              href="https://www.facebook.com/Sligobuilder/"
              className="text-gray-400 hover:text-yellow-300"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6"
                fill="currentColor"
                viewBox="0 0 24 24"
              >
                <path d="M22.675 0h-21.35c-.731 0-1.325.594-1.325 1.325v21.351c0 .73.594 1.324 1.325 1.324h11.494v-9.294h-3.125v-3.622h3.125v-2.671c0-3.1 1.894-4.788 4.658-4.788 1.325 0 2.466.099 2.797.143v3.24h-1.918c-1.504 0-1.794.715-1.794 1.763v2.313h3.587l-.467 3.622h-3.12v9.294h6.116c.73 0 1.324-.594 1.324-1.325v-21.35c0-.731-.594-1.325-1.325-1.325z" />
              </svg>
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
