import { assets, infoList, socialMedia } from "@/assets/assets";
import Image from "next/image";
import React from "react";
import { motion } from "motion/react";
import Link from "next/link";

const Header = () => {
  return (
    <div className="w-11/12 max-w-3xl text-center mx-auto h-screen flex flex-col items-center justify-center gap-4">
      <motion.h3
        initial={{ y: -20, opacity: 0 }}
        whileInView={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.6, delay: 0.3 }}
        className="flex items-end gap-2 text-xl md:text-2xl mb-3"
      >
        Hi! <br /> I'm Franceline Benetta
        <Image alt="hand" src={assets.hand_icon} className="w-6" />
      </motion.h3>
      <motion.h1
        initial={{ y: -30, opacity: 0 }}
        whileInView={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.8, delay: 0.5 }}
        className="text-3xl sm:text-6xl lg:text-[66px]"
      >
        Analyst looking to learn something new.
      </motion.h1>
      <motion.p
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.6, delay: 0.7 }}
        className="max-w-2xl mx-auto text-white/50"
      >
      This website was made this for fun and self-learning purposes.
      </motion.p>
      <motion.ul
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.8, delay: 1 }}
        className="grid grid-cols-2 gap-6 max-w-2xl"
      >
        {socialMedia.map(({ iconDark, link }, index) => (
          <motion.li
            whileHover={{ scale: 1.05 }}
            key={index}
            className="cursor-pointer"
          >
            <Link
              target="_blank"
              href={link}
            >
              <Image alt="" src={iconDark} className="w-7 mt-3" />
            </Link>
          </motion.li>
        ))}
      </motion.ul>
    </div>
  );
};

export default Header;
