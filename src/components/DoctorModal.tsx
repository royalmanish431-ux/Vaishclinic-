import React from 'react';
import { Doctor } from '../types/clinic';
import { X, Award, CheckCircle2, GraduationCap, Building2, Calendar } from 'lucide-react';

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
      <div className="bg-white rounded-2xl max-w-2xl w-full overflow-hidden shadow-2xl border border-slate-200 transition-all">
        {/* Modal Header */}
        <div className="relative bg-teal-900 text-white p-6 sm:p-8">
          <button
            onClick={onClose}
            className="absolute top-4 right-4 p-1.5 rounded-lg text-teal-200 hover:text-white hover:bg-teal-800 transition-colors"
          >
            <X className="w-5 h-5" />
          </button>

          <div className="flex flex-col sm:flex-row items-center sm:items-start gap-5">
            <img
              src={doctor.image}
              alt={doctor.name}
              className="w-24 h-24 sm:w-28 sm:h-28 rounded-full object-cover border-4 border-teal-500/40 shadow-lg"
            />
            <div className="text-center sm:text-left">
              <span className="inline-block px-3 py-1 rounded-md text-xs font-semibold bg-teal-800/90 text-teal-200 border border-teal-500/30 mb-2">
                {doctor.badge} Specialist
              </span>
              <h3 className="text-2xl font-bold tracking-tight">{doctor.name}</h3>
              <p className="text-sm font-medium text-teal-200 mt-0.5">{doctor.role}</p>
              {doctor.specialty && (
                <p className="text-xs text-teal-100/80 mt-1 max-w-md">
                  {doctor.specialty}
                </p>
              )}
            </div>
          </div>
        </div>

        {/* Modal Body */}
        <div className="p-6 sm:p-8 space-y-6 max-h-[70vh] overflow-y-auto">
          {/* Key Distinction Pill */}
          <div className="p-3.5 rounded-xl bg-teal-50 border border-teal-200 text-teal-900 flex items-center gap-3">
            <Award className="w-5 h-5 text-teal-700 shrink-0" />
            <span className="text-xs sm:text-sm font-semibold">{doctor.highlight}</span>
          </div>

          {/* Biography */}
          <div>
            <h4 className="text-xs font-bold uppercase tracking-wider text-slate-500 mb-2">
              Clinical Background
            </h4>
            <p className="text-sm text-slate-700 leading-relaxed">
              {doctor.bio}
            </p>
          </div>

          {/* Academic Qualifications */}
          <div>
            <h4 className="text-xs font-bold uppercase tracking-wider text-slate-500 mb-2.5 flex items-center gap-1.5">
              <GraduationCap className="w-4 h-4 text-teal-700" />
              <span>Qualifications & Accreditations</span>
            </h4>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
              {doctor.qualifications.map((q, idx) => (
                <div
                  key={idx}
                  className="p-2.5 rounded-lg bg-slate-50 border border-slate-200/70 text-xs text-slate-700 font-medium"
                >
                  {q}
                </div>
              ))}
            </div>
          </div>

          {/* Clinical Achievements */}
          <div>
            <h4 className="text-xs font-bold uppercase tracking-wider text-slate-500 mb-2.5 flex items-center gap-1.5">
              <CheckCircle2 className="w-4 h-4 text-teal-700" />
              <span>Key Career Milestones & Experience</span>
            </h4>
            <ul className="space-y-2">
              {doctor.achievements.map((ach, idx) => (
                <li key={idx} className="flex items-start gap-2.5 text-xs text-slate-600">
                  <span className="text-teal-600 font-bold">•</span>
                  <span>{ach}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Professional Memberships */}
          {doctor.memberships && doctor.memberships.length > 0 && (
            <div>
              <h4 className="text-xs font-bold uppercase tracking-wider text-slate-500 mb-2 flex items-center gap-1.5">
                <Building2 className="w-4 h-4 text-teal-700" />
                <span>Professional Council Memberships</span>
              </h4>
              <div className="flex flex-wrap gap-2">
                {doctor.memberships.map((m, idx) => (
                  <span
                    key={idx}
                    className="text-xs font-medium text-slate-700 bg-slate-100 px-3 py-1 rounded-md"
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
            className="text-xs font-semibold text-slate-600 hover:text-slate-900"
          >
            Back to Overview
          </button>
          <button
            onClick={() => {
              onClose();
              onBook(doctor.id);
            }}
            className="inline-flex items-center gap-2 bg-teal-700 hover:bg-teal-800 text-white text-xs font-bold px-5 py-2.5 rounded-lg shadow-sm transition-colors"
          >
            <Calendar className="w-4 h-4" />
            <span>Book with {doctor.name.split(' ')[1]}</span>
          </button>
        </div>
      </div>
    </div>
  );
};
