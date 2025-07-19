import React from "react";

export default function BurgerPart({
  src,
  top,
  zIndex,
  name,
}: {
  src: string;
  top: number;
  zIndex: number;
  name: string;
}) {
  return (
    <div
      className="burger-part absolute w-full"
      style={{
        top: top,
        zIndex: zIndex,
      }}
    >
      <div className=" relative w-full">
        <div className="burger-part-name opacity-0 absolute left-[-270px] top-1/2 -translate-y-1/2 hidden md:flex items-center flex-row-reverse gap-2">
          <div className="w-[250px] h-[3px] bg-black rounded-full" />
          <p className="text-sm text-black font-semibold whitespace-nowrap">
            {name}
          </p>
        </div>
        
        <img
          src={src || "/images/burger/top-bun 1.png"}
          alt={name}
          className="w-full"
        />
      </div>
    </div>
  );
}
