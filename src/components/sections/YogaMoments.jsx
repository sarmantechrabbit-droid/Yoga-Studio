import React from "react";
import img1 from '../../assets/image/footer1.png'
import img2 from '../../assets/image/footer2.png'
import img3 from '../../assets/image/footer3.png'
import img4 from '../../assets/image/footer4.png'
import img5 from '../../assets/image/footer5.png'
import img6 from '../../assets/image/footer6.png'


const images = [
 img1,
  img2,
 img3,
  img4,
  img5,
 img6,
 img1,
  img2,
];

export default function YogaMoments() {
  return (
    <section className="w-full bg-[#E1916E] py-8 px-4 rounded-t-[32px]">
      <div className="max-w-7xl mx-auto bg-peach rounded-xl ">
        {/* Heading */}
        <div className="text-center max-w-[520px] mx-auto">
          <h2 className="font-heading text-white text-[26px] sm:text-[32px] leading-snug">
            Share your Yoogy moments
            <br />
            with us
          </h2>

          <p className="mt-4 text-[13px] font-body sm:text-[14px] text-white/90 leading-relaxed">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit.
            Suspendisse varius enim in eros elementum tristique. Duis cursus,
            mi quis viverra ornare, eros dolor interdum nulla, ut commodo diam
            libero vitae erat.
          </p>
        </div>

        {/* Image Grid */}
        <div className="mt-12 grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-6">
          {images.map((src, index) => (
            <div
              key={index}
              className="aspect-square rounded-xl overflow-hidden bg-white"
            >
              <img
                src={src}
                alt=""
                className="w-full h-full object-cover"
              />
            </div>
          ))}
        </div>
      </div>

   
    </section>
  );
}
