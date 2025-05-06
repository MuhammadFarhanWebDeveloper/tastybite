"use client";
import React, { useState } from "react";
import Navbar from "./Navbar";
import MobileNav from "./MobileNav";

export default function ResponsiveNavbar() {
  const [mobileMenuOpened, setMobileMenuOpened] = useState(false);
  const openMobileMenu = () => setMobileMenuOpened(true);
  const closeMobileMenu = () => setMobileMenuOpened(false);
  return (
    <div>
      <Navbar openMobileMenu={openMobileMenu} />
      <MobileNav isMobileMenuOpened={mobileMenuOpened} closeMobileMenu={closeMobileMenu} />
    </div>
  );
}
