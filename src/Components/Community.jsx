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

/* ---------- DEMO STATS ---------- */
const stats = [
  {
    label: "Active Players",
    value: "2,300+",
  },
  {
    label: "Events Hosted",
    value: "48",
  },
  {
    label: "Cities Covered",
    value: "12",
  },
  {
    label: "Discord Members",
    value: "5,800+",
  },
];

/* ---------- COMPONENT ---------- */
function CommunitySection() {
  return (
    <section className="w-full bg-black py-20 border-t border-white/10">
      <div className="max-w-6xl mx-auto px-6">
        {/* HEADER */}
        <div className="flex flex-col md:flex-row items-start md:items-center justify-between mb-12">
          <div>
            <h2 className="text-white text-3xl font-semibold">Community</h2>
            <p className="mt-2 text-white/60 max-w-xl">
              Join the official Retro Reborn Circuit community to stay connected
              with players, events, and announcements.
            </p>
          </div>

          {/* CTA */}
          <div className="mt-6 md:mt-0">
            <SlantedButton>JOIN DISCORD</SlantedButton>
          </div>
        </div>

        {/* CONTENT GRID */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
          {/* LEFT: Social Proof */}
          <div className="bg-neutral-900 rounded-2xl p-8">
            <h3 className="text-white text-xl font-semibold mb-4">
              Why Players Join
            </h3>

            <ul className="space-y-4 text-white/80 text-sm leading-relaxed">
              <li>• Official circuit announcements and updates</li>
              <li>• Event coordination and registration support</li>
              <li>• Strategy discussion across retro formats</li>
              <li>• Direct access to organizers and moderators</li>
              <li>• Player recognition and community highlights</li>
            </ul>
          </div>

          {/* RIGHT: STATS */}
          <div className="grid grid-cols-2 gap-6">
            {stats.map((stat, index) => (
              <div
                key={index}
                className="bg-neutral-900 rounded-2xl p-6 flex flex-col justify-center"
              >
                <p className="text-white text-3xl font-semibold">
                  {stat.value}
                </p>
                <p className="mt-2 text-white/60 text-sm">{stat.label}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

export default CommunitySection;
