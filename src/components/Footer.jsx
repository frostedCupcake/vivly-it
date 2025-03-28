import React from "react";
import { FaFacebookF, FaLinkedinIn, FaTwitter } from "react-icons/fa";
import { MdArrowOutward } from "react-icons/md";

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white py-10">
      <div className="max-w-7xl mx-auto px-4 md:px-10 flex flex-col md:flex-row items-center md:items-start justify-between">
        {/* Logo and Branding */}
        <div className="flex flex-col items-center md:items-start text-center md:text-left mb-6 md:mb-0">
          <img
            src="/assets/logo-re.png"
            alt="vivly brand logo"
            className="w-16 rounded-xl shadow-lg mb-2"
          />
          <h1 className="text-2xl font-extrabold">Vivly</h1>
        </div>

        {/* Navigation Links */}
        <div className="flex flex-col items-center md:items-start gap-2 text-sm">
          {/* <a href="/" className="hover:text-gray-400 transition duration-300">
            Home
          </a>
          <a
            href="/engineering-services"
            className="hover:text-gray-400 transition duration-300"
          >
            Engineering Services
          </a> */}
          <a
            href="/services"
            className="hover:text-gray-400 transition duration-300"
          >
            Services
          </a>
          <a
            href="/portfolio"
            className="hover:text-gray-400 transition duration-300"
          >
            Portfolio
          </a>

          <a
            href="/contact-us"
            className="bg-white text-black rounded-xl px-3 py-1 flex items-center gap-2"
          >
            Connect with Us
            <MdArrowOutward />
          </a>
        </div>

        {/* Social Media Icons */}
        <div className="flex justify-center md:justify-start gap-6 mt-6 md:mt-0">
          {/* <a
            href="https://facebook.com"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-gray-400 transition duration-300"
          >
            <FaFacebookF size={24} />
          </a>
          <a
            href="https://linkedin.com"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-gray-400 transition duration-300"
          >
            <FaLinkedinIn size={24} />
          </a>
          <a
            href="https://twitter.com"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-gray-400 transition duration-300"
          >
            <FaTwitter size={24} />
          </a> */}
        </div>
      </div>

      <hr className="my-8 border-gray-700" />

      <div className="text-center text-gray-500 text-xs md:text-sm">
        <p>&copy; {new Date().getFullYear()} Vivly. All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
