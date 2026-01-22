import { useState } from "react";
import { Menu, X } from "lucide-react";
import logo from "../assets/image/logo.png";

export default function Header() {
  const [open, setOpen] = useState(false);

  return (
  <header className="sticky top-0 z-50 w-full border-b border-[#E5E7EB] bg-white">
  <div className="max-w-8xl mx-auto h-[100px] flex items-center justify-between px-4 md:px-6">

    {/* Logo */}
    <div className="flex items-center gap-3">
      <img src={logo} alt="Logo" className="h-10 w-auto" />
    </div>

    {/* Desktop Navigation */}
    <nav className="hidden font-body lg:flex items-center gap-8 text-[14px] text-[#2B2B2B]">
      <a className="hover:text-black" href="#about">About</a>
      <a className="hover:text-black" href="#services">Services</a>
      <a className="hover:text-black" href="#specialities">Specialties</a>
      <a className="hover:text-black" href="#events">Events & Retreats</a>
      <a className="hover:text-black" href="#testimonials">Testimonial</a>
      <a className="hover:text-black" href="#faqs">FAQ'S</a>
    </nav>

    {/* Desktop Button */}
    <button className="hidden h-[50px] font-body lg:flex items-center gap-2 bg-[#E59B6C] text-white text-[14px] font-medium px-5 py-2 rounded-[10px] hover:opacity-90 transition">
      Contact Us
      <svg width="19" height="20" viewBox="0 0 19 20" fill="none">
        <path
          d="M3.21289 9.99994H15.8439M15.8439 9.99994L11.1069 5.26294M15.8439 9.99994L11.1069 14.7369"
          stroke="white"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    </button>

    {/* Mobile Menu Button */}
    <button
      onClick={() => setOpen(!open)}
      className="lg:hidden text-gray-700"
    >
      {open ? <X size={28} /> : <Menu size={28} />}
    </button>
  </div>

  {/* Mobile Menu */}
{/* Mobile Menu */}
{open && (
  <div className="lg:hidden border-t bg-white px-6 py-4 space-y-4 text-[14px] text-[#2B2B2B]">
    <a className="block" href="#about" onClick={() => setOpen(false)}>About</a>
    <a className="block" href="#services" onClick={() => setOpen(false)}>Services</a>
    <a className="block" href="#specialities" onClick={() => setOpen(false)}>Specialties</a>
    <a className="block" href="#events" onClick={() => setOpen(false)}>Events & Retreats</a>
    <a className="block" href="#testimonials" onClick={() => setOpen(false)}>Testimonial</a>
    <a className="block" href="#faqs" onClick={() => setOpen(false)}>FAQ'S</a>

    <button className="w-full flex items-center justify-center gap-2 font-body font-medium mt-3 bg-[#E1916E] text-white py-2 rounded-md">
      Contact Us 
      <svg height="20" width="19" fill="none" viewBox="0 0 19 20" xmlns="http://www.w3.org/2000/svg">
        <path d="M3.21289 9.99994H15.8439M15.8439 9.99994L11.1069 5.26294M15.8439 9.99994L11.1069 14.7369" stroke="white" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"/>
      </svg>
    </button>
  </div>
)}

</header>

  );
}
