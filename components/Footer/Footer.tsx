// components/Footer.jsx
import Image from "next/image";
import {
  FaFacebook,
  FaInstagram,
  FaTwitter,
  FaMapMarkerAlt,
  FaPhoneAlt,
  FaEnvelope,
} from "react-icons/fa";

export default function Footer() {
  return (
    <footer className="bg-[var(--focus-bg)]  rounded-t-4xl text-gray-100">
      <div className="max-w-6xl mx-auto px-6 py-10 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8">
        {/* Logo and Description */}
        <div>
          <Image
            src={"/images/logo.png"}
            alt="Foodies"
            width={100}
            height={100}
            className="mb-2"
          />
          <p className="text-sm text-white">
            Serving happiness on a plate since 1999. Dine-in, takeaway, or
            delivered hot to your door.
          </p>
        </div>

        {/* Quick Links */}
        <div>
          <h3 className="text-lg font-semibold mb-3">Quick Links</h3>
          <ul className="space-y-2 text-sm text-white">
            <li>
              <a href="#" className="hover:text-amber-500 transition">
                Home
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-amber-500 transition">
                Menu
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-amber-500 transition">
                About Us
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-amber-500 transition">
                Contact
              </a>
            </li>
          </ul>
        </div>

        {/* Contact Info */}
        <div>
          <h3 className="text-lg font-semibold mb-3">Contact</h3>
          <ul className="space-y-3 text-sm text-white">
            <li className="flex items-center gap-2">
              <FaMapMarkerAlt /> 123 Flavor Street, Foodville
            </li>
            <li className="flex items-center gap-2">
              <FaPhoneAlt /> +1 (234) 567-890
            </li>
            <li className="flex items-center gap-2">
              <FaEnvelope /> hello@tastybite.com
            </li>
          </ul>
        </div>

        {/* Social Media */}
        <div>
          <h3 className="text-lg font-semibold mb-3">Follow Us</h3>
          <div className="flex gap-4 text-xl">
            <a href="#" className="hover:text-amber-500 transition">
              <FaFacebook />
            </a>
            <a href="#" className="hover:text-amber-500 transition">
              <FaInstagram />
            </a>
            <a href="#" className="hover:text-amber-500 transition">
              <FaTwitter />
            </a>
          </div>
        </div>
      </div>

      <div className="border-t border-gray-700 text-center text-sm text-white py-4">
        &copy; {new Date().getFullYear()} TastyBite. All rights reserved.
      </div>
    </footer>
  );
}
