import React from "react";
import { Navlinks } from "../constants";
import { Link } from "react-scroll";

const MenuDrop = () => {
  return (
    <div className=" justify-center gap-5 ">
      {Navlinks.map((nav, index) => (
        <ul key={index} className="max-sm:block max-md:block">
          <li className="py-3">
            <Link
              to={nav.to}
              smooth={true}
              duration={500}
              className="text-white text-xl cursor-pointer hover:text-blue-500 font-KodeMono"
            >
              {nav.href}
            </Link>
          </li>
        </ul>
      ))}
    </div>
  );
};

export default MenuDrop;
