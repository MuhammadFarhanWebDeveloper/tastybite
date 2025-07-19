"use client";
import React, { useRef } from "react";
import RecipeCard from "./RecipeCard";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export default function PopularRecipe() {
  const containerRef = useRef<HTMLDivElement | null>(null);

  const recipes = [
    { image: "/images/hotDessert-1.png", name: "Chocolate Cake", price: 20 },
    { image: "/images/hotDessert-2.png", name: "Vanilla Ice Cream", price: 15 },
    {
      image: "/images/hotDessert-3.png",
      name: "Strawberry Cheesecake",
      price: 25,
    },
  ];

  useGSAP(() => {
    // Animate title
    gsap.from("#popularTitle", {
      x: -100,
      opacity: 0,
      duration: 1,
      ease: "power2.out",
      scrollTrigger: {
        trigger: "#popularTitle",
        start: "top 80%",
      },
    });

    // Animate each card
    gsap.from(".popular-card", {
      y: 100,
      opacity: 0,
      duration: 0.6,
      stagger: 0.3,
      ease: "power2.out",
      scrollTrigger: {
        trigger: containerRef.current,
        start: "top 80%",
      },
    });
  }, { scope: containerRef });

  return (
    <div ref={containerRef}>
      <h1
        id="popularTitle"
        className="text-5xl md:text-3xl font-bold text-center"
      >
        Our Popular Recipe
      </h1>

      <ul className="grid md:py-10 sm:grid-cols-2 p-4 grid-cols-1 md:grid-cols-3 gap-5 mt-10">
        {recipes.map((recipe, index) => (
          <li key={index} className="popular-card">
            <RecipeCard
              image={recipe.image}
              name={recipe.name}
              price={recipe.price}
            />
          </li>
        ))}
      </ul>
    </div>
  );
}
