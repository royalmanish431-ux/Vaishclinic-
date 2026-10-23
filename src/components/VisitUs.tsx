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

  const directionsUrl =
    CLINIC_INFO.googleMapsDirectionsUrl ||
    `https://www.google.com/maps/dir/?api=1&destination=${encodeURIComponent(
      "Dr. Vaish's Dental and physiotherapy clinic, sato imli bazar, bazaria, Chandpur, Uttar Pradesh 246725"
    )}`;

  const handleCopyPlusCode = () => {
    navigator.clipboard.writeText('47Q7+CWQ, Chandpur, Uttar Pradesh');
    setCopiedPlusCode(true);
    setTimeout(() => setCopiedPlusCode(false), 2000);
  };

  return (
    <section id="contact" className="py-20 lg:py-24 bg-gradient-to-b from-white via-teal-50/15 to-white border-b border-teal-100/60">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-14">
          <span className="text-xs font-extrabold uppercase tracking-widest text-[#00897b] block mb-2">
            LOCATION &amp; EASY REACH
          </span>
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-black text-slate-900 tracking-tight">
            Visit Our Clinic in Chandpur
          </h2>
          <p className="mt-2 text-base sm:text-lg font-medium text-slate-600">
            Conveniently located at Sato Imli Bazar, Bazaria, Chandpur. Get easy turn-by-turn directions.
          </p>
        </div>

        {/* 2-Column Split: Clinic Contact Info & Interactive Map */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-10 items-stretch max-w-6xl mx-auto">
          {/* Left Details Column */}
          <div className="lg:col-span-5 flex flex-col justify-between space-y-6 bg-white p-6 sm:p-8 rounded-3xl border border-teal-100 shadow-sm">
            <div className="space-y-6">
              {/* Address item */}
              <div className="flex items-start gap-3.5">
                <div className="w-11 h-11 rounded-2xl bg-teal-50 text-[#00897b] flex items-center justify-center shrink-0 mt-0.5 border border-teal-200">
                  <MapPin className="w-5 h-5 text-[#00897b]" />
                </div>
                <div>
                  <h3 className="text-xs font-extrabold uppercase tracking-wider text-slate-400 mb-1">
                    Clinic Address
                  </h3>
                  <p className="text-sm sm:text-base font-bold text-slate-900 leading-snug">
                    {CLINIC_INFO.address}
                  </p>
                  
                  {/* Plus code badge */}
                  <div className="mt-2.5 flex items-center gap-2">
                    <span className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full bg-teal-50 border border-teal-200 text-[#00796b] font-mono text-xs font-bold">
                      Plus Code: 47Q7+CWQ
                    </span>
                    <button
                      onClick={handleCopyPlusCode}
                      title="Copy Plus Code"
                      className="p-1 rounded-lg hover:bg-teal-50 text-slate-600 hover:text-[#00897b] transition-colors"
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
                    GPS: 29°08&apos;19.1&quot;N 78°15&apos;55.3&quot;E
                  </p>
                </div>
              </div>

              {/* Telephone item */}
              <div className="flex items-start gap-3.5">
                <div className="w-11 h-11 rounded-2xl bg-teal-50 text-[#00897b] flex items-center justify-center shrink-0 mt-0.5 border border-teal-200">
                  <Phone className="w-5 h-5 text-[#00897b]" />
                </div>
                <div>
                  <h3 className="text-xs font-extrabold uppercase tracking-wider text-slate-400 mb-1">
                    Appointments &amp; Inquiries
                  </h3>
                  <a
                    href={`tel:${CLINIC_INFO.mobileRaw}`}
                    className="text-base font-black text-[#00897b] hover:text-[#00796b] transition-colors"
                  >
                    {CLINIC_INFO.mobile}
                  </a>
                  <p className="text-xs text-slate-500 mt-0.5">
                    Phone calls, WhatsApp booking &amp; emergency consultations
                  </p>
                </div>
              </div>

              {/* Consultation Hours */}
              <div className="flex items-start gap-3.5">
                <div className="w-11 h-11 rounded-2xl bg-teal-50 text-[#00897b] flex items-center justify-center shrink-0 mt-0.5 border border-teal-200">
                  <Clock className="w-5 h-5 text-[#00897b]" />
                </div>
                <div>
                  <h3 className="text-xs font-extrabold uppercase tracking-wider text-slate-400 mb-1">
                    Consultation Hours
                  </h3>
                  <p className="text-xs font-medium text-slate-700">
                    <span className="font-bold text-slate-900">Mon - Sat:</span> {CLINIC_INFO.workingHours.weekdays}
                  </p>
                  <p className="text-xs font-medium text-slate-700 mt-1">
                    <span className="font-bold text-slate-900">Sunday:</span> {CLINIC_INFO.workingHours.sunday}
                  </p>
                </div>
              </div>
            </div>

            {/* Quick Action Buttons */}
            <div className="pt-4 border-t border-slate-100 space-y-2.5">
              <div className="flex flex-wrap items-center gap-3">
                <a
                  href={directionsUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex-1 min-w-[140px] inline-flex items-center justify-center gap-2 bg-[#00897b] hover:bg-[#00796b] text-white font-bold text-sm px-4 py-3 rounded-xl shadow-md shadow-teal-700/20 transition-all cursor-pointer"
                >
                  <Navigation className="w-4 h-4" />
                  <span>Get Directions</span>
                </a>

                <a
                  href={`tel:${CLINIC_INFO.mobileRaw}`}
                  className="inline-flex items-center justify-center gap-2 bg-[#0b192c] hover:bg-slate-800 text-white font-bold text-sm px-4 py-3 rounded-xl shadow-xs transition-all cursor-pointer"
                >
                  <Phone className="w-4 h-4 text-teal-300" />
                  <span>Call Doctor</span>
                </a>
              </div>

              <button
                onClick={onOpenBooking}
                className="w-full inline-flex items-center justify-center gap-2 text-sm font-bold text-[#00796b] hover:text-teal-950 bg-teal-50 hover:bg-teal-100/70 border border-teal-200 py-2.5 px-4 rounded-xl transition-colors cursor-pointer"
              >
                <span>Book Appointment Online</span>
                <ArrowRight className="w-4 h-4" />
              </button>
            </div>
          </div>

          {/* Right Visible Map Column */}
          <div className="lg:col-span-7 bg-white rounded-3xl border border-teal-100 overflow-hidden shadow-sm flex flex-col min-h-[460px]">
            {/* Top Bar for Map */}
            <div className="p-3.5 sm:p-4 bg-[#0b192c] text-white flex items-center justify-between z-10 shrink-0">
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
                    <span className="inline-block px-2 py-0.5 rounded-full text-[10px] font-bold bg-teal-500/20 text-teal-300 border border-teal-400/30">
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
                  className="inline-flex items-center gap-1.5 text-xs font-bold text-white hover:text-teal-200 bg-[#00897b] hover:bg-[#00796b] px-3.5 py-2 rounded-xl shadow-xs transition-colors"
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
                      background="#00897b"
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
                          <MapPin className="w-3.5 h-3.5 text-[#00897b]" />
                          <span>Dr. Vaish&apos;s Dental &amp; Physiotherapy Clinic</span>
                        </div>
                      }
                    >
                      <div className="p-1 max-w-[260px] text-slate-800">
                        <p className="text-xs font-bold text-slate-900 leading-snug">
                          Dr. Vaish&apos;s Dental and physiotherapy clinic
                        </p>
                        <p className="text-[11px] text-slate-600 mt-1 leading-normal">
                          Sato Imli Bazar, Bazaria, Chandpur, Uttar Pradesh 246725
                        </p>
                        <div className="mt-2.5 pt-2 border-t border-slate-200 flex items-center justify-between gap-2">
                          <span className="text-[10px] font-mono text-[#00796b] font-bold bg-teal-50 px-2 py-0.5 rounded-full border border-teal-200">
                            47Q7+CWQ
                          </span>
                          <a
                            href={directionsUrl}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="inline-flex items-center gap-1 text-[11px] font-bold text-[#00897b] hover:text-[#00796b]"
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
              <div className="absolute bottom-3 left-3 z-10 bg-white/95 backdrop-blur-sm px-3.5 py-2 rounded-xl shadow-md border border-teal-100 flex items-center gap-2.5 text-xs">
                <div className="w-2.5 h-2.5 rounded-full bg-emerald-500 animate-pulse" />
                <span className="text-slate-700 font-medium">
                  29°08&apos;19.1&quot;N 78°15&apos;55.3&quot;E
                </span>
                <span className="text-slate-300">|</span>
                <a
                  href={directionsUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="font-bold text-[#00897b] hover:text-[#00796b] inline-flex items-center gap-1"
                >
                  <Navigation className="w-3 h-3" />
                  <span>Navigate</span>
                </a>
              </div>
            </div>

            {/* Bottom Footer Information Bar */}
            <div className="p-3 bg-slate-50 border-t border-slate-200 text-xs text-slate-600 flex flex-wrap items-center justify-between gap-2">
              <div className="flex items-center gap-2">
                <MapPin className="w-3.5 h-3.5 text-[#00897b] shrink-0" />
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
                  className="text-[#00897b] font-semibold hover:underline inline-flex items-center gap-1"
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
