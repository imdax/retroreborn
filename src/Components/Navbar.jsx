import React from "react";

/* ---------- Slanted CTA ---------- */
function SlantedButton({ children }) {
  return (
    <button
      className="bg-lime-500 text-black px-8 py-3 font-bold tracking-wide hover:bg-lime-400 transition"
      style={{
        clipPath: "polygon(0 0, 90% 0, 100% 50%, 90% 100%, 0 100%)",
      }}
    >
      {children}
    </button>
  );
}

function Navbar() {
  return (
    <header className="w-full bg-black border-b border-white/10 sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex items-center justify-between h-20">
          {/* LEFT: LOGO */}
          <div className="flex items-center gap-2">
            <span className="text-white text-lg font-semibold tracking-wide">
              Retro Reborn
            </span>
            <span className="text-lime-400 font-semibold">Circuit</span>
          </div>

          {/* CENTER: NAV LINKS */}
          <nav className="hidden md:flex items-center gap-8 text-xl text-white/70">
            <span className="hover:text-white transition cursor-pointer">
              Circuit
            </span>
            <span className="hover:text-white transition cursor-pointer">
              Events
            </span>
            <span className="hover:text-white transition cursor-pointer">
              Rankings
            </span>
            <span className="hover:text-white transition cursor-pointer">
              News
            </span>
            <span className="hover:text-white transition cursor-pointer">
              Community
            </span>
            <span className="hover:text-white transition cursor-pointer">
              Merch
            </span>
          </nav>

          {/* RIGHT: ACTIONS */}
          <div className="flex items-center gap-4">
            {/* Discord Shortcut */}
            <span className="text-white/70 text-sm hover:text-white transition cursor-pointer hidden sm:block">
              Discord
            </span>

            {/* Primary CTA */}
            <SlantedButton>VIEW CIRCUIT</SlantedButton>
          </div>
        </div>
      </div>
    </header>
  );
}

export default Navbar;
