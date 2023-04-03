import React from "react";

const Navbar = () => {
  return (
    <div className="bg-[var(--nav-bg)] w-full h-[90px]">
      <nav className=" max-w-[1240px] mx-auto px-4 flex justify-between h-full items-center">
        <div>
          <h1 className="text-[var(--main-green)]">WORKOUT</h1>
        </div>
        <div>
          <ul className="flex text-[var(--f6-color)] items-center">
            <li>Platform</li>
            <li>Classes</li>
            <li>Community</li>
            <li>About</li>
          <button className="ml-3">Select</button>
          </ul>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
