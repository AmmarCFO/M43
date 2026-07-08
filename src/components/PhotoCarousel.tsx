import React, { useState } from "react";
import { ZoomIn, ChevronLeft, ChevronRight, X } from "lucide-react";

interface Photo {
  url: string;
  label?: { en: string; ar: string } | null;
}

interface PhotoCarouselProps {
  photos: string[];
  isArabic: boolean;
}

export function PhotoCarousel({ photos, isArabic }: PhotoCarouselProps) {
  const [index, setIndex] = useState(0);
  const [isOpen, setIsOpen] = useState(false);

  const formattedPhotos: Photo[] = photos.map((p) => ({
    url: p,
    label: null,
  }));

  const currentPhoto = formattedPhotos[index];
  const label = currentPhoto.label
    ? isArabic
      ? currentPhoto.label.ar
      : currentPhoto.label.en
    : null;

  const handlePrev = (e?: React.MouseEvent) => {
    if (e) e.stopPropagation();
    setIndex((v) => (v - 1 + formattedPhotos.length) % formattedPhotos.length);
  };

  const handleNext = (e?: React.MouseEvent) => {
    if (e) e.stopPropagation();
    setIndex((v) => (v + 1) % formattedPhotos.length);
  };

  return (
    <>
      <div 
        id="photo-carousel-main"
        className="relative rounded-2xl overflow-hidden border border-[#EDE5DC] shadow-lg bg-black select-none"
        style={{ aspectRatio: "16/9" }}
      >
        <img
          src={currentPhoto.url}
          alt={label || `Photo ${index + 1}`}
          className="w-full h-full object-cover transition-opacity duration-300"
        />
        
        {/* Zoom In button */}
        <button
          id="carousel-zoom-btn"
          onClick={() => setIsOpen(true)}
          className="absolute top-3 right-3 w-8 h-8 rounded-full bg-black/50 backdrop-blur-sm flex items-center justify-center text-white hover:bg-black/70 transition-colors cursor-pointer"
        >
          <ZoomIn className="w-4 h-4" />
        </button>

        {/* Prev button */}
        <button
          id="carousel-prev-btn"
          onClick={handlePrev}
          className="absolute left-2 top-1/2 -translate-y-1/2 w-8 h-8 rounded-full bg-black/50 backdrop-blur-sm flex items-center justify-center text-white hover:bg-black/70 transition-colors cursor-pointer"
        >
          <ChevronLeft className="w-4 h-4" />
        </button>

        {/* Next button */}
        <button
          id="carousel-next-btn"
          onClick={handleNext}
          className="absolute right-2 top-1/2 -translate-y-1/2 w-8 h-8 rounded-full bg-black/50 backdrop-blur-sm flex items-center justify-center text-white hover:bg-black/70 transition-colors cursor-pointer"
        >
          <ChevronRight className="w-4 h-4" />
        </button>

        {/* Bottom Bar Info */}
        <div className="absolute bottom-0 inset-x-0 bg-gradient-to-t from-black/60 to-transparent px-4 py-3 flex items-end justify-between">
          {label ? (
            <span className="text-white text-xs font-semibold drop-shadow">{label}</span>
          ) : (
            <span />
          )}
          <span className="px-2.5 py-1 rounded-full bg-black/50 backdrop-blur-sm text-white text-xs font-semibold">
            {index + 1} / {formattedPhotos.length}
          </span>
        </div>
      </div>

      {/* Thumbnails list */}
      <div 
        id="carousel-thumbnails-list"
        className="flex gap-2 overflow-x-auto pb-1 mt-2 scrollbar-hide"
      >
        {formattedPhotos.map((p, v) => (
          <button
            key={v}
            id={`carousel-thumb-${v}`}
            onClick={() => setIndex(v)}
            className={`flex-shrink-0 w-14 h-10 rounded-lg overflow-hidden border-2 transition-all cursor-pointer ${
              v === index
                ? "border-[#C89565] opacity-100"
                : "border-transparent opacity-50 hover:opacity-80"
            }`}
          >
            <img src={p.url} alt="" className="w-full h-full object-cover" />
          </button>
        ))}
      </div>

      {/* Fullscreen Lightbox */}
      {isOpen && (
        <div
          id="photo-carousel-lightbox"
          className="fixed inset-0 z-50 bg-black/95 flex items-center justify-center p-4 cursor-zoom-out"
          onClick={() => setIsOpen(false)}
        >
          <button
            id="lightbox-close-btn"
            onClick={() => setIsOpen(false)}
            className="absolute top-4 right-4 w-10 h-10 rounded-full bg-white/10 flex items-center justify-center text-white hover:bg-white/20 cursor-pointer"
          >
            <X className="w-5 h-5" />
          </button>
          
          <button
            id="lightbox-prev-btn"
            onClick={handlePrev}
            className="absolute left-4 top-1/2 -translate-y-1/2 w-10 h-10 rounded-full bg-white/10 flex items-center justify-center text-white hover:bg-white/20 cursor-pointer"
          >
            <ChevronLeft className="w-5 h-5" />
          </button>

          <img
            src={currentPhoto.url}
            alt={label || ""}
            className="max-w-full max-h-[85vh] object-contain rounded-xl shadow-2xl cursor-default"
            onClick={(e) => e.stopPropagation()}
          />

          <button
            id="lightbox-next-btn"
            onClick={handleNext}
            className="absolute right-4 top-1/2 -translate-y-1/2 w-10 h-10 rounded-full bg-white/10 flex items-center justify-center text-white hover:bg-white/20 cursor-pointer"
          >
            <ChevronRight className="w-5 h-5" />
          </button>

          <div className="absolute bottom-6 left-1/2 -translate-x-1/2 flex items-center gap-3">
            {label && <span className="text-white/80 text-sm font-semibold">{label}</span>}
            <span className="text-white/50 text-sm">{index + 1} / {formattedPhotos.length}</span>
          </div>
        </div>
      )}
    </>
  );
}
