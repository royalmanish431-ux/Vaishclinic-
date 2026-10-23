import React from 'react';
import { DOCTORS } from '../data/clinicData';
import { Doctor } from '../types/clinic';
import { ArrowRight, Award, ShieldCheck, CheckCircle2 } from 'lucide-react';
import { DoctorAvatar } from './DoctorAvatar';

interface PractitionersProps {
  onSelectDoctor: (doctor: Doctor) => void;
  onBookWithDoctor: (doctorId: string) => void;
}

export const Practitioners: React.FC<PractitionersProps> = ({
  onSelectDoctor,
  onBookWithDoctor,
}) => {
  return (
    <section id="practitioners" className="py-20 lg:py-24 bg-gradient-to-b from-white via-teal-50/20 to-white border-b border-teal-100/70">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-xs font-extrabold uppercase tracking-widest text-[#00897b] block mb-2">
            PRACTITIONERS &amp; SPECIALISTS
          </span>
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-black text-slate-900 tracking-tight">
            The Specialists Behind Your Smile &amp; Mobility
          </h2>
          <p className="mt-3 text-slate-600 text-sm sm:text-base">
            Serving Chandpur and Western Uttar Pradesh since May 16, 2010 with dedicated clinical expertise and patient-first empathy.
          </p>
        </div>

        {/* 2 Practitioner Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-10 max-w-5xl mx-auto">
          {DOCTORS.map((doctor) => {
            const isDental = doctor.badge === 'Dental';

            return (
              <div
                key={doctor.id}
                className="bg-white rounded-3xl border border-teal-100/90 shadow-sm hover:shadow-xl hover:border-teal-300 transition-all p-6 sm:p-8 flex flex-col justify-between"
              >
                <div>
                  {/* Category Pill Tag */}
                  <div className="flex items-center justify-between mb-5">
                    <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-bold bg-teal-50 text-[#00796b] border border-teal-200">
                      <span className="w-1.5 h-1.5 rounded-full bg-[#00897b]" />
                      {doctor.badge} Division
                    </span>
                    <button
                      onClick={() => onBookWithDoctor(doctor.id)}
                      className="text-xs font-bold text-[#00897b] hover:text-[#00796b] transition-colors cursor-pointer"
                    >
                      Book Session →
                    </button>
                  </div>

                  {/* Doctor Profile Header */}
                  <div className="flex items-start gap-4 mb-6">
                    <DoctorAvatar doctor={doctor} size="md" allowUpload={true} />
                    <div className="min-w-0 flex-1">
                      <div className="flex items-center gap-2 flex-wrap">
                        <h3 className="text-base sm:text-lg lg:text-xl font-black text-slate-900 leading-snug">
                          {doctor.name}
                        </h3>
                        <span className="px-2.5 py-0.5 rounded-full text-xs font-extrabold bg-teal-100/80 text-teal-900 border border-teal-300">
                          {doctor.badge === 'Dental' ? 'B.D.S.' : 'B.P.T.'}
                        </span>
                      </div>
                      <p className="text-xs sm:text-sm font-bold text-[#00897b] mt-0.5">
                        {doctor.role}
                      </p>
                      <p className="text-[11px] font-semibold text-[#00796b] bg-teal-50 inline-block px-2 py-0.5 rounded-md mt-1 border border-teal-200">
                        {doctor.badge === 'Dental' ? 'डॉ. मुदित वैश्य (बी.डी.एस.)' : 'डॉ. श्रीमती मनी वैश्य (बी.पी.टी.)'}
                      </p>
                      {doctor.specialty && (
                        <p className="text-xs text-slate-500 mt-1.5 line-clamp-2">
                          {doctor.specialty}
                        </p>
                      )}
                    </div>
                  </div>

                  {/* Qualifications & Degrees */}
                  <div className="space-y-2 mb-6 pt-3 border-t border-slate-100">
                    {doctor.qualifications.map((q, idx) => (
                      <div key={idx} className="flex items-start gap-2 text-xs sm:text-[13px] text-slate-600">
                        <span className="text-[#00897b] mt-0.5 font-bold">•</span>
                        <span>{q}</span>
                      </div>
                    ))}
                  </div>
                </div>

                <div>
                  {/* Highlight pill in midnight navy from screenshot */}
                  <div className="mb-5 p-3 rounded-2xl bg-[#0b192c] text-teal-100 flex items-center gap-2.5 shadow-xs">
                    <Award className="w-4 h-4 text-teal-300 shrink-0" />
                    <span className="text-xs font-bold tracking-wide">
                      {doctor.highlight}
                    </span>
                  </div>

                  {/* Link to view full profile */}
                  <button
                    onClick={() => onSelectDoctor(doctor)}
                    className="group inline-flex items-center gap-1.5 text-xs sm:text-sm font-bold text-[#00897b] hover:text-[#00796b] transition-colors cursor-pointer"
                  >
                    <span>View full doctor credentials</span>
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
