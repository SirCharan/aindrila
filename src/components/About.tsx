"use client";

import Image from "next/image";
import { Globe, Briefcase, Heart, Star } from "lucide-react";
import ScrollReveal from "./ScrollReveal";

const skills = [
  {
    icon: Globe,
    title: "Travel Content",
    description:
      "Authentic photography, stories, and practical recommendations from my journeys.",
  },
  {
    icon: Briefcase,
    title: "Business Leadership",
    description:
      "Team Lead at Accenture, delivering strategic solutions with MBA-honed expertise.",
  },
  {
    icon: Heart,
    title: "Brand Collaborations",
    description:
      "Partnering with travel brands and hotels to create resonant, authentic content.",
  },
  {
    icon: Star,
    title: "Cultural Storytelling",
    description:
      "Sharing traditions from around the world, fostering cross-cultural understanding.",
  },
];

export default function About() {
  return (
    <section id="about" className="py-24 md:py-32 bg-warm-50">
      <div className="max-w-7xl mx-auto px-6">
        {/* Two-column layout */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center mb-24">
          {/* Image side */}
          <ScrollReveal>
            <div className="relative">
              <div className="relative aspect-[3/4] rounded-2xl overflow-hidden">
                <Image
                  src="/images/0cdf9a49-8ba6-4711-8532-e8b12343e0cc.png"
                  alt="Aindrila Bhowmik"
                  fill
                  className="object-cover"
                  sizes="(max-width: 1024px) 100vw, 50vw"
                />
              </div>
              {/* Floating accent card */}
              <div className="absolute -bottom-6 -right-6 bg-white rounded-xl p-5 shadow-lg max-w-[200px]">
                <p className="font-serif text-3xl text-warm-800">25K+</p>
                <p className="text-sm text-warm-500">Instagram followers</p>
              </div>
            </div>
          </ScrollReveal>

          {/* Text side */}
          <ScrollReveal delay={200}>
            <div>
              <p className="text-sm tracking-[0.25em] uppercase text-warm-500 mb-3">
                About Me
              </p>
              <h2 className="font-serif text-4xl md:text-5xl text-warm-900 mb-6">
                Hello, I&apos;m Aindrila
              </h2>
              <div className="space-y-4 text-warm-600 font-light leading-relaxed">
                <p>
                  Born and raised in Bengal, India, I&apos;ve always been fascinated by
                  different cultures, languages, and traditions. This curiosity
                  led me to pursue an MBA at NIT Trichy, where I honed my
                  business acumen and leadership skills.
                </p>
                <p>
                  Now based in Bangalore, I balance my role as a Business Team
                  Lead at Accenture with my passion for travel content creation.
                  What started as casual Instagram posts has grown into a
                  community of over 25,000 travel enthusiasts.
                </p>
                <p>
                  I believe in authentic travel experiences that go beyond
                  popular tourist spots — savoring local cuisine, participating
                  in traditional festivals, and finding hidden gems in every
                  destination.
                </p>
              </div>
              <div className="mt-8 flex flex-wrap gap-3">
                <a
                  href="https://www.instagram.com/aindrila_bhowmik/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-6 py-3 bg-warm-800 text-white rounded-full text-sm hover:bg-warm-900 transition-colors"
                >
                  Follow on Instagram
                </a>
                <a
                  href="#connect"
                  className="inline-flex items-center gap-2 px-6 py-3 border border-warm-300 text-warm-700 rounded-full text-sm hover:bg-warm-100 transition-colors"
                >
                  Work With Me
                </a>
              </div>
            </div>
          </ScrollReveal>
        </div>

        {/* What I Do grid */}
        <ScrollReveal>
          <div className="text-center mb-12">
            <p className="text-sm tracking-[0.25em] uppercase text-warm-500 mb-3">
              Expertise
            </p>
            <h2 className="font-serif text-3xl md:text-4xl text-warm-900">
              What I Do
            </h2>
          </div>
        </ScrollReveal>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {skills.map((skill, i) => (
            <ScrollReveal key={skill.title} delay={i * 100}>
              <div className="bg-white rounded-2xl p-7 hover:shadow-lg transition-shadow duration-300 h-full">
                <div className="w-12 h-12 rounded-full bg-warm-100 flex items-center justify-center text-warm-600 mb-5">
                  <skill.icon size={22} />
                </div>
                <h3 className="font-serif text-lg text-warm-900 mb-2">
                  {skill.title}
                </h3>
                <p className="text-sm text-warm-500 font-light leading-relaxed">
                  {skill.description}
                </p>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
}
