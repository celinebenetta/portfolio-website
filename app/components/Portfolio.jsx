import { assets, serviceData } from "@/assets/assets";
import Image from "next/image";
import React from "react";
import { motion } from "motion/react";

const Portfolio = () => {
  return (
    <motion.div
      id="portfolio"
      className="w-full px-[12%] py-10 scroll-mt-20"
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 1 }}
    >
      <motion.h4
        initial={{ opacity: 0, y: -20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.3 }}
        className="text-center mb-2 text-lg"
      >
        Portfolio
      </motion.h4>
      <motion.h2
        initial={{ opacity: 0, y: -20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.5 }} 
        className="text-center text-5xl">
        My projects
      </motion.h2>
      <motion.p
        initial={{opacity: 0}}
        whileInView={{opacity: 1}}
        transition={{duration: 0.5, delay: 0.7}} 
        className="text-center max-w-2xl mx-auto mt-5 mb-12">
        Prior experience in data science projects, such as regression, classification, clustering models.
        Other projects stem from personal interest include website and mobile application devevlopment.
      </motion.p>
      <motion.div 
        initial={{opacity: 0}}
        whileInView={{opacity: 1}}
        transition={{duration: 0.6, delay: 0.9}}
        className="grid grid-auto-fit gap-6 my-10">
        {serviceData.map(({ icon, title, description, link }, index) => (
          <motion.div
            whileHover={{scale: 1.1}}
            key={index}
            className="border border-gray-400 rounded-lg px-8 py-12 hover:shadow-[4px_4px_0_#000] cursor-pointer hover:bg-lightHover hover:-translate-y-1 duration-500 dark:hover:bg-darkHover dark:hover:shadow-white"
          >
            <Image alt={title} src={icon} className="w-10" />
            <h3 className="text-lg my-4 text-gray-700 dark:text-white">
              {title}
            </h3>
            <p className="text-sm text-gray-600 leading-5 dark:text-white/80">
              {description}
            </p>
            <a href={link} className="flex items-center gap-2 text-sm mt-5">
              Read more{" "}
              <Image
                alt="read-more-arrow"
                src={assets.right_arrow}
                className="w-4"
              />
            </a>
          </motion.div>
        ))}
      </motion.div>
    </motion.div>
  );
};

export default Portfolio;
