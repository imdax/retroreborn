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

/* ---------- DEMO DATA (WITH IMAGES) ---------- */
const merchItems = [
  {
    name: "RRC Season One Hoodie",
    tag: "Official Circuit Gear",
    note: "Limited run for Season One participants",
    image: "/images/merch/hoodie.png",
  },
  {
    name: "Goat Grand Prix Tee",
    tag: "Event Exclusive",
    note: "Available only during event weekends",
    image: "/images/merch/tshirt.png",
  },
  {
    name: "Retro Reborn Logo Cap",
    tag: "Core Identity",
    note: "Minimal branding for everyday wear",
    image: "/images/merch/full.png",
  },
];

/* ---------- COMPONENT ---------- */
function CircuitMerch() {
  return (
    <section className="w-full bg-black py-20 border-t border-white/10">
      <div className="max-w-6xl mx-auto px-6">
        {/* Header */}
        <div className="flex justify-between items-center">
          <h2 className="text-white text-3xl font-semibold">
            Official Circuit Merch
          </h2>
          <SlantedButton className="justify-end">VIEW ALL MERCH</SlantedButton>
        </div>
        <div className="mb-12">
          <p className="mt-2 text-white/60 max-w-xl">
            Apparel designed to represent participation in the Retro Reborn
            Circuit.
          </p>
        </div>

        {/* Merch Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {merchItems.map((item, index) => (
            <div
              key={index}
              className="bg-neutral-900 rounded-2xl overflow-hidden hover:bg-neutral-800 transition"
            >
              {/* Image */}
              <div className="h-56 w-full overflow-hidden">
                <img
                  src={item.image}
                  alt={item.name}
                  className="h-full w-full object-cover grayscale hover:grayscale-0 transition duration-500"
                />
              </div>

              {/* Content */}
              <div className="p-6">
                {/* Tag */}
                <p className="text-xs uppercase tracking-wide text-lime-400 mb-3">
                  {item.tag}
                </p>

                {/* Name */}
                <h3 className="text-white text-lg font-semibold mb-2">
                  {item.name}
                </h3>

                {/* Note */}
                <p className="text-white/70 text-sm leading-relaxed">
                  {item.note}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* CTA */}
      </div>
    </section>
  );
}

export default CircuitMerch;
