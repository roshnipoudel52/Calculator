import React from 'react';
import  { Link } from "react-router";
export default function Header() {
  return (
    <>
    <header className="bg-white w-full h-20 flex justify-between items-center px-10 py-10 border-2 border-r-4 border-l-4">
      {/* Brand Name */}
      <div>
        <h1 className="text-black text-xl font-bold">
          BR Architects
        </h1>
      </div>

      {/* Navigation Links */}
      <nav>
        <ul className="flex space-x-6 text-black font-sans">
          <Link to='/project'>
          <li className="cursor-pointer hover:text-blue-400">Project</li>
           </Link>

           <Link to='/about'>
           <li className="cursor-pointer hover:text-blue-400">About</li>
           </Link>
           
          <Link to='/contact'>
          <li className="cursor-pointer hover:text-blue-400">Contact</li>

           </Link>


        </ul>
      </nav>
    </header>

    </>
  );
}
