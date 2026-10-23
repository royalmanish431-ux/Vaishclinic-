import React, { useState } from 'react';
import { Logo } from './Logo';
import { Phone, Calendar, Menu, X, Clock, MapPin, Sparkles } from 'lucide-react';
import { CLINIC_INFO } from '../data/clinicData';

interface HeaderProps {
  onOpenBooking: (specialty?: 'dental' | 'physiotherapy' | 'both') => void;
}

export const Header: React.FC<HeaderProps> = ({ onOpenBooking }) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const navLinks = [
    { label: 'About', href: '#about' },
    { label: 'Practitioners', href: '#practitioners' },
    { label: 'Dental & Physio Services', href: '#services' },
    { label: 'Testimonials', href: '#testimonials' },
    { label: 'Clinic Gallery', href: '#gallery' },
    { label: 'Visit & Map', href: '#contact' },
  ];

  return (
    <header className="sticky top-0 z-40 bg-white/95 backdrop-blur-md border-b border-teal-100/70 shadow-xs transition-all">
      {/* Top Deep Navy Accent Bar matching the screenshot */}
      <div className="bg-[#0b192c] text-teal-100 text-xs py-2 px-4 sm:px-6 border-b border-teal-950">
        <div className="max-w-7xl mx-auto flex items-center justify-between">
          <div className="flex items-center gap-3">
            <span className="flex items-center gap-1.5 font-medium text-teal-300">
              <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
              Live Clinic OPD: Open Today
            </span>
            <span className="hidden md:inline-block text-slate-400">|</span>
            <span className="hidden md:inline-flex items-center gap-1 text-slate-300">
              <MapPin className="w-3 h-3 text-teal-400" />
              Chandpur, UP · Est. May 16, 2010
            </span>
            <span className="hidden lg:inline-block text-slate-400">|</span>
            <span className="hidden lg:inline-flex items-center gap-1 text-slate-300">
              <Clock className="w-3 h-3 text-teal-400" />
              {CLINIC_INFO.workingHours.weekdays}
            </span>
          </div>

          <div className="flex items-center gap-3">
            <a
              href={`tel:${CLINIC_INFO.mobileRaw}`}
              className="flex items-center gap-1.5 font-bold text-teal-300 hover:text-white transition-colors"
            >
              <Phone className="w-3.5 h-3.5 text-teal-400" />
              <span className="tracking-wide">Emergency: {CLINIC_INFO.mobile}</span>
            </a>
          </div>
        </div>
      </div>

      {/* Main navigation row */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-20 flex items-center justify-between gap-6">
        {/* Zone 1: Brand Wordmark */}
        <a href="#" className="shrink-0 group">
          <Logo variant="light" />
        </a>

        {/* Zone 2: Navigation Links (Desktop) */}
        <nav className="hidden lg:flex items-center gap-6 text-sm font-semibold text-slate-700">
          {navLinks.map((link) => (
            <a
              key={link.label}
              href={link.href}
              className="px-2.5 py-1.5 rounded-lg hover:text-[#00897b] hover:bg-teal-50/60 transition-colors whitespace-nowrap"
            >
              {link.label}
            </a>
          ))}
        </nav>

        {/* Zone 3: Primary Action */}
        <div className="hidden sm:flex items-center gap-3 shrink-0">
          <a
            href={`tel:${CLINIC_INFO.mobileRaw}`}
            className="hidden md:inline-flex items-center gap-1.5 text-xs font-bold text-teal-800 bg-teal-50/90 border border-teal-200/80 px-3.5 py-2.5 rounded-xl hover:bg-teal-100 transition-colors shadow-2xs"
          >
            <Phone className="w-3.5 h-3.5 text-[#00897b]" />
            <span>Call Clinic</span>
          </a>
          <button
            onClick={() => onOpenBooking()}
            className="inline-flex items-center gap-2 bg-[#00897b] hover:bg-[#00796b] text-white text-xs font-bold px-4 py-2.5 rounded-xl shadow-md shadow-teal-700/20 active:scale-95 transition-all cursor-pointer"
          >
            <Calendar className="w-4 h-4" />
            <span className="whitespace-nowrap">Book Appointment</span>
          </button>
        </div>

        {/* Mobile Hamburger Button */}
        <div className="flex items-center gap-2 lg:hidden">
          <button
            onClick={() => onOpenBooking()}
            className="sm:hidden text-xs font-bold bg-[#00897b] text-white px-3 py-1.5 rounded-lg shadow-sm"
          >
            Book
          </button>
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="p-2 text-slate-700 hover:text-[#00897b] focus:outline-none"
            aria-label="Toggle Navigation Menu"
          >
            {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="lg:hidden bg-white border-b border-teal-100 px-4 pt-2 pb-6 space-y-3 shadow-xl animate-fadeIn">
          <div className="flex flex-col space-y-1.5 pt-2">
            {navLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                onClick={() => setMobileMenuOpen(false)}
                className="px-3 py-2 text-slate-700 font-semibold hover:bg-teal-50 hover:text-[#00897b] rounded-lg transition-colors"
              >
                {link.label}
              </a>
            ))}
          </div>
          <div className="pt-3 border-t border-slate-100 flex flex-col gap-2.5">
            <button
              onClick={() => {
                setMobileMenuOpen(false);
                onOpenBooking();
              }}
              className="w-full text-center bg-[#00897b] text-white text-sm font-bold py-2.5 rounded-xl shadow-md hover:bg-[#00796b] transition-colors"
            >
              Book an Appointment
            </button>
            <a
              href={`tel:${CLINIC_INFO.mobileRaw}`}
              className="w-full text-center border border-teal-200 text-teal-900 bg-teal-50/60 text-sm font-semibold py-2 rounded-xl hover:bg-teal-100 transition-colors"
            >
              Call Clinic: {CLINIC_INFO.mobile}
            </a>
          </div>
        </div>
      )}
    </header>
  );
};
