import navLinks from "@/constants/navlinks";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import { IoCartOutline } from "react-icons/io5";
import { RiMenu3Line } from "react-icons/ri";
export default function Navbar({
  openMobileMenu,
}: {
  openMobileMenu: () => void;
}) {
  useGSAP(() => {
    gsap.from(" #navlinks li, .cart, .logo", {
      y: -100,
      stagger: 0.1,
    });
  });

  return (
    <div className="flex bg-[var(--focus-bg)] text-white items-center justify-between rounded-2xl m-2 lg:px-20">
      <div className="logo">
        <Image
          src={"/images/logo.png"}
          alt="Foodies"
          width={100}
          height={100}
        />
      </div>
      <ul
        id="navlinks"
        className="hidden gap-4 items-center justify-center text-lg md:flex font-semibold"
      >
        {navLinks.map((navLink, index) => {
          return (
            <li key={index}>
              <Link href={navLink.link} className="relative nav-link ">
                {navLink.name}
              </Link>
            </li>
          );
        })}
      </ul>
      <div className="flex items-center px-2 gap-4 ">
        <div className="cart p-2 cursor-pointer rounded-full bg bg-green-600  text-white w-fit ">
          <IoCartOutline size={30} />
        </div>
        <div
          onClick={openMobileMenu}
          className="md:hidden block p-2 cursor-pointer rounded-full bg bg-green-600  text-white w-fit "
        >
          <RiMenu3Line size={30} />
        </div>
      </div>
    </div>
  );
}
