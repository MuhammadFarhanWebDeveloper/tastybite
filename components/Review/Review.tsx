"use client";
import React from "react";
import Carousel from "react-multi-carousel"
import "react-multi-carousel/lib/styles.css";
import ReviewCard from "./ReviewCard";

export default function Review() {
  const responsive = {
    superLargeDesktop: {
      // the naming can be any, depends on you.
      breakpoint: { max: 4000, min: 3000 },
      items: 1,
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 1,
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 1,
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1,
    },
  };
  return (
    <div className="py-10">
      <h1 className="my-10 text-2xl text-center font-bold capitalize md:text-3xl">
        What client say about us
      </h1>
      <div className="mx-auto w-[90%] ">
        <Carousel
          arrows={false}
          autoPlay={true}
          autoPlaySpeed={5000}
          infinite
          responsive={responsive}
          showDots
        >
          <div className="w-[97%] sm:w-[90%] md:w-[80%] mx-auto">
            <ReviewCard name="Evan Mercer" image="/images/c1.png" />
          </div>
          <div className="w-[97%] sm:w-[90%] md:w-[80%] mx-auto">
            <ReviewCard name="Evan Mercer" image="/images/c2.png" />
          </div>
          <div className="w-[97%] sm:w-[90%] md:w-[80%] mx-auto">
            <ReviewCard name="Evan Mercer" image="/images/c1.png" />
          </div>
          <div className="w-[97%] sm:w-[90%] md:w-[80%] mx-auto">
            <ReviewCard name="Evan Mercer" image="/images/c2.png" />
          </div>
        </Carousel>
      </div>
    </div>
  );
}
