import React from 'react';
import { Doctor } from '../types/clinic';
import { X, Award, CheckCircle2, GraduationCap, Building2, Calendar } from 'lucide-react';
import { DoctorAvatar } from './DoctorAvatar';

interface DoctorModalProps {
  doctor: Doctor | null;
  onClose: () => void;
  onBook: (doctorId: string) => void;
}

export const DoctorModal: React.FC<DoctorModalProps> = ({
  doctor,
  onClose,
  onBook,
}) => {
  if (!doctor) return null;

  return (
    <div className="fixed inset-0 z-50 overflow-y-auto bg-slate-900/70 backdrop-blur-sm flex items-center justify-center p-4">
      <div className="bg-white rounded-3xl max-w-2xl w-full overflow-hidden shadow-2xl border border-teal-100 transition-all">
        {/* Modal Header */}
        <div className="relative bg-[#0b192c] text-white p-6 sm:p-8 border-b border-teal-900/60">
          <button
            onClick={onClose}
            className="absolute top-4 right-4 p-1.5 rounded-xl text-teal-200 hover:text-white hover:bg-slate-800 transition-colors"
          >
            <X className="w-5 h-5" />
          </button>

          <div className="flex flex-col sm:flex-row items-center sm:items-start gap-5">
            <DoctorAvatar doctor={doctor} size="lg" allowUpload={true} dark={true} />
            <div className="text-center sm:text-left">
              <div className="flex items-center gap-2 justify-center sm:justify-start flex-wrap mb-2">
                <span className="inline-block px-3 py-1 rounded-full text-xs font-bold bg-teal-950 text-teal-300 border border-teal-500/40">
                  {doctor.badge} Specialist
                </span>
                <span className="inline-block px-2.5 py-0.5 rounded-full text-xs font-extrabold bg-[#00897b] text-white">
                  {doctor.badge === 'Dental' ? 'B.D.S.' : 'B.P.T.'}
                </span>
              </div>
              <h3 className="text-2xl font-black tracking-tight">{doctor.name}</h3>
              <p className="text-xs text-teal-300 font-semibold mt-0.5">
                {doctor.badge === 'Dental' ? 'डॉ. मुदित वैश्य (बी.डी.एस.)' : 'डॉ. श्रीमती मनी वैश्य (बी.पी.टी.)'}
              </p>
              <p className="text-sm font-medium text-slate-300 mt-1">{doctor.role}</p>
              {doctor.specialty && (
                <p className="text-xs text-teal-100/90 mt-1 max-w-md">
                  {doctor.specialty}
                </p>
              )}
            </div>
          </div>
        </div>

        {/* Modal Body */}
        <div className="p-6 sm:p-8 space-y-6 max-h-[70vh] overflow-y-auto">
          {/* Key Distinction Pill */}
          <div className="p-3.5 rounded-2xl bg-teal-50 border border-teal-200 text-teal-950 flex items-center gap-3">
            <Award className="w-5 h-5 text-[#00897b] shrink-0" />
            <span className="text-xs sm:text-sm font-bold">{doctor.highlight}</span>
          </div>

          {/* Biography */}
          <div>
            <h4 className="text-xs font-bold uppercase tracking-wider text-slate-500 mb-2">
              Clinical Background
            </h4>
            <p className="text-sm text-slate-700 leading-relaxed font-normal">
              {doctor.bio}
            </p>
          </div>

          {/* Academic Qualifications */}
          <div>
            <h4 className="text-xs font-bold uppercase tracking-wider text-slate-500 mb-2.5 flex items-center gap-1.5">
              <GraduationCap className="w-4 h-4 text-[#00897b]" />
              <span>Qualifications &amp; Accreditations</span>
            </h4>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
              {doctor.qualifications.map((q, idx) => (
                <div
                  key={idx}
                  className="p-2.5 rounded-xl bg-teal-50/50 border border-teal-100 text-xs text-slate-700 font-semibold"
                >
                  {q}
                </div>
              ))}
            </div>
          </div>

          {/* Clinical Achievements */}
          <div>
            <h4 className="text-xs font-bold uppercase tracking-wider text-slate-500 mb-2.5 flex items-center gap-1.5">
              <CheckCircle2 className="w-4 h-4 text-[#00897b]" />
              <span>Key Career Milestones &amp; Experience</span>
            </h4>
            <ul className="space-y-2">
              {doctor.achievements.map((ach, idx) => (
                <li key={idx} className="flex items-start gap-2.5 text-xs text-slate-600">
                  <span className="text-[#00897b] font-bold">•</span>
                  <span>{ach}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Professional Memberships */}
          {doctor.memberships && doctor.memberships.length > 0 && (
            <div>
              <h4 className="text-xs font-bold uppercase tracking-wider text-slate-500 mb-2 flex items-center gap-1.5">
                <Building2 className="w-4 h-4 text-[#00897b]" />
                <span>Professional Council Memberships</span>
              </h4>
              <div className="flex flex-wrap gap-2">
                {doctor.memberships.map((m, idx) => (
                  <span
                    key={idx}
                    className="text-xs font-semibold text-teal-900 bg-teal-50 px-3 py-1 rounded-full border border-teal-200"
                  >
                    {m}
                  </span>
                ))}
              </div>
            </div>
          )}
        </div>

        {/* Modal Footer */}
        <div className="bg-slate-50 px-6 py-4 border-t border-slate-200 flex items-center justify-between">
          <button
            onClick={onClose}
            className="text-xs font-bold text-slate-600 hover:text-slate-900"
          >
            Back to Overview
          </button>
          <button
            onClick={() => {
              onClose();
              onBook(doctor.id);
            }}
            className="inline-flex items-center gap-2 bg-[#00897b] hover:bg-[#00796b] text-white text-xs font-bold px-5 py-2.5 rounded-xl shadow-md shadow-teal-700/20 transition-all cursor-pointer"
          >
            <Calendar className="w-4 h-4" />
            <span>Book with {doctor.name}</span>
          </button>
        </div>
      </div>
    </div>
  );
};
