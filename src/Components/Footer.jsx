import React from "react";

function Footer() {
  return (
    <footer className="w-full bg-black border-t border-white/10">
      <div className="max-w-6xl mx-auto px-6 py-16">
        {/* Top Grid */}
        <div className="grid grid-cols-2 md:grid-cols-6 gap-10 mb-12">
          {/* Brand */}
          <div className="col-span-2">
            <h3 className="text-white text-lg font-semibold mb-3">
              Retro Reborn Circuit
            </h3>
            <p className="text-white/60 text-sm leading-relaxed max-w-xs">
              A competitive platform dedicated to organized retro-format play,
              community-driven events, and season-based progression.
            </p>
          </div>

          {/* About */}
          <div>
            <h4 className="text-white font-semibold mb-3">About</h4>
            <ul className="space-y-2 text-white/60 text-sm">
              <li className="hover:text-white transition cursor-pointer">
                Our Mission
              </li>
              <li className="hover:text-white transition cursor-pointer">
                Circuit Overview
              </li>
              <li className="hover:text-white transition cursor-pointer">
                Team
              </li>
            </ul>
          </div>

          {/* Rules */}
          <div>
            <h4 className="text-white font-semibold mb-3">Rules</h4>
            <ul className="space-y-2 text-white/60 text-sm">
              <li className="hover:text-white transition cursor-pointer">
                Tournament Rules
              </li>
              <li className="hover:text-white transition cursor-pointer">
                Code of Conduct
              </li>
              <li className="hover:text-white transition cursor-pointer">
                Format Guidelines
              </li>
            </ul>
          </div>

          {/* FAQ */}
          <div>
            <h4 className="text-white font-semibold mb-3">FAQ</h4>
            <ul className="space-y-2 text-white/60 text-sm">
              <li className="hover:text-white transition cursor-pointer">
                Registration
              </li>
              <li className="hover:text-white transition cursor-pointer">
                XP & Rankings
              </li>
              <li className="hover:text-white transition cursor-pointer">
                Event Locations
              </li>
            </ul>
          </div>

          {/* Merch */}
          <div>
            <h4 className="text-white font-semibold mb-3">Merch</h4>
            <ul className="space-y-2 text-white/60 text-sm">
              <li className="hover:text-white transition cursor-pointer">
                Official Circuit Gear
              </li>
              <li className="hover:text-white transition cursor-pointer">
                Event Exclusives
              </li>
              <li className="hover:text-white transition cursor-pointer">
                Size Guide
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-6 border-t border-white/10 pt-8">
          {/* Legal */}
          <div className="flex flex-wrap gap-4 text-white/50 text-sm">
            <span className="hover:text-white transition cursor-pointer">
              Legal
            </span>
            <span className="hover:text-white transition cursor-pointer">
              Privacy Policy
            </span>
            <span className="hover:text-white transition cursor-pointer">
              Terms of Service
            </span>
          </div>

          {/* Socials */}
          <div className="flex gap-6 text-white/60 text-sm">
            <span className="hover:text-white transition cursor-pointer">
              Discord
            </span>
            <span className="hover:text-white transition cursor-pointer">
              Instagram
            </span>
            <span className="hover:text-white transition cursor-pointer">
              X / Twitter
            </span>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
