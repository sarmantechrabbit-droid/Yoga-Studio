import React, { useState } from "react";
import { motion } from "framer-motion";
import contactimg from "../../assets/image/contact_img.png";
import emailjs from "@emailjs/browser";

const ContactSection = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
  });
  const [loading, setLoading] = useState(false);
const [errors, setErrors] = useState({});
const [showPopup, setShowPopup] = useState(false);



  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

const handleSubmit = (e) => {
  e.preventDefault();

  if (!validateForm()) return;

  setLoading(true);

  emailjs
    .send(
      "service_skvbu0b",
      "template_rxhhxmt",
      {
        from_name: formData.name,
        from_email: formData.email,
        phone: formData.phone,
        message: formData.message,
      },
      "3RTI-iCG0OcU1qB-5"
    )
    .then(() => {
     setShowPopup(true);

// Auto close popup after 3 seconds
setTimeout(() => {
  setShowPopup(false);
}, 3000);


      setFormData({
        name: "",
        email: "",
        phone: "",
        message: "",
      });
      setErrors({});
    })
    .catch((error) => {
      console.error("EmailJS Error:", error);
      alert("Something went wrong. Please try again.");
    })
    .finally(() => {
      setLoading(false);
    });
};


  const fadeInUp = {
    hidden: { opacity: 0, y: 30 },
    visible: (i = 0) => ({
      opacity: 1,
      y: 0,
      transition: { delay: i * 0.1, duration: 0.6, ease: "easeOut" },
    }),
  };

 const validateForm = () => {
  const newErrors = {};

  if (!formData.name.trim()) {
    newErrors.name = "Name is required";
  }

  if (!formData.email.trim()) {
    newErrors.email = "Email is required";
  } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
    newErrors.email = "Enter a valid email";
  }

  if (!formData.phone.trim()) {
    newErrors.phone = "Phone number is required";
  } else if (!/^[0-9]{10}$/.test(formData.phone)) {
    newErrors.phone = "Phone number must be exactly 10 digits";
  }

  if (!formData.message.trim()) {
    newErrors.message = "Message is required";
  }

  setErrors(newErrors);
  return Object.keys(newErrors).length === 0;
};



  return (
    <section
      id="contact"
      className="w-full py-12 sm:py-16 md:py-20 px-4 sm:px-6 lg:px-8"
    >
      <div className="max-w-7xl mx-auto">
        <div className="grid lg:grid-cols-2 gap-6 lg:gap-8 items-stretch">
          {/* Left Side - Image with Text Overlay */}
          <motion.div
            className="relative rounded-3xl overflow-hidden min-h-[400px] sm:min-h-[450px] lg:min-h-[500px]"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
            variants={fadeInUp}
            custom={0}
          >
            {/* Background Image */}
            <div className="absolute inset-0 bg-gray-800">
              <img
                src={contactimg}
                alt="Yoga meditation"
                className="w-full h-full object-cover opacity-80"
              />
              {/* Overlay */}
              <div className="absolute inset-0 bg-gradient-to-br from-black/60 via-black/40 to-black/60"></div>
            </div>

            {/* Text Content Overlay */}
            <div className="relative z-10 h-full flex flex-col justify-end p-8 sm:p-10 lg:p-12">
              <motion.h2
                className="text-white font-bold text-4xl sm:text-5xl lg:text-5xl mb-4 leading-tight"
                style={{ fontFamily: "'Playfair Display', Georgia, serif" }}
                variants={fadeInUp}
                custom={1}
              >
                Get in Touch with
                <br />
                Us Today
              </motion.h2>
              <motion.p
                className="text-white/90 text-sm sm:text-base lg:text-lg max-w-md leading-relaxed"
                variants={fadeInUp}
                custom={2}
              >
                Have questions or need assistance? Reach out to us through the
                form below or visit our studio for personalized support.
              </motion.p>
            </div>
          </motion.div>

          {/* Right Side - Contact Form */}
          <motion.div
            className="bg-white border-1 border-[#E8DBC9] rounded-[21px] p-6 sm:p-8 lg:p-10"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
            variants={fadeInUp}
            custom={0}
          >
            <motion.h3
              className="text-2xl sm:text-3xl lg:text-4xl font-bold text-gray-900 mb-6 sm:mb-8"
              style={{ fontFamily: "'Playfair Display', Georgia, serif" }}
              variants={fadeInUp}
              custom={1}
            >
              Send us a Message
            </motion.h3>

            <form onSubmit={handleSubmit} className="space-y-5">
              {/* Name and Email Row */}
              <motion.div
                className="grid sm:grid-cols-2 gap-4"
                variants={fadeInUp}
                custom={2}
              >
                <div>
                  <label
                    htmlFor="name"
                    className="block text-sm font-medium text-gray-700 mb-2"
                  >
                    Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    placeholder="Enter your name"
                    className="w-full px-4 py-3 border border-[#E8DBC9] rounded-xl 
                             focus:outline-none focus:ring-2 focus:ring-orange-400/50 focus:border-orange-400
                             transition-all duration-200 text-gray-900 placeholder:text-gray-400"
                    required
                  />
                </div>
                <div>
                  <label
                    htmlFor="email"
                    className="block text-sm font-medium text-gray-700 mb-2"
                  >
                    Email
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    placeholder="Enter your email"
                    className="w-full px-4 py-3 border border-[#E8DBC9] rounded-xl 
                             focus:outline-none focus:ring-2 focus:ring-orange-400/50 focus:border-orange-400
                             transition-all duration-200 text-gray-900 placeholder:text-gray-400"
                    required
                  />
                </div>
              </motion.div>

              {/* Phone Number */}
            <motion.div variants={fadeInUp} custom={3}>
  <label
    htmlFor="phone"
    className="block text-sm font-medium text-gray-700 mb-2"
  >
    Phone Number
  </label>

  <input
    type="tel"
    id="phone"
    name="phone"
    value={formData.phone}
    onChange={(e) => {
      const value = e.target.value.replace(/\D/g, "");
      if (value.length <= 10) {
        setFormData({ ...formData, phone: value });
      }
    }}
    placeholder="Enter 10-digit phone number"
    inputMode="numeric"
    maxLength={10}
    className="w-full px-4 py-3 border border-[#E8DBC9] rounded-xl 
             focus:outline-none focus:ring-2 focus:ring-orange-400/50 focus:border-orange-400
             transition-all duration-200 text-gray-900 placeholder:text-gray-400"
    required
  />

  {errors.phone && (
    <p className="text-red-500 text-xs mt-1">{errors.phone}</p>
  )}
</motion.div>


              {/* Message */}
              <motion.div variants={fadeInUp} custom={4}>
                <label
                  htmlFor="message"
                  className="block text-sm font-medium text-gray-700 mb-2"
                >
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  placeholder="Enter your message"
                  rows={4}
                  className="w-full px-4 py-3 border border-[#E8DBC9] rounded-xl 
                           focus:outline-none focus:ring-2 focus:ring-orange-400/50 focus:border-orange-400
                           transition-all duration-200 text-gray-900 placeholder:text-gray-400 resize-none"
                  required
                />
              </motion.div>

              {/* Submit Button */}
              <motion.button
  type="submit"
  disabled={loading}
  className={`w-full bg-gradient-to-r from-[#E89A7A] to-[#E88F6F] text-white font-semibold 
    py-3.5 px-6 rounded-xl transition-all duration-300 
    flex items-center justify-center gap-2
    ${loading ? "opacity-70 cursor-not-allowed" : "hover:shadow-lg hover:scale-[1.02]"}`}
>
  {loading ? (
    <>
      <svg
        className="w-5 h-5 animate-spin"
        fill="none"
        stroke="currentColor"
        viewBox="0 0 24 24"
      >
        <circle
          className="opacity-25"
          cx="12"
          cy="12"
          r="10"
          strokeWidth="4"
        />
        <path
          className="opacity-75"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="4"
          d="M4 12a8 8 0 018-8"
        />
      </svg>
      Sending...
    </>
  ) : (
    <>
      <span>Send Your Message</span>
      <svg
        className="w-5 h-5 transform group-hover:translate-x-1 transition-transform duration-300"
        fill="none"
        stroke="currentColor"
        viewBox="0 0 24 24"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={2}
          d="M17 8l4 4m0 0l-4 4m4-4H3"
        />
      </svg>
    </>
  )}
</motion.button>

            </form>
            {/* Success Popup */}
{showPopup && (
  <motion.div
    initial={{ opacity: 0 }}
    animate={{ opacity: 1 }}
    exit={{ opacity: 0 }}
    className="fixed inset-0 z-50 flex items-center justify-center bg-black/50"
  >
    <motion.div
      initial={{ scale: 0.8, opacity: 0 }}
      animate={{ scale: 1, opacity: 1 }}
      transition={{ duration: 0.3, ease: "easeOut" }}
      className="bg-white rounded-2xl p-6 sm:p-8 text-center max-w-sm w-full mx-4 shadow-xl"
    >
      <div className="flex justify-center mb-4">
        <div className="w-14 h-14 rounded-full bg-green-100 flex items-center justify-center">
          <svg
            className="w-7 h-7 text-green-600"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M5 13l4 4L19 7"
            />
          </svg>
        </div>
      </div>

      <h3 className="text-lg font-semibold text-gray-900 mb-2">
        Message Sent!
      </h3>

      <p className="text-sm text-gray-600">
        Thank you for contacting us. We’ll get back to you shortly.
      </p>

      <button
        onClick={() => setShowPopup(false)}
        className="mt-6 px-5 py-2 rounded-lg bg-[#E89A7A] text-white font-medium hover:opacity-90 transition"
      >
        Close
      </button>
    </motion.div>
  </motion.div>
)}

          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
