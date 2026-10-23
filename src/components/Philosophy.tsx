import React from 'react';
import { HeartHandshake, Compass, Activity, Award } from 'lucide-react';

export const Philosophy: React.FC = () => {
  return (
    <section id="about" className="py-20 lg:py-24 bg-white border-b border-slate-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
          {/* Left Column: Section Title & Heading */}
          <div className="lg:col-span-5">
            <span className="text-xs font-bold uppercase tracking-wider text-teal-700 block mb-3">
              OUR PHILOSOPHY
            </span>
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-slate-900 leading-tight mb-6">
              &ldquo;Go Home With Smile&rdquo;: Healing with Compassion & Precision
            </h2>
            <div className="h-1 w-16 bg-teal-600 rounded-full mb-6" />
            <p className="text-slate-600 text-sm leading-relaxed mb-6">
              At Dr. Vaish&apos;s Dental and Physiotherapy Clinic, healing begins with listening. We believe health is not merely the absence of disease, but the restoration of harmony between oral health, musculoskeletal vitality, and a confident smile.
            </p>
            <div className="p-4 rounded-xl bg-teal-50/60 border border-teal-100 text-teal-900 text-xs leading-relaxed">
              <span className="font-semibold block mb-1">Foundational Vision:</span>
              Founded under the guidance of Dr. P.S.M. Chandran and cricket icon Aakash Chopra to bridge top-tier sports rehabilitation with advanced conservative dental healthcare.
            </div>
          </div>

          {/* Right Column: Exact Narrative & Key Pillars */}
          <div className="lg:col-span-7 flex flex-col justify-between">
            <p className="text-slate-700 text-base sm:text-lg leading-relaxed mb-8">
              Inaugurated on May 16, 2010 with the support of Dr. P.S.M. Chandran, former Sports Physician to Indian Olympic contingents, and cricket analyst Aakash Chopra, Dr. Vaish&apos;s Dental and Physiotherapy Clinic was established to deliver ethical, specialized healthcare that combines dental and physiotherapy expertise under our core motto — <em>&ldquo;Go Home With Smile&rdquo;</em>. We follow evolving, research- and evidence based treatment methods, and we&apos;re proud to have treated patients from across Uttar Pradesh and India.
            </p>

            {/* Three Pillar Cards */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 pt-6 border-t border-slate-200">
              <div className="p-4 rounded-lg bg-slate-50 border border-slate-200/60">
                <div className="w-8 h-8 rounded-md bg-teal-100 text-teal-700 flex items-center justify-center mb-3">
                  <HeartHandshake className="w-4 h-4" />
                </div>
                <h3 className="text-sm font-bold text-slate-900 mb-1">Ethical Care First</h3>
                <p className="text-xs text-slate-600 leading-normal">
                  Transparent diagnostics, no unnecessary procedures, and complete honesty with every patient.
                </p>
              </div>

              <div className="p-4 rounded-lg bg-slate-50 border border-slate-200/60">
                <div className="w-8 h-8 rounded-md bg-teal-100 text-teal-700 flex items-center justify-center mb-3">
                  <Activity className="w-4 h-4" />
                </div>
                <h3 className="text-sm font-bold text-slate-900 mb-1">Evidence-Based</h3>
                <p className="text-xs text-slate-600 leading-normal">
                  International Olympic Committee and modern endodontic guidelines driving clinical outcomes.
                </p>
              </div>

              <div className="p-4 rounded-lg bg-slate-50 border border-slate-200/60">
                <div className="w-8 h-8 rounded-md bg-teal-100 text-teal-700 flex items-center justify-center mb-3">
                  <Award className="w-4 h-4" />
                </div>
                <h3 className="text-sm font-bold text-slate-900 mb-1">15+ Yrs Proven</h3>
                <p className="text-xs text-slate-600 leading-normal">
                  Trusted by national cricketers, army officers, Olympic athletes, and local Chandpur families.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
