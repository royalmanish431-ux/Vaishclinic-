import React, { useState } from 'react';
import { ServiceItem } from '../types/clinic';
import { DENTAL_SERVICES, PHYSIO_SERVICES } from '../data/clinicData';
import { X, Check, Clock, Sparkles, Calendar, ChevronRight } from 'lucide-react';

interface ServiceDetailsModalProps {
  isOpen: boolean;
  category: 'Dental' | 'Physiotherapy' | null;
  selectedItem: ServiceItem | null;
  onClose: () => void;
  onBook: (serviceName: string, category: 'dental' | 'physiotherapy') => void;
}

export const ServiceDetailsModal: React.FC<ServiceDetailsModalProps> = ({
  isOpen,
  category,
  selectedItem,
  onClose,
  onBook,
}) => {
  const [activeTab, setActiveTab] = useState<'Dental' | 'Physiotherapy'>(
    category || (selectedItem?.category ?? 'Dental')
  );

  // Sync tab when modal opens or category changes
  React.useEffect(() => {
    if (category) setActiveTab(category);
    else if (selectedItem?.category) setActiveTab(selectedItem.category);
  }, [category, selectedItem]);

  const [activeServiceId, setActiveServiceId] = useState<string>(
    selectedItem ? selectedItem.id : activeTab === 'Dental' ? DENTAL_SERVICES[0].id : PHYSIO_SERVICES[0].id
  );

  React.useEffect(() => {
    if (selectedItem) {
      setActiveServiceId(selectedItem.id);
    } else {
      setActiveServiceId(activeTab === 'Dental' ? DENTAL_SERVICES[0].id : PHYSIO_SERVICES[0].id);
    }
  }, [selectedItem, activeTab]);

  if (!isOpen) return null;

  const currentList = activeTab === 'Dental' ? DENTAL_SERVICES : PHYSIO_SERVICES;
  const currentService = currentList.find((s) => s.id === activeServiceId) || currentList[0];

  return (
    <div
      onClick={(e) => {
        if (e.target === e.currentTarget) onClose();
      }}
      className="fixed inset-0 z-50 overflow-y-auto bg-slate-900/70 backdrop-blur-sm flex items-center justify-center p-4 cursor-pointer"
    >
      <div
        onClick={(e) => e.stopPropagation()}
        className="bg-white rounded-2xl max-w-4xl w-full overflow-hidden shadow-2xl border border-slate-200 transition-all flex flex-col max-h-[85vh] cursor-default"
      >
        {/* Modal Top Bar */}
        <div className="bg-teal-900 text-white p-5 flex items-center justify-between shrink-0">
          <div className="flex items-center gap-3">
            <div className="flex bg-teal-950 p-1 rounded-lg">
              <button
                onClick={() => setActiveTab('Dental')}
                className={`px-3 py-1.5 rounded-md text-xs font-semibold transition-all ${
                  activeTab === 'Dental' ? 'bg-teal-600 text-white shadow-sm' : 'text-teal-200 hover:text-white'
                }`}
              >
                Dental Care
              </button>
              <button
                onClick={() => setActiveTab('Physiotherapy')}
                className={`px-3 py-1.5 rounded-md text-xs font-semibold transition-all ${
                  activeTab === 'Physiotherapy' ? 'bg-teal-600 text-white shadow-sm' : 'text-teal-200 hover:text-white'
                }`}
              >
                Physiotherapy
              </button>
            </div>
            <span className="hidden sm:inline-block text-xs text-teal-200">
              {activeTab === 'Dental' ? 'Supervised by Dr. Keerthi Prathi' : 'Supervised by Dr. Badrinath Prathi, PT'}
            </span>
          </div>

          <button
            onClick={onClose}
            className="p-1 rounded-lg text-teal-200 hover:text-white hover:bg-teal-800 transition-colors"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Modal Body: Split view of services list & detailed pane */}
        <div className="grid grid-cols-1 md:grid-cols-12 flex-1 overflow-hidden">
          {/* Left: Service Selector list */}
          <div className="md:col-span-5 border-r border-slate-200 overflow-y-auto p-4 space-y-2 bg-slate-50/50">
            <span className="text-[11px] font-bold uppercase tracking-wider text-slate-400 block px-2 mb-1">
              Select Procedure
            </span>
            {currentList.map((service) => {
              const isSelected = service.id === currentService?.id;
              return (
                <button
                  key={service.id}
                  onClick={() => setActiveServiceId(service.id)}
                  className={`w-full text-left p-3 rounded-xl transition-all flex items-center justify-between ${
                    isSelected
                      ? 'bg-teal-700 text-white shadow-sm'
                      : 'bg-white hover:bg-slate-100 text-slate-800 border border-slate-200/70'
                  }`}
                >
                  <div>
                    <h5 className="text-xs sm:text-sm font-bold leading-snug">
                      {service.name}
                    </h5>
                    <p
                      className={`text-[11px] mt-0.5 line-clamp-1 ${
                        isSelected ? 'text-teal-100' : 'text-slate-500'
                      }`}
                    >
                      {service.shortDesc}
                    </p>
                  </div>
                  <ChevronRight
                    className={`w-4 h-4 shrink-0 ml-2 ${
                      isSelected ? 'text-white' : 'text-slate-400'
                    }`}
                  />
                </button>
              );
            })}
          </div>

          {/* Right: Detailed procedure info */}
          {currentService && (
            <div className="md:col-span-7 p-6 sm:p-8 overflow-y-auto space-y-6 flex flex-col justify-between">
              <div className="space-y-5">
                <div>
                  <div className="flex items-center gap-2 mb-2">
                    <span className="text-[11px] font-semibold text-teal-800 bg-teal-50 px-2.5 py-0.5 rounded border border-teal-200">
                      {currentService.category} Procedure
                    </span>
                    <span className="flex items-center gap-1 text-[11px] text-slate-500">
                      <Clock className="w-3.5 h-3.5" />
                      <span>{currentService.duration}</span>
                    </span>
                  </div>
                  <h4 className="text-xl sm:text-2xl font-extrabold text-slate-900">
                    {currentService.name}
                  </h4>
                  <p className="text-xs sm:text-sm text-slate-600 leading-relaxed mt-2">
                    {currentService.description}
                  </p>
                </div>

                {/* Key Benefits */}
                <div>
                  <h5 className="text-xs font-bold uppercase tracking-wider text-slate-700 mb-2">
                    Key Treatment Benefits
                  </h5>
                  <div className="space-y-1.5">
                    {currentService.benefits.map((b, idx) => (
                      <div key={idx} className="flex items-start gap-2 text-xs text-slate-700">
                        <Check className="w-3.5 h-3.5 text-teal-600 mt-0.5 shrink-0" />
                        <span>{b}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Suitable For */}
                <div>
                  <h5 className="text-xs font-bold uppercase tracking-wider text-slate-700 mb-2">
                    Common Indications & Who It Is For
                  </h5>
                  <div className="flex flex-wrap gap-1.5">
                    {currentService.suitableFor.map((item, idx) => (
                      <span
                        key={idx}
                        className="text-[11px] font-medium text-slate-700 bg-slate-100 px-2.5 py-1 rounded"
                      >
                        {item}
                      </span>
                    ))}
                  </div>
                </div>
              </div>

              {/* Bottom Book CTA */}
              <div className="pt-6 border-t border-slate-200 flex items-center justify-between">
                <div>
                  <span className="text-[11px] text-slate-400 block">Personalized Diagnosis</span>
                  <span className="text-xs font-semibold text-teal-800">
                    Consultation with Senior Specialist
                  </span>
                </div>
                <button
                  onClick={() => {
                    onClose();
                    onBook(
                      currentService.name,
                      currentService.category.toLowerCase() as 'dental' | 'physiotherapy'
                    );
                  }}
                  className="inline-flex items-center gap-2 bg-teal-700 hover:bg-teal-800 text-white text-xs font-bold px-5 py-2.5 rounded-lg shadow-sm transition-colors"
                >
                  <Calendar className="w-4 h-4" />
                  <span>Schedule Consultation</span>
                </button>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};
