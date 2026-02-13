"use client";

import { useState, FormEvent } from "react";
import { Mail, Instagram, Phone, Send, ArrowRight } from "lucide-react";
import ScrollReveal from "./ScrollReveal";

export default function Connect() {
  const [formData, setFormData] = useState({
    name: "",
    company: "",
    phone: "",
    collabType: "",
    message: "",
  });
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    // In production, this would send via EmailJS or similar
    const subject = encodeURIComponent("Collaboration Inquiry");
    const body = encodeURIComponent(
      `Name: ${formData.name}\nBrand: ${formData.company}\nPhone: ${formData.phone}\nType: ${formData.collabType}\n\n${formData.message}`
    );
    window.open(
      `mailto:coolandri17@gmail.com?subject=${subject}&body=${body}`,
      "_blank"
    );
    setSubmitted(true);
    setTimeout(() => setSubmitted(false), 3000);
  };

  return (
    <section id="connect" className="py-24 md:py-32 bg-warm-900 text-white">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
          {/* Left — Info */}
          <ScrollReveal>
            <div>
              <p className="text-sm tracking-[0.25em] uppercase text-warm-400 mb-3">
                Collaborate
              </p>
              <h2 className="font-serif text-4xl md:text-5xl text-white mb-6">
                Let&apos;s Create Something Together
              </h2>
              <p className="text-warm-300 font-light leading-relaxed mb-10 max-w-md">
                Are you a brand, restaurant, spa, or travel agency looking to
                collaborate? I&apos;d love to hear from you.
              </p>

              <div className="space-y-6">
                <a
                  href="mailto:coolandri17@gmail.com?subject=Collaboration%20Inquiry"
                  className="flex items-center gap-4 group"
                >
                  <div className="w-12 h-12 rounded-full bg-white/10 flex items-center justify-center group-hover:bg-white/20 transition-colors">
                    <Mail size={18} className="text-warm-300" />
                  </div>
                  <div>
                    <p className="text-xs text-warm-400 uppercase tracking-wider">
                      Email
                    </p>
                    <p className="text-white group-hover:text-warm-200 transition-colors">
                      coolandri17@gmail.com
                    </p>
                  </div>
                </a>

                <a
                  href="https://www.instagram.com/aindrila_bhowmik/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-4 group"
                >
                  <div className="w-12 h-12 rounded-full bg-white/10 flex items-center justify-center group-hover:bg-white/20 transition-colors">
                    <Instagram size={18} className="text-warm-300" />
                  </div>
                  <div>
                    <p className="text-xs text-warm-400 uppercase tracking-wider">
                      Instagram
                    </p>
                    <p className="text-white group-hover:text-warm-200 transition-colors">
                      @aindrila_bhowmik
                    </p>
                  </div>
                </a>

                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 rounded-full bg-white/10 flex items-center justify-center">
                    <Phone size={18} className="text-warm-300" />
                  </div>
                  <div>
                    <p className="text-xs text-warm-400 uppercase tracking-wider">
                      WhatsApp
                    </p>
                    <p className="text-white">Available on request</p>
                  </div>
                </div>
              </div>
            </div>
          </ScrollReveal>

          {/* Right — Form */}
          <ScrollReveal delay={200}>
            <form
              onSubmit={handleSubmit}
              className="bg-warm-800/50 backdrop-blur-sm rounded-2xl p-8 space-y-5"
            >
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                <div>
                  <label className="block text-xs text-warm-400 uppercase tracking-wider mb-2">
                    Your Name
                  </label>
                  <input
                    type="text"
                    required
                    value={formData.name}
                    onChange={(e) =>
                      setFormData({ ...formData, name: e.target.value })
                    }
                    className="w-full bg-white/5 border border-white/10 rounded-lg px-4 py-3 text-white placeholder:text-warm-600 focus:outline-none focus:border-warm-400 transition-colors"
                    placeholder="John Doe"
                  />
                </div>
                <div>
                  <label className="block text-xs text-warm-400 uppercase tracking-wider mb-2">
                    Your Brand
                  </label>
                  <input
                    type="text"
                    value={formData.company}
                    onChange={(e) =>
                      setFormData({ ...formData, company: e.target.value })
                    }
                    className="w-full bg-white/5 border border-white/10 rounded-lg px-4 py-3 text-white placeholder:text-warm-600 focus:outline-none focus:border-warm-400 transition-colors"
                    placeholder="Your Brand Name"
                  />
                </div>
              </div>

              <div>
                <label className="block text-xs text-warm-400 uppercase tracking-wider mb-2">
                  Phone (WhatsApp)
                </label>
                <input
                  type="tel"
                  value={formData.phone}
                  onChange={(e) =>
                    setFormData({ ...formData, phone: e.target.value })
                  }
                  className="w-full bg-white/5 border border-white/10 rounded-lg px-4 py-3 text-white placeholder:text-warm-600 focus:outline-none focus:border-warm-400 transition-colors"
                  placeholder="+91 XXXXXXXXXX"
                />
              </div>

              <div>
                <label className="block text-xs text-warm-400 uppercase tracking-wider mb-3">
                  Collaboration Type
                </label>
                <div className="flex gap-3">
                  {["paid", "barter"].map((type) => (
                    <button
                      key={type}
                      type="button"
                      onClick={() =>
                        setFormData({ ...formData, collabType: type })
                      }
                      className={`px-5 py-2.5 rounded-full text-sm border transition-colors capitalize ${
                        formData.collabType === type
                          ? "bg-white text-warm-900 border-white"
                          : "bg-transparent text-warm-300 border-white/20 hover:border-white/40"
                      }`}
                    >
                      {type}
                    </button>
                  ))}
                </div>
              </div>

              <div>
                <label className="block text-xs text-warm-400 uppercase tracking-wider mb-2">
                  Message
                </label>
                <textarea
                  required
                  rows={4}
                  value={formData.message}
                  onChange={(e) =>
                    setFormData({ ...formData, message: e.target.value })
                  }
                  className="w-full bg-white/5 border border-white/10 rounded-lg px-4 py-3 text-white placeholder:text-warm-600 focus:outline-none focus:border-warm-400 transition-colors resize-none"
                  placeholder="Tell me about your collaboration idea..."
                />
              </div>

              <button
                type="submit"
                className="w-full flex items-center justify-center gap-2 bg-white text-warm-900 rounded-full py-3.5 font-medium hover:bg-warm-100 transition-colors"
              >
                {submitted ? (
                  "Message Sent!"
                ) : (
                  <>
                    Send Message <ArrowRight size={16} />
                  </>
                )}
              </button>
            </form>
          </ScrollReveal>
        </div>
      </div>
    </section>
  );
}
