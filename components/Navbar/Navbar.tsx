import navLinks from "@/constants/navlinks";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import { IoCartOutline } from "react-icons/io5";
import { RiMenu3Line } from "react-icons/ri";
import { animate, motion } from "framer-motion";
import { init } from "next/dist/compiled/webpack/webpack";
export default function Navbar({
  openMobileMenu,
}: {
  openMobileMenu: () => void;
}) {
  return (
    <div className="flex bg-[var(--focus-bg)] text-white items-center justify-between rounded-2xl m-2 lg:px-20">
      <motion.div
        initial={{ opacity: 0, y: "-100%" }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        <Image
          src={"/images/logo.png"}
          alt="Foodies"
          width={100}
          height={100}
        />
      </motion.div>
      <ul className="hidden gap-4 items-center justify-center text-lg md:flex font-semibold">
        {navLinks.map((navLink, index) => {
          return (
            <motion.li key={index}
            initial="initial"
            animate="animate"
            variants={{
              initial:{opacity:0, y:"-100%"},
              animate:{opacity:1, y:0, transition:{duration:0.5, delay: index * 0.1}},
              
            }}
            >
              <Link href={navLink.link} className="relative nav-link ">
                {navLink.name}
              </Link>
            </motion.li>
          );
        })}
      </ul>
      <div className="flex items-center px-2 gap-4 ">
        <motion.div
         initial={{opacity:0, y:"-100%"}}
         animate={{opacity:1, y:0, transition:{duration:0.5, delay: 0.5}}}
         className="p-2 cursor-pointer rounded-full bg bg-green-600  text-white w-fit ">
          <IoCartOutline size={30} />
        </motion.div>
        <motion.div
        initial={{opacity:0, y:"-100%"}}
        animate={{opacity:1, y:0, transition:{duration:0.5, delay: 0.6}}}
          onClick={openMobileMenu}
          className="md:hidden block p-2 cursor-pointer rounded-full bg bg-green-600  text-white w-fit "
        >
          <RiMenu3Line size={30} />
        </motion.div>
      </div>
    </div>
  );
}
