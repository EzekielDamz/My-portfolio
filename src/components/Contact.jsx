import { HiOutlineMail } from "react-icons/hi";
import { FaPhoneAlt } from "react-icons/fa";
import ContactForm from "./ContactForm";
import { motion } from "framer-motion";

const Contact = () => {
  return (
    <motion.div
      initial={{ Y: -100 }}
      whileInView={{ Y: 0 }}
      transition={{
        duration: 3,
        delay: 2,
      }}
      className="xl:mx-[8rem] mt-[5.5rem] max-sm:mx-[1rem] sm:mx-[3rem] pb-5 max-sm:ring-1 max-sm:p-4 max-sm:rounded-xl max-sm:mb-5"
      id="contact"
    >
      <h1 className="text-white text-center text-3xl max-sm:text-2xl font-semibold mb-8 font-KodeMono">
        CONTACT
      </h1>
      <div className="flex gap-10 max-sm:block">
        <div>
          <h3 className="text-white text-2xl  max-sm:text-xl mb-5 font-medium font-KodeMono">
            Drop Me a Message
          </h3>
          <p className="text-white font-KodeMono text-lg font-light max-sm:text-sm">
            Reach out to me let discuss about your project or just say Hii and I
            will reply you less than 12hours..
          </p>
          <div className="my-5 ">
            <div className="flex gap-5 mb-5">
              <HiOutlineMail className="bg-blue-400 text-white cursor-pointer text-5xl max-sm:text-3xl p-1 rounded-lg" />
              <button
                className="text-white text-lg max-sm:text-sm font-KodeMono"
                onClick={() =>
                  (window.location = "mailto:damilaredolapo@gmail.com")
                }
              >
                Damilaredolapo@gmail.com
              </button>
            </div>
            <div className="flex gap-5 ">
              <FaPhoneAlt className="bg-blue-400 text-white cursor-pointer text-5xl p-1 max-sm:text-3xl rounded-lg" />
              <button
                className="text-white text-lg max-sm:text-sm font-KodeMono"
                onClick={() => window.open("tel: 07037384175")}
              >
                +234-7037-384175
              </button>
            </div>
          </div>
        </div>
        <div className="">
          <ContactForm />
        </div>
      </div>
    </motion.div>
  );
};

export default Contact;
