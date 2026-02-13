"use client";

import { useState, useEffect } from "react";
import { Instagram, Menu, X } from "lucide-react";

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const links = [
    { label: "Discover", href: "#destinations" },
    { label: "About", href: "#about" },
    { label: "Gallery", href: "#gallery" },
    { label: "Connect", href: "#connect" },
  ];

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        scrolled
          ? "py-3 bg-white/90 backdrop-blur-lg shadow-[0_1px_0_rgba(0,0,0,0.06)]"
          : "py-5 bg-transparent"
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 flex items-center justify-between">
        <a
          href="#"
          className={`font-serif text-2xl tracking-tight transition-colors duration-300 ${
            scrolled ? "text-warm-900" : "text-white"
          }`}
        >
          Aindrila
        </a>

        <nav className="hidden md:flex items-center gap-8">
          {links.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className={`text-sm tracking-wide uppercase transition-colors duration-300 hover:opacity-100 ${
                scrolled
                  ? "text-warm-700 opacity-70"
                  : "text-white/80 hover:text-white"
              }`}
            >
              {link.label}
            </a>
          ))}
          <a
            href="https://www.instagram.com/aindrila_bhowmik/"
            target="_blank"
            rel="noopener noreferrer"
            className={`transition-colors duration-300 ${
              scrolled ? "text-warm-700" : "text-white/80 hover:text-white"
            }`}
          >
            <Instagram size={18} />
          </a>
        </nav>

        <button
          onClick={() => setMobileOpen(!mobileOpen)}
          className={`md:hidden transition-colors ${
            scrolled ? "text-warm-900" : "text-white"
          }`}
        >
          {mobileOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {mobileOpen && (
        <div className="md:hidden absolute top-full left-0 right-0 bg-white/95 backdrop-blur-xl shadow-lg">
          <nav className="flex flex-col px-6 py-6 gap-4">
            {links.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={() => setMobileOpen(false)}
                className="text-sm tracking-wide uppercase text-warm-700 py-2 border-b border-warm-100"
              >
                {link.label}
              </a>
            ))}
            <a
              href="https://www.instagram.com/aindrila_bhowmik/"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 text-sm text-warm-700 py-2"
              onClick={() => setMobileOpen(false)}
            >
              <Instagram size={16} />
              @aindrila_bhowmik
            </a>
          </nav>
        </div>
      )}
    </header>
  );
}
