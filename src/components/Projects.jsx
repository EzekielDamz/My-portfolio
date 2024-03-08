import React from "react";
import { AboutPic } from "../assets/image";
// import { FaGithub } from "react-icons/fa6";
import { motion } from "framer-motion";

const Projects = () => {
  return (
    <div
      className="xl:mx-[8rem] mt-[5.5rem] max-sm:mx-[3rem] sm:mx-[3rem]"
      id="project"
    >
      <div className="text-center ">
        <h1 className="text-white text-3xl  max-sm:text-2xl max-sm:-mb-12 font-KodeMono">
          Featured Projects
        </h1>
      </div>

      <motion.div
        initial={{ x: -300 }}
        whileInView={{ x: 0 }}
        transition={{
          duration: 2,
          delay: 0.5,
        }}
        className="grid grid-cols-2 mt-20 gap-10 max-sm:grid-cols-1 "
      >
        <div className="">
          <h2 className="text-white text-2xl max-sm:text-xl mb-5 font-KodeMono">
            First Project
          </h2>
          <p className="text-white font-KodeMono text-xl  max-sm:text-lg font-extralight">
            A dice game application where two user can play simultanoeuly. A
            user can set a winning score, the first person to meet the preset
            score wins the game. <br />
            <span className="text-3xl">Note</span>: Play this game on a
            landscape screen
          </p>
          <div className="text-blue-600  text-4xl w-[4rem] mt-3">
            {/* <FaGithub /> */}
          </div>
        </div>
        <div className="w-[18rem] h-[19.8rem] border ml-5 rounded-lg">
          <img
            src={AboutPic}
            alt=""
            height={360}
            width={280}
            className="-mt-[2.3rem] ml-5  rounded-lg"
          />
        </div>
      </motion.div>

      <motion.div
        initial={{ x: -300 }}
        whileInView={{ x: 0 }}
        transition={{
          duration: 2,
          delay: 0.5,
        }}
        className="grid grid-cols-2 mt-20 gap-10 max-sm:grid-cols-1 "
      >
        <div className="w-[18rem] h-[19.8rem] border ml-5 rounded-lg">
          <img
            src={AboutPic}
            alt=""
            height={360}
            width={280}
            className="-mt-[2.3rem] -ml-9  rounded-lg"
          />
        </div>
        <div className="max-sm:-order-last">
          <h2 className="text-white text-2xl max-sm:text-xl mb-4 font-KodeMono">
            Second Project
          </h2>
          <p className="text-white mb-5 font-KodeMono max-sm:text-lg ">
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Incidunt
            reprehenderit architecto accusantium cum quaerat tempora, dolorem ex
          </p>
          <div className="text-blue-600  text-4xl w-[4rem] mt-3">
            {/* <FaGithub /> */}
          </div>
        </div>
      </motion.div>
    </div>
  );
};

export default Projects;
