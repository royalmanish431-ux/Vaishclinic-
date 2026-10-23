import React, { useState } from 'react';
import { Star, MessageSquareQuote, CheckCircle2, ChevronDown, ChevronUp, ExternalLink, MapPin } from 'lucide-react';
import { TESTIMONIALS, CLINIC_INFO } from '../data/clinicData';

// Distinct colors for reviewer avatars like Google Maps
const AVATAR_COLORS: Record<string, { bg: string; text: string }> = {
  'Deepesh Gupta n': { bg: 'bg-emerald-600', text: 'text-white' },
  'Ishika Agarwal': { bg: 'bg-rose-600', text: 'text-white' },
  'Sanskriti Jindal': { bg: 'bg-purple-600', text: 'text-white' },
  'Akshi Mittal': { bg: 'bg-amber-600', text: 'text-white' },
  'Banti Upadhyay': { bg: 'bg-teal-700', text: 'text-white' },
};

export const Testimonials: React.FC = () => {
  const [showAll, setShowAll] = useState(false);
  const [expandedReplies, setExpandedReplies] = useState<Record<string, boolean>>({
    'review-deepesh-gupta': true, // Show first reply by default
  });

  const toggleReply = (id: string) => {
    setExpandedReplies((prev) => ({
      ...prev,
      [id]: !prev[id],
    }));
  };

  const displayedReviews = showAll ? TESTIMONIALS : TESTIMONIALS.slice(0, 4);

  return (
    <section id="testimonials" className="py-20 lg:py-24 bg-gradient-to-b from-slate-50 via-white to-slate-50/80 border-b border-slate-200/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12 sm:mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-teal-50 border border-teal-200/70 text-teal-800 text-xs font-bold tracking-wide uppercase mb-3">
            <CheckCircle2 className="w-3.5 h-3.5 text-teal-600" />
            <span>Verified Patient Experiences</span>
          </div>

          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-slate-900 tracking-tight">
            What Our Patients Say on Google
          </h2>

          <p className="mt-3 text-slate-600 text-sm sm:text-base leading-relaxed">
            Real feedback from patients treated by Dr. Mudit Vaish at our clinic in Sato Imli Bazar, Chandpur.
          </p>

          {/* Google Ratings summary pill */}
          <div className="mt-6 inline-flex flex-wrap items-center justify-center gap-3 sm:gap-6 bg-white px-5 py-3 rounded-2xl border border-slate-200/90 shadow-sm">
            <div className="flex items-center gap-2">
              {/* Google G logo */}
              <svg className="w-5 h-5" viewBox="0 0 24 24">
                <path
                  fill="#4285F4"
                  d="M23.745 12.27c0-.7-.06-1.4-.19-2.07H12v4.51h6.6c-.29 1.52-1.14 2.82-2.4 3.68v3.05h3.88c2.27-2.09 3.66-5.17 3.66-9.17z"
                />
                <path
                  fill="#34A853"
                  d="M12 24c3.24 0 5.95-1.08 7.93-2.91l-3.88-3.05c-1.08.72-2.45 1.16-4.05 1.16-3.12 0-5.77-2.1-6.72-4.93H1.25v3.15C3.26 21.36 7.35 24 12 24z"
                />
                <path
                  fill="#FBBC05"
                  d="M5.28 14.27c-.25-.72-.38-1.49-.38-2.27s.13-1.55.38-2.27V6.58H1.25C.45 8.18 0 9.99 0 12s.45 3.82 1.25 5.42l4.03-3.15z"
                />
                <path
                  fill="#EA4335"
                  d="M12 4.75c1.77 0 3.35.61 4.6 1.8l3.42-3.42C17.95 1.19 15.24 0 12 0 7.35 0 3.26 2.64 1.25 6.58l4.03 3.15c.95-2.83 3.6-4.98 6.72-4.98z"
                />
              </svg>
              <span className="text-base font-bold text-slate-900">5.0</span>
              <div className="flex text-amber-400">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-4 h-4 fill-current text-amber-400" />
                ))}
              </div>
            </div>
            <div className="h-4 w-px bg-slate-200 hidden sm:block" />
            <div className="text-xs sm:text-sm text-slate-600 flex items-center gap-1.5">
              <MapPin className="w-3.5 h-3.5 text-teal-600" />
              <span>Chandpur, Uttar Pradesh</span>
            </div>
            <div className="h-4 w-px bg-slate-200 hidden sm:block" />
            <a
              href={CLINIC_INFO.googleMapsUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="text-xs font-semibold text-teal-700 hover:text-teal-800 hover:underline inline-flex items-center gap-1"
            >
              <span>View on Google Maps</span>
              <ExternalLink className="w-3 h-3" />
            </a>
          </div>
        </div>

        {/* Testimonial Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8 max-w-6xl mx-auto mb-10">
          {displayedReviews.map((item) => {
            const avatar = AVATAR_COLORS[item.author] || { bg: 'bg-teal-700', text: 'text-white' };
            const initial = item.author.charAt(0).toUpperCase();
            const isReplyOpen = !!expandedReplies[item.id];

            return (
              <div
                key={item.id}
                className="bg-white rounded-2xl border border-slate-200/90 p-6 sm:p-7 flex flex-col justify-between shadow-sm hover:shadow-md transition-all duration-200 hover:border-teal-200"
              >
                <div>
                  {/* Top card bar: Author avatar, name, reviews count, Google badge */}
                  <div className="flex items-start justify-between gap-3 mb-4">
                    <div className="flex items-center gap-3">
                      <div
                        className={`w-11 h-11 rounded-full flex items-center justify-center font-bold text-base shadow-inner ${avatar.bg} ${avatar.text}`}
                      >
                        {initial}
                      </div>
                      <div>
                        <div className="flex items-center gap-1.5 flex-wrap">
                          <h4 className="text-sm sm:text-base font-bold text-slate-900 leading-tight">
                            {item.author}
                          </h4>
                        </div>
                        <p className="text-xs text-slate-500 mt-0.5">
                          {item.reviewsCount} &bull; {item.date}
                        </p>
                      </div>
                    </div>

                    {/* Google G small badge */}
                    <div className="flex items-center gap-1 bg-slate-50 border border-slate-200/70 px-2 py-1 rounded-lg">
                      <svg className="w-3.5 h-3.5 shrink-0" viewBox="0 0 24 24">
                        <path
                          fill="#4285F4"
                          d="M23.745 12.27c0-.7-.06-1.4-.19-2.07H12v4.51h6.6c-.29 1.52-1.14 2.82-2.4 3.68v3.05h3.88c2.27-2.09 3.66-5.17 3.66-9.17z"
                        />
                        <path
                          fill="#34A853"
                          d="M12 24c3.24 0 5.95-1.08 7.93-2.91l-3.88-3.05c-1.08.72-2.45 1.16-4.05 1.16-3.12 0-5.77-2.1-6.72-4.93H1.25v3.15C3.26 21.36 7.35 24 12 24z"
                        />
                        <path
                          fill="#FBBC05"
                          d="M5.28 14.27c-.25-.72-.38-1.49-.38-2.27s.13-1.55.38-2.27V6.58H1.25C.45 8.18 0 9.99 0 12s.45 3.82 1.25 5.42l4.03-3.15z"
                        />
                        <path
                          fill="#EA4335"
                          d="M12 4.75c1.77 0 3.35.61 4.6 1.8l3.42-3.42C17.95 1.19 15.24 0 12 0 7.35 0 3.26 2.64 1.25 6.58l4.03 3.15c.95-2.83 3.6-4.98 6.72-4.98z"
                        />
                      </svg>
                      <span className="text-[10px] font-semibold text-slate-600">Review</span>
                    </div>
                  </div>

                  {/* Rating stars & treatment tag */}
                  <div className="flex items-center justify-between flex-wrap gap-2 mb-3">
                    <div className="flex text-amber-400">
                      {[...Array(item.rating)].map((_, i) => (
                        <Star key={i} className="w-4 h-4 fill-current text-amber-400" />
                      ))}
                    </div>
                    {item.tag && (
                      <span className="text-[11px] font-medium text-teal-800 bg-teal-50 border border-teal-100 px-2.5 py-0.5 rounded-full">
                        {item.tag}
                      </span>
                    )}
                  </div>

                  {/* Review Text */}
                  <p className="text-slate-700 text-sm sm:text-base leading-relaxed mb-4">
                    &ldquo;{item.quote}&rdquo;
                  </p>
                </div>

                {/* Owner Response Box */}
                {item.ownerResponse && (
                  <div className="mt-2 pt-3 border-t border-slate-100">
                    <button
                      onClick={() => toggleReply(item.id)}
                      className="w-full flex items-center justify-between text-left py-1 text-xs font-semibold text-teal-800 hover:text-teal-900 transition-colors"
                    >
                      <span className="flex items-center gap-1.5">
                        <MessageSquareQuote className="w-3.5 h-3.5 text-teal-600" />
                        <span>Response from the owner</span>
                        {item.ownerResponse.date && (
                          <span className="text-slate-400 font-normal">({item.ownerResponse.date})</span>
                        )}
                      </span>
                      {isReplyOpen ? (
                        <ChevronUp className="w-3.5 h-3.5 text-slate-500" />
                      ) : (
                        <ChevronDown className="w-3.5 h-3.5 text-slate-500" />
                      )}
                    </button>

                    {isReplyOpen && (
                      <div className="mt-2 p-3 bg-slate-50 rounded-xl border border-slate-200/60 text-xs sm:text-xs leading-relaxed text-slate-600">
                        <p className="font-semibold text-slate-800 mb-1">
                          Dr. Vaish&apos;s Dental and Physiotherapy Clinic:
                        </p>
                        <p>&ldquo;{item.ownerResponse.text}&rdquo;</p>
                      </div>
                    )}
                  </div>
                )}
              </div>
            );
          })}
        </div>

        {/* Read more / Show fewer button */}
        {TESTIMONIALS.length > 4 && (
          <div className="text-center">
            <button
              onClick={() => setShowAll(!showAll)}
              className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl border border-slate-300 bg-white text-xs sm:text-sm font-semibold text-slate-800 hover:bg-slate-50 hover:border-teal-300 transition-all shadow-sm"
            >
              <span>{showAll ? 'Show fewer reviews' : `View all (${TESTIMONIALS.length}) Google reviews`}</span>
              {showAll ? <ChevronUp className="w-4 h-4" /> : <ChevronDown className="w-4 h-4" />}
            </button>
          </div>
        )}
      </div>
    </section>
  );
};
