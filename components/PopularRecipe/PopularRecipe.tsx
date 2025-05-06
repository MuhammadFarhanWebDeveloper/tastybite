"use client";
import React from "react";
import RecipeCard from "./RecipeCard";
import { motion } from "framer-motion";
export default function PopularRecipe() {
  const recipes = [
    { image: "/images/hotDessert-1.png", name: "Chocolate Cake", price: 20 },
    { image: "/images/hotDessert-2.png", name: "Vanilla Ice Cream", price: 15 },
    {
      image: "/images/hotDessert-3.png",
      name: "Strawberry Cheesecake",
      price: 25,
    },
  ];

  return (
    <div>
      <motion.h1 
        initial={{ opacity: 0, y: 100 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.4 }}
        viewport={{ once: true }}
      className="text-5xl md:text-3xl font-bold text-center">
        Our Popular Recipe
      </motion.h1>
      <ul className="grid md:py-10 sm:grid-cols-2 p-4 grid-cols-1 md:grid-cols-3 gap-5 mt-10">
        {recipes.map((recipe, index) => (
          <motion.li
          initial={{ opacity: 0, y: 100 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4, delay: index * 0.2 }}
          viewport={{ once: true }}
          
           key={index} className="">
            <RecipeCard
              image={recipe.image}
              name={recipe.name}
              price={recipe.price}
            />
          </motion.li>
        ))}
      </ul>
    </div>
  );
}
