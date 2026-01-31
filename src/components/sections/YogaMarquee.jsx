import React from "react";
import item1 from "../../assets/image/item1.png";
import item2 from "../../assets/image/item2.png";
import item3 from "../../assets/image/item3.png";
import item4 from "../../assets/image/item4.png";
import item5 from "../../assets/image/item5.png";
import item6 from "../../assets/image/item6.png";

const MarqueeRow = ({ direction, children }) => {
  return (
    <div className="overflow-hidden whitespace-nowrap mb-5">
      <div
        className={`inline-flex items-center ${direction === "left" ? "animate-scrollLeft" : "animate-scrollRight"
          }`}
      >
        {children}
        {children}
      </div>
    </div>
  );
};

const CircleShape = ({ size = "w-12 h-12 md:w-24 md:h-24", opacity = "opacity-70" }) => (
  <div
    className={`${size} rounded-full bg-[#E8B4A0] ${opacity} flex-shrink-0`}
  ></div>
);

const HalfCircle = ({ side = "left", size = "w-12 h-16 md:w-24 md:h-24" }) => (
  <div
    className={`${size} flex-shrink-0 overflow-hidden ${side === "left" ? "rounded-r-full" : "rounded-l-full"}`}
  >
    <div className={`w-full h-full bg-[#E8B4A0] opacity-70`}></div>
  </div>
);

const RoundedImage = ({ src }) => (
  <img
    src={src}
    alt="Yoga"
    className="w-20 h-20 sm:w-24 sm:h-24 md:w-40 md:h-40 rounded-3xl object-cover flex-shrink-0"
  />
);

const CircleImage = ({ src }) => (
  <img
    src={src}
    alt="Yoga"
    className="w-16 h-16 sm:w-20 sm:h-20 md:w-36 md:h-36 rounded-full object-cover flex-shrink-0"
  />
);

export default function YogaMarquee() {
  return (
    <div className="relative w-full overflow-hidden bg-white">
      {/* LEFT white fade */}
      <div className="pointer-events-none absolute top-0 left-0 h-full w-8 sm:w-16 md:w-24 bg-gradient-to-r from-white to-transparent z-20" />

      {/* RIGHT white fade */}
      <div className="pointer-events-none absolute top-0 right-0 h-full w-8 sm:w-16 md:w-24 bg-gradient-to-l from-white to-transparent z-20" />

      <style>{`
        @keyframes scrollLeft {
          0% { transform: translateX(0); }
          100% { transform: translateX(-50%); }
        }
        @keyframes scrollRight {
          0% { transform: translateX(-50%); }
          100% { transform: translateX(0); }
        }
        .animate-scrollLeft {
          animation: scrollLeft 40s linear infinite;
        }
        .animate-scrollRight {
          animation: scrollRight 40s linear infinite;
        } 
      `}</style>
      <div className="relative w-full sm:py-12 md:py-20 overflow-hidden bg-white space-y-4 md:space-y-0">
        {/* Row 1 - Joyful - Moving Left */}
        <MarqueeRow direction="left">
          <div className="inline-flex items-center gap-3 md:gap-6">
            <HalfCircle side="left" size="w-12 h-20 md:w-24 md:h-40" />
            <CircleShape size="w-12 h-12 md:w-28 md:h-28" />
            <CircleImage src={item1} />
            <CircleShape
              size="w-10 h-10 md:w-20 md:h-20"
              opacity="opacity-50"
            />
            <CircleShape size="w-20 h-20 md:w-40 md:h-40" />

            <h2 className="text-4xl sm:text-5xl md:text-7xl lg:text-8xl font-bold text-gray-900 mx-4 sm:mx-8 md:mx-12">
              Joyful
            </h2>
            <RoundedImage src={item2} />
            <CircleShape
              size="w-16 h-16 md:w-32 md:h-32"
              opacity="opacity-40"
            />
            <CircleShape size="w-12 h-12 md:w-28 md:h-28" />

            <CircleImage src={item2} />
            <CircleShape
              size="w-10 h-10 md:w-24 md:h-24"
              opacity="opacity-60"
            />
          </div>
        </MarqueeRow>

        {/* Row 2 - Balance - Moving Right */}
        <MarqueeRow direction="right">
          <div className="inline-flex items-center gap-3 md:gap-6">
            <RoundedImage src={item3} />
            <CircleShape
              size="w-16 h-16 md:w-32 md:h-32"
              opacity="opacity-50"
            />
            <CircleShape size="w-20 h-20 md:w-44 md:h-44" />
            <RoundedImage src="https://images.unsplash.com/photo-1588286840104-8957b019727f?w=300&h=200&fit=crop" />
            <h2 className="text-4xl sm:text-5xl md:text-7xl lg:text-8xl font-bold text-gray-900 mx-4 sm:mx-8 md:mx-12">
              Balance
            </h2>
            <RoundedImage src={item4} />
            <CircleShape size="w-12 h-12 md:w-28 md:h-28" />
          </div>
        </MarqueeRow>

        {/* Row 3 - Wellness - Moving Left */}
        <MarqueeRow direction="left">
          <div className="inline-flex items-center gap-3 md:gap-6">

            <RoundedImage src={item5} />
            <h2 className="text-4xl sm:text-5xl md:text-7xl lg:text-8xl font-bold text-gray-900 mx-4 sm:mx-8 md:mx-12">
              Wellness
            </h2>
            <CircleShape size="w-20 h-20 md:w-44 md:h-44" />
            <CircleShape
              size="w-12 h-12 md:w-28 md:h-28"
              opacity="opacity-40"
            />
            <RoundedImage src="https://images.unsplash.com/photo-1588286840104-8957b019727f?w=300&h=200&fit=crop" />
            <CircleShape
              size="w-16 h-16 md:w-36 md:h-36"
              opacity="opacity-70"
            />
            <RoundedImage src={item6} />
            <CircleShape size="w-10 h-10 md:w-24 md:h-24" />
          </div>
        </MarqueeRow>

      </div>
    </div>
  );
}
