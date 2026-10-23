import React from 'react';
import { HeartHandshake, Compass, Activity, Award } from 'lucide-react';

export const Philosophy: React.FC = () => {
  return (
    <section id="about" className="py-20 lg:py-24 bg-white border-b border-teal-100/60">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
          {/* Left Column: Section Title & Heading */}
          <div className="lg:col-span-5">
            <span className="text-xs font-extrabold uppercase tracking-widest text-[#00897b] block mb-3">
              OUR CLINICAL PHILOSOPHY
            </span>
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-black text-slate-900 leading-tight mb-6">
              &ldquo;Go Home With Smile&rdquo;: Healing with Empathy &amp; Precision
            </h2>
            <div className="h-1.5 w-16 bg-[#00897b] rounded-full mb-6" />
            <p className="text-slate-600 text-sm leading-relaxed mb-6 font-normal">
              At Dr. Vaish&apos;s Dental and Physiotherapy Clinic, healing begins with listening. We believe health is not merely the absence of pain, but the restoration of harmony between oral confidence, musculoskeletal vitality, and complete physical well-being.
            </p>
            <div className="p-4 rounded-2xl bg-teal-50/80 border border-teal-200/90 text-teal-950 text-xs leading-relaxed shadow-2xs">
              <span className="font-bold block mb-1 text-[#00796b]">Established May 16, 2010:</span>
              Founded by Dr. Mudit Vaish (B.D.S.) and Dr. (Mrs.) Mani Vaish (B.P.T.) to bring high-quality, compassionate dental healthcare and advanced physiotherapy rehabilitation under one roof in Chandpur, Uttar Pradesh.
            </div>
          </div>

          {/* Right Column: Exact Narrative & Key Pillars */}
          <div className="lg:col-span-7 flex flex-col justify-between">
            <p className="text-slate-700 text-base sm:text-lg leading-relaxed mb-8">
              Inaugurated on May 16, 2010, Dr. Vaish&apos;s Dental and Physiotherapy Clinic was established by Dr. Mudit Vaish (B.D.S.) and Dr. (Mrs.) Mani Vaish (B.P.T.) to deliver ethical, patient-first healthcare under our core motto — <em>&ldquo;Go Home With Smile&rdquo;</em>. Combining advanced dental diagnostics and evidence-based physiotherapy rehabilitation, we are proud to have served families and patients across Chandpur, Bijnor, and Western Uttar Pradesh for over 14 years.
            </p>

            {/* Three Pillar Cards */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 pt-6 border-t border-slate-100">
              <div className="p-5 rounded-2xl bg-gradient-to-b from-white to-teal-50/30 border border-teal-100 shadow-2xs">
                <div className="w-9 h-9 rounded-xl bg-teal-100 text-[#00897b] flex items-center justify-center mb-3">
                  <HeartHandshake className="w-5 h-5" />
                </div>
                <h3 className="text-sm font-bold text-slate-900 mb-1">Ethical Care First</h3>
                <p className="text-xs text-slate-600 leading-normal">
                  Transparent diagnostics, no unnecessary procedures, and complete honesty with every patient.
                </p>
              </div>

              <div className="p-5 rounded-2xl bg-gradient-to-b from-white to-teal-50/30 border border-teal-100 shadow-2xs">
                <div className="w-9 h-9 rounded-xl bg-teal-100 text-[#00897b] flex items-center justify-center mb-3">
                  <Activity className="w-5 h-5" />
                </div>
                <h3 className="text-sm font-bold text-slate-900 mb-1">Evidence-Based</h3>
                <p className="text-xs text-slate-600 leading-normal">
                  Modern endodontic rotary protocols and targeted neuro-musculoskeletal exercise regimens.
                </p>
              </div>

              <div className="p-5 rounded-2xl bg-gradient-to-b from-white to-teal-50/30 border border-teal-100 shadow-2xs">
                <div className="w-9 h-9 rounded-xl bg-teal-100 text-[#00897b] flex items-center justify-center mb-3">
                  <Award className="w-5 h-5" />
                </div>
                <h3 className="text-sm font-bold text-slate-900 mb-1">15+ Yrs Proven</h3>
                <p className="text-xs text-slate-600 leading-normal">
                  Trusted by families, athletes, teachers, and seniors across Chandpur and Bijnor district.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
