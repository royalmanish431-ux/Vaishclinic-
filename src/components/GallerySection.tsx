import React, { useState } from 'react';
import { GALLERY_ITEMS } from '../data/clinicData';
import { GalleryItem } from '../types/clinic';
import { ArrowRight, Eye, Sparkles, Smile, ShieldCheck, Stethoscope } from 'lucide-react';

interface GallerySectionProps {
  onOpenLightbox: (item: GalleryItem) => void;
  onOpenFullGalleryModal: () => void;
}

export const GallerySection: React.FC<GallerySectionProps> = ({
  onOpenLightbox,
  onOpenFullGalleryModal,
}) => {
  const [activeCategory, setActiveCategory] = useState<string>('all');
  const [imageErrorMap, setImageErrorMap] = useState<Record<string, boolean>>({});

  const handleImageError = (id: string) => {
    setImageErrorMap((prev) => ({ ...prev, [id]: true }));
  };

  const filteredItems =
    activeCategory === 'all'
      ? GALLERY_ITEMS
      : GALLERY_ITEMS.filter((item) => item.category === activeCategory);

  const categories = [
    { id: 'all', label: `All Photos (${GALLERY_ITEMS.length})` },
    { id: 'clinic', label: 'Consultations & Care' },
    { id: 'dental', label: 'Dental Operatory & Kids' },
  ];

  return (
    <section id="gallery" className="py-20 lg:py-24 bg-white border-b border-slate-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-10">
          <span className="text-xs font-bold uppercase tracking-wider text-emerald-700 block mb-2">
            PHOTO GALLERY
          </span>
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-slate-900 tracking-tight">
            Moments from Dr. Vaish&apos;s Clinic
          </h2>
          <p className="mt-3 text-slate-600 text-sm sm:text-base">
            Real snapshots of smiling patients, pediatric care, modern dental operatory, and oral health campaigns in Chandpur.
          </p>
        </div>

        {/* Category Filters */}
        <div className="flex items-center justify-center gap-2 flex-wrap mb-10">
          {categories.map((cat) => (
            <button
              key={cat.id}
              onClick={() => setActiveCategory(cat.id)}
              className={`px-4 py-2 rounded-lg text-xs font-semibold transition-all ${
                activeCategory === cat.id
                  ? 'bg-emerald-700 text-white shadow-sm'
                  : 'bg-slate-100 text-slate-600 hover:bg-slate-200'
              }`}
            >
              {cat.label}
            </button>
          ))}
        </div>

        {/* Gallery Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 sm:gap-6 mb-12">
          {filteredItems.map((item, index) => {
            const hasError = imageErrorMap[item.id];

            return (
              <div
                key={item.id}
                onClick={() => onOpenLightbox(item)}
                className="group relative rounded-2xl overflow-hidden bg-slate-50 border border-slate-200 cursor-pointer shadow-sm hover:shadow-lg transition-all duration-300 flex flex-col justify-between"
              >
                {/* Image or Resilient Fallback Container */}
                <div className="relative aspect-[4/3] bg-gradient-to-br from-emerald-950 via-teal-900 to-slate-900 overflow-hidden flex items-center justify-center">
                  {!hasError ? (
                    <img
                      src={item.image}
                      alt={item.title}
                      onError={() => handleImageError(item.id)}
                      className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-500"
                      loading="lazy"
                    />
                  ) : (
                    /* High-Fidelity Branded Fallback Visual */
                    <div className="absolute inset-0 p-5 flex flex-col justify-between text-white">
                      <div className="flex items-center justify-between">
                        <span className="text-[10px] font-bold uppercase tracking-wider px-2 py-0.5 rounded bg-emerald-500/20 text-emerald-300 border border-emerald-400/30">
                          {item.categoryLabel}
                        </span>
                        <span className="text-xs font-mono text-emerald-200/80">#{index + 1}</span>
                      </div>

                      <div className="text-center my-auto">
                        <div className="w-14 h-14 rounded-full bg-white/10 backdrop-blur-md mx-auto mb-2 flex items-center justify-center border border-white/20">
                          <img
                            src="/assets/aistudio/WhatsApp_Image_2026-10-23_at_12.22.00_AM_880788dc.jpeg"
                            alt="Logo"
                            className="w-10 h-10 rounded-full object-contain"
                          />
                        </div>
                        <h4 className="text-xs font-bold text-white line-clamp-2 leading-snug">
                          {item.title}
                        </h4>
                      </div>

                      <div className="flex items-center justify-between text-[11px] text-emerald-200/70 border-t border-white/10 pt-2">
                        <span>Go Home With Smile</span>
                        <Eye className="w-3.5 h-3.5 text-emerald-400" />
                      </div>
                    </div>
                  )}

                  {/* Hover Overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-950/90 via-slate-950/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity flex flex-col justify-end p-4 text-white">
                    <span className="text-[10px] font-bold text-amber-300 uppercase tracking-wider">
                      {item.categoryLabel}
                    </span>
                    <p className="text-xs font-bold leading-snug line-clamp-2 mt-0.5">
                      {item.title}
                    </p>
                    <div className="mt-2 flex items-center gap-1.5 text-[11px] text-emerald-200 font-semibold">
                      <Eye className="w-3.5 h-3.5" />
                      <span>Click to view full photo</span>
                    </div>
                  </div>
                </div>

                {/* Card Bottom Meta */}
                <div className="p-3.5 bg-white border-t border-slate-100 flex items-center justify-between">
                  <div className="pr-2">
                    <span className="text-[10px] font-semibold text-emerald-700 block">
                      {item.categoryLabel}
                    </span>
                    <h4 className="text-xs font-bold text-slate-800 line-clamp-1">
                      {item.title}
                    </h4>
                  </div>
                  <span className="text-xs font-bold text-emerald-700 shrink-0">
                    →
                  </span>
                </div>
              </div>
            );
          })}
        </div>

        {/* View full gallery action link */}
        <div className="text-center">
          <button
            onClick={onOpenFullGalleryModal}
            className="group inline-flex items-center gap-2 bg-emerald-50 hover:bg-emerald-100 text-emerald-800 text-xs sm:text-sm font-bold px-6 py-3 rounded-xl border border-emerald-200 transition-all shadow-sm"
          >
            <span>View All Clinic Photos in Fullscreen</span>
            <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
          </button>
        </div>
      </div>
    </section>
  );
};
