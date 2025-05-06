import Image from "next/image";
import React from "react";

function HotDessertCard({
  image,
  title,
  price,
}: {
  image: string;
  title: string;
  price: number;
}) {
  return (
    <div className="shadow-lg p-2 gap-2 rounded-lg flex bg-white hover:shadow-lg items-center  transition-all duration-300">
      <div className="w-fit  overflow-hidden rounded-lg">
        <Image src={image} alt="Dessert" width={100} height={100} className="" />
      </div>
      <div>
        <h1 className="text-xl font-semibold text-green-950 ">{title}</h1>
        <p className="text-lg font-bold">${price}</p>

      </div>
    </div>
  );
}

export default HotDessertCard;
