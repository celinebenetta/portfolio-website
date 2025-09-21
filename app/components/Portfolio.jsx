import { assets, serviceData } from "@/assets/assets";
import Image from "next/image";
import React from "react";
import { motion } from "motion/react";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { Card, CardContent } from "@/components/ui/card";

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
        className="text-center text-5xl"
      >
        My projects
      </motion.h2>
      <motion.p
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.5, delay: 0.7 }}
        className="text-center max-w-2xl mx-auto mt-5 mb-12"
      >
        Prior experience in data science projects, such as regression,
        classification, clustering models. Other projects stem from personal
        interest include website and mobile application devevlopment.
      </motion.p>

      <Carousel
        className="w-full justify-center items-center"
        opts={{
          loop: true,
          align: "center",
        }}
      >
        <CarouselContent className="-ml-1">
          {serviceData.map(({ title, description, link }, index) => (
            <CarouselItem
              key={index}
              className="pl-3 md:basis-1/2 lg:basis-1/3 justify-center items-center"
            >
              <div className="p-3">
                <Card className="flex h-[250px] ">
                  <CardContent className="flex justify-center items-center p-6">
                    <span className="text-2xl font-semibold">
                      <h2 className="text-lg my-4 text-white">{title}</h2>
                      <p className="text-sm text-gray-600 leading-5 text-white/80">
                        {description}
                      </p>
                      <a
                        href={link}
                        className="flex items-center gap-2 text-sm mt-5"
                      >
                        Read more
                        <Image
                          alt="read-more-arrow"
                          src={assets.right_arrow}
                          className="w-4"
                        />
                      </a>
                    </span>
                  </CardContent>
                </Card>
              </div>
            </CarouselItem>
          ))}
        </CarouselContent>
        <CarouselPrevious />
        <CarouselNext />
      </Carousel>
    </motion.div>
  );
};

export default Portfolio;
