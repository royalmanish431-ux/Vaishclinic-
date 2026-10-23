import React from 'react';

interface LogoProps {
  variant?: 'light' | 'dark';
  className?: string;
  showSubtitle?: boolean;
}

export const Logo: React.FC<LogoProps> = ({
  variant = 'light',
  className = '',
  showSubtitle = true,
}) => {
  const isDark = variant === 'dark';

  return (
    <div className={`flex items-center gap-3 ${className}`}>
      {/* Official Business Logo Emblem with modern cyan-teal glow */}
      <div className="relative w-11 h-11 md:w-13 md:h-13 shrink-0 rounded-2xl overflow-hidden bg-white shadow-sm border-2 border-teal-500/40 flex items-center justify-center p-0.5 group-hover:border-teal-500 transition-colors">
        <img
          src="/assets/aistudio/WhatsApp_Image_2026-10-23_at_12.22.00_AM_880788dc.jpeg"
          alt="Dr. Vaish's Dental and Physiotherapy Clinic Logo"
          className="w-full h-full object-contain rounded-xl"
        />
      </div>

      {/* Brand Text Block */}
      <div className="flex flex-col leading-none">
        <div className="flex items-center gap-2">
          <span
            className={`text-xl md:text-2xl font-black tracking-tight ${
              isDark ? 'text-white' : 'text-slate-900'
            }`}
          >
            Dr. Vaish&apos;s
          </span>
          <span className="inline-flex items-center px-2 py-0.5 rounded-full text-[10px] font-extrabold uppercase tracking-wider bg-teal-50 text-teal-800 border border-teal-200/80">
            DENTAL &amp; PHYSIO
          </span>
        </div>

        {showSubtitle && (
          <span
            className={`text-[10px] md:text-[11px] font-bold tracking-wider mt-1 ${
              isDark ? 'text-teal-300' : 'text-[#00897b]'
            }`}
          >
            ★ GO HOME WITH SMILE ★
          </span>
        )}
      </div>
    </div>
  );
};
