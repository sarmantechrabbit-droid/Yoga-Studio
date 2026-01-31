import React from "react";
import logo from "../../assets/image/logo.png";

const Footer = () => {
  return (
    <footer className="w-full bg-[#FFF1E8] px-[25px] py-6">
      {/* <div className="max-w-7xl mx-auto"> */}
      {/* Top Content */}
      <div className="max-w-7xl mx-auto flex flex-col lg:flex-row items-center lg:items-start justify-between gap-6">
        
        {/* Logo */}
        <div className="flex items-center gap-3">
          <img src={logo} alt="Logosdaf" />
          {/* <div>
            <h3 className="text-[18px] font-semibold tracking-wide text-[#1E1E1E]">
              LOGOSDAF
            </h3>
            <p className="text-[11px] tracking-widest text-[#C28A6A]">
              TOFESYOU THERE
            </p>
          </div> */}
        </div>

        {/* Center Text */}
        <div className="text-center max-w-[420px]">
          <h4 className="text-[18px] font-heading font-medium text-[#E1916E] mb-2">
            Share your Yoogy moments
          </h4>
          <p className="text-[13px] font-body text-[#E1916E] leading-relaxed">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit.
            Suspendisse varius enim in eros elementum tristique. Duis cursus.
          </p>
        </div>

        {/* Contact */}
        <div className="text-center lg:text-right">
          <h4 className="text-[16px] font-heading font-medium text-[#F28B5B] mb-2">
            Contact Us
          </h4>
          <p className="text-[13px] font-body text-[#E1916E]">
            E: rippu@gmail.com
          </p>
          <p className="text-[13px] font-body text-[#E1916E]">
            P: +91 9988449550
          </p>
        </div>
      </div>

      {/* Divider */}
      <div className="my-5 border-t border-[#E1916E]" />

      {/* Bottom Bar */}
      <div className="max-w-7xl mx-auto font-body flex flex-col sm:flex-row items-center justify-between text-[15px] text-[#7A7A7A]">
        <p className="text-[#E1916E] ">Copyright 2025 by Ripal Shah. All Rights Reserved.</p>
 <p className="text-[#E1916E]">
  Designed & developed by
  <a
    href="https://techrabbit.io/"   // replace with correct URL
    target="_blank"
    rel="noopener noreferrer"
    className="text-[#E1916E] hover:text-[#F28B5B] transition-colors duration-200 cursor-pointer"
  >
    Tech Rabbit
  </a>
</p>

      </div>
{/* </div> */}
    </footer>
  );
};

export default Footer;
