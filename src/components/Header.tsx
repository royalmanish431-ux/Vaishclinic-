import React, { useState } from 'react';
import { Logo } from './Logo';
import { Phone, Calendar, Menu, X } from 'lucide-react';
import { CLINIC_INFO } from '../data/clinicData';

interface HeaderProps {
  onOpenBooking: (specialty?: 'dental' | 'physiotherapy' | 'both') => void;
}

export const Header: React.FC<HeaderProps> = ({ onOpenBooking }) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const navLinks = [
    { label: 'About', href: '#about' },
    { label: 'Practitioners', href: '#practitioners' },
    { label: 'Services', href: '#services' },
    { label: 'Testimonials', href: '#testimonials' },
    { label: 'Photo Gallery', href: '#gallery' },
    { label: 'Visit Us', href: '#contact' },
  ];

  return (
    <header className="sticky top-0 z-40 bg-white/95 backdrop-blur-md border-b border-slate-200/80 transition-all">
      {/* Top micro bar for telephone availability */}
      <div className="bg-teal-900 text-teal-100 text-xs py-1.5 px-4 sm:px-6">
        <div className="max-w-7xl mx-auto flex items-center justify-between">
          <div className="flex items-center gap-4">
            <span className="hidden sm:inline-block text-teal-200">Chandpur, Uttar Pradesh · Est. May 16, 2010</span>
            <span className="text-teal-100">
              Consultations: {CLINIC_INFO.workingHours.weekdays}
            </span>
          </div>
          <div className="flex items-center gap-3">
            <a
              href={`tel:${CLINIC_INFO.mobileRaw}`}
              className="flex items-center gap-1.5 font-medium hover:text-white transition-colors"
            >
              <Phone className="w-3.5 h-3.5 text-teal-300" />
              <span>{CLINIC_INFO.mobile}</span>
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
        <nav className="hidden lg:flex items-center gap-7 text-sm font-semibold text-slate-600">
          {navLinks.map((link) => (
            <a
              key={link.label}
              href={link.href}
              className="hover:text-teal-700 transition-colors whitespace-nowrap"
            >
              {link.label}
            </a>
          ))}
        </nav>

        {/* Zone 3: Primary Action */}
        <div className="hidden sm:flex items-center gap-3 shrink-0">
          <a
            href={`tel:${CLINIC_INFO.mobileRaw}`}
            className="hidden md:inline-flex items-center gap-1.5 text-xs font-semibold text-teal-800 bg-teal-50 px-3 py-2 rounded-lg hover:bg-teal-100 transition-colors"
          >
            <Phone className="w-3.5 h-3.5 text-teal-600" />
            <span>{CLINIC_INFO.mobile}</span>
          </a>
          <button
            onClick={() => onOpenBooking()}
            className="inline-flex items-center gap-2 bg-teal-700 text-white text-xs font-semibold px-4 py-2.5 rounded-lg hover:bg-teal-800 active:scale-95 transition-all shadow-sm"
          >
            <Calendar className="w-4 h-4" />
            <span className="whitespace-nowrap">Book Appointment</span>
          </button>
        </div>

        {/* Mobile Hamburger Button */}
        <div className="flex items-center gap-2 lg:hidden">
          <button
            onClick={() => onOpenBooking()}
            className="sm:hidden text-xs font-semibold bg-teal-700 text-white px-3 py-1.5 rounded-md"
          >
            Book
          </button>
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="p-2 text-slate-700 hover:text-teal-700 focus:outline-none"
            aria-label="Toggle Navigation Menu"
          >
            {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="lg:hidden bg-white border-b border-slate-200 px-4 pt-2 pb-6 space-y-3 shadow-lg animate-fadeIn">
          <div className="flex flex-col space-y-2 pt-2">
            {navLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                onClick={() => setMobileMenuOpen(false)}
                className="px-3 py-2 text-slate-700 font-medium hover:bg-teal-50 hover:text-teal-800 rounded-md transition-colors"
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
              className="w-full text-center bg-teal-700 text-white text-sm font-semibold py-2.5 rounded-lg shadow-sm hover:bg-teal-800 transition-colors"
            >
              Book an Appointment
            </button>
            <a
              href={`tel:${CLINIC_INFO.mobileRaw}`}
              className="w-full text-center border border-slate-300 text-slate-700 text-sm font-semibold py-2 rounded-lg hover:bg-slate-50 transition-colors"
            >
              Call Clinic: {CLINIC_INFO.mobile}
            </a>
          </div>
        </div>
      )}
    </header>
  );
};
