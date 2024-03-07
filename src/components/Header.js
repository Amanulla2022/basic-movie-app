import React from "react";
import { GiHamburgerMenu } from "react-icons/gi";

const Header = () => {
  return (
    <header className="w-full fixed top-0 z-20 bg-black ">
      <div className="w-full  flex justify-evenly items-center p-4 flex-wrap">
        <a href="#" className="flex justify-center items-center">
          <h1 className="text-white text-xl font-semibold">MoviesApp</h1>
        </a>
        <div className=" hidden md:flex gap-6 font-medium">
          <ul className="flex gap-6">
            <li>
              <a href="#" className="text-white hover:text-green-400">
                Home
              </a>
            </li>
            <li>
              <a
                href="#"
                className="text-white hover:text-green-400"
                style={{ color: "rgb(74,222,128)" }}
              >
                Movies
              </a>
            </li>
            <li>
              <a href="#" className="text-white hover:text-green-400">
                TV Shows
              </a>
            </li>
            <li>
              <a href="#" className="text-white hover:text-green-400">
                Cartoons
              </a>
            </li>
            <li>
              <a href="#" className="text-white hover:text-green-400">
                Contact
              </a>
            </li>
          </ul>
        </div>
        <div className="flex gap-4 items-center">
          <button className="bg-green-700 text-white font-medium cursor-pointer text-sm py-2 px-4 rounded-lg hover:bg-green-800 transition-colors">
            Login
          </button>
          <i className="bx bx-menu text-4xl text-white md:hidden">
            <GiHamburgerMenu />
          </i>
        </div>
      </div>
    </header>
  );
};

export default Header;
