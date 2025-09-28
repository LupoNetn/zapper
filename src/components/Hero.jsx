import React from "react";
import { motion } from "framer-motion";

const Hero = () => {
  return (
    <motion.div 
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 2, ease: "easeOut" }}
    >
      <section
      id="home"
      className="w-full mx-auto text-center mt-16 section-container"
    >
      {/* Headline */}
      <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold leading-tight">
        Grow smarter with{" "}
        <span className="text-purple-500 border border-dashed">automation</span>
      </h1>

      {/* Subtext */}
      <div className="relative mt-4 lg:mt-6">
        <p className="text-base sm:text-lg md:text-xl lg:text-2xl max-w-3xl mx-auto leading-relaxed font-bold text-gray-700">
          Save time, engage more customers, and boost conversions with our
          all-in-one marketing automation platform.
        </p>

        <div className="hidden sm:block p-1 rounded-3xl bg-purple-600 text-white absolute right-25 bottom-0">
          <span>grow!.</span>
        </div>
      </div>

      {/* Button */}
      <button className="btn">Get Started Free</button>

      {/* Image with overlay */}
      <div className="flex flex-col items-center justify-center mt-8">
        <div className="relative w-full max-w-5xl">
          <img
            src="/dashboard.jpg"
            alt="Dashboard preview"
            className="w-full h-auto rounded-md object-cover"
          />
          {/* lighter overlay */}
          <div className="absolute inset-0 bg-black/10 rounded-md pointer-events-none" />
        </div>
      </div>

      {/* TO-DO: Partners */}
    </section>
    </motion.div>
  );
};

export default Hero;
