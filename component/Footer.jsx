import React from "react";
import { FaArrowUp, FaFacebook, FaInstagram, FaSnapchatGhost, FaPinterestP, FaTwitter, FaLinkedin } from "react-icons/fa";


export default function Footer() {
  return (
    <footer className="text-center  bg-black text-white py-16 opacity-90 hover:opacity-100">
      {/* Back to Top Button */}
      <div className="flex justify-center">
        <a
          href="#home"
          className=" bottom-1 right-6 flex items-center bg-gray-800 text-white w-40 text-center px-4 py-2 rounded-full shadow-lg hover:bg-gray-600 transition duration-300"
        >
          <FaArrowUp className="mr-2" /> To the top
        </a>
      </div>

      {/* Social Icons */}
      <div className="flex justify-center space-x-6 text-3xl mt-6">
        <FaFacebook className="text-blue-600 hover:text-blue-800 cursor-pointer transition" />
        <FaInstagram className="text-pink-500 hover:text-pink-700 cursor-pointer transition" />
        <FaSnapchatGhost className="text-yellow-400 hover:text-yellow-500 cursor-pointer transition" />
        <FaPinterestP className="text-red-600 hover:text-red-800 cursor-pointer transition" />
        <FaTwitter className="text-blue-400 hover:text-blue-600 cursor-pointer transition" />
        <FaLinkedin className="text-blue-700 hover:text-blue-900 cursor-pointer transition" />
      </div>

      {/* Credits */}
      <p className="text-sm mt-4">
        Powered by{" "}
        <a
          href="https://www.w3schools.com/w3css/default.asp"
          title="W3.CSS"
          target="_blank"
          rel="noopener noreferrer"
          className="text-green-400 hover:text-green-500 transition"
        >
          Roshni Paudel
        </a>
      </p>
    </footer>
  );
}
