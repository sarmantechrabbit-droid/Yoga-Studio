import React from 'react';
import test1 from '../../assets/image/test1.png'
import test2 from '../../assets/image/test2.png'
import test3 from '../../assets/image/test3.png'
import { motion } from 'framer-motion';
export default function TestimonialsSection() {
  const testimonials = [
    {
      name: "Rachel Davis",
      image: test1,
      rating: 5,
      text: "Samadhi Yoga Studio has transformed my life. The instructors are so knowledgeable, and the environment is incredibly welcoming. I feel stronger every day!"
    },
    {
      name: "Laura Martin",
      image: test2,
      rating: 5,
      text: "The classes are perfectly tailored for all levels, and the sense of community here is amazing. I always leave feeling refreshed and rejuvenated."
    },
    {
      name: "David Thompson",
      image: test3,
      rating: 4,
      text: "Every instructor at Samadhi Yoga Studio is so patient and attentive. My flexibility and strength have improved significantly since I started coming here."
    }
  ];

  const StarRating = ({ rating }) => {
    return (
      <div className="flex gap-1">
        {[...Array(5)].map((_, index) => (
          <svg
            key={index}
            className={`w-3 h-3 sm:w-4 sm:h-4 ${index < rating ? 'text-yellow-400' : 'text-gray-300'}`}
            fill="currentColor"
            viewBox="0 0 20 20"
          >
            <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
          </svg>
        ))}
      </div>
    );
  };

  return (
    <section id='testimonials'>
      <motion.div initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
        viewport={{ once: true, margin: "-100px" }} className="w-full bg-white px-4 sm:px-6 lg:px-8 py-10 sm:py-16">
        <div className="max-w-7xl mx-auto">
          {/* Header */}
          <div className="text-center mb-8 sm:mb-16">
            <div className="flex flex-col items-center mb-2 sm:mb-4">
              <p
                className="
      text-[#E1916E]    
      font-heading         
      uppercase           
 
      text-[16px] sm:text-[20px] lg:text-[25px]  
      tracking-widest
      whitespace-nowrap    
    "
              >
                Testimonials
              </p>

              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="160"
                height="4"
                viewBox="0 0 160 4"
                fill="none"
                className="w-[120px] sm:w-[160px]"
              >
                <rect
                  width="160"
                  height="3.6036"
                  transform="matrix(1 0 0 -1 0 3.60352)"
                  fill="#E1916E"
                />
              </svg>
            </div>

            <h2 className="text-3xl font-heading sm:text-4xl lg:text-5xl font-normal text-gray-900 leading-tight">
              What Our Students Say
            </h2>
          </div>

          {/* Testimonials Container */}
          {/* Mobile: Horizontal Scroll (Flex) | Desktop: Grid */}
          <div className="
            flex overflow-x-auto snap-x snap-mandatory gap-4 pb-4 -mx-4 px-4 
            scrollbar-hide
            md:grid md:grid-cols-2 lg:grid-cols-3 md:gap-6 lg:gap-8 md:overflow-visible md:pb-0 md:mx-0 md:px-0
          ">
            {testimonials.map((testimonial, index) => (
              <div
                key={index}
                className="
                  min-w-[85vw] sm:min-w-[auto] snap-center
                  relative rounded-2xl sm:rounded-3xl overflow-hidden shadow-lg group
                "
              >
                {/* Background Image */}
                <div className="relative h-[350px] sm:h-[500px]">
                  <img
                    src={testimonial.image}
                    alt={testimonial.name}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                  {/* Dark Overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/40 to-transparent"></div>
                </div>

                {/* Content Overlay */}
                <div className="absolute bottom-0 left-0 right-0 p-5 sm:p-8 text-white">
                  <div className="mb-2 sm:mb-3 flex flex-col sm:flex-row sm:items-center gap-2 sm:gap-4">
                    <h3 className="text-lg sm:text-2xl font-heading font-normal mb-1 sm:mb-2">
                      {testimonial.name}
                    </h3>
                    <StarRating rating={testimonial.rating} />
                  </div>
                  <p className="text-sm sm:text-base font-body leading-relaxed text-gray-200">
                    {testimonial.text}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </motion.div>
    </section>
  );
}