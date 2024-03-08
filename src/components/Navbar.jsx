import React from "react";
import { Navlinks } from "../constants";
import { Link } from "react-scroll";

import HeadName from "./HeadName";

const Navbar = () => {
  return (
    <nav className=" ">
      <div className="flex justify-center gap-10 ">
        {Navlinks.map((nav, index) => (
          <ul key={index} className="max-sm:hidden max-md:hidden">
            <li className="">
              <Link
                to={nav.to}
                smooth={true}
                duration={500}
                className="text-white cursor-pointer hover:text-blue-500 font-KodeMono text-2xl"
              >
                {nav.href}
              </Link>
            </li>
          </ul>
        ))}

        <div className="max-sm:hidden max-md:hidden">
          <HeadName />
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
