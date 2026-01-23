import React from "react";
import yoga from "../../assets/video/yoga.mp4";
import { motion } from "framer-motion";
import { buttonAnim, fadeUp, badgeAnim, container } from "../../assets/animation/motionAnimation";
const YogaHeroSection = () => {
  return (
    <div className=" w-full flex items-center justify-center p-4">
      {/* Hero Container */}
      <div className="w-full max-w-8xl relative">
        {/* Main Card */}
        <div className="relative sm:rounded-3xl overflow  -hidden">
          {/* Background Video with Overlays */}
          <div className="absolute inset-0 overflow-hidden rounded-2xl">
            <video
              className="w-full h-full object-cover"
              autoPlay
              loop
              muted
              playsInline
            >
              <source src={yoga} type="video/mp4" />
            </video>

            {/* Side Shadow */}
            <div className="absolute inset-0 bg-[#000000B3]" />
          </div>

          {/* Content */}
          <motion.div variants={container}
            initial="hidden"
            animate="show" className="relative z-10 flex flex-col items-center justify-center text-center px-4 py-10 md:py-24 lg:py-32 min-h-[400px] sm:min-h-[600px] lg:min-h-[700px]">
            {/* Main Heading */}
            <motion.h1
              variants={fadeUp}
              className="font-heading text-white text-center font-normal mb-3 sm:mb-6 leading-tight max-w-3xl mx-auto
  text-4xl sm:text-5xl md:text-6xl lg:text-[88px] lg:leading-[105.6px]"
            >
              Welcome to Ripal Shah <br className="sm:block hidden" /> Yoga Studio
            </motion.h1>


            {/* Subheading */}
            <motion.p
              variants={fadeUp}
              className="text-white text-center font-body font-medium mb-3 sm:mb-10 md:mb-12 px-0 sm:px-4 max-w-3xl text-sm sm:text-lg md:text-xl leading-relaxed"
            >
              A 360° holistic health approach through Yoga, Ayurveda & Nutrition —
              <br className="hidden sm:block" />
              guided by Ripal Shah, Certified Ayurveda & Yoga Trainer.
            </motion.p>


            {/* CTA Buttons */}
            <motion.div
              variants={fadeUp}
              className="flex flex-wrap justify-center flex-row gap-2 sm:gap-6 mb-8 sm:mb-12 md:mb-16"
            >

              <motion.button variants={buttonAnim} className="group cursor-pointer font-body relative px-3 sm:px-8 py-2 sm:py-4 bg-[#E1916E] text-white font-semibold rounded-[10px] shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-300 flex items-center justify-center gap-2  sm:min-w-[200px]">
                <span className="text-sm sm:text-[17px] leading-[25.5px] font-body">
                  Join Us Today
                </span>
                <svg
                  height="20"
                  width="19"
                  fill="none"
                  viewBox="0 0 19 20"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M3.21289 10H15.8439M15.8439 10L11.1069 5.263M15.8439 10L11.1069 14.737"
                    stroke="white"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                  />
                </svg>
              </motion.button>

              <motion.button variants={buttonAnim} className="group px-3 cursor-pointer sm:px-8 py-2 sm:py-4 bg-[#565654] backdrop-blur-sm text-white font-semibold rounded-[10px] border-2 border-white/30 hover:bg-white/20 hover:border-white/50 shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-300 flex items-center justify-center gap-2 min-w-[180px] sm:min-w-[200px]">
                <span className="text-sm sm:text-base md:text-lg font-body">
                  Explore Our Classes
                </span>
                <svg
                  height="20"
                  width="19"
                  fill="none"
                  viewBox="0 0 19 20"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M3.21289 10H15.8439M15.8439 10L11.1069 5.263M15.8439 10L11.1069 14.737"
                    stroke="white"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                  />
                </svg>
              </motion.button>
            </motion.div>

            {/* Success Badge */}
            {/* Success Badge - fixed at bottom */}
            <motion.div
              className="absolute flex bottom-0 left-1/2 transform -translate-x-1/2 z-20 ">

              <div className="inline-flex relative items-center gap-1.5 sm:gap-3 px-4 sm:px-6 py-2.5 sm:py-3 bg-white rounded-tr-xl rounded-tl-xl ">
                <span className="text-gray-900 font-medium text-xs sm:text-base md:text-base whitespace-nowrap">
                  500+ Successful Sessions
                </span>
                <div className="flex gap-0.5">
                  {[1, 2, 3, 4, 5].map((star) => (
                    <svg
                      key={star}
                      className="w-3 h-3 sm:w-4 sm:h-4 md:w-5 md:h-5 text-yellow-400 fill-current"
                      viewBox="0 0 20 20"
                    >
                      <path d="M10 15l-5.878 3.09 1.123-6.545L.489 6.91l6.572-.955L10 0l2.939 5.955 6.572.955-4.756 4.635 1.123 6.545z" />
                    </svg>
                  ))}
                </div>


                <svg
                  className="absolute bottom-0 -left-[42px]  z-20"
                  height="17"
                  width="43"
                  fill="none"
                  viewBox="0 0 43 17"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <g clipPath="url(#clip0_9_1906)">
                    <path
                      d="M25.497 17.393C34.752 17.173 42.22 9.753 42.5 0.5L43 18H0L25.497 17.393Z"
                      fill="white"
                    />
                  </g>
                  <defs>
                    <clipPath id="clip0_9_1906">
                      <rect height="18" width="43" fill="white" />
                    </clipPath>
                  </defs>
                </svg>
              </div>
              <svg
                className="absolute bottom-0 -right-[42.03px]    z-20"
                height="17"
                width="43"
                fill="none"
                viewBox="0 0 43 17"
                xmlns="http://www.w3.org/2000/svg"
              >
                <g clipPath="url(#clip0_9_1910)">
                  <path
                    d="M17.503 17.393C8.248 17.173 0.78 9.753 0.5 0.5L0 18H43L17.503 17.393Z"
                    fill="white"
                  />
                </g>
                <defs>
                  <clipPath id="clip0_9_1910">
                    <rect height="18" width="43" fill="white" />
                  </clipPath>
                </defs>
              </svg>
            </motion.div>
          </motion.div>

          {/* Decorative Elements */}
          <div className="absolute top-0 left-0 w-full h-full pointer-events-none">
            <div className="absolute top-10 left-10 w-16 sm:w-20 h-16 sm:h-20 bg-orange-400/20 rounded-full blur-2xl animate-pulse"></div>
            <div className="absolute bottom-10 right-10 w-24 sm:w-32 h-24 sm:h-32 bg-purple-400/20 rounded-full blur-3xl animate-pulse"></div>
          </div>
        </div>
      </div>

      {/* Floating Elements for Mobile */}
      <style>{`
        @keyframes float {
          0%, 100% { transform: translateY(0px); }
          50% { transform: translateY(-20px); }
        }
        
        @keyframes pulse {
          0%, 100% { opacity: 1; }
          50% { opacity: 0.5; }
        }

        @media (max-width: 640px) {
          h1 {
            font-size: clamp(2rem, 8vw, 3rem);
          }
        }
      `}</style>
    </div>
  );
};

export default YogaHeroSection;
