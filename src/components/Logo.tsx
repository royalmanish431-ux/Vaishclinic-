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
      {/* Official Business Logo Emblem */}
      <div className="relative w-12 h-12 md:w-14 md:h-14 shrink-0 rounded-full overflow-hidden bg-white shadow-sm border border-emerald-300/60 flex items-center justify-center p-0.5">
        <img
          src="/assets/aistudio/WhatsApp_Image_2026-10-23_at_12.22.00_AM_880788dc.jpeg"
          alt="Dr. Vaish's Dental and Physiotherapy Clinic Logo"
          className="w-full h-full object-contain rounded-full"
        />
      </div>

      {/* Brand Text Block */}
      <div className="flex flex-col leading-none">
        <div className="flex items-baseline tracking-tight">
          <span className="text-xl md:text-2xl font-extrabold text-emerald-600">
            Dr. Vaish&apos;s
          </span>
        </div>
        <span
          className={`text-[10px] md:text-[11px] font-bold tracking-wider uppercase mt-1 ${
            isDark ? 'text-amber-300' : 'text-emerald-800'
          }`}
        >
          DENTAL & PHYSIOTHERAPY CLINIC
        </span>
        {showSubtitle && (
          <span
            className={`text-[9px] md:text-[10px] font-semibold tracking-tight mt-0.5 hidden sm:inline-block ${
              isDark ? 'text-emerald-200/80' : 'text-amber-700'
            }`}
          >
            ★ GO HOME WITH SMILE ★
          </span>
        )}
      </div>
    </div>
  );
};
