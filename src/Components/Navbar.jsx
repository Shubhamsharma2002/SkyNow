import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars, faXmark } from "@fortawesome/free-solid-svg-icons";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="bg-blue-900 p-3">
      <div className="flex justify-around items-center">
        <div className="flex items-center space-x-2 text-white font-bold text-xl">
          <img src="/logo.ico" alt="Web logo" className="w-8 h-8 rounded " />
          <span>Skynow</span>
        </div>

        {/* Mobile menu button */}
        <button
          className="text-white md:hidden"
          onClick={() => setIsOpen(!isOpen)}
        >
          <FontAwesomeIcon icon={isOpen ? faXmark : faBars} size="lg" />
        </button>

        {/* Desktop menu */}
        <div className="hidden md:flex space-x-6 text-white">
          <a href="/about">About</a>
          <a href="#">Contact</a>
        </div>
      </div>

      {/* Mobile dropdown */}
      {isOpen && (
        <div className="flex flex-col mt-2 text-center space-y-2 text-white md:hidden">
          <a href="#">About</a>
          <a href="#">Contact</a>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
