"use client";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import React, { useEffect, useRef } from "react";
import { IoCartOutline } from "react-icons/io5";
import BurgerPart from "./BurgerPart";
import { useMediaQuery } from "react-responsive";

gsap.registerPlugin(ScrollTrigger);
export default function Hero() {
  const heroRef = useRef<HTMLDivElement | null>(null);

  const isSmallerDevice = useMediaQuery({
    query: "(max-width:600px)",
  });

  const isMediumDevice = useMediaQuery({
    query: "(max-width:800px)",
  });

  useEffect(() => {
  window.scrollTo(0, 0);
}, []);

  useGSAP(() => {
    const tl = gsap.timeline({});
    tl.from(
      ".hero-h1,.hero-txt, .hero-btn",
      {
        y: 200,
        duration: 1,
        opacity: 0,
        ease: "none",
      },
      "hero"
    ).from(
      "#burger-img",
      {
        y: -200,
        duration: 1,
        opacity: 0,
      },
      "hero"
    );

    const tl2 = gsap.timeline({
      scrollTrigger: {
        trigger: ".hero-container",
        start: "20% 0",
        end: "100% top",
        scrub: 1,
      },
    });

    tl2.to(
      "#burger-img",
      {
        y: isMediumDevice ? 500 : 600,
        x: isSmallerDevice ? "-3vw" : "-20vw",
        ease: "none",
        immediateRender: false,
      },
      "burger"
    );

    tl2.to(
      ".burger-part",
      {
        y: (i) => i * 30,
      },
      "burger"
    );

    gsap.fromTo(
      ".burger-part-name",
      {
        opacity: 0,
      },
      {
        opacity: 1,
        stagger: 0.3,
        scrollTrigger: {
          trigger: "#burger-split-section",
          toggleActions: "play none play reverse",
          start: "start top",
          end: "bottom top",
          pin: ".parent",
        },
      }
    );
    
  });

  return (
    <div className="parent">
      <div
        ref={heroRef}
        className="hero-container flex items-center lg:flex-row flex-col justify-center gap-5 min-h-screen "
      >
        <div className="w-full pl-4 lg:pl-10 ">
          <h1 className={`hero-h1 my-4 font-extrabold md:text-6xl text-3xl`}>
            Desire{" "}
            <span className="px-3  py-1 transform  text-white rounded-lg bg-[var(--focus-bg)] inline-block">
              Food
            </span>
            For your Taste
          </h1>
          <p className="hero-txt">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Quos
            temporibus perspiciatis soluta?
          </p>
          <button className="hero-btn flex items-center cursor-pointer  justify-center gap-2 px-4 py-2 mt-4 text-lg font-semibold text-white bg-green-800 rounded-full ">
            <span>
              <IoCartOutline />
            </span>
            <p className="hover:scale-110 hover:duration-300">Buy Now</p>
          </button>
        </div>
        <div className="w-full flex">
          <div
            id="burger-img"
            className="relative w-full max-w-[300px] z-10 h-[300px]    mx-auto"
          >
            <BurgerPart
              name="Top Bun"
              src="/images/burger/top-bun 1.png"
              top={0}
              zIndex={5}
            />

            <BurgerPart
              name="Tomato"
              src="/images/burger/tomato.png"
              top={110}
              zIndex={4}
            />

            <BurgerPart
              name="Onions"
              src="/images/burger/onions.png"
              top={130}
              zIndex={3}
            />

            <BurgerPart
              name="Cheese"
              src="/images/burger/cheese.png"
              top={140}
              zIndex={2}
            />

            <BurgerPart
              name="Lettuce"
              src="/images/burger/letuce.png"
              top={170}
              zIndex={1}
            />

            <BurgerPart
              name="Bottom Bun"
              src="/images/burger/bottom-bun.png"
              top={190}
              zIndex={0}
            />
          </div>
        </div>
      </div>
      <div id="burger-split-section" className="h-[100vh]  gap-12 "></div>
    </div>
  );
}
