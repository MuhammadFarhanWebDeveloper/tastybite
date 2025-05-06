"use client";
import React from "react";
import { motion } from "framer-motion";
import HotDessertCard from "./HotDessertCard";
function HotDesserts() {
  return (
    <div className="">
      <motion.h1
        initial={{ opacity: 0, y: 100 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        viewport={{ once: true, amount: 1 }}
        className="text-2xl my-5 mb-10 md:text-3xl font-bold "
      >
        Hot Desserts
      </motion.h1>
      <ul className="grid gap-4 grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
        <motion.li
          initial={{ opacity: 0, y: 100 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.1 }}
          viewport={{ once: true, amount: 1 }}
        >
          <HotDessertCard
            image="/images/hotDessert-1.png"
            title="Hot Cake"
            price={5}
          />
        </motion.li>
        <motion.li
          initial={{ opacity: 0, y: 100 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          viewport={{ once: true, amount: 1 }}
        >
          <HotDessertCard
            image="/images/hotDessert-1.png"
            title="Hot Cake"
            price={5}
          />
        </motion.li>
        <motion.li
          initial={{ opacity: 0, y: 100 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.3 }}
          viewport={{ once: true, amount: 1 }}
        >
          <HotDessertCard
            image="/images/hotDessert-1.png"
            title="Hot Cake"
            price={5}
          />
        </motion.li>
      </ul>
    </div>
  );
}

export default HotDesserts;
