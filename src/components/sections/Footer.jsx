import React from "react";
import logo from '../../assets/image/logo.png'

function Footer() {
  return (
    <footer className="w-full bg-[#FFE8DE] border-t border-orange-100">
      <div className="max-w-8xl mx-auto px-6 sm:px-10 py-8 lg:py-6 flex flex-col lg:flex-row items-center justify-between gap-6 lg:gap-4">
        {/* Logo Section */}
        <div className="flex items-center gap-3">
          <img src={logo} alt="Logo" className="h-12 w-auto lg:h-15" />
        </div>

        {/* Links Section */}
        <div className="flex flex-wrap justify-center items-center gap-3 sm:gap-4 text-[#222] font-dm-sans font-semibold">
          <a href="#" className="hover:text-[#E59B6C] transition-colors text-[16px] sm:text-[18px] lg:text-[21.25px] leading-tight capitalize">
            Terms And Conditions
          </a>
          <span className="hidden sm:inline text-gray-400 font-light">|</span>
          <a href="#" className="hover:text-[#E59B6C] transition-colors text-[16px] sm:text-[18px] lg:text-[20px] leading-tight capitalize">
            Privacy Policy
          </a>
        </div>

        {/* Copyright Section */}
        <div className="text-[#202020] font-dm-sans text-[14px] sm:text-[16px] lg:text-[20.383px] font-normal leading-tight text-center lg:text-right">
          &copy; {new Date().getFullYear()} Ripal Shah. All Rights Reserved.
        </div>
      </div>
    </footer>
  );
}

export default Footer;
