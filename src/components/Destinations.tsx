"use client";

import Image from "next/image";
import ScrollReveal from "./ScrollReveal";

const destinations = [
  {
    title: "Singapore",
    subtitle: "City Lights, City Sights",
    description: "Lost in the architectural hues of Singapore.",
    image: "/images/a.jpeg",
    span: "md:col-span-2 md:row-span-2",
    aspect: "aspect-[4/5]",
  },
  {
    title: "Malaysia",
    subtitle: "Urban Exploration",
    description: "Vibrant culture and stunning architecture of Kuala Lumpur.",
    image: "/images/636ec691-4bdf-4f04-a392-7eb68dd76112.png",
    span: "",
    aspect: "aspect-square",
  },
  {
    title: "Goa",
    subtitle: "Magical Evenings",
    description: "Experiencing vibrant nightlife in dreamy destinations.",
    image: "/images/singapore-mbs.png",
    span: "",
    aspect: "aspect-square",
  },
  {
    title: "Philippines",
    subtitle: "Evening Magic",
    description: "The magical evening atmosphere at Las Cabanas.",
    image: "/images/c761ec3c-c003-416f-8523-5de276969c0c.png",
    span: "",
    aspect: "aspect-[4/3]",
  },
  {
    title: "Bali",
    subtitle: "Bamboo Nest",
    description: "Natural beauty of Indonesia's landscapes.",
    image: "/images/4784ea21-858b-42d6-8366-c5e8e8a510e4.png",
    span: "",
    aspect: "aspect-[4/3]",
  },
  {
    title: "Thailand",
    subtitle: "Underwater World",
    description: "Colorful marine life beneath the waves.",
    image: "/images/120cabd7-8977-4cd6-9073-10babac3a1bf.png",
    span: "",
    aspect: "aspect-[4/3]",
  },
];

export default function Destinations() {
  return (
    <section id="destinations" className="py-24 md:py-32 bg-background">
      <div className="max-w-7xl mx-auto px-6">
        <ScrollReveal>
          <div className="text-center mb-16">
            <p className="text-sm tracking-[0.25em] uppercase text-warm-500 mb-3">
              Explore
            </p>
            <h2 className="font-serif text-4xl md:text-5xl lg:text-6xl text-warm-900">
              Travel Journal
            </h2>
            <p className="mt-4 text-warm-600 max-w-lg mx-auto text-lg font-light">
              Breathtaking destinations from around the world
            </p>
          </div>
        </ScrollReveal>

        <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
          {destinations.map((dest, i) => (
            <ScrollReveal
              key={dest.title}
              delay={i * 100}
              className={dest.span}
            >
              <div
                className={`group relative ${dest.aspect} rounded-2xl overflow-hidden cursor-pointer`}
              >
                <Image
                  src={dest.image}
                  alt={dest.title}
                  fill
                  className="object-cover transition-transform duration-700 group-hover:scale-105"
                  sizes="(max-width: 768px) 100vw, 50vw"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/10 to-transparent opacity-60 group-hover:opacity-80 transition-opacity duration-500" />
                <div className="absolute bottom-0 left-0 right-0 p-6 translate-y-2 group-hover:translate-y-0 transition-transform duration-500">
                  <p className="text-xs tracking-[0.2em] uppercase text-white/70 mb-1">
                    {dest.subtitle}
                  </p>
                  <h3 className="font-serif text-2xl text-white mb-1">
                    {dest.title}
                  </h3>
                  <p className="text-sm text-white/70 opacity-0 group-hover:opacity-100 transition-opacity duration-500 delay-100">
                    {dest.description}
                  </p>
                </div>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
}
