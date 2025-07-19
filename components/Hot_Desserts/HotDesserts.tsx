"use client";
import React, { useRef } from "react";
import HotDessertCard from "./HotDessertCard";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
function HotDesserts() {
  const ref = useRef<HTMLDivElement | null>(null);
  useGSAP(
    () => {
      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: ref.current,
          start: "top 70%",
          end: "top 10%",
        },
      });

      tl.from("#hotDessertsTitle", {
        xPercent: -100,
        duration: 1,
      });

     gsap.utils.toArray(".hd-list li").forEach((el, index) => {
    tl.fromTo(
      el as Element,
      {
        y: 100,
        opacity: 0,
      },
      {
        y: 0,
        opacity: 1,
        duration: 0.6,
        ease: "power2.out",
        delay: index * 0.3,
        scrollTrigger: {
          trigger: el as Element,
          start: "top 90%", 
        },
      }
    );
  });
      
      
      
    },
    { scope: ref }
  );
  return (
    <div ref={ref} id="hotDessertsSection" className="">
      <h1
        id="hotDessertsTitle"
        className="text-2xl text-center my-5 mb-10 md:text-3xl font-bold "
      >
        Hot Desserts
      </h1>
      <ul className="hd-list grid px-10 md:px-20 gap-4 grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
        <li>
          <HotDessertCard
            image="/images/hotDessert-1.png"
            title="Hot Cake"
            price={5}
          />
        </li>
        <li>
          <HotDessertCard
            image="/images/hotDessert-2.png"
            title="Vanilla Ice Cream"
            price={5}
          />
        </li>
        <li>
          <HotDessertCard
            image="/images/hotDessert-3.png"
            title="Strawberry Cheesecake"
            price={5}
          />
        </li>
      </ul>
    </div>
  );
}

export default HotDesserts;
