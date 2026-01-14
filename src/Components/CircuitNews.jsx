import React from "react";

/* ---------- DEMO DATA ---------- */
const newsItems = [
  {
    type: "Announcement",
    title: "Retro Reborn Circuit Season One Officially Begins",
    excerpt:
      "Season One of the Retro Reborn Circuit launches with multiple regional events and a unified XP-based ranking system.",
    date: "March 10, 2026",
  },
  {
    type: "Rule Update",
    title: "Updated Match Time & Deck List Submission Rules",
    excerpt:
      "New guidelines have been introduced to standardize match timing and deck list verification across all circuit events.",
    date: "March 18, 2026",
  },
  {
    type: "Event Recap",
    title: "Goat Grand Prix Delhi — Quarterfinals Recap",
    excerpt:
      "High-level play defined the Goat Grand Prix in Delhi, with multiple standout performances and decisive matchups.",
    date: "March 22, 2026",
  },
];

/* ---------- COMPONENT ---------- */
function CircuitNews() {
  return (
    <section className="w-full bg-black py-20 border-t border-white/10">
      <div className="max-w-6xl mx-auto px-6">
        {/* Header */}
        <div className="mb-12">
          <h2 className="text-white text-3xl font-semibold">Circuit News</h2>
          <p className="mt-2 text-white/60 max-w-xl">
            Official announcements, rule updates, and event coverage from the
            Retro Reborn Circuit.
          </p>
        </div>

        {/* News Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {newsItems.map((item, index) => (
            <div
              key={index}
              className="bg-neutral-900 rounded-2xl p-6 hover:bg-neutral-800 transition cursor-pointer"
            >
              {/* Category */}
              <p className="text-xs uppercase tracking-wide text-lime-400 mb-3">
                {item.type}
              </p>

              {/* Title */}
              <h3 className="text-white text-lg font-semibold leading-snug mb-3">
                {item.title}
              </h3>

              {/* Excerpt */}
              <p className="text-white/70 text-sm leading-relaxed mb-6">
                {item.excerpt}
              </p>

              {/* Meta */}
              <p className="text-white/40 text-xs">{item.date}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default CircuitNews;
