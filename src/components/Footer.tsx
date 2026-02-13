import { Instagram, Mail, MapPin, Heart } from "lucide-react";

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="bg-warm-900 border-t border-white/10">
      <div className="max-w-7xl mx-auto px-6 py-16">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-10">
          {/* Brand */}
          <div className="md:col-span-2">
            <h3 className="font-serif text-2xl text-white mb-3">
              Aindrila Bhowmik
            </h3>
            <p className="text-warm-400 font-light leading-relaxed max-w-sm">
              Travel enthusiast, MBA graduate, and business professional sharing
              adventures around the world.
            </p>
            <div className="flex gap-3 mt-5">
              <a
                href="https://www.instagram.com/aindrila_bhowmik/"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center text-warm-300 hover:bg-white/20 hover:text-white transition-colors"
              >
                <Instagram size={16} />
              </a>
              <a
                href="mailto:coolandri17@gmail.com?subject=Collaboration%20Inquiry"
                className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center text-warm-300 hover:bg-white/20 hover:text-white transition-colors"
              >
                <Mail size={16} />
              </a>
            </div>
          </div>

          {/* Links */}
          <div>
            <h4 className="text-xs tracking-[0.2em] uppercase text-warm-400 mb-4">
              Navigate
            </h4>
            <ul className="space-y-2.5">
              {[
                { label: "Discover", href: "#destinations" },
                { label: "About", href: "#about" },
                { label: "Gallery", href: "#gallery" },
                { label: "Connect", href: "#connect" },
              ].map((link) => (
                <li key={link.href}>
                  <a
                    href={link.href}
                    className="text-warm-400 hover:text-white transition-colors text-sm"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="text-xs tracking-[0.2em] uppercase text-warm-400 mb-4">
              Contact
            </h4>
            <ul className="space-y-2.5">
              <li className="flex items-start gap-2 text-warm-400 text-sm">
                <MapPin size={14} className="mt-0.5 flex-shrink-0" />
                Bangalore, India
              </li>
              <li>
                <a
                  href="mailto:coolandri17@gmail.com?subject=Collaboration%20Inquiry"
                  className="flex items-start gap-2 text-warm-400 hover:text-white transition-colors text-sm"
                >
                  <Mail size={14} className="mt-0.5 flex-shrink-0" />
                  coolandri17@gmail.com
                </a>
              </li>
              <li>
                <a
                  href="https://www.instagram.com/aindrila_bhowmik/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-start gap-2 text-warm-400 hover:text-white transition-colors text-sm"
                >
                  <Instagram size={14} className="mt-0.5 flex-shrink-0" />
                  @aindrila_bhowmik
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="mt-14 pt-6 border-t border-white/10 flex flex-col md:flex-row items-center justify-between text-warm-500 text-xs">
          <p className="flex items-center gap-1">
            &copy; {year} Aindrila Bhowmik. Made with{" "}
            <Heart size={10} className="text-terracotta-400" /> from Bangalore.
          </p>
          <p className="mt-2 md:mt-0">All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}
