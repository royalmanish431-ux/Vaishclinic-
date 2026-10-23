import React from 'react';
import { ArrowRight, Sparkles, Check, Stethoscope } from 'lucide-react';
import { DENTAL_SERVICES, PHYSIO_SERVICES } from '../data/clinicData';
import { ServiceItem } from '../types/clinic';

interface ServicesSectionProps {
  onOpenServiceModal: (category: 'Dental' | 'Physiotherapy') => void;
  onSelectServiceItem: (service: ServiceItem) => void;
  onBookService: (serviceName: string, category: 'dental' | 'physiotherapy') => void;
}

export const ServicesSection: React.FC<ServicesSectionProps> = ({
  onOpenServiceModal,
  onSelectServiceItem,
  onBookService,
}) => {
  return (
    <section id="services" className="py-20 lg:py-24 bg-white border-b border-slate-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-xs font-bold uppercase tracking-wider text-teal-700 block mb-2">
            TREATMENTS & SERVICES
          </span>
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-slate-900 tracking-tight">
            Two specialties, one clinic
          </h2>
          <p className="mt-3 text-slate-600 text-sm sm:text-base">
            Integrated dental surgeries and sports musculoskeletal physiotherapy under one roof in Chandpur.
          </p>
        </div>

        {/* Two Specialties Split Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-10 max-w-5xl mx-auto">
          {/* Card 1: Dental Care */}
          <div className="bg-slate-50/60 rounded-2xl border border-slate-200 p-6 sm:p-8 flex flex-col justify-between hover:border-teal-300 transition-colors">
            <div>
              {/* Card Header with Icon */}
              <div className="flex items-center gap-3 mb-6">
                <div className="w-10 h-10 rounded-xl bg-teal-100 text-teal-800 flex items-center justify-center font-bold">
                  <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M14.828 14.828a4 4 0 01-5.656 0M9 10h.01M15 10h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                    />
                  </svg>
                </div>
                <div>
                  <h3 className="text-xl font-bold text-slate-900">Dental Care</h3>
                  <p className="text-xs text-slate-500">Headed by Dr. Keerthi Prathi</p>
                </div>
              </div>

              {/* Service List items */}
              <ul className="space-y-3.5 mb-8">
                {DENTAL_SERVICES.slice(0, 6).map((item) => (
                  <li key={item.id} className="group">
                    <button
                      onClick={() => onSelectServiceItem(item)}
                      className="w-full text-left flex items-start gap-2.5 text-sm text-slate-700 hover:text-teal-700 transition-colors"
                    >
                      <span className="w-1.5 h-1.5 rounded-full bg-teal-600 mt-2 shrink-0 group-hover:scale-125 transition-transform" />
                      <div className="flex-1">
                        <span className="font-medium group-hover:underline">{item.name}</span>
                        <p className="text-xs text-slate-500 line-clamp-1">{item.shortDesc}</p>
                      </div>
                    </button>
                  </li>
                ))}
              </ul>
            </div>

            {/* Bottom Link from screenshot */}
            <div className="pt-4 border-t border-slate-200/80 flex items-center justify-between">
              <button
                onClick={() => onOpenServiceModal('Dental')}
                className="group inline-flex items-center gap-1.5 text-xs sm:text-sm font-semibold text-teal-800 hover:text-teal-600 transition-colors"
              >
                <span>View all dental care services</span>
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </button>
              <button
                onClick={() => onBookService('Dental Care', 'dental')}
                className="text-xs font-semibold px-3 py-1.5 bg-teal-700 hover:bg-teal-800 text-white rounded-lg transition-colors"
              >
                Book Dental
              </button>
            </div>
          </div>

          {/* Card 2: Physiotherapy */}
          <div className="bg-slate-50/60 rounded-2xl border border-slate-200 p-6 sm:p-8 flex flex-col justify-between hover:border-teal-300 transition-colors">
            <div>
              {/* Card Header with Icon */}
              <div className="flex items-center gap-3 mb-6">
                <div className="w-10 h-10 rounded-xl bg-teal-100 text-teal-800 flex items-center justify-center font-bold">
                  <Stethoscope className="w-5 h-5 text-teal-700" />
                </div>
                <div>
                  <h3 className="text-xl font-bold text-slate-900">Physiotherapy</h3>
                  <p className="text-xs text-slate-500">Headed by Dr. Badrinath Prathi, PT</p>
                </div>
              </div>

              {/* Service List items */}
              <ul className="space-y-3.5 mb-8">
                {PHYSIO_SERVICES.slice(0, 6).map((item) => (
                  <li key={item.id} className="group">
                    <button
                      onClick={() => onSelectServiceItem(item)}
                      className="w-full text-left flex items-start gap-2.5 text-sm text-slate-700 hover:text-teal-700 transition-colors"
                    >
                      <span className="w-1.5 h-1.5 rounded-full bg-teal-600 mt-2 shrink-0 group-hover:scale-125 transition-transform" />
                      <div className="flex-1">
                        <span className="font-medium group-hover:underline">{item.name}</span>
                        <p className="text-xs text-slate-500 line-clamp-1">{item.shortDesc}</p>
                      </div>
                    </button>
                  </li>
                ))}
              </ul>
            </div>

            {/* Bottom Link from screenshot */}
            <div className="pt-4 border-t border-slate-200/80 flex items-center justify-between">
              <button
                onClick={() => onOpenServiceModal('Physiotherapy')}
                className="group inline-flex items-center gap-1.5 text-xs sm:text-sm font-semibold text-teal-800 hover:text-teal-600 transition-colors"
              >
                <span>View all physiotherapy services</span>
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </button>
              <button
                onClick={() => onBookService('Physiotherapy Assessment', 'physiotherapy')}
                className="text-xs font-semibold px-3 py-1.5 bg-teal-700 hover:bg-teal-800 text-white rounded-lg transition-colors"
              >
                Book Physio
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
