"use client";
import Image from "next/image";
import React from "react";
import { motion } from "framer-motion";
export default function RecipeCard({
  image,
  name,
  price,
}: {
  image: string;
  name: string;
  price: number;
}) {
  return (
    <div className="group  p-4 shadow-lg  rounded-lg bg-gray-100 flex flex-col justify-center items-center gap-5">
      <motion.div>
        <Image
          src={image}
          alt="Recipe Image"
          width={200}
          height={200}
          className="h-[200px] object-contain
          group-hover:scale-110 transition-transform group-hover:translate-y-[-50px] group-hover:translate-x-10 group-hover:rotate-[50deg] duration-300 ease-in-out  rounded-lg"
        />
      </motion.div>
      <button className="p-2 cursor-pointer hover:scale-110 lg:hidden group-hover:block transition-all duration-300 px-4 rounded-full bg-green-700 text-white font-semibold">
        Buy Now
      </button>
      <div>
        <h1 className="text-lg  mb-1 font-semibold text-center ">{name}</h1>
        <p className="text-[var(--highlighted-color)] font-semibold text-lg text-center">
          ${price}
        </p>
      </div>
    </div>
  );
}
