import React, { useState } from 'react';
import { X, Calendar, Clock, CheckCircle2, Phone, MessageSquare, User, Stethoscope } from 'lucide-react';
import { CLINIC_INFO, DOCTORS, DENTAL_SERVICES, PHYSIO_SERVICES } from '../data/clinicData';
import { BookingForm } from '../types/clinic';

interface AppointmentModalProps {
  isOpen: boolean;
  onClose: () => void;
  initialSpecialty?: 'dental' | 'physiotherapy' | 'both';
  initialDoctorId?: string;
  initialServiceName?: string;
}

export const AppointmentModal: React.FC<AppointmentModalProps> = ({
  isOpen,
  onClose,
  initialSpecialty = 'dental',
  initialDoctorId,
  initialServiceName,
}) => {
  const [formData, setFormData] = useState<BookingForm>({
    patientName: '',
    phone: '',
    email: '',
    specialty: initialSpecialty,
    service: initialServiceName || '',
    doctor: initialDoctorId || 'any',
    preferredDate: new Date(Date.now() + 86400000).toISOString().split('T')[0],
    preferredTime: '10:30 AM',
    notes: '',
  });

  const [isSubmitted, setIsSubmitted] = useState(false);
  const [bookingRef, setBookingRef] = useState('');

  if (!isOpen) return null;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.patientName || !formData.phone) {
      return;
    }
    const generatedRef = 'AB-' + Math.floor(100000 + Math.random() * 900000);
    setBookingRef(generatedRef);
    setIsSubmitted(true);
  };

  const handleReset = () => {
    setIsSubmitted(false);
    onClose();
  };

  const currentServiceOptions =
    formData.specialty === 'dental'
      ? DENTAL_SERVICES
      : formData.specialty === 'physiotherapy'
      ? PHYSIO_SERVICES
      : [...DENTAL_SERVICES, ...PHYSIO_SERVICES];

  const whatsappMessage = encodeURIComponent(
    `Hello Dr. Vaish's Dental and Physiotherapy Clinic, I would like to confirm my consultation booking.\nRef: ${bookingRef}\nPatient: ${formData.patientName}\nSpecialty: ${formData.specialty}\nDate: ${formData.preferredDate}\nTime: ${formData.preferredTime}`
  );

  return (
    <div className="fixed inset-0 z-50 overflow-y-auto bg-slate-900/70 backdrop-blur-sm flex items-center justify-center p-4">
      <div className="bg-white rounded-2xl max-w-lg w-full overflow-hidden shadow-2xl border border-slate-200 transition-all">
        {/* Header */}
        <div className="bg-teal-900 text-white p-5 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <img
              src="/assets/aistudio/WhatsApp_Image_2026-10-23_at_12.22.00_AM_880788dc.jpeg"
              alt="Dr. Vaish's Clinic"
              className="w-10 h-10 rounded-full object-contain bg-white p-0.5 border border-emerald-300"
            />
            <div>
              <h3 className="text-base sm:text-lg font-bold leading-tight">
                {isSubmitted ? 'Appointment Requested' : 'Book a Consultation Slot'}
              </h3>
              <p className="text-xs text-teal-200 mt-0.5">
                Dr. Vaish&apos;s Dental & Physiotherapy Clinic · Chandpur, UP
              </p>
            </div>
          </div>
          <button
            onClick={onClose}
            className="p-1 rounded-lg text-teal-200 hover:text-white hover:bg-teal-800 transition-colors"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Content */}
        <div className="p-6">
          {isSubmitted ? (
            <div className="text-center py-4 space-y-4">
              <div className="w-14 h-14 rounded-full bg-teal-100 text-teal-700 mx-auto flex items-center justify-center">
                <CheckCircle2 className="w-8 h-8" />
              </div>

              <div>
                <h4 className="text-xl font-bold text-slate-900">Slot Request Received!</h4>
                <p className="text-xs text-slate-500 mt-1">
                  Our clinic reception team will call you within 30 minutes to confirm your scheduled time.
                </p>
              </div>

              {/* Reference Card */}
              <div className="bg-slate-50 border border-slate-200 rounded-xl p-4 text-left text-xs space-y-2">
                <div className="flex justify-between border-b border-slate-200 pb-2">
                  <span className="text-slate-500">Booking Reference:</span>
                  <span className="font-mono font-bold text-teal-800">{bookingRef}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-slate-500">Patient:</span>
                  <span className="font-semibold text-slate-900">{formData.patientName}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-slate-500">Specialty:</span>
                  <span className="capitalize font-semibold text-slate-900">{formData.specialty}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-slate-500">Requested Date & Time:</span>
                  <span className="font-semibold text-slate-900">
                    {formData.preferredDate} at {formData.preferredTime}
                  </span>
                </div>
                <div className="flex justify-between pt-2 border-t border-slate-200">
                  <span className="text-slate-500">Clinic Address:</span>
                  <span className="text-slate-700 text-[11px] text-right font-medium max-w-[200px]">
                    {CLINIC_INFO.address}
                  </span>
                </div>
              </div>

              {/* Fast WhatsApp confirmation or Call */}
              <div className="flex flex-col gap-2 pt-2">
                <a
                  href={`https://wa.me/919837912402?text=${whatsappMessage}`}
                  target="_blank"
                  rel="noreferrer"
                  className="w-full inline-flex items-center justify-center gap-2 bg-emerald-600 hover:bg-emerald-700 text-white font-semibold text-xs py-2.5 rounded-lg transition-colors"
                >
                  <MessageSquare className="w-4 h-4" />
                  <span>Confirm on WhatsApp ({CLINIC_INFO.mobile})</span>
                </a>
                <button
                  onClick={handleReset}
                  className="w-full py-2 text-xs font-semibold text-slate-600 hover:text-slate-900 border border-slate-200 rounded-lg"
                >
                  Close Window
                </button>
              </div>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-4">
              {/* Specialty Selection */}
              <div>
                <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-1.5">
                  Choose Department
                </label>
                <div className="grid grid-cols-3 gap-2">
                  {[
                    { id: 'dental', label: 'Dental Care' },
                    { id: 'physiotherapy', label: 'Physiotherapy' },
                    { id: 'both', label: 'Both' },
                  ].map((dept) => (
                    <button
                      type="button"
                      key={dept.id}
                      onClick={() =>
                        setFormData({
                          ...formData,
                          specialty: dept.id as any,
                          service: '',
                        })
                      }
                      className={`py-2 px-2 rounded-lg text-xs font-semibold text-center transition-all ${
                        formData.specialty === dept.id
                          ? 'bg-teal-700 text-white shadow-sm'
                          : 'bg-slate-100 text-slate-700 hover:bg-slate-200'
                      }`}
                    >
                      {dept.label}
                    </button>
                  ))}
                </div>
              </div>

              {/* Doctor / Specialist */}
              <div>
                <label className="block text-xs font-semibold text-slate-700 mb-1">
                  Preferred Practitioner
                </label>
                <select
                  value={formData.doctor}
                  onChange={(e) => setFormData({ ...formData, doctor: e.target.value })}
                  className="w-full border border-slate-300 rounded-lg px-3 py-2 text-xs text-slate-800 bg-white focus:outline-none focus:ring-2 focus:ring-teal-600"
                >
                  <option value="any">Any Available Specialist</option>
                  <option value="dr-keerthi">Dr. Keerthi Prathi (Dental Surgeon, 15+ Yrs Exp)</option>
                  <option value="dr-badrinath">Dr. Badrinath Prathi, PT (Sports Physiotherapist, ICC Coordinator)</option>
                </select>
              </div>

              {/* Service Selection */}
              <div>
                <label className="block text-xs font-semibold text-slate-700 mb-1">
                  Specific Treatment / Concern
                </label>
                <select
                  value={formData.service}
                  onChange={(e) => setFormData({ ...formData, service: e.target.value })}
                  className="w-full border border-slate-300 rounded-lg px-3 py-2 text-xs text-slate-800 bg-white focus:outline-none focus:ring-2 focus:ring-teal-600"
                >
                  <option value="">General Consultation / Assessment</option>
                  {currentServiceOptions.map((s) => (
                    <option key={s.id} value={s.name}>
                      {s.name}
                    </option>
                  ))}
                </select>
              </div>

              {/* Patient Name & Phone */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                <div>
                  <label className="block text-xs font-semibold text-slate-700 mb-1">
                    Patient Name *
                  </label>
                  <input
                    type="text"
                    required
                    placeholder="Full name"
                    value={formData.patientName}
                    onChange={(e) => setFormData({ ...formData, patientName: e.target.value })}
                    className="w-full border border-slate-300 rounded-lg px-3 py-2 text-xs text-slate-800 focus:outline-none focus:ring-2 focus:ring-teal-600"
                  />
                </div>
                <div>
                  <label className="block text-xs font-semibold text-slate-700 mb-1">
                    Phone / Mobile *
                  </label>
                  <input
                    type="tel"
                    required
                    placeholder="+91 98..."
                    value={formData.phone}
                    onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                    className="w-full border border-slate-300 rounded-lg px-3 py-2 text-xs text-slate-800 focus:outline-none focus:ring-2 focus:ring-teal-600"
                  />
                </div>
              </div>

              {/* Preferred Date & Time */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                <div>
                  <label className="block text-xs font-semibold text-slate-700 mb-1">
                    Preferred Date
                  </label>
                  <input
                    type="date"
                    value={formData.preferredDate}
                    onChange={(e) => setFormData({ ...formData, preferredDate: e.target.value })}
                    className="w-full border border-slate-300 rounded-lg px-3 py-2 text-xs text-slate-800 focus:outline-none focus:ring-2 focus:ring-teal-600"
                  />
                </div>
                <div>
                  <label className="block text-xs font-semibold text-slate-700 mb-1">
                    Preferred Time Slot
                  </label>
                  <select
                    value={formData.preferredTime}
                    onChange={(e) => setFormData({ ...formData, preferredTime: e.target.value })}
                    className="w-full border border-slate-300 rounded-lg px-3 py-2 text-xs text-slate-800 bg-white focus:outline-none focus:ring-2 focus:ring-teal-600"
                  >
                    <option value="10:00 AM">10:00 AM (Morning)</option>
                    <option value="11:30 AM">11:30 AM (Morning)</option>
                    <option value="12:30 PM">12:30 PM (Morning)</option>
                    <option value="05:30 PM">05:30 PM (Evening)</option>
                    <option value="06:30 PM">06:30 PM (Evening)</option>
                    <option value="07:30 PM">07:30 PM (Evening)</option>
                  </select>
                </div>
              </div>

              {/* Notes */}
              <div>
                <label className="block text-xs font-semibold text-slate-700 mb-1">
                  Brief Symptoms or Queries (Optional)
                </label>
                <textarea
                  rows={2}
                  placeholder="e.g. Toothache since 2 days, or knee pain after running..."
                  value={formData.notes}
                  onChange={(e) => setFormData({ ...formData, notes: e.target.value })}
                  className="w-full border border-slate-300 rounded-lg px-3 py-2 text-xs text-slate-800 focus:outline-none focus:ring-2 focus:ring-teal-600"
                />
              </div>

              {/* Submit Button */}
              <div className="pt-2">
                <button
                  type="submit"
                  className="w-full py-3 bg-teal-700 hover:bg-teal-800 active:scale-98 text-white font-bold text-xs uppercase tracking-wider rounded-lg shadow-md transition-all flex items-center justify-center gap-2"
                >
                  <Calendar className="w-4 h-4" />
                  <span>Request Consultation Slot</span>
                </button>
                <p className="text-[11px] text-center text-slate-500 mt-2">
                  Or call directly at <a href={`tel:${CLINIC_INFO.mobileRaw}`} className="font-semibold text-teal-700 hover:underline">{CLINIC_INFO.mobile}</a>
                </p>
              </div>
            </form>
          )}
        </div>
      </div>
    </div>
  );
};
