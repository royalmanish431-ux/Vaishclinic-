import React, { useRef } from 'react';
import { Doctor } from '../types/clinic';
import { useDoctorPhoto, saveCustomPhoto, removeCustomPhoto } from '../utils/photoStorage';
import { Camera, Stethoscope, Upload, X } from 'lucide-react';

interface DoctorAvatarProps {
  doctor: Doctor;
  size?: 'sm' | 'md' | 'lg';
  allowUpload?: boolean;
  className?: string;
  dark?: boolean;
}

export const DoctorAvatar: React.FC<DoctorAvatarProps> = ({
  doctor,
  size = 'md',
  allowUpload = false,
  className = '',
  dark = false,
}) => {
  const photo = useDoctorPhoto(doctor.id, doctor.image);
  const fileInputRef = useRef<HTMLInputElement | null>(null);

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (!file) return;

    const reader = new FileReader();
    reader.onload = (event) => {
      const img = new Image();
      img.onload = () => {
        const canvas = document.createElement('canvas');
        const MAX_SIZE = 480;
        let width = img.width;
        let height = img.height;

        if (width > height) {
          if (width > MAX_SIZE) {
            height = Math.round((height * MAX_SIZE) / width);
            width = MAX_SIZE;
          }
        } else {
          if (height > MAX_SIZE) {
            width = Math.round((width * MAX_SIZE) / height);
            height = MAX_SIZE;
          }
        }

        canvas.width = width;
        canvas.height = height;
        const ctx = canvas.getContext('2d');
        if (ctx) {
          ctx.drawImage(img, 0, 0, width, height);
          const dataUrl = canvas.toDataURL('image/jpeg', 0.88);
          saveCustomPhoto(doctor.id, dataUrl);
        }
      };
      img.src = event.target?.result as string;
    };
    reader.readAsDataURL(file);
    e.target.value = ''; // Reset input
  };

  const handleRemove = (e: React.MouseEvent) => {
    e.stopPropagation();
    e.preventDefault();
    removeCustomPhoto(doctor.id);
  };

  const initials = doctor.name
    .replace(/^Dr\.\s*(\(Mrs\.\)\s*)?/i, '')
    .trim()
    .split(' ')
    .filter(Boolean)
    .map((n) => n[0])
    .join('')
    .slice(0, 2)
    .toUpperCase() || 'DR';

  // Sizing styles
  const sizeClasses = {
    sm: 'w-10 h-10',
    md: 'w-16 h-16 sm:w-20 sm:h-20',
    lg: 'w-24 h-24 sm:w-28 sm:h-28',
  }[size];

  return (
    <div className={`relative inline-block shrink-0 ${className}`}>
      {photo ? (
        <div className="relative group/avatar">
          <img
            src={photo}
            alt={doctor.name}
            className={`${sizeClasses} rounded-full object-cover border-2 ${
              dark ? 'border-teal-400' : 'border-[#00897b]'
            } shadow-sm`}
          />

          {allowUpload && (
            <div className="absolute -bottom-1 -right-1 flex items-center gap-1 z-10">
              <button
                type="button"
                onClick={() => fileInputRef.current?.click()}
                title="Change doctor photo / फ़ोटो बदलें"
                className="p-1 rounded-full bg-white hover:bg-teal-50 text-[#00897b] border border-teal-200 shadow-md transition-transform hover:scale-110 cursor-pointer"
              >
                <Camera className="w-3 h-3 sm:w-3.5 sm:h-3.5" />
              </button>
              <button
                type="button"
                onClick={handleRemove}
                title="Remove photo / फ़ोटो हटाएं"
                className="p-1 rounded-full bg-white hover:bg-rose-50 text-rose-600 border border-rose-200 shadow-md transition-transform hover:scale-110 cursor-pointer"
              >
                <X className="w-3 h-3 sm:w-3.5 sm:h-3.5" />
              </button>
            </div>
          )}
        </div>
      ) : (
        /* Dignified Monogram Badge when no photo is uploaded yet */
        <div className="relative group/avatar">
          <div
            onClick={() => {
              if (allowUpload) fileInputRef.current?.click();
            }}
            role={allowUpload ? 'button' : undefined}
            tabIndex={allowUpload ? 0 : undefined}
            title={allowUpload ? 'Click to upload doctor photo / डॉक्टर फ़ोटो अपलोड करने के लिए क्लिक करें' : doctor.name}
            className={`${sizeClasses} rounded-full flex flex-col items-center justify-center text-center transition-all ${
              dark
                ? 'bg-gradient-to-br from-[#0b192c] to-slate-900 border-2 border-teal-400/50 text-white'
                : 'bg-gradient-to-br from-teal-50 via-teal-100/50 to-cyan-50 border-2 border-teal-400 text-teal-950 shadow-inner'
            } ${allowUpload ? 'cursor-pointer hover:border-[#00897b] hover:shadow-md' : 'select-none'}`}
          >
            {size === 'sm' ? (
              <span className="text-xs font-black tracking-tight">{initials}</span>
            ) : size === 'md' ? (
              <>
                <Stethoscope className={`w-4 h-4 sm:w-5 sm:h-5 ${dark ? 'text-teal-300' : 'text-[#00897b]'} mb-0.5`} />
                <span className="text-xs sm:text-sm font-black tracking-tight leading-none text-slate-900">
                  {initials}
                </span>
                <span className={`text-[9px] font-bold tracking-wider uppercase mt-0.5 leading-none ${
                  dark ? 'text-teal-200/90' : 'text-[#00796b]'
                }`}>
                  {doctor.badge === 'Dental' ? 'B.D.S.' : 'B.P.T.'}
                </span>
              </>
            ) : (
              /* size === 'lg' */
              <>
                <div className="w-9 h-9 rounded-full bg-teal-100 flex items-center justify-center mb-1">
                  <Stethoscope className="w-5 h-5 text-[#00897b]" />
                </div>
                <span className="text-sm font-black tracking-wide text-slate-900">
                  {initials}
                </span>
                <span className="text-[10px] text-[#00897b] font-bold uppercase tracking-wider">
                  {doctor.badge === 'Dental' ? 'B.D.S.' : 'B.P.T.'}
                </span>
              </>
            )}
          </div>

          {allowUpload && (
            <button
              type="button"
              onClick={() => fileInputRef.current?.click()}
              title="Upload photo / फ़ोटो अपलोड करें"
              className="absolute -bottom-1 -right-1 p-1 sm:p-1.5 rounded-full bg-[#00897b] hover:bg-[#00796b] text-white border-2 border-white shadow-md transition-transform hover:scale-110 cursor-pointer flex items-center gap-0.5"
            >
              <Upload className="w-3 h-3 sm:w-3.5 sm:h-3.5" />
            </button>
          )}
        </div>
      )}

      {allowUpload && (
        <input
          ref={fileInputRef}
          type="file"
          accept="image/*"
          className="hidden"
          onChange={handleFileChange}
        />
      )}
    </div>
  );
};
