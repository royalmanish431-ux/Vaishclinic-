import React, { useState, useEffect } from 'react';
import { ArrowRight } from 'lucide-react';
import { DOCTORS } from '../data/clinicData';

interface HeroProps {
  onOpenBooking: () => void;
}

const HERO_SLIDES = [
  {
    image: '/assets/aistudio/IMG_20261023_004201_7dab5475.jpg',
    caption: 'Gentle Pediatric & Family Dental Care',
  },
  {
    image: '/assets/aistudio/IMG_20261023_004213_17a73a20.jpg',
    caption: 'Dr. Mudit Vaish - Dental Surgeon Consultation',
  },
  {
    image: '/assets/aistudio/IMG-20261023-WA0484_65047f73.jpg',
    caption: 'High-Precision Oral Diagnostics & Treatment',
  },
  {
    image: '/assets/aistudio/IMG_20261023_004130_3d8d7c3c.jpg',
    caption: 'Patience & Compassionate Patient Guidance',
  },
  {
    image: '/assets/aistudio/IMG_20261023_004221_69c87c84.jpg',
    caption: 'Oral Health & Preventive Care Awareness',
  },
];

export const Hero: React.FC<HeroProps> = ({ onOpenBooking }) => {
  const [currentSlide, setCurrentSlide] = useState(0);

  // Automated 3-second rotation timer
  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % HERO_SLIDES.length);
    }, 3000);

    return () => clearInterval(timer);
  }, []);

  return (
    <section className="relative overflow-hidden bg-slate-900 text-white min-h-[580px] lg:min-h-[640px] flex items-center">
      {/* Background Automated Slideshow with 3-second timer and low opacity */}
      <div className="absolute inset-0 z-0 overflow-hidden pointer-events-none select-none">
        {HERO_SLIDES.map((slide, index) => {
          const isActive = index === currentSlide;
          return (
            <div
              key={slide.image}
              className={`absolute inset-0 transition-opacity duration-1000 ease-in-out ${
                isActive ? 'opacity-30 lg:opacity-35 scale-100' : 'opacity-0 scale-105'
              } transform transition-transform duration-1000 ease-out`}
            >
              <img
                src={slide.image}
                alt={slide.caption}
                className="w-full h-full object-cover object-center lg:object-[right_center] filter brightness-95 contrast-105"
              />
            </div>
          );
        })}

        {/* Clinical Teal Gradient Scrims preserving high typography contrast on the left while revealing photos clearly on the right */}
        <div className="absolute inset-0 bg-gradient-to-r from-[#072426] via-[#093235]/90 to-[#0c3c3e]/65" />
        <div className="absolute inset-0 bg-radial-gradient from-transparent via-slate-950/40 to-slate-950/70" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 lg:py-24 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
          {/* Main Hero Content (Left side) */}
          <div className="lg:col-span-8 max-w-2xl">
            {/* Subtle Location & Foundation Tag */}
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-md bg-teal-950/80 border border-teal-500/30 text-teal-200 text-xs font-semibold mb-6 backdrop-blur-sm">
              <span>Chandpur, Uttar Pradesh</span>
              <span aria-hidden="true" className="text-teal-400">·</span>
              <span>Est. May 16, 2010</span>
            </div>

            {/* Hero Headline */}
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight text-white leading-[1.15] mb-5 text-balance">
              Complete person care for your smile and your body
            </h1>

            {/* Subtext */}
            <p className="text-slate-200 text-base sm:text-lg leading-relaxed mb-8 max-w-xl text-balance">
              Dr. Vaish&apos;s Dental and Physiotherapy Clinic brings comprehensive dental care and physiotherapy expertise under one roof: evidence based treatment delivered with patience, empathy, and time for every question.
            </p>

            {/* Action CTAs */}
            <div className="flex flex-wrap items-center gap-4 mb-10">
              <button
                onClick={onOpenBooking}
                className="inline-flex items-center gap-2 bg-teal-600 hover:bg-teal-500 text-white font-semibold px-6 py-3.5 rounded-lg shadow-lg hover:shadow-teal-500/25 active:scale-98 transition-all cursor-pointer"
              >
                <span>Book an appointment</span>
                <ArrowRight className="w-4 h-4" />
              </button>

              <a
                href="#practitioners"
                className="inline-flex items-center gap-2 bg-white/10 hover:bg-white/20 text-white font-medium px-5 py-3.5 rounded-lg border border-white/25 backdrop-blur-sm transition-all"
              >
                <span>Meet the practitioners</span>
              </a>
            </div>

            {/* Social Proof Card */}
            <div className="inline-flex items-center gap-3.5 p-3 rounded-xl bg-teal-950/70 border border-teal-500/20 backdrop-blur-md">
              <div className="flex -space-x-2">
                <img
                  src={DOCTORS[0].image}
                  alt="Specialist"
                  className="w-10 h-10 rounded-full border-2 border-teal-400 object-cover"
                />
                <img
                  src={DOCTORS[1].image}
                  alt="Specialist"
                  className="w-10 h-10 rounded-full border-2 border-teal-200 object-cover"
                />
              </div>
              <div className="text-left">
                <div className="text-xs font-bold text-white flex items-center gap-1.5">
                  <span>2 Specialists</span>
                  <span className="inline-block w-1 h-1 rounded-full bg-teal-400" />
                  <span className="text-teal-300 font-normal">Board Certified</span>
                </div>
                <p className="text-[11px] text-teal-200/80">
                  Dental & physiotherapy, under one roof
                </p>
              </div>
            </div>
          </div>

          {/* Right Area corresponding to the orange highlight: Live Slideshow Indicators & Caption */}
          <div className="lg:col-span-4 flex flex-col items-start lg:items-end justify-center">
            <div className="bg-teal-950/60 border border-teal-500/30 backdrop-blur-md rounded-2xl p-4 max-w-xs shadow-xl">
              <div className="flex items-center justify-between mb-2">
                <span className="text-[10px] uppercase font-bold tracking-wider text-teal-300 flex items-center gap-1.5">
                  <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
                  Live Clinic Highlights
                </span>
                <span className="text-[10px] font-mono text-teal-200/80">
                  {currentSlide + 1} / {HERO_SLIDES.length}
                </span>
              </div>

              {/* Caption for current automated image */}
              <p className="text-xs text-white/95 font-medium line-clamp-2 min-h-[32px] leading-tight mb-3">
                {HERO_SLIDES[currentSlide].caption}
              </p>

              {/* 3-Second Visual Progress Dots */}
              <div className="flex items-center gap-1.5">
                {HERO_SLIDES.map((_, i) => (
                  <button
                    key={i}
                    onClick={() => setCurrentSlide(i)}
                    className={`h-1.5 rounded-full transition-all duration-300 cursor-pointer ${
                      i === currentSlide
                        ? 'w-6 bg-teal-400'
                        : 'w-2 bg-white/30 hover:bg-white/50'
                    }`}
                    aria-label={`Go to slide ${i + 1}`}
                  />
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Subtle bottom gradient transition */}
      <div className="absolute bottom-0 inset-x-0 h-12 bg-gradient-to-t from-white to-transparent pointer-events-none" />
    </section>
  );
};
