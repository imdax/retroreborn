import React from "react";

function CurrentSeasonSection() {
  return (
    <section className="w-full bg-black py-20 border-t border-white/10">
      <div className="max-w-6xl mx-auto px-6">
        {/* Section Header */}
        <div className="mb-12">
          <h2 className="text-white text-3xl font-semibold">Current Season</h2>
          <p className="mt-2 text-white/60 max-w-xl">
            Track progression, rankings, and competitive formats across the
            active Retro Reborn Circuit season.
          </p>
        </div>

        {/* Season Overview Container */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 bg-neutral-900 rounded-2xl p-8">
          {/* Left: Season Info */}
          <div className="space-y-6">
            <div>
              <p className="text-white/50 text-sm uppercase tracking-wide">
                Season Name
              </p>
              <p className="text-white text-xl font-semibold">
                Retro Reborn Circuit — Season One
              </p>
            </div>

            <div>
              <p className="text-white/50 text-sm uppercase tracking-wide">
                Duration
              </p>
              <p className="text-white text-lg">March 2026 – July 2026</p>
            </div>

            <div>
              <p className="text-white/50 text-sm uppercase tracking-wide">
                Formats Included
              </p>
              <div className="flex flex-wrap gap-3 mt-2">
                <span className="px-4 py-2 bg-black border border-white/10 text-white text-sm rounded-full">
                  GOAT (2005)
                </span>
                <span className="px-4 py-2 bg-black border border-white/10 text-white text-sm rounded-full">
                  Edison (2010)
                </span>
                <span className="px-4 py-2 bg-black border border-white/10 text-white text-sm rounded-full">
                  Synchro Era
                </span>
              </div>
            </div>
          </div>

          {/* Right: XP System */}
          <div className="flex flex-col justify-between">
            <div>
              <p className="text-white/50 text-sm uppercase tracking-wide mb-2">
                XP & Progression System
              </p>
              <p className="text-white/80 leading-relaxed">
                Players earn XP by participating in official circuit events.
                Performance-based bonuses are awarded for match wins, top
                placements, and season milestones. XP determines rankings and
                qualification eligibility for postseason events.
              </p>
            </div>

            {/* CTA */}
            <div className="mt-8">
              <button
                className="bg-lime-500 text-black px-10 py-4 font-bold tracking-wide hover:bg-lime-400 transition"
                style={{
                  clipPath: "polygon(0 0, 90% 0, 100% 50%, 90% 100%, 0 100%)",
                }}
              >
                VIEW RANKINGS
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default CurrentSeasonSection;
