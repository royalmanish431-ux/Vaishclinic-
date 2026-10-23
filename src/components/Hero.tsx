import React, { useState, useEffect } from 'react';
import { ArrowRight } from 'lucide-react';
import { DOCTORS } from '../data/clinicData';
import { DoctorAvatar } from './DoctorAvatar';

interface HeroProps {
  onOpenBooking: () => void;
}

const HERO_SLIDES = [
  {
    image: '/assets/hero-physio-1.jpg',
    caption: 'Complete Oral Health & Advanced Dental Care',
  },
  {
    image: '/assets/hero-dental-1.jpg',
    caption: 'Dr. Mudit Vaish (B.D.S.) - Advanced Dental Treatments & Patient Care',
  },
  {
    image: '/assets/hero-dental-2.jpg',
    caption: 'Modern Physiotherapy & Spine Rehabilitation Division',
  },
  {
    image: '/assets/aistudio/WhatsApp_Image_2026-10-23_at_12.43.23_AM_1027b7a6.jpeg',
    caption: 'Dr. Vaish with Happy Treated Patient at Chandpur Clinic',
  },
  {
    image: '/assets/aistudio/WhatsApp_Image_2026-10-23_at_12.43.23_AM__1__3f5fe794.jpeg',
    caption: 'High-Tech Dental Operatory Suite & Precision Diagnostics',
  },
];

export const Hero: React.FC<HeroProps> = ({ onOpenBooking }) => {
  const [currentSlide, setCurrentSlide] = useState(0);

  // Automated 3-second rotation timer
  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % HERO_SLIDES.length);
    }, 3500);

    return () => clearInterval(timer);
  }, []);

  return (
    <section className="relative overflow-hidden bg-slate-950 text-white min-h-[580px] lg:min-h-[640px] flex items-center">
      {/* Background Slideshow: high visibility matching user reference Image 2 */}
      <div className="absolute inset-0 z-0 overflow-hidden pointer-events-none select-none">
        {HERO_SLIDES.map((slide, index) => {
          const isActive = index === currentSlide;
          return (
            <div
              key={slide.image}
              className={`absolute inset-0 transition-opacity duration-1000 ease-in-out ${
                isActive ? 'opacity-85 lg:opacity-90 scale-100' : 'opacity-0 scale-105'
              } transform transition-transform duration-1000 ease-out`}
            >
              <img
                src={slide.image}
                alt={slide.caption}
                className="w-full h-full object-cover object-[72%_center] lg:object-[right_center] filter brightness-105 contrast-[1.02]"
              />
            </div>
          );
        })}

        {/* Gradient Scrim: Deep contrast on the left for text, completely clear and visible on the right */}
        <div className="absolute inset-0 bg-gradient-to-r from-[#031d20]/95 via-[#031d20]/75 via-45% to-[#031d20]/15 lg:to-transparent" />
        <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-transparent to-slate-950/30 sm:hidden" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 lg:py-24 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
          {/* Main Hero Content (Left side) */}
          <div className="lg:col-span-8 max-w-2xl">
            {/* Location & Foundation Tag */}
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-md bg-teal-950/85 border border-teal-500/30 text-teal-200 text-xs font-semibold mb-6 backdrop-blur-sm shadow-sm">
              <span>Chandpur, Uttar Pradesh</span>
              <span aria-hidden="true" className="text-teal-400">·</span>
              <span>Est. May 16, 2010</span>
            </div>

            {/* Hero Headline */}
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight text-white leading-[1.15] mb-5 text-balance drop-shadow-sm">
              Complete person care for your smile and your body
            </h1>

            {/* Subtext */}
            <p className="text-slate-100 text-base sm:text-lg leading-relaxed mb-8 max-w-xl text-balance drop-shadow-sm">
              Dr. Vaish&apos;s Dental and Physiotherapy Clinic brings comprehensive dental care and physiotherapy expertise under one roof: evidence based treatment delivered with patience, empathy, and time for every question.
            </p>

            {/* Action CTAs */}
            <div className="flex flex-wrap items-center gap-4 mb-10">
              <button
                onClick={onOpenBooking}
                className="inline-flex items-center gap-2 bg-[#00828A] hover:bg-[#00949E] text-white font-semibold px-6 py-3.5 rounded-lg shadow-lg hover:shadow-[#00828A]/35 active:scale-98 transition-all cursor-pointer"
              >
                <span>Book an appointment</span>
                <ArrowRight className="w-4 h-4" />
              </button>

              <a
                href="#practitioners"
                className="inline-flex items-center gap-2 bg-white/15 hover:bg-white/25 text-white font-medium px-5 py-3.5 rounded-lg border border-white/30 backdrop-blur-sm transition-all"
              >
                <span>Meet the practitioners</span>
              </a>
            </div>

            {/* Social Proof Card matching Image 2 */}
            <div className="inline-flex items-center gap-3.5 p-3 rounded-xl bg-teal-950/80 border border-teal-500/30 backdrop-blur-md shadow-lg">
              <div className="flex -space-x-2 shrink-0">
                <DoctorAvatar doctor={DOCTORS[1]} size="sm" dark={true} />
                <DoctorAvatar doctor={DOCTORS[0]} size="sm" dark={true} />
              </div>
              <div className="text-left">
                <div className="text-xs sm:text-sm font-bold text-white flex items-center gap-1.5 flex-wrap">
                  <span>2 Specialists</span>
                  <span className="inline-block w-1 h-1 rounded-full bg-teal-400" />
                  <span className="text-teal-300 font-medium text-xs">B.D.S. &amp; B.P.T.</span>
                </div>
                <p className="text-[11px] sm:text-xs text-teal-100/90 font-medium">
                  Dental &amp; physiotherapy, under one roof
                </p>
              </div>
            </div>
          </div>

          {/* Right Area: Subtle Slide Indicator */}
          <div className="lg:col-span-4 flex flex-col items-start lg:items-end justify-end mt-4 lg:mt-0">
            <div className="bg-teal-950/75 border border-teal-500/30 backdrop-blur-md rounded-xl p-3 sm:p-4 max-w-xs shadow-xl">
              <div className="flex items-center justify-between gap-3 mb-1.5">
                <span className="text-[10px] uppercase font-bold tracking-wider text-teal-300 flex items-center gap-1.5">
                  <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
                  Clinic Highlights
                </span>
                <span className="text-[10px] font-mono text-teal-200/80">
                  {currentSlide + 1} / {HERO_SLIDES.length}
                </span>
              </div>

              {/* Caption for current automated image */}
              <p className="text-xs text-white/95 font-medium line-clamp-2 leading-tight mb-2.5">
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

      {/* Subtle bottom separator line */}
      <div className="absolute bottom-0 inset-x-0 h-px bg-teal-500/20 pointer-events-none" />
    </section>
  );
};
