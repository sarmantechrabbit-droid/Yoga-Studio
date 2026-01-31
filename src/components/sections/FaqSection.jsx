import React, { useState } from "react";
import { motion } from "framer-motion";
const faqsLeft = [
  {
    question: "Do I need prior yoga experience to join?",
    answer: "No. Our sessions are beginner-friendly and suitable for all levels. Each practice is guided step-by-step to ensure comfort and safety.",
  },
  {
    question: " What types of yoga classes do you offer?",
    answer: "We offer personal training, group classes, meditation, pranayama, and holistic wellness sessions both online and offline.",
  },
  {
    question: "Are the sessions suitable for beginners?",
    answer: "Yes. Classes are customized according to your fitness level, making them ideal for beginners as well as experienced practitioners.",
  },
  {
    question: "Do you provide online yoga classes?",
    answer: "Yes. You can join live online sessions from home with the same guidance and attention as studio classes.",
  },
  {
    question: "Do you also conduct offline or studio sessions?",
    answer: "Yes. We offer in-studio and at-home personal sessions for those who prefer face-to-face training.",
  },
];

const faqsRight = [
  {
    question: " How long is each yoga session?",
    answer: "Most sessions last 45–60 minutes, depending on the program and individual requirements.",
  },
  {
    question: " Do you offer personalized one-on-one sessions?",
    answer: "Yes. Personal training sessions are customized to your specific goals, health conditions, and fitness level.",
  },
  {
    question: "What time are classes available?",
    answer: "We offer flexible morning and evening batches to suit different schedules",
  },
  {
    question: "16. How soon can I see results?",
    answer: "Many students notice improvements in energy and relaxation within a few weeks. Physical changes typically become visible with consistent practice.",
  },
  {
    question: "How do I book a class?",
    answer: "You can contact us via phone, WhatsApp, or the website to schedule your preferred session or batch.",
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
