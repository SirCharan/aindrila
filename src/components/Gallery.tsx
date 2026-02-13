"use client";

import Image from "next/image";
import { Instagram, Heart, MessageCircle, MapPin } from "lucide-react";
import ScrollReveal from "./ScrollReveal";

const posts = [
  {
    image: "/images/s.jpeg",
    location: "Genting Highlands, Malaysia",
    likes: 1247,
    comments: 92,
    size: "row-span-2",
  },
  {
    image: "/images/636ec691-4bdf-4f04-a392-7eb68dd76112.png",
    location: "Kuala Lumpur, Malaysia",
    likes: 1203,
    comments: 85,
    size: "",
  },
  {
    image: "/images/77c74f99-b959-47f9-a2ba-186bddc85342.png",
    location: "Infinity Pool Views",
    likes: 1089,
    comments: 74,
    size: "",
  },
  {
    image: "/images/c761ec3c-c003-416f-8523-5de276969c0c.png",
    location: "Las Cabanas, Philippines",
    likes: 781,
    comments: 29,
    size: "",
  },
  {
    image: "/images/4784ea21-858b-42d6-8366-c5e8e8a510e4.png",
    location: "Koh Samui, Thailand",
    likes: 1456,
    comments: 112,
    size: "row-span-2",
  },
  {
    image: "/images/5cbc3bdb-d08e-4f8d-9fb8-a01b09b00a9a.png",
    location: "Bangalore Vibes",
    likes: 922,
    comments: 41,
    size: "",
  },
  {
    image: "/images/7886fb1c-7a1a-4cb4-9396-2bbe6a061669.png",
    location: "Concert Night, Mumbai",
    likes: 1567,
    comments: 143,
    size: "",
  },
  {
    image: "/images/c6cffef2-8462-4ad6-a4ce-55f903f368bd.png",
    location: "Sunset Paradise",
    likes: 1678,
    comments: 124,
    size: "",
  },
  {
    image: "/images/120cabd7-8977-4cd6-9073-10babac3a1bf.png",
    location: "Underwater World, Phuket",
    likes: 892,
    comments: 67,
    size: "",
  },
  {
    image: "/images/11598b2d-dc72-4faf-bd61-b4e964d8ef3c.png",
    location: "Beach Life, Goa",
    likes: 1234,
    comments: 91,
    size: "",
  },
  {
    image: "/images/0cdf9a49-8ba6-4711-8532-e8b12343e0cc.png",
    location: "Cultural Heritage",
    likes: 1432,
    comments: 108,
    size: "",
  },
  {
    image: "/images/8d6d1ed2-bcc2-4a96-bcfd-3907293f2022.png",
    location: "Urban Explorer",
    likes: 1345,
    comments: 98,
    size: "",
  },
];

export default function Gallery() {
  return (
    <section id="gallery" className="py-24 md:py-32 bg-background">
      <div className="max-w-7xl mx-auto px-6">
        <ScrollReveal>
          <div className="flex flex-col md:flex-row md:items-end md:justify-between mb-14">
            <div>
              <p className="text-sm tracking-[0.25em] uppercase text-warm-500 mb-3">
                @aindrila_bhowmik
              </p>
              <h2 className="font-serif text-4xl md:text-5xl text-warm-900">
                Follow My Adventures
              </h2>
            </div>
            <a
              href="https://www.instagram.com/aindrila_bhowmik/"
              target="_blank"
              rel="noopener noreferrer"
              className="mt-4 md:mt-0 inline-flex items-center gap-2 px-6 py-3 bg-warm-800 text-white rounded-full text-sm hover:bg-warm-900 transition-colors"
            >
              <Instagram size={16} />
              Follow on Instagram
            </a>
          </div>
        </ScrollReveal>

        {/* Masonry-like grid */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3 auto-rows-[200px] md:auto-rows-[240px]">
          {posts.map((post, i) => (
            <ScrollReveal key={i} delay={i * 60} className={post.size}>
              <div className="group relative h-full rounded-xl overflow-hidden cursor-pointer">
                <Image
                  src={post.image}
                  alt={post.location}
                  fill
                  className="object-cover transition-transform duration-700 group-hover:scale-105"
                  sizes="(max-width: 768px) 50vw, 25vw"
                />
                {/* Hover overlay */}
                <div className="absolute inset-0 bg-black/0 group-hover:bg-black/50 transition-colors duration-400 flex items-end">
                  <div className="p-4 translate-y-full group-hover:translate-y-0 transition-transform duration-400 w-full">
                    <div className="flex items-center gap-1 text-white/80 text-xs mb-2">
                      <MapPin size={12} />
                      {post.location}
                    </div>
                    <div className="flex gap-4 text-white text-xs">
                      <span className="flex items-center gap-1">
                        <Heart size={12} />
                        {post.likes.toLocaleString()}
                      </span>
                      <span className="flex items-center gap-1">
                        <MessageCircle size={12} />
                        {post.comments}
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
}
