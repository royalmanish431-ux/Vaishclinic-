import React from 'react';
import { Logo } from './Logo';
import { CLINIC_INFO } from '../data/clinicData';
import { MapPin, Phone, Clock, Mail } from 'lucide-react';

interface FooterProps {
  onOpenBooking: () => void;
}

export const Footer: React.FC<FooterProps> = ({ onOpenBooking }) => {
  return (
    <footer className="bg-[#072426] text-slate-300 pt-16 pb-12 border-t border-teal-900/40">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-10 lg:gap-12 pb-14 border-b border-teal-950/80">
          {/* Column 1: Brand Info & Mission */}
          <div className="md:col-span-5 space-y-4">
            <Logo variant="dark" />
            
            <p className="text-slate-300 text-xs sm:text-sm leading-relaxed max-w-sm pt-2">
              Ethical, specialized dental and physiotherapy care in Chandpur, Uttar Pradesh, combining evidence based treatment with compassionate, patient-first attention since May 16, 2010.
            </p>

            <div className="pt-2 text-xs text-teal-300/80">
              Founded under the patronage of Olympic Sports Physician Dr. P.S.M. Chandran & cricketer Aakash Chopra.
            </div>
          </div>

          {/* Column 2: Explore Navigation */}
          <div className="md:col-span-3 space-y-3">
            <h4 className="text-sm font-bold uppercase tracking-wider text-white">
              Explore
            </h4>
            <ul className="space-y-2 text-xs sm:text-sm text-slate-300">
              <li>
                <a href="#about" className="hover:text-teal-300 transition-colors">
                  About the Clinic
                </a>
              </li>
              <li>
                <a href="#practitioners" className="hover:text-teal-300 transition-colors">
                  Meet the Doctors
                </a>
              </li>
              <li>
                <a href="#services" className="hover:text-teal-300 transition-colors">
                  Dental Services
                </a>
              </li>
              <li>
                <a href="#services" className="hover:text-teal-300 transition-colors">
                  Physiotherapy Services
                </a>
              </li>
              <li>
                <a href="#testimonials" className="hover:text-teal-300 transition-colors">
                  Testimonials & Athletes
                </a>
              </li>
              <li>
                <a href="#gallery" className="hover:text-teal-300 transition-colors">
                  Clinic Moments
                </a>
              </li>
              <li>
                <button
                  onClick={onOpenBooking}
                  className="text-left text-teal-400 hover:text-teal-300 font-semibold transition-colors"
                >
                  Book Consultation Slot
                </button>
              </li>
            </ul>
          </div>

          {/* Column 3: Visit Us & Contact Info */}
          <div className="md:col-span-4 space-y-3">
            <h4 className="text-sm font-bold uppercase tracking-wider text-white">
              Visit Us
            </h4>
            
            <div className="space-y-3 text-xs sm:text-sm text-slate-300">
              <div className="flex items-start gap-2.5">
                <MapPin className="w-4 h-4 text-teal-400 shrink-0 mt-0.5" />
                <p className="leading-relaxed">
                  {CLINIC_INFO.address}
                </p>
              </div>

              <div className="flex items-center gap-2.5">
                <Phone className="w-4 h-4 text-teal-400 shrink-0" />
                <a
                  href={`tel:${CLINIC_INFO.mobileRaw}`}
                  className="hover:text-teal-300 transition-colors font-medium"
                >
                  {CLINIC_INFO.mobile}
                </a>
              </div>

              <div className="flex items-center gap-2.5">
                <Clock className="w-4 h-4 text-teal-400 shrink-0" />
                <p className="text-xs text-slate-400">
                  Call ahead to confirm consultation timings
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Copyright Bar */}
        <div className="pt-8 text-center text-xs text-slate-400">
          <p>
            © 2026 {CLINIC_INFO.fullName}. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};
