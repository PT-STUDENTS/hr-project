import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { MdDashboard } from "react-icons/md";
import { CiMemoPad } from "react-icons/ci";
import { FaUser } from 'react-icons/fa';
import { HiOutlineLogout } from 'react-icons/hi';

const Sidebar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleSidebar = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="relative">
      {/* Toggle Button for Small Screens */}
      <button 
        onClick={toggleSidebar} 
        className="p-4 text-white bg-blue-500 rounded-md md:hidden"
        aria-label="Toggle Sidebar"
      >
        ☰
      </button>

      {/* Sidebar */}
      <div className={`fixed inset-0  bg-opacity-75 transition-opacity duration-300 ease-in-out ${isOpen ? 'opacity-100' : 'opacity-0 pointer-events-none'} md:opacity-100 md:pointer-events-auto`}>
        <div className={`fixed left-0 top-20 w-64 h-full bg-neutral shadow-lg transform transition-transform duration-300 ease-in-out ${isOpen ? 'translate-x-0' : '-translate-x-full'} md:translate-x-0 md:relative`}>
          <div className="p-4 bg-neutral w-64">
            <h2 className="text-lg font-bold text-white">Sidebar</h2>
            <ul className="mt-4 text-black font-bold text-xl">
            <li className="py-2 bg-gray-400 mt-2 pl-4 rounded-full flex items-center">
  <Link to="/userdashboard" className="flex items-center hover:text-blue-500">
    <MdDashboard className="mr-2 text-gray-200" /> 
    <span>Dashboard</span>
    <span className="mx-2 border-r border-white"></span>
  </Link> </li>

  <li className="py-2  bg-gray-400 mt-2 pl-4 rounded-full flex items-center">
  <Link to="/application" className="flex items-center hover:text-blue-500">
    <CiMemoPad className="mr-2 text-gray-200" /> 
    <span>Application</span>
    <span className="mx-2 border-r border-white"></span>
  </Link>
</li>

<li className="py-2 bg-gray-400 mt-2 pl-4 rounded-full flex items-center">
  <Link to="/userprofile" className="flex items-center hover:text-blue-500">
    <FaUser className="mr-2 text-gray-200" /> 
    <span>Profile</span>
    <span className="mx-2 border-r border-white"></span>
  </Link>
</li>
<li className="py-2 bg-gray-400 mt-2 pl-4 rounded-full flex items-center">
  <Link to="#home" className="flex items-center hover:text-blue-500">
    <HiOutlineLogout className="mr-2 text-gray-200" /> 
    <span>Logout</span>
    <span className="mx-2 border-r border-white"></span>
  </Link>
</li>
            </ul>
            <button 
              onClick={toggleSidebar} 
              className="mt-4 p-2 mt-2 text-white bg-red-500 rounded-md md:hidden"
              aria-label="Close Sidebar"
            >
              ×
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
