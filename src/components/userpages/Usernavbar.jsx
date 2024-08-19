import React, { useState } from 'react';
import { FaBell, FaUser } from 'react-icons/fa';
import { HiMenu } from 'react-icons/hi';
import { IoClose } from 'react-icons/io5';
import { Link } from 'react-router-dom';

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <nav className="fixed top-0 left-0 w-full bg-neutral shadow-md z-50">
      <div className="container mx-auto flex items-center justify-between p-4">
        {/* Logo */}
        <div className="text-xl font-semibold">
          <a href="#" className="text-white">Logo</a>
        </div>

        {/* Desktop Menu */}
        <div className="hidden md:flex items-center space-x-4">
          {/* Placeholder for additional links */}
        </div>

        {/* Icons (Right side) */}
        <div className="flex items-center space-x-4">
          {/* Notification Icon */}
          <button className="relative p-2 text-gray-600 hover:text-gray-900 transition">
            <FaBell className="w-6 h-6 text-white" />
          </button>

          {/* User Icon */}
          <button className="p-2 text-gray-600 hover:text-red-500 transition">
            <FaUser className="w-6 h-6 text-white" />
          </button>

          {/* Hamburger Icon */}
          <button className="md:hidden p-2 text-white hover:text-gray-900 transition" onClick={toggleMenu}>
            {isMenuOpen ? <IoClose className="w-6 h-6" /> : <HiMenu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <div className={`md:hidden fixed inset-0 flex justify-center items-start transition-transform transform ${isMenuOpen ? 'translate-y-0' : '-translate-y-full'}`}>
        <div className="bg-gray-500 shadow-md rounded-t-lg w-full   p-4">
          <div className="flex flex-col  items-center">
            {/* Mobile Links */}
            <Link to="/userdashboard" className="py-2 text-white hover:text-green-500">Dashboard</Link>
            <Link to ="/application" className="py-2 text-white hover:text-green-500">My Application</Link >
            <Link to="#" className="py-2 text-white hover:text-green-500">Profile</Link >
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
