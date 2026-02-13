"use client";

import Image from "next/image";
import { useEffect, useRef } from "react";
import { ChevronDown, MapPin, Briefcase } from "lucide-react";

export default function Hero() {
  const parallaxRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const onScroll = () => {
      if (parallaxRef.current) {
        const y = window.scrollY;
        parallaxRef.current.style.transform = `translateY(${y * 0.3}px)`;
      }
    };
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <section className="relative h-screen overflow-hidden">
      {/* Parallax background */}
      <div ref={parallaxRef} className="absolute inset-0 -top-20 -bottom-20">
        <Image
          src="/images/8d6d1ed2-bcc2-4a96-bcfd-3907293f2022.png"
          alt="Aindrila at a scenic destination"
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/30 via-black/10 to-black/60" />
      </div>

      {/* Content */}
      <div className="relative z-10 h-full flex flex-col items-center justify-center text-center text-white px-6">
        <p className="text-sm tracking-[0.3em] uppercase mb-4 opacity-80 animate-[fadeUp_0.8s_ease_0.2s_both]">
          Travel & Lifestyle
        </p>
        <h1 className="font-serif text-5xl md:text-7xl lg:text-8xl font-medium mb-6 animate-[fadeUp_0.8s_ease_0.4s_both]">
          Aindrila Bhowmik
        </h1>
        <p className="text-lg md:text-xl font-light max-w-xl mb-10 opacity-90 animate-[fadeUp_0.8s_ease_0.6s_both]">
          Team Lead by Profession. Influencer by Passion.
        </p>

        <div className="flex flex-wrap justify-center gap-6 text-sm opacity-80 animate-[fadeUp_0.8s_ease_0.8s_both]">
          <span className="flex items-center gap-1.5">
            <MapPin size={14} />
            Bangalore, India
          </span>
          <span className="flex items-center gap-1.5">
            <Briefcase size={14} />
            Accenture
          </span>
          <span>25K+ Followers</span>
          <span>MBA, NIT Trichy</span>
        </div>
      </div>

      {/* Scroll indicator */}
      <a
        href="#destinations"
        className="absolute bottom-8 left-1/2 -translate-x-1/2 z-10 text-white/60 hover:text-white transition-colors animate-bounce"
      >
        <ChevronDown size={28} />
      </a>

      <style jsx>{`
        @keyframes fadeUp {
          from {
            opacity: 0;
            transform: translateY(24px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
      `}</style>
    </section>
  );
}
