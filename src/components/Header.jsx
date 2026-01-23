import { useState, useEffect } from "react";
import { Menu, X, ArrowRight } from "lucide-react";
import logo from "../assets/image/logo.png";
import { motion, AnimatePresence } from "framer-motion";
import { overlayVariant } from "../assets/animation/motionAnimation";

export default function Header() {
  const [open, setOpen] = useState(false);

  // Prevent scrolling when menu is open
  useEffect(() => {
    if (open) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
    return () => {
      document.body.style.overflow = "unset";
    };
  }, [open]);

  const navLinks = [
    { name: "About", href: "#about" },
    { name: "Services", href: "#services" },
    { name: "Specialties", href: "#specialities" },
    { name: "Events & Retreats", href: "#events" },
    { name: "Testimonial", href: "#testimonials" },
    { name: "FAQ'S", href: "#faqs" },
  ];

  return (
    <>
      <header className="sticky top-0 z-50 w-full border-b border-[#E5E7EB] bg-white">
        <div className="max-w-8xl mx-auto sm:py-0 py-4 sm:h-[100px] flex items-center justify-between px-4 md:px-6">
          {/* Logo */}
          <a href="#" className="flex items-center gap-3">
            <img src={logo} alt="Logo" className="h-10 w-auto xl:h-12" />
          </a>

          {/* Desktop Navigation */}
          <nav className="hidden font-body lg:flex items-center gap-8 text-[14px] xl:text-base text-[#3F3F3F] font-medium">
            {navLinks.map((link) => (
              <motion.a
                key={link.name}
                href={link.href}
                whileHover={{ y: -2 }}
                transition={{ type: "spring", stiffness: 300 }}
                className="hover:text-[#E59B6C] transition-colors"
              >
                {link.name}
              </motion.a>
            ))}
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
            onClick={() => setOpen(true)}
            className="lg:hidden text-[#2B2B2B] p-2 hover:bg-gray-100 rounded-md transition-colors"
          >
            <Menu size={28} />
          </button>
        </div>
      </header>

      {/* Mobile Drawer Overlay */}
      <AnimatePresence>
        {open && (
          <motion.div
            variants={overlayVariant}
            initial="hidden"
            animate="visible"
            exit="hidden"
            className="fixed inset-0 z-60 bg-black/50 backdrop-blur-sm"
            onClick={() => setOpen(false)}
          />
        )}
      </AnimatePresence>

      {/* Mobile Drawer */}
      <div
        className={`fixed top-0 right-0 z-70 h-full w-[300px] bg-white shadow-2xl transform transition-transform duration-300 ease-in-out flex flex-col ${open ? "translate-x-0" : "translate-x-full"
          }`}
      >
        {/* Drawer Header */}
        <div className="flex items-center justify-between p-6 border-b border-gray-100">
          <img src={logo} alt="Logo" className="h-8 w-auto" />
          <button
            onClick={() => setOpen(false)}
            className="p-2 text-gray-500 hover:text-red-500 hover:bg-red-50 rounded-full transition-all"
          >
            <X size={24} />
          </button>
        </div>

        {/* Drawer Links */}
        <div className="flex-1 overflow-y-auto py-6 px-6 flex flex-col gap-2">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              onClick={() => setOpen(false)}
              className="group flex items-center justify-between text-lg font-medium text-[#2B2B2B] py-3 border-b border-gray-50 hover:text-[#E59B6C] transition-colors"
            >
              {link.name}
              <ArrowRight
                size={18}
                className="text-gray-300 group-hover:text-[#E59B6C] transition-colors"
              />
            </a>
          ))}
        </div>

        {/* Drawer Footer */}
        <div className="p-6 border-t border-gray-100 bg-gray-50">
          <button className="w-full h-[50px] flex items-center justify-center gap-2 bg-[#E1916E] text-white text-[16px] font-medium rounded-[10px] hover:opacity-90 transition shadow-md hover:shadow-lg">
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
        </div>
      </div>
    </>
  );
}
