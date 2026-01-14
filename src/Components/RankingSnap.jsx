import React from "react";

/* ---------- Slanted CTA ---------- */
function SlantedButton({ children }) {
  return (
    <button
      className="bg-lime-500 text-black px-10 py-4 font-bold tracking-wide hover:bg-lime-400 transition"
      style={{
        clipPath: "polygon(0 0, 90% 0, 100% 50%, 90% 100%, 0 100%)",
      }}
    >
      {children}
    </button>
  );
}

/* ---------- DEMO DATA ---------- */
const rankings = [
  {
    rank: 1,
    player: "ArjunR",
    xp: 1840,
    region: "IN",
    format: "GOAT (2005)",
  },
  {
    rank: 2,
    player: "ShadowFox",
    xp: 1715,
    region: "IN",
    format: "Edison (2010)",
  },
  {
    rank: 3,
    player: "NeoSpecter",
    xp: 1650,
    region: "IN",
    format: "GOAT (2005)",
  },
  {
    rank: 4,
    player: "BlueFlame",
    xp: 1580,
    region: "IN",
    format: "Synchro Era",
  },
  {
    rank: 5,
    player: "VoidCaster",
    xp: 1495,
    region: "IN",
    format: "Edison (2010)",
  },
];

/* ---------- COMPONENT ---------- */
function RankingsSnapshot() {
  return (
    <section className="w-full bg-black py-20 border-t border-white/10">
      <div className="max-w-6xl mx-auto px-6">
        {/* HEADER */}
        <div className="flex items-start justify-between mb-10">
          {/* Left: Title + Description */}
          <div>
            <h2 className="text-white text-3xl font-semibold">
              Rankings Snapshot
            </h2>
            <p className="mt-2 text-white/60 max-w-lg">
              Current top performers based on XP earned across official circuit
              events.
            </p>
          </div>

          {/* Right: CTA */}
          <SlantedButton>FULL RANKINGS</SlantedButton>
        </div>

        {/* RANKINGS TABLE */}
        <div className="bg-neutral-900 rounded-2xl overflow-hidden">
          {/* Table Header */}
          <div className="grid grid-cols-5 gap-4 px-6 py-4 text-white/50 text-sm border-b border-white/10">
            <span>Rank</span>
            <span>Player</span>
            <span>XP</span>
            <span>Region</span>
            <span>Format</span>
          </div>

          {/* Table Rows */}
          {rankings.map((row) => (
            <div
              key={row.rank}
              className="grid grid-cols-5 gap-4 px-6 py-4 text-white text-sm border-b border-white/5 hover:bg-neutral-800 transition"
            >
              <span className="font-semibold">#{row.rank}</span>
              <span className="font-medium">{row.player}</span>
              <span className="text-white/80">{row.xp}</span>
              <span className="text-white/70">{row.region}</span>
              <span className="text-white/70">{row.format}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default RankingsSnapshot;
