import Image from "next/image";
import React from "react";
import { FaQuoteLeft, FaStar } from "react-icons/fa";

type ReviewCardProps = {
  name: string;
  image: string;
};
export default function ReviewCard({ name, image }: ReviewCardProps) {
  return (
    <div className="flex relative flex-col-reverse lg:flex-row py-10  shadow-lg rounded-lg bg-white p-3 justify-center items-center gap-3">
      <FaQuoteLeft className="absolute text-black left-3 w-14 h-14 opacity-10 top-3" />
      <div className="lg:w-[70%] p-3">
        <p className="md:text-xl text-sm sm:text-lg md:font-semibold leading-[1.7] md:leading-[2.7]">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Quidem
          numquam sunt voluptatibus itaque asperiores nobis nam ut ipsam placeat
          saepe enim ullam omnis amet rem esse voluptatum, laudantium, explicabo
          fugit.
        </p>
        <ul className="flex text-3xl my-3 text-yellow-600">
          <li>
            <FaStar />
          </li>
          <li>
            <FaStar />
          </li>
          <li>
            <FaStar />
          </li>
          <li>
            <FaStar />
          </li>
          <li>
            <FaStar />
          </li>
        </ul>
        <p className="font-semibold text-lg">{name}</p>
        <p className="font-semibold text-gray-700">Fullstack Web Developer</p>
      </div>
      <div className="lg:w-[30%]">
        <Image src={image} alt={name} width={250} height={250} className="rounded-full" />
      </div>
    </div>
  );
}
