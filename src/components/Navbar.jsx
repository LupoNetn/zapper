import React, { useState } from "react";
import { Menu, X } from "lucide-react";

const navLinks = [
  { name: "Home" },
  { name: "Features" },
  { name: "How it Works" },
  { name: "Pricing" },
  { name: "Contact" },
];

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState();

  const toggleMenu = () => {
    setMenuOpen((prev) => !prev);
  };
  return (
    <>
      <nav className="border-b border-gray-300 rounded-2xl mx-4 my-4 md:my-10 lg:mx-25 md:mx-10 bg-white/90 backdrop-blur-md shadow-md">
        <div className="flex justify-between items-center px-8 py-4">
          {/* Logo */}
          <div>
            <h1 className="font-bold text-xl">ZAPPr.</h1>
          </div>
          {/* Links */}
          <ul className="hidden sm:flex gap-6">
            {navLinks.map((link) => (
              <li className="text-gray-500 font-bold">{link.name}</li>
            ))}
          </ul>

          {/* nav cta */}
          <button className="hidden sm:block text-white bg-black/90 py-2 px-4 rounded-xl text-sm shadow-md border">
            Sign Up
          </button>

          {/* Mobile Nav */}

          <div className="relative sm:hidden">
            <button
              onClick={toggleMenu}
              className="sm:hidden text-white bg-black/90 py-2 px-4 rounded-xl text-sm shadow-md border cursor-pointer hover:opacity-[0.7] transition-all duration-300"
            >
              {menuOpen ? (
                <X />
              ) : (
                <>
                  <div className="flex items-center gap-3">
                    <Menu size={25} />
                  </div>
                </>
              )}
            </button>

            {menuOpen && (
              <div className="absolute top-20 right-4 bg-white py-4 px-3 w-[180px] rounded-xl shadow-lg">
                <ul className="sm:hidden gap-6">
                  {navLinks.map((link) => (
                    <li className="text-gray-500 font-bold">{link.name}</li>
                  ))}
                </ul>
              </div>
            )}
          </div>
        </div>
      </nav>
    </>
  );
};

export default Navbar;
