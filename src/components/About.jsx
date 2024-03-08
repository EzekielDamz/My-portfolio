import React from "react";
import { AboutPic } from "../assets/image";
import { Link } from "react-scroll";
import { motion } from "framer-motion";

const About = () => {
  return (
    <motion.main
      initial={{ x: -300 }}
      whileInView={{ x: 0 }}
      transition={{
        duration: 2,
        delay: 0,
      }}
      className="grid grid-cols-2 xl:mx-[8rem]  sm:mx-[3rem]  mt-[10rem] pb-20 
      max-sm:grid-cols-1 max-sm:mx-[3rem]"
      id="about"
    >
      <div className="w-[18rem] h-[19.8rem] border ml-5 rounded-lg mt-10 ">
        <img
          src={AboutPic}
          alt="profile"
          className="-mt-[2.3rem] -ml-9 rounded-lg h-auto max-w-full "
        />
      </div>
      <div>
        <h2 className="text-white text-4xl max-sm:text-3xl mb-5 max-sm:mt-8 font-KodeMono">
          ABOUT ME
        </h2>
        <p className="text-white text-xl max-sm:text-lg font-KodeMono font-extralight">
          Hey!!!! I'm
          <span className="text-blue-400 text-2xl font-bold">
            {" "}
            Damilare Jimoh
          </span>{" "}
          , a passionate Frontend Developer with a flair for crafting seamless
          user experiences. In the ever-evolving world of web technology, I
          thrive on translating design into code, blending creativity with
          functionality.
        </p>
        {/* <div className=" flex mt-8 gap-8"> */}
        <div className="mt-5">
          <Link to="contact">
            <button className="btn-style py-3 px-14 rounded-lg font-KodeMono text-2xl">
              HIRE ME
            </button>
          </Link>
        </div>
      </div>
    </motion.main>
  );
};

export default About;
