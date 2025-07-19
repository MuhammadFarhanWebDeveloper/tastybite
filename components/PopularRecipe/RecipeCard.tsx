"use client";
import Image from "next/image";
import React from "react";

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
    <div className="group relative p-6 rounded-2xl backdrop-blur-md shadow-xl bg-white/80 hover:bg-white/90 transition-all duration-300 flex flex-col items-center justify-between gap-6 overflow-hidden border border-gray-200 hover:border-green-600">
      
      {/* Floating Image */}
      <div className="relative w-40 h-40 transition-all duration-500 transform group-hover:scale-110 group-hover:-translate-y-4">
        <Image
          src={image}
          alt={name}
          layout="fill"
          className="object-contain rounded-lg"
        />
      </div>

      {/* Product Info */}
      <div className="text-center">
        <h2 className="text-xl font-bold text-gray-800">{name}</h2>
        <p className="text-lg font-semibold text-green-700 mt-1">${price}</p>
      </div>

      {/* CTA Button */}
      <button className="mt-2 px-5 py-2 text-sm md:text-base rounded-full bg-green-700 text-white font-medium shadow-md transition-transform duration-300 hover:scale-105 hover:shadow-lg">
        Buy Now
      </button>

      {/* Decorative ring on hover */}
      <div className="absolute -z-10 w-60 h-60 bg-green-100 rounded-full blur-2xl opacity-0 group-hover:opacity-40 transition-all duration-700 scale-0 group-hover:scale-100"></div>
    </div>
  );
}
