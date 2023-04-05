import React, { useState } from "react";
import { AiOutlineMenu, AiOutlineClose } from "react-icons/ai";

const Navbar = () => {
  const [nav, setNav] = useState(false);
  const handleNaV = () => {
    setNav(!nav);
  };

  return (
    <div className="bg-[var(--nav-bg)] w-full h-[90px] fixed z-30">
      <nav className=" max-w-[1240px] mx-auto px-4 flex justify-between h-full items-center">
        <div>
          <h1 className="text-[var(--main-green)]">WORKOUT</h1>
        </div>
        <div className="md:flex hidden">
          <ul className="flex text-[var(--f6-color)] items-center font-medium">
            <li>
              <a href="#home">Home</a>
            </li>
            <li>
              <a href="#classes">Classes</a>
            </li>
            <li>
              <a href="#community">Pricing</a>
            </li>
            <li>
              <a href="#community">Community</a>
            </li>
            <li>
              <a href="#contactUs">Contact Us</a>
            </li>
            <button className="ml-3">Select</button>
          </ul>
        </div>
        {/* Hamburger */}
        <div onClick={handleNaV} className="md:hidden block ">
          {nav ? (
            <AiOutlineClose
              size={25}
              className="text-[var(--f6-color)] cursor-pointer"
            />
          ) : (
            <AiOutlineMenu
              size={25}
              className="text-[var(--f6-color)] cursor-pointer"
            />
          )}
        </div>
        {/* Mobile nav list */}
        <div
          className={
            nav
              ? "absolute flex-col bg-[var(--nav-bg)] text-[var(--f6-color)] top-[89px] w-full left-0 text-center flex justify-center"
              : "hidden"
          }
        >
          <ul className="font-medium">
            <li className="mobile-nav-li text-xl my-5">
              <a href="#home">Home</a>
            </li>
            <li className="mobile-nav-li text-xl my-5">
              <a href="#classes">Classes</a>
            </li>
            <li className="mobile-nav-li text-xl my-5">
              <a href="#community">Pricing</a>
            </li>
            <li className="mobile-nav-li text-xl my-5">
              <a href="#community">Community</a>
            </li>
            <li className="mobile-nav-li text-xl my-5">
              <a href="#contactUs">Contact Us</a>
            </li>
            <button className="mt-3 mb-7">Select</button>
          </ul>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
