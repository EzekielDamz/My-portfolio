import React from "react";
import { FaSquareXTwitter } from "react-icons/fa6";
import { FaFacebook } from "react-icons/fa";
import { IoLogoWhatsapp } from "react-icons/io";

const SocialMedia = () => {
  return (
    <div className="">
      <hr />
      <div className="flex justify-center">
        <h1 className="text-white font-KodeMono text-2xl mt-3">Let Connect On</h1>
      </div>
      <div className="flex justify-center mt-4 pb-3 gap-10">
        <a href="https://twitter.com/dammy_zek_dor">
          <button>
            <FaSquareXTwitter className="text-blue-200 text-3xl" />
          </button>
        </a>

        <a href="https://www.facebook.com/profile.php?id=100008397045730">
          <button>
            <FaFacebook className="text-blue-200 text-3xl" />
          </button>
        </a>
        <a href="https://wa.me/message/DFMNF2AIM5C2G1">
          <button>
            <IoLogoWhatsapp className="text-blue-200 text-3xl" />
          </button>
        </a>
      </div>
    </div>
  );
};

export default SocialMedia;
