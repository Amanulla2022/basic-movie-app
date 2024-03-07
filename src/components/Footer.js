import React from "react";
import { FaFacebook, FaInstagram, FaTwitter, FaGithub } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="bg-black">
      <div className="mx-auto max-w-5xl px-4 py-16 sm:px-6 lg:px-8">
        <ul className=" flex justify-center gap-6 md:gap-8 mt-12">
          <li className="text-gray-500 hover:text-green-400">
            <a href="#">
              <FaFacebook />
            </a>
          </li>
          <li className="text-gray-500 hover:text-green-400">
            <a href="#">
              <FaInstagram />
            </a>
          </li>
          <li className="text-gray-500 hover:text-green-400">
            <a href="#">
              <FaTwitter />
            </a>
          </li>
          <li className="text-gray-500 hover:text-green-400">
            <a href="#">
              <FaGithub />
            </a>
          </li>
        </ul>
      </div>
    </footer>
  );
};

export default Footer;
