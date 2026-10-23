import React, { useState } from 'react';
import { GalleryItem } from '../types/clinic';
import { GALLERY_ITEMS } from '../data/clinicData';
import { X, ChevronLeft, ChevronRight, Eye, ShieldCheck } from 'lucide-react';

interface GalleryModalProps {
  isOpen: boolean;
  selectedItem: GalleryItem | null;
  onClose: () => void;
  onSelect: (item: GalleryItem) => void;
}

export const GalleryModal: React.FC<GalleryModalProps> = ({
  isOpen,
  selectedItem,
  onClose,
  onSelect,
}) => {
  const [imgError, setImgError] = useState(false);

  // Close on Escape key press and prevent background scrolling when open
  React.useEffect(() => {
    if (!isOpen) return;
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        onClose();
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    const originalOverflow = document.body.style.overflow;
    document.body.style.overflow = 'hidden';

    return () => {
      window.removeEventListener('keydown', handleKeyDown);
      document.body.style.overflow = originalOverflow;
    };
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  const currentItem = selectedItem || GALLERY_ITEMS[0];
  const currentIndex = GALLERY_ITEMS.findIndex((item) => item.id === currentItem.id);

  const handlePrev = () => {
    setImgError(false);
    const prevIndex = (currentIndex - 1 + GALLERY_ITEMS.length) % GALLERY_ITEMS.length;
    onSelect(GALLERY_ITEMS[prevIndex]);
  };

  const handleNext = () => {
    setImgError(false);
    const nextIndex = (currentIndex + 1) % GALLERY_ITEMS.length;
    onSelect(GALLERY_ITEMS[nextIndex]);
  };

  return (
    <div
      role="dialog"
      aria-modal="true"
      aria-label="Photo Gallery Lightbox"
      onClick={(e) => {
        if (e.target === e.currentTarget) {
          onClose();
        }
      }}
      className="fixed inset-0 z-50 overflow-y-auto bg-slate-950/90 backdrop-blur-md flex items-center justify-center p-3 sm:p-4 select-none cursor-pointer"
    >
      <div
        onClick={(e) => e.stopPropagation()}
        className="relative max-w-4xl w-full bg-slate-900 rounded-2xl overflow-hidden border border-slate-800 shadow-2xl flex flex-col cursor-default select-text"
      >
        {/* Top bar */}
        <div className="p-3 sm:p-4 px-4 sm:px-6 bg-slate-900 border-b border-slate-800 flex items-center justify-between text-white">
          <div className="pr-3">
            <span className="text-[11px] font-semibold uppercase tracking-wider text-emerald-400">
              {currentItem.categoryLabel} ({currentIndex + 1} of {GALLERY_ITEMS.length})
            </span>
            <h4 className="text-sm sm:text-base font-bold text-white leading-tight line-clamp-1">
              {currentItem.title}
            </h4>
          </div>
          <button
            type="button"
            onClick={(e) => {
              e.preventDefault();
              e.stopPropagation();
              onClose();
            }}
            aria-label="Close photo gallery"
            className="p-2 rounded-xl bg-slate-800 hover:bg-rose-900/60 active:scale-95 text-slate-300 hover:text-white transition-all cursor-pointer border border-slate-700 shadow-md min-w-[42px] min-h-[42px] flex items-center justify-center shrink-0 touch-manipulation"
          >
            <X className="w-5 h-5 sm:w-6 sm:h-6 stroke-[2.5]" />
          </button>
        </div>

        {/* Image Showcase */}
        <div className="relative aspect-[16/10] sm:aspect-[16/9] bg-black flex items-center justify-center overflow-hidden">
          {!imgError ? (
            <img
              src={currentItem.image}
              alt={currentItem.title}
              onError={() => setImgError(true)}
              className="w-full h-full object-contain"
            />
          ) : (
            <div className="p-8 text-center max-w-lg text-white">
              <div className="w-20 h-20 rounded-full bg-emerald-950 border-2 border-emerald-400 mx-auto mb-4 flex items-center justify-center p-2 shadow-lg">
                <img
                  src="/assets/aistudio/WhatsApp_Image_2026-10-23_at_12.22.00_AM_880788dc.jpeg"
                  alt="Dr. Vaish Logo"
                  className="w-full h-full object-contain rounded-full"
                />
              </div>
              <span className="text-xs font-bold text-amber-300 uppercase tracking-widest block mb-1">
                {currentItem.categoryLabel} · Chandpur, UP
              </span>
              <h3 className="text-xl font-bold mb-2">{currentItem.title}</h3>
              <p className="text-sm text-slate-300 leading-relaxed mb-4">
                {currentItem.description}
              </p>
              <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-emerald-900/80 border border-emerald-500/40 text-xs text-emerald-200">
                <ShieldCheck className="w-4 h-4 text-emerald-400" />
                <span>Dr. Vaish&apos;s Dental and Physiotherapy Clinic</span>
              </div>
            </div>
          )}

          {/* Navigation arrows */}
          <button
            onClick={handlePrev}
            className="absolute left-4 p-2 rounded-full bg-slate-900/70 text-white hover:bg-slate-800 transition-colors border border-slate-700/60"
            aria-label="Previous photo"
          >
            <ChevronLeft className="w-5 h-5" />
          </button>
          <button
            onClick={handleNext}
            className="absolute right-4 p-2 rounded-full bg-slate-900/70 text-white hover:bg-slate-800 transition-colors border border-slate-700/60"
            aria-label="Next photo"
          >
            <ChevronRight className="w-5 h-5" />
          </button>
        </div>

        {/* Footer info & thumbnails strip */}
        <div className="p-4 bg-slate-900 text-slate-300 border-t border-slate-800 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-xs text-slate-400 max-w-xl text-center sm:text-left">
            {currentItem.description}
          </p>

          {/* Mini thumbnails */}
          <div className="flex items-center gap-1.5 overflow-x-auto max-w-xs py-1">
            {GALLERY_ITEMS.map((item, idx) => (
              <button
                key={item.id}
                onClick={() => {
                  setImgError(false);
                  onSelect(item);
                }}
                className={`w-10 h-10 rounded-md overflow-hidden shrink-0 border-2 transition-all bg-emerald-950 flex items-center justify-center ${
                  item.id === currentItem.id
                    ? 'border-emerald-400 scale-105'
                    : 'border-transparent opacity-60 hover:opacity-100'
                }`}
              >
                <img
                  src={item.image}
                  alt={item.title}
                  onError={(e) => {
                    // Fallback to logo on thumbnail failure
                    (e.target as HTMLElement).style.display = 'none';
                  }}
                  className="w-full h-full object-cover"
                />
                <span className="text-[10px] font-bold text-emerald-300">#{idx + 1}</span>
              </button>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};
