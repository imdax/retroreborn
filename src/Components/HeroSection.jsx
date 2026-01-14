import React from "react";
import bg from "../assets/hr.jpg";

function HeroSection() {
  return (
    <section
      className="relative w-full min-h-screen bg-cover bg-center"
      style={{ backgroundImage: `url(${bg})` }}
    >
      {/* Overlay */}
      <div className="absolute inset-0 bg-black/60"></div>
      <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/40 to-black/80"></div>

      {/* Content */}
      <div className="relative z-10 flex flex-col justify-center min-h-screen px-4">
        <h1
          className="
            text-center nav-font font-extrabold text-white tracking-widest
            text-3xl sm:text-4xl md:text-5xl
          "
        >
          Retro Reborn Circuit
        </h1>

        <p
          className="
            text-center text-gray-300 mt-4
            text-lg sm:text-2xl md:text-3xl
          "
        >
          The home of competitive retro Yu-Gi-Oh formats
        </p>

        <div className="flex flex-col sm:flex-row justify-center gap-4 mt-6">
          <button
            className="
              relative px-8 sm:px-10 py-3
              text-black font-semibold uppercase tracking-wide
              bg-gradient-to-r from-lime-600 to-lime-300
              hover:from-lime-500 hover:to-lime-400
              transition-all duration-200
            "
            style={{
              clipPath: "polygon(6% 0%, 100% 0%, 94% 100%, 0% 100%)",
            }}
          >
            View Circuit
          </button>

          <button
            className="
              px-8 sm:px-10 py-3
              text-white font-rajdhani font-semibold uppercase tracking-wide
              bg-gradient-to-r from-gray-700 to-gray-600
              hover:from-gray-600 hover:to-gray-500
              transition-all duration-200
            "
            style={{
              clipPath: "polygon(8% 0%, 100% 0%, 92% 100%, 0% 100%)",
            }}
          >
            View Events
          </button>
        </div>
      </div>
    </section>
  );
}

export default HeroSection;
