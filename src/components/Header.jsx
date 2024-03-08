import React from "react";
import Navbar from "./Navbar";
// import { HiOutlineMenuAlt2 } from "react-icons/hi";
// import { RiCloseLine } from "react-icons/ri";
import { useState } from "react";
import MenuDrop from "./MenuDrop";
import HeadName from "./HeadName";
const Header = () => {
  const [showMenu, setShowMenu] = useState(false);
  const displayMenu = () => {
    setShowMenu(!showMenu);
  };
  return (
    <header>
      <Navbar />
      <div className="  flex justify-between  mx-5 my-5 ">
        {!showMenu && (
          <div className="hidden max-sm:block max-md:block">
            <HeadName />
          </div>
        )}
        <div className="flex justify-end">
          <button
            onClick={displayMenu}
            className="hidden max-sm:block  max-md:block "
          >
            {showMenu ? (
              <div className="text-white text-3xl">
                {/* <RiCloseLine /> */}
              </div>
            ) : (
              <div className="text-white text-3xl">
                {/* <HiOutlineMenuAlt2 /> */}
              </div>
            )}
          </button>
        </div>
      </div>
      <div className="flex">
        {showMenu && (
          <div className=" ml-[10rem]">
            <MenuDrop />
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;
