import { assets } from "@/assets/assets";
import Image from "next/image";
import React from "react";

const Footer = (isDarkMode) => {
  return (
    <div className="mt-20">
      <div className="text-center">
        <div className="flex w-max items-center mx-auto gap-2">
          <Image
            alt="mail-icon"
            src={assets.mail_icon}
            className="w-6"
          />
          celinebenetta@gmail.com
        </div>
      </div>
      <div className="text-center sm:flex items-center justify-between border-t border-gray-400 mx-[10%] mt-12 py-6">
        <p>All rights reserved.</p>
        <ul className="flex items-center gap-10 justify-center mt-4 sm:mt-0">
          <Image
            alt='flaticon'
            src={assets.flaticon_icon}
            className="w-7 mt-3"
          />
        </ul>
      </div>
    </div>
  );
};

export default Footer;
