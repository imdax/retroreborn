import React from "react";

/* ---------- Slanted Badge ---------- */
function SlantedBox({ children, className = "" }) {
  return (
    <div
      className={`px-5 py-1.5 font-semibold ${className}`}
      style={{
        clipPath: "polygon(0 0, 92% 0, 100% 50%, 92% 100%, 0 100%)",
      }}
    >
      {children}
    </div>
  );
}

/* ---------- DATA ---------- */
const liveMatches = [
  {
    date: "Wednesday · 29 Oct 2025",
    teamA: "KT",
    teamB: "CFO",
    stage: "Quarterfinals",
    format: "Bo5",
  },
  {
    date: "Wednesday · 29 Oct 2025",
    teamA: "RRC Titans",
    teamB: "RRC Phantoms",
    stage: "Quarterfinals",
    format: "Bo5",
  },
];

const upcomingMatches = [
  {
    date: "Thursday · 30 Oct 2025",
    teamA: "RRC Alpha",
    teamB: "RRC Omega",
    stage: "Semifinals",
    format: "Bo5",
  },
  {
    date: "Friday · 31 Oct 2025",
    teamA: "RRC Nova",
    teamB: "RRC Eclipse",
    stage: "Semifinals",
    format: "Bo5",
  },
];

/* ---------- COMPONENT ---------- */
function LiveAndUpcoming() {
  return (
    <section className="w-full bg-black py-16">
      <div className="max-w-6xl mx-auto px-6 space-y-20">
        {/* ================= LIVE SECTION ================= */}
        <div>
          <h2 className="text-white text-3xl font-semibold mb-8">
            Live Matches
          </h2>

          <p className="text-white/60 text-sm mb-4">Wednesday · 29 Oct 2025</p>

          <div className="space-y-4">
            {liveMatches.map((match, i) => (
              <div
                key={i}
                className="bg-neutral-900 rounded-xl px-6 py-5 flex items-center justify-between"
              >
                {/* Left */}
                <div className="flex items-center gap-6">
                  <div className="w-12 h-12 bg-neutral-800 flex items-center justify-center text-white rounded-md">
                    ▶
                  </div>

                  <div className="text-white font-semibold text-lg">
                    {match.teamA}
                    <span className="text-white/40 mx-2">vs</span>
                    {match.teamB}
                  </div>
                </div>

                {/* Center */}
                <p className="hidden md:block text-white/60 text-sm">
                  Retro Reborn Circuit · {match.stage}
                </p>

                {/* Right */}
                <div className="flex items-center gap-6">
                  <span className="text-white/50 text-sm">{match.format}</span>

                  <SlantedBox className="bg-lime-500 text-black animate-pulse">
                    LIVE
                  </SlantedBox>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* ================= UPCOMING SECTION ================= */}
        <div>
          <h2 className="text-white text-3xl font-semibold mb-8">
            Upcoming Matches
          </h2>

          <p className="text-white/60 text-sm mb-4">
            Thursday · 30 Oct – Friday · 31 Oct 2025
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {upcomingMatches.map((match, i) => (
              <div
                key={i}
                className="bg-neutral-900 rounded-2xl p-6 flex flex-col justify-between"
              >
                <div>
                  <p className="text-white/50 text-xs mb-2">
                    Retro Reborn Circuit · {match.stage}
                  </p>

                  <h3 className="text-white text-xl font-semibold">
                    {match.teamA}
                    <span className="text-white/40 mx-2">vs</span>
                    {match.teamB}
                  </h3>
                </div>

                <div className="flex items-center justify-between mt-6">
                  <span className="text-white/50 text-sm">{match.format}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

export default LiveAndUpcoming;
