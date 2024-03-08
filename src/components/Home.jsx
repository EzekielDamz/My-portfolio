import React, { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { Link } from "react-scroll";

const textVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    // y: 0,
  },
};

const letterVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    // y: 0,
  },
};

const Home = () => {
  const text = " Hey!! I'm Frontend Developer...";
  const ref = useRef(null);
  const isInview = useInView(ref, { amount: 0.5 });

  return (
    <section
      className=" my-[10rem] max-sm:my-[5rem] xl:mx-[8rem] max-sm:mx-[3rem] md:mx-[3rem] sm:mx-[3rem] "
      id="/"
    >
      <motion.div
        variants={textVariants}
        ref={ref}
        initial="hidden"
        animate={isInview ? "visible" : "hidden"}
        transition={{ staggerChildren: 0.1 }}
      >
        {text.split("").map((char, index) => (
          <motion.span
            className="text-white xl:text-5xl max-sm:text-3xl max-md:text-4xl sm:text-3xl font-KodeMono font-bold"
            key={index}
            variants={letterVariants}
          >
            {char}
          </motion.span>
        ))}
      </motion.div>

      <div className="mt-20">
        <Link to="project">
          <button className="btn-style py-3 px-10 rounded-lg font-KodeMono text-xl">
            View Projects
          </button>
        </Link>
      </div>
    </section>
  );
};

export default Home;
