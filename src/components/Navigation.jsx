import React, { useState } from "react";

const Navigation = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <nav className="w-full bg-transparent text-black p-5 z-50">
      <div className="container mx-auto flex justify-between items-center">
        <div className="text-2xl font-bold">Akkoo</div>

        {/* Desktop Menu */}
        <ul className="hidden md:flex space-x-8">
          <li><a href="/">Home</a></li>
          <li><a href="/menu">Menu</a></li>
          <li><a href="/locations">Locations</a></li>
          <li><a href="/jobs">Jobs</a></li>
          <li><a href="/cart">🛒</a></li>
        </ul>

        {/* Hamburger Menu Button */}
        <button
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          className="md:hidden flex items-center px-3 py-2 border rounded text-black border-black hover:text-gray-400 hover:border-gray-400"
        >
          <svg
            className="fill-current h-4 w-4"
            viewBox="0 0 20 20"
            xmlns="http://www.w3.org/2000/svg"
          >
            <title>Menu</title>
            <path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z" />
          </svg>
        </button>
      </div>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="md:hidden">
          <ul className="flex flex-col space-y-4 items-center mt-4">
            <li><a href="/">Home</a></li>
            <li><a href="/menu">Menu</a></li>
            <li><a href="/locations">Locations</a></li>
            <li><a href="/jobs">Jobs</a></li>
            <li><a href="/cart">🛒</a></li>
          </ul>
        </div>
      )}
    </nav>
  );
};

export default Navigation;
