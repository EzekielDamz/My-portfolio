import React from "react";
import { FaHtml5 } from "react-icons/fa6";
import { IoLogoCss3 } from "react-icons/io";
import { SiTailwindcss } from "react-icons/si";
import { IoLogoJavascript } from "react-icons/io5";
import { FaReact } from "react-icons/fa";

const Experience = () => {
  return (
    <div className="mb-14">
      <h1 className="text-white text-center text-3xl font-KodeMono">
        Experience
      </h1>
      <div className="flex justify-center text-white font-KodeMono text-lg my-5 gap-20 max-sm:flex max-sm:gap-6 max-sm:text-sm">
        <div>
          <FaHtml5 className="text-3xl" />
          <h4 className="">HTML</h4>
        </div>
        <div>
          <IoLogoCss3 className="text-3xl" />
          <h4>CSS</h4>
        </div>
        <div>
          <SiTailwindcss className="text-3xl" />
          <h4>TAILWIND</h4>
        </div>
        <div>
          <IoLogoJavascript className="text-3xl" />
          <h4>JAVASCRIPT</h4>
        </div>
        <div>
          <FaReact className="text-3xl" />
          <h4>REACT</h4>
        </div>
      </div>
    </div>
  );
};

export default Experience;
