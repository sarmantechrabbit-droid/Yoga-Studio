import React, { useState } from "react";
import { motion } from "framer-motion";
const faqsLeft = [
  {
    question: "What should I bring?",
    answer: "Bring a yoga mat, comfortable clothing, and a water bottle.",
  },
  {
    question: "Do you offer beginner classes?",
    answer: "Yes, we offer beginner-friendly classes suitable for all levels.",
  },
  {
    question: "Can I drop in for a class?",
    answer: "Drop-ins are welcome, subject to class availability.",
  },
  {
    question: "Is yoga suitable for all ages?",
    answer: "Absolutely. We offer classes tailored for different age groups.",
  },
  {
    question: "What are class durations?",
    answer: "Classes typically last between 60 and 90 minutes.",
  },
];

const faqsRight = [
  {
    question: "Do I need to be flexible?",
    answer: "No flexibility is required. Yoga helps improve flexibility over time.",
  },
  {
    question: "Are private lessons available?",
    answer: "Yes, private one-on-one sessions are available upon request.",
  },
  {
    question: "What are the studio’s hours?",
    answer: "We are open daily from 6:00 AM to 9:00 PM.",
  },
  {
    question: "Can I attend while pregnant?",
    answer: "Yes, we offer prenatal yoga classes. Consult your doctor first.",
  },
  {
    question: "Do you offer meditation classes?",
    answer: "Yes, meditation sessions are available weekly.",
  },
];

export default function FaqSection() {
  return (
    <section className="w-full bg-white px-4 sm:px-6 lg:px-0">
      <motion.div initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
        viewport={{ once: true, margin: "-100px" }} className="max-w-[1200px] mx-auto py-0 sm:py-20">
        {/* Header */}
        <div className="text-center mb-4 sm:mb-14">
          <div className="inline-block mb-0 sm:mb-4">
            <p
              className="
    text-[#E1916E]       
   font-heading        
    text-center          
    uppercase             
    tracking-[3.789px]    
    text-[18px] sm:text-[18px] lg:text-[20px] 
    leading-[32.842px]   
    w-full max-w-[238px]  
    mx-auto
  "
            >
              FAQ’s
            </p>

            {/* SVG — UNCHANGED */}
            <svg height="4" width="90" fill="none" viewBox="0 0 90 4" xmlns="http://www.w3.org/2000/svg">
              <rect height="3.12447" width="89.5682" fill="#E1916E" transform="matrix(1 0 0 -1 0 3.12451)" />
            </svg>
          </div>
          {/* <span className="inline-block text-[13px] tracking-widest text-accent uppercase">
            FAQ’s
            <span className="block w-6 h-[2px] bg-accent mx-auto mt-2" />
          </span> */}

          <h2 className="mt-2 sm:mt-6 font-heading text-textPrimary text-[34px] sm:text-[42px] lg:text-[48px]">
            Frequently Asked Questions
          </h2>
        </div>

        {/* FAQ Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-x-20">
          <div>
            {faqsLeft.map((item, index) => (
              <FaqRow key={index} {...item} />
            ))}
          </div>

          <div>
            {faqsRight.map((item, index) => (
              <FaqRow key={index} {...item} />
            ))}
          </div>
        </div>
      </motion.div>

      <div className="w-full h-[3px] bg-accent mt-10" />
    </section>
  );
}

function FaqRow({ question, answer }) {
  const [open, setOpen] = useState(false);

  return (
    <section id="faqs">
      <div
        className="border-b border-borderLight py-3 sm:py-5 cursor-pointer"
        onClick={() => setOpen(!open)}
      >
        {/* Question Row */}
        <div className="flex items-center justify-between">
          <p className="font-heading text-[18px] sm:text-[19px] text-textPrimary">
            {question}
          </p>

          <span className="text-[24px] font-light text-textPrimary">
            {open ? "−" : "+"}
          </span>
        </div>

        {/* Answer */}
        <div
          className={`overflow-hidden transition-all duration-300 ease-in-out ${open ? "max-h-40 opacity-100 mt-3" : "max-h-0 opacity-0"
            }`}
        >
          <p className="text-[15px] text-gray-600 leading-relaxed pr-6">
            {answer}
          </p>
        </div>
      </div>
    </section>
  );
}
