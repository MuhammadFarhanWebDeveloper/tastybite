import type { Metadata } from "next";
import { Geist, Geist_Mono, Poppins, Dancing_Script } from "next/font/google";
import "./globals.css";
import ResponsiveNavbar from "@/components/Navbar/ResponsiveNavbar";
import Footer from "@/components/Footer/Footer";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const poppins = Poppins({
  variable: "--font-poppins",
  subsets: ["latin"],
  display: "swap",
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
});

export const metadata: Metadata = {
  title: "TastyBite | M_Farhan",
  description:
    "TastyBite is a UI of a food delivery app developed by Hafiz Muhammad Farhan",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`antialiased`}>
        <header>
          <ResponsiveNavbar />
        </header>
        <main>{children}</main>
        <footer>
          <Footer />
        </footer>
      </body>
    </html>
  );
}
