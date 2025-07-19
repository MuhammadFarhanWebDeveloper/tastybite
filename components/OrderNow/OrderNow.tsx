"use client";
import React, { useRef } from "react";
import Image from "next/image";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export default function OrderNow() {
  const sectionRef = useRef<HTMLDivElement | null>(null);

useGSAP(() => {
  const tl = gsap.timeline({
    scrollTrigger: {
      trigger: sectionRef.current,
      start: "top 80%",
    },
  });

  tl.from(".order-img", {
    scale: 0.5,
    opacity: 0,
    duration: 1,
    ease: "power3.out",
  })
    .from(".order-heading", {
      x: 100,
      opacity: 0,
      duration: 0.8,
    }, "-=0.5")
    .from(".order-text", {
      y: 50,
      opacity: 0,
      duration: 0.6,
    }, "-=0.4")
    .fromTo(".order-btn",{
      opacity:0,
      y:30
    }, {
      y: 0,
      opacity: 1,
      duration: 0.5,
    }, "-=0.3");
}, { scope: sectionRef });

  return (
    <div ref={sectionRef} className="flex items-center justify-center flex-col gap-7 md:flex-row">
      <div className="w-fit">
        <div className="w-fit bg-[var(--focus-bg)] rounded-full px-10 py-10">
          <div>
            <Image
              src={"/images/buy.png"}
              alt="Food"
              className="mx-auto order-img"
              width={300}
              height={300}
            />
          </div>
        </div>
      </div>
      <div className="w-fit">
        <h1 className="text-3xl my-2 uppercase md:text-5xl font-bold md:font-extrabold order-heading">
          The Best yummy food in the town
        </h1>
        <p className="text-lg my-5 order-text">
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Magni illum eos asperiores.
        </p>
        <button className="rounded-full px-5 py-2 cursor-pointer hover:scale-110 duration-300 my-4 font-semibold bg-green-800 text-white order-btn">
          Order Now
        </button>
      </div>
    </div>
  );
}
