import React from 'react';
import { DOCTORS } from '../data/clinicData';
import { Doctor } from '../types/clinic';
import { ArrowRight, Award, ShieldCheck, CheckCircle2 } from 'lucide-react';

interface PractitionersProps {
  onSelectDoctor: (doctor: Doctor) => void;
  onBookWithDoctor: (doctorId: string) => void;
}

export const Practitioners: React.FC<PractitionersProps> = ({
  onSelectDoctor,
  onBookWithDoctor,
}) => {
  return (
    <section id="practitioners" className="py-20 lg:py-24 bg-slate-50/70 border-b border-slate-200/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-xs font-bold uppercase tracking-wider text-teal-700 block mb-2">
            PRACTITIONERS
          </span>
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-slate-900 tracking-tight">
            The people behind your care
          </h2>
          <p className="mt-3 text-slate-600 text-sm sm:text-base">
            Dedicated specialists combining academic mastery, high-performance athletic experience, and compassionate patient care.
          </p>
        </div>

        {/* 2 Practitioner Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-10 max-w-5xl mx-auto">
          {DOCTORS.map((doctor) => {
            const isDental = doctor.badge === 'Dental';

            return (
              <div
                key={doctor.id}
                className="bg-white rounded-2xl border border-slate-200/90 shadow-sm hover:shadow-md transition-shadow p-6 sm:p-8 flex flex-col justify-between"
              >
                <div>
                  {/* Category Pill Tag */}
                  <div className="flex items-center justify-between mb-4">
                    <span className="inline-block px-3 py-1 rounded-md text-xs font-semibold bg-teal-50 text-teal-800 border border-teal-200/60">
                      {doctor.badge}
                    </span>
                    <button
                      onClick={() => onBookWithDoctor(doctor.id)}
                      className="text-xs font-semibold text-teal-700 hover:text-teal-900 transition-colors"
                    >
                      Book Session →
                    </button>
                  </div>

                  {/* Doctor Profile Header */}
                  <div className="flex items-start gap-4 mb-6">
                    <img
                      src={doctor.image}
                      alt={doctor.name}
                      className="w-16 h-16 sm:w-20 sm:h-20 rounded-full object-cover border-2 border-teal-500/30 shrink-0 shadow-sm"
                    />
                    <div>
                      <h3 className="text-lg sm:text-xl font-bold text-slate-900 leading-snug">
                        {doctor.name}
                      </h3>
                      <p className="text-xs sm:text-sm font-semibold text-teal-700 mt-0.5">
                        {doctor.role}
                      </p>
                      {doctor.specialty && (
                        <p className="text-xs text-slate-500 mt-1 line-clamp-1">
                          {doctor.specialty}
                        </p>
                      )}
                    </div>
                  </div>

                  {/* Qualifications & Degrees */}
                  <div className="space-y-2 mb-6 pt-3 border-t border-slate-100">
                    {doctor.qualifications.map((q, idx) => (
                      <div key={idx} className="flex items-start gap-2 text-xs sm:text-[13px] text-slate-600">
                        <span className="text-teal-600 mt-0.5 font-bold">•</span>
                        <span>{q}</span>
                      </div>
                    ))}
                  </div>
                </div>

                <div>
                  {/* Highlight pill from screenshot */}
                  <div className="mb-5 p-3 rounded-lg bg-teal-900 text-teal-100 flex items-center gap-2.5">
                    <Award className="w-4 h-4 text-teal-300 shrink-0" />
                    <span className="text-xs font-semibold tracking-wide">
                      {doctor.highlight}
                    </span>
                  </div>

                  {/* Link to view full profile */}
                  <button
                    onClick={() => onSelectDoctor(doctor)}
                    className="group inline-flex items-center gap-1.5 text-xs sm:text-sm font-semibold text-teal-800 hover:text-teal-600 transition-colors"
                  >
                    <span>View full profile</span>
                    <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                  </button>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
