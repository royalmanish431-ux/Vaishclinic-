import React from 'react';
import { ArrowRight, Sparkles, Check, Stethoscope, Smile } from 'lucide-react';
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
    <section id="services" className="py-20 lg:py-24 bg-white border-b border-teal-100/60">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-xs font-extrabold uppercase tracking-widest text-[#00897b] block mb-2">
            TREATMENTS &amp; SPECIALTIES
          </span>
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-black text-slate-900 tracking-tight">
            Two Advanced Specialties, One Trusted Clinic
          </h2>
          <p className="mt-3 text-slate-600 text-sm sm:text-base">
            Comprehensive oral healthcare and non-surgical musculoskeletal physical therapy under one roof in Chandpur.
          </p>
        </div>

        {/* Two Specialties Split Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-10 max-w-5xl mx-auto">
          {/* Card 1: Dental Care */}
          <div className="bg-gradient-to-b from-white to-[#f0fdfa]/40 rounded-3xl border border-teal-100/90 p-6 sm:p-8 flex flex-col justify-between hover:border-teal-300 hover:shadow-lg transition-all">
            <div>
              {/* Card Header with Icon */}
              <div className="flex items-center gap-3.5 mb-6">
                <div className="w-12 h-12 rounded-2xl bg-teal-50 border border-teal-200 text-[#00897b] flex items-center justify-center font-bold shadow-2xs">
                  <Smile className="w-6 h-6" />
                </div>
                <div>
                  <h3 className="text-xl font-black text-slate-900">Dental Center</h3>
                  <p className="text-xs font-semibold text-[#00897b]">Headed by Dr. Mudit Vaish (B.D.S.)</p>
                </div>
              </div>

              {/* Service List items */}
              <ul className="space-y-3.5 mb-8">
                {DENTAL_SERVICES.slice(0, 6).map((item) => (
                  <li key={item.id} className="group">
                    <button
                      onClick={() => onSelectServiceItem(item)}
                      className="w-full text-left flex items-start gap-2.5 text-sm text-slate-700 hover:text-[#00897b] transition-colors cursor-pointer"
                    >
                      <span className="w-1.5 h-1.5 rounded-full bg-[#00897b] mt-2 shrink-0 group-hover:scale-125 transition-transform" />
                      <div className="flex-1">
                        <span className="font-semibold text-slate-800 group-hover:underline">{item.name}</span>
                        <p className="text-xs text-slate-500 line-clamp-1">{item.shortDesc}</p>
                      </div>
                    </button>
                  </li>
                ))}
              </ul>
            </div>

            {/* Bottom Actions */}
            <div className="pt-5 border-t border-teal-100 flex items-center justify-between gap-3">
              <button
                onClick={() => onOpenServiceModal('Dental')}
                className="group inline-flex items-center gap-1.5 text-xs sm:text-sm font-bold text-[#00897b] hover:text-[#00796b] transition-colors cursor-pointer"
              >
                <span>View all dental treatments</span>
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </button>
              <button
                onClick={() => onBookService('Dental Care', 'dental')}
                className="text-xs font-bold px-4 py-2 bg-[#00897b] hover:bg-[#00796b] text-white rounded-xl shadow-xs transition-all cursor-pointer"
              >
                Book Dental
              </button>
            </div>
          </div>

          {/* Card 2: Physiotherapy */}
          <div className="bg-gradient-to-b from-white to-[#f0fdfa]/40 rounded-3xl border border-teal-100/90 p-6 sm:p-8 flex flex-col justify-between hover:border-teal-300 hover:shadow-lg transition-all">
            <div>
              {/* Card Header with Icon */}
              <div className="flex items-center gap-3.5 mb-6">
                <div className="w-12 h-12 rounded-2xl bg-teal-50 border border-teal-200 text-[#00897b] flex items-center justify-center font-bold shadow-2xs">
                  <Stethoscope className="w-6 h-6 text-[#00897b]" />
                </div>
                <div>
                  <h3 className="text-xl font-black text-slate-900">Advanced Physiotherapy</h3>
                  <p className="text-xs font-semibold text-[#00897b]">Headed by Dr. (Mrs.) Mani Vaish (B.P.T.)</p>
                </div>
              </div>

              {/* Service List items */}
              <ul className="space-y-3.5 mb-8">
                {PHYSIO_SERVICES.slice(0, 6).map((item) => (
                  <li key={item.id} className="group">
                    <button
                      onClick={() => onSelectServiceItem(item)}
                      className="w-full text-left flex items-start gap-2.5 text-sm text-slate-700 hover:text-[#00897b] transition-colors cursor-pointer"
                    >
                      <span className="w-1.5 h-1.5 rounded-full bg-[#00897b] mt-2 shrink-0 group-hover:scale-125 transition-transform" />
                      <div className="flex-1">
                        <span className="font-semibold text-slate-800 group-hover:underline">{item.name}</span>
                        <p className="text-xs text-slate-500 line-clamp-1">{item.shortDesc}</p>
                      </div>
                    </button>
                  </li>
                ))}
              </ul>
            </div>

            {/* Bottom Actions */}
            <div className="pt-5 border-t border-teal-100 flex items-center justify-between gap-3">
              <button
                onClick={() => onOpenServiceModal('Physiotherapy')}
                className="group inline-flex items-center gap-1.5 text-xs sm:text-sm font-bold text-[#00897b] hover:text-[#00796b] transition-colors cursor-pointer"
              >
                <span>View all physio therapies</span>
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </button>
              <button
                onClick={() => onBookService('Physiotherapy Assessment', 'physiotherapy')}
                className="text-xs font-bold px-4 py-2 bg-[#00897b] hover:bg-[#00796b] text-white rounded-xl shadow-xs transition-all cursor-pointer"
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
