import navLinks from "@/constants/navlinks";
import Link from "next/link";
import React from "react";
import { IoMdClose } from "react-icons/io";

type MobileNavProps = {
  closeMobileMenu: () => void;
  isMobileMenuOpened: boolean;
};
export default function MobileNav({
  closeMobileMenu,
  isMobileMenuOpened,
}: MobileNavProps) {
  const menu_class = isMobileMenuOpened ? "translate-x-0" : "-translate-x-full";

  return (
    <div className={`md:hidden fixed  ${menu_class} z-20  transition-all top-0 -left-0 w-full h-screen`}>
      <div className="fixed w-full h-full bg-black z-20 opacity-70"></div>
      <div className="fixed  flex w-[80%] h-full justify-center items-center z-30 bg-[var(--focus-bg)] ">
        <IoMdClose
          onClick={closeMobileMenu}
          color="white"
          size={30}
          className="absolute cursor-pointer top-[0.7rem] right-[1.4rem] sm:h-8 h-6 w-6"
        />
        <ul className="flex flex-col  justify-center items-start h-full space-y-8 text-white text-lg font-semibold">
          {navLinks.map((link, index) => (
            <li className="inline-block  relative nav-link" key={index}>
              <Link href={link.link}>
                <p className="">{link.name}</p>
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
