import React, { useState } from 'react';
import { CLINIC_INFO } from '../data/clinicData';
import {
  MapPin,
  Phone,
  Clock,
  ArrowRight,
  ExternalLink,
  Navigation,
  Copy,
  Check,
  Maximize2,
} from 'lucide-react';
import { APIProvider, Map, AdvancedMarker, Pin, InfoWindow } from '@vis.gl/react-google-maps';

interface VisitUsProps {
  onOpenBooking: () => void;
}

const GOOGLE_MAPS_API_KEY =
  import.meta.env.VITE_GOOGLE_MAPS_API_KEY || 'AIzaSyCNwF1bw0hs_7Yk5_yHGpujR9ahmUjAhHs';

export const VisitUs: React.FC<VisitUsProps> = ({ onOpenBooking }) => {
  const [copiedPlusCode, setCopiedPlusCode] = useState(false);
  const [isInfoOpen, setIsInfoOpen] = useState(true);

  const clinicPosition = {
    lat: CLINIC_INFO.coordinates?.lat || 29.138639,
    lng: CLINIC_INFO.coordinates?.lng || 78.265361,
  };

  const directionsUrl = `https://www.google.com/maps/dir/?api=1&destination=${clinicPosition.lat},${clinicPosition.lng}`;

  const handleCopyPlusCode = () => {
    navigator.clipboard.writeText('47Q7+CWQ, Chandpur, Uttar Pradesh');
    setCopiedPlusCode(true);
    setTimeout(() => setCopiedPlusCode(false), 2000);
  };

  return (
    <section id="contact" className="py-20 lg:py-24 bg-white border-b border-slate-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-14">
          <span className="text-xs font-bold uppercase tracking-wider text-teal-700 block mb-2">
            VISIT OUR CLINIC
          </span>
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-slate-900 tracking-tight">
            We Value Your Time & Health
          </h2>
          <p className="mt-2 text-base sm:text-lg font-medium text-slate-600">
            Conveniently located at Sato Imli Bazar, Bazaria, Chandpur. Get easy turn-by-turn directions.
          </p>
        </div>

        {/* 2-Column Split: Clinic Contact Info & Interactive Map */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-10 items-stretch max-w-6xl mx-auto">
          {/* Left Details Column */}
          <div className="lg:col-span-5 flex flex-col justify-between space-y-6 bg-slate-50/70 p-6 sm:p-8 rounded-2xl border border-slate-200">
            <div className="space-y-6">
              {/* Address item */}
              <div className="flex items-start gap-3.5">
                <div className="w-10 h-10 rounded-xl bg-teal-100 text-teal-800 flex items-center justify-center shrink-0 mt-0.5 border border-teal-200">
                  <MapPin className="w-5 h-5 text-teal-700" />
                </div>
                <div>
                  <h3 className="text-xs font-bold uppercase tracking-wider text-slate-400 mb-1">
                    Clinic Address
                  </h3>
                  <p className="text-sm sm:text-base font-bold text-slate-900 leading-snug">
                    {CLINIC_INFO.address}
                  </p>
                  
                  {/* Plus code badge */}
                  <div className="mt-2.5 flex items-center gap-2">
                    <span className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded bg-teal-50 border border-teal-200 text-teal-800 font-mono text-xs font-semibold">
                      Plus Code: 47Q7+CWQ
                    </span>
                    <button
                      onClick={handleCopyPlusCode}
                      title="Copy Plus Code"
                      className="p-1 rounded hover:bg-slate-200 text-slate-600 transition-colors"
                      type="button"
                    >
                      {copiedPlusCode ? (
                        <Check className="w-3.5 h-3.5 text-emerald-600" />
                      ) : (
                        <Copy className="w-3.5 h-3.5" />
                      )}
                    </button>
                  </div>

                  {/* Exact Coordinates */}
                  <p className="text-[11px] font-mono text-slate-500 mt-1.5">
                    GPS: 29°08&apos;19.1&quot;N 78°15&apos;55.3&quot;E ({clinicPosition.lat.toFixed(6)}, {clinicPosition.lng.toFixed(6)})
                  </p>
                </div>
              </div>

              {/* Telephone item */}
              <div className="flex items-start gap-3.5">
                <div className="w-10 h-10 rounded-xl bg-teal-100 text-teal-800 flex items-center justify-center shrink-0 mt-0.5 border border-teal-200">
                  <Phone className="w-5 h-5 text-teal-700" />
                </div>
                <div>
                  <h3 className="text-xs font-bold uppercase tracking-wider text-slate-400 mb-1">
                    Appointments & Inquiries
                  </h3>
                  <a
                    href={`tel:${CLINIC_INFO.mobileRaw}`}
                    className="text-base font-bold text-teal-800 hover:text-teal-900 transition-colors"
                  >
                    {CLINIC_INFO.mobile}
                  </a>
                  <p className="text-xs text-slate-500 mt-0.5">
                    Phone calls, WhatsApp booking & emergency consultations
                  </p>
                </div>
              </div>

              {/* Consultation Hours */}
              <div className="flex items-start gap-3.5">
                <div className="w-10 h-10 rounded-xl bg-teal-100 text-teal-800 flex items-center justify-center shrink-0 mt-0.5 border border-teal-200">
                  <Clock className="w-5 h-5 text-teal-700" />
                </div>
                <div>
                  <h3 className="text-xs font-bold uppercase tracking-wider text-slate-400 mb-1">
                    Consultation Hours
                  </h3>
                  <p className="text-xs font-medium text-slate-700">
                    <span className="font-semibold text-slate-900">Mon - Sat:</span> {CLINIC_INFO.workingHours.weekdays}
                  </p>
                  <p className="text-xs font-medium text-slate-700 mt-1">
                    <span className="font-semibold text-slate-900">Sunday:</span> {CLINIC_INFO.workingHours.sunday}
                  </p>
                </div>
              </div>
            </div>

            {/* Quick Action Buttons */}
            <div className="pt-4 border-t border-slate-200/80 space-y-2.5">
              <div className="flex flex-wrap items-center gap-3">
                <a
                  href={directionsUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex-1 min-w-[140px] inline-flex items-center justify-center gap-2 bg-teal-700 hover:bg-teal-800 text-white font-semibold text-sm px-4 py-2.5 rounded-lg shadow-sm transition-all"
                >
                  <Navigation className="w-4 h-4" />
                  <span>Get Directions</span>
                </a>

                <a
                  href={`tel:${CLINIC_INFO.mobileRaw}`}
                  className="inline-flex items-center justify-center gap-2 bg-slate-900 hover:bg-slate-800 text-white font-semibold text-sm px-4 py-2.5 rounded-lg shadow-sm transition-all"
                >
                  <Phone className="w-4 h-4" />
                  <span>Call Doctor</span>
                </a>
              </div>

              <button
                onClick={onOpenBooking}
                className="w-full inline-flex items-center justify-center gap-2 text-sm font-semibold text-teal-800 hover:text-teal-900 bg-teal-50/80 hover:bg-teal-100 border border-teal-200 py-2.5 px-4 rounded-lg transition-colors"
              >
                <span>Book Appointment Online</span>
                <ArrowRight className="w-4 h-4" />
              </button>
            </div>
          </div>

          {/* Right Visible Map Column */}
          <div className="lg:col-span-7 bg-white rounded-2xl border border-slate-200 overflow-hidden shadow-sm flex flex-col min-h-[460px]">
            {/* Top Bar for Map */}
            <div className="p-3.5 sm:p-4 bg-slate-900 text-white flex items-center justify-between z-10 shrink-0">
              <div className="flex items-center gap-3">
                <img
                  src={CLINIC_INFO.logo}
                  alt={CLINIC_INFO.fullName}
                  className="w-8 h-8 rounded-full object-contain bg-white border border-teal-400 p-0.5"
                />
                <div>
                  <div className="flex items-center gap-2">
                    <span className="text-xs sm:text-sm font-bold text-white leading-tight">
                      {CLINIC_INFO.fullName}
                    </span>
                    <span className="inline-block px-1.5 py-0.5 rounded text-[10px] font-semibold bg-emerald-500/20 text-emerald-300 border border-emerald-500/30">
                      Live Map
                    </span>
                  </div>
                  <span className="text-[11px] text-slate-300 block truncate max-w-[280px] sm:max-w-none">
                    47Q7+CWQ, Sato Imli Bazar, Bazaria, Chandpur
                  </span>
                </div>
              </div>

              <div className="flex items-center gap-2 shrink-0">
                <a
                  href={CLINIC_INFO.googleMapsUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 text-xs font-semibold text-white hover:text-teal-200 bg-teal-700 hover:bg-teal-600 px-3 py-1.5 rounded-lg shadow-sm transition-colors"
                >
                  <ExternalLink className="w-3.5 h-3.5" />
                  <span className="hidden sm:inline">Google Maps</span>
                </a>
              </div>
            </div>

            {/* Interactive Google Map Instance */}
            <div className="relative flex-1 w-full min-h-[380px] bg-slate-100">
              <APIProvider apiKey={GOOGLE_MAPS_API_KEY}>
                <Map
                  mapId="DEMO_MAP_ID"
                  internalUsageAttributionIds={['gmp_mcp_codeassist_v1_aistudio']}
                  defaultCenter={clinicPosition}
                  defaultZoom={16}
                  gestureHandling="cooperative"
                  disableDefaultUI={false}
                  zoomControl={true}
                  mapTypeControl={true}
                  streetViewControl={true}
                  className="w-full h-full min-h-[380px]"
                >
                  {/* Advanced Marker for Clinic Pin */}
                  <AdvancedMarker
                    position={clinicPosition}
                    title={CLINIC_INFO.fullName}
                    onClick={() => setIsInfoOpen(true)}
                  >
                    <Pin
                      background="#0f766e"
                      borderColor="#ffffff"
                      glyphColor="#ffffff"
                      scale={1.2}
                    />
                  </AdvancedMarker>

                  {/* Info Window */}
                  {isInfoOpen && (
                    <InfoWindow
                      position={clinicPosition}
                      onCloseClick={() => setIsInfoOpen(false)}
                      headerContent={
                        <div className="font-bold text-xs text-teal-900 flex items-center gap-1.5">
                          <MapPin className="w-3.5 h-3.5 text-teal-700" />
                          <span>Dr. Vaish&apos;s Clinic</span>
                        </div>
                      }
                    >
                      <div className="p-1 max-w-[240px] text-slate-800">
                        <p className="text-xs font-semibold text-slate-900 leading-snug">
                          Dental & Physiotherapy Care
                        </p>
                        <p className="text-[11px] text-slate-600 mt-1 leading-normal">
                          Sato Imli Bazar, Bazaria, Chandpur, UP - 246725
                        </p>
                        <div className="mt-2.5 pt-2 border-t border-slate-200 flex items-center justify-between gap-2">
                          <span className="text-[10px] font-mono text-teal-800 font-bold bg-teal-50 px-1.5 py-0.5 rounded border border-teal-200">
                            47Q7+CWQ
                          </span>
                          <a
                            href={directionsUrl}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="inline-flex items-center gap-1 text-[11px] font-bold text-teal-700 hover:text-teal-900"
                          >
                            <span>Directions</span>
                            <ArrowRight className="w-3 h-3" />
                          </a>
                        </div>
                      </div>
                    </InfoWindow>
                  )}
                </Map>
              </APIProvider>

              {/* Floating Quick Action Overlay */}
              <div className="absolute bottom-3 left-3 z-10 bg-white/95 backdrop-blur-sm px-3 py-2 rounded-lg shadow-md border border-slate-200 flex items-center gap-2.5 text-xs">
                <div className="w-2.5 h-2.5 rounded-full bg-emerald-500 animate-pulse" />
                <span className="text-slate-700 font-medium">
                  29°08&apos;19.1&quot;N 78°15&apos;55.3&quot;E
                </span>
                <span className="text-slate-300">|</span>
                <a
                  href={directionsUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="font-bold text-teal-700 hover:text-teal-900 inline-flex items-center gap-1"
                >
                  <Navigation className="w-3 h-3" />
                  <span>Navigate</span>
                </a>
              </div>
            </div>

            {/* Bottom Footer Information Bar */}
            <div className="p-3 bg-slate-50 border-t border-slate-200 text-xs text-slate-600 flex flex-wrap items-center justify-between gap-2">
              <div className="flex items-center gap-2">
                <MapPin className="w-3.5 h-3.5 text-teal-700 shrink-0" />
                <span>Sato Imli Bazar, Bazaria, Chandpur, Bijnor (UP)</span>
              </div>
              <div className="flex items-center gap-3">
                <span className="font-mono text-[11px] text-slate-600 font-bold bg-slate-200/70 px-2 py-0.5 rounded">
                  PIN 246725
                </span>
                <a
                  href={CLINIC_INFO.googleMapsUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-teal-700 font-semibold hover:underline inline-flex items-center gap-1"
                >
                  <span>Open Full View</span>
                  <Maximize2 className="w-3 h-3" />
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
