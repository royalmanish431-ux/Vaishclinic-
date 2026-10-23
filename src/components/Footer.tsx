import React from 'react';
import { Logo } from './Logo';
import { CLINIC_INFO } from '../data/clinicData';
import { MapPin, Phone, Clock, Mail, Calendar, ArrowRight } from 'lucide-react';

interface FooterProps {
  onOpenBooking: () => void;
}

export const Footer: React.FC<FooterProps> = ({ onOpenBooking }) => {
  return (
    <footer className="bg-[#0b192c] text-slate-300 pt-16 pb-12 border-t border-teal-900/60">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-10 lg:gap-12 pb-14 border-b border-slate-800">
          {/* Column 1: Brand Info & Mission */}
          <div className="md:col-span-5 space-y-4">
            <Logo variant="dark" />
            
            <p className="text-slate-300 text-xs sm:text-sm leading-relaxed max-w-sm pt-2">
              Ethical, specialized dental and physiotherapy care in Chandpur, Uttar Pradesh. Combining evidence-based treatment with compassionate, patient-first attention since May 16, 2010.
            </p>

            <div className="pt-2 text-xs text-teal-300 font-medium">
              Headed by Dr. Mudit Vaish (B.D.S.) &amp; Dr. (Mrs.) Mani Vaish (B.P.T.) · Chandpur, UP
            </div>

            <div className="pt-2">
              <button
                onClick={onOpenBooking}
                className="inline-flex items-center gap-2 bg-[#00897b] hover:bg-[#00796b] text-white text-xs font-bold px-4 py-2.5 rounded-xl shadow-md transition-all cursor-pointer"
              >
                <Calendar className="w-3.5 h-3.5" />
                <span>Book Doctor Appointment</span>
              </button>
            </div>
          </div>

          {/* Column 2: Explore Navigation */}
          <div className="md:col-span-3 space-y-3">
            <h4 className="text-xs font-extrabold uppercase tracking-widest text-teal-300">
              Navigation
            </h4>
            <ul className="space-y-2.5 text-xs sm:text-sm text-slate-300">
              <li>
                <a href="#about" className="hover:text-teal-300 transition-colors">
                  About Our Philosophy
                </a>
              </li>
              <li>
                <a href="#practitioners" className="hover:text-teal-300 transition-colors">
                  Meet the Specialists
                </a>
              </li>
              <li>
                <a href="#services" className="hover:text-teal-300 transition-colors">
                  Dental Center (B.D.S.)
                </a>
              </li>
              <li>
                <a href="#services" className="hover:text-teal-300 transition-colors">
                  Physiotherapy Center (B.P.T.)
                </a>
              </li>
              <li>
                <a href="#testimonials" className="hover:text-teal-300 transition-colors">
                  Patient Reviews &amp; Testimonials
                </a>
              </li>
              <li>
                <a href="#gallery" className="hover:text-teal-300 transition-colors">
                  Clinic Photo Gallery
                </a>
              </li>
            </ul>
          </div>

          {/* Column 3: Visit Us & Contact Info */}
          <div className="md:col-span-4 space-y-3">
            <h4 className="text-xs font-extrabold uppercase tracking-widest text-teal-300">
              Visit &amp; Contact
            </h4>
            
            <div className="space-y-3 text-xs sm:text-sm text-slate-300">
              <div className="flex items-start gap-2.5">
                <MapPin className="w-4 h-4 text-[#00897b] shrink-0 mt-0.5" />
                <p className="leading-relaxed">
                  {CLINIC_INFO.address}
                </p>
              </div>

              <div className="flex items-center gap-2.5">
                <Phone className="w-4 h-4 text-[#00897b] shrink-0" />
                <a
                  href={`tel:${CLINIC_INFO.mobileRaw}`}
                  className="hover:text-teal-300 transition-colors font-bold text-white"
                >
                  {CLINIC_INFO.mobile}
                </a>
              </div>

              <div className="flex items-center gap-2.5">
                <Clock className="w-4 h-4 text-[#00897b] shrink-0" />
                <p className="text-xs text-slate-400">
                  {CLINIC_INFO.workingHours.weekdays}
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Copyright Bar */}
        <div className="pt-8 text-center text-xs text-slate-400 flex flex-col sm:flex-row items-center justify-between gap-3">
          <p>
            © 2026 {CLINIC_INFO.fullName}. All rights reserved.
          </p>
          <p className="text-slate-400">
            Sato Imli Bazar, Bazaria, Chandpur, Uttar Pradesh 246725
          </p>
        </div>
      </div>
    </footer>
  );
};
