"use client";
import Image from "next/image";
import React from "react";
import { motion } from "framer-motion";
export default function OrderNow() {
  return (
    <div className="flex items-center justify-center  flex-col gap-7 md:flex-row">
      <div className="w-fit ">
        <div className="w-fit   bg-[var(--focus-bg)] rounded-full px-10 py-10">
          <motion.div
            initial={{ opacity: 0, y: 100, x: -100 }}
            whileInView={{ opacity: 1, y: 0, x: 0 }}
            whileHover={{
              scale: 1.2,
              x: 50,
              y: -50,
              transition: { duration: 0.3 },
            }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className=""
          >
            <Image
              src={"/images/buy.png"}
              alt="Food"
              className="mx-auto"
              width={300}
              height={300}
            />
          </motion.div>
        </div>
      </div>
      <div className="w-fit ">
        <motion.h1 
        initial={{ opacity: 0, y: 100 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.4 }}
        viewport={{ once: true }}


         className="text-3xl my-2 uppercase md:text-5xl font-bold md:font-extrabold">
          The Best yummy food in the town
        </motion.h1>
        <motion.p
        initial={{ opacity: 0, y: 100 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.4, delay: 0.2 }}
        viewport={{ once: true }}

        className="text-lg my-5"
        >
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Magni illum
          eos asperiores.
        </motion.p>
        <motion.button
        initial={{ opacity: 0, y: 100 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.4, delay: 0.4 }}
        viewport={{ once: true }}
         className="rounded-full px-5 py-2 cursor-pointer hover:scale-110 duration-300  my-4 font-semibold bg-green-800 text-white">
          Order Now
        </motion.button>
      </div>
    </div>
  );
}
