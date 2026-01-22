import React from "react";
import logo from '../../assets/image/logo.png'

function Footer() {
  return (
    <div>
      {" "}
      {/* Footer */}
      <div className="max-w-8xl mx-auto bg-[#FFE8DE] px-6 sm:px-10 py-6 flex flex-col sm:flex-row items-center justify-between gap-4 text-[13px] text-textDark">
        <div className="flex items-center gap-3">
             <img src={logo} alt="Logo" className="h-15 w-auto" />
           </div>

        <div className="flex gap-4">
  <span className="text-[#222] font-dm-sans text-[21.25px] font-semibold leading-[25px] capitalize">
    Terms And Conditions
  </span>
  <span>|</span>
  <span className="text-[#222] font-dm-sans text-[20px] font-semibold leading-[25px] capitalize">Privacy Policy</span>
</div>


        <div className="text-[#202020] font-dm-sans text-[20.383px] font-normal leading-[40.8px]">
          Copyright 2025 by Ripal Shah. All Rights Reserved.
        </div>
      </div>
    </div>
  );
}

export default Footer;
