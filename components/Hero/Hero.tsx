"use client";
import Image from "next/image";
import React from "react";
import { IoCartOutline } from "react-icons/io5";
import { motion } from "framer-motion";

export default function Hero() {
  return (
    <div className="flex  items-center lg:flex-row flex-col-reverse justify-center gap-5">
      <div className="w-full pl-4 lg:pl-10">
        <motion.h1
          initial={{ opacity: 0, y: 50 }}
          transition={{ duration: 0.5 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className={` my-4 font-extrabold md:text-6xl text-4xl`}
        >
          Desire{" "}
          <span className="px-3  py-1 transform  text-white rounded-lg bg-[var(--focus-bg)] inline-block">
            Food
          </span>{" "}
          For your Taste
        </motion.h1>
        <motion.p
          initial={{ opacity: 0, y: 50 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Quos
          temporibus perspiciatis soluta?
        </motion.p>
        <motion.button
          initial={{ opacity: 0, y: 50 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="flex items-center cursor-pointer hover:scale-110 duration-300 justify-center gap-2 px-4 py-2 mt-4 text-lg font-semibold text-white bg-green-800 rounded-full "
        >
          <span>
            <IoCartOutline />
          </span>
          <p>Buy Now</p>
        </motion.button>
      </div>
      <div className="overflow-x-hidden w-full">
        <motion.div
        initial={{ opacity: 0, x: 100 }}
        transition={{ duration: 0.5 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true }}
        >
          <Image
            src={"/images/burger.png"}
            alt="Burger"
            className="lg:w-[500px] lg:h-[500px] mx-auto md:w-[400px] md:h-[400px] h-[350px] object-contain w-[350px]"
            width={500}
            height={500}
          />
        </motion.div>
      </div>
    </div>
  );
}
