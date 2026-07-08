import { useState } from "react";

interface DriveVideoPreviewProps {
  fileId: string;
  label: string;
}

export function DriveVideoPreview({ fileId, label }: DriveVideoPreviewProps) {
  const [isPlaying, setIsPlaying] = useState(false);
  const thumbnailUrl = `https://drive.google.com/thumbnail?id=${fileId}&sz=w800`;

  return (
    <div id={`drive-preview-${fileId}`} className="rounded-2xl overflow-hidden border border-[#EDE5DC] shadow-sm">
      <p className="text-[10px] font-bold text-[#8B6F47] uppercase tracking-widest px-3 py-2 bg-[#F5EFE7]">
        {label}
      </p>
      <div className="relative w-full pb-[56.25%] h-0 bg-black">
        {isPlaying ? (
          <iframe
            src={`https://drive.google.com/file/d/${fileId}/preview`}
            className="absolute top-0 left-0 w-full h-full border-0"
            allow="autoplay"
            title={label}
          />
        ) : (
          <div
            onClick={() => setIsPlaying(true)}
            className="absolute top-0 left-0 w-full h-full cursor-pointer flex items-center justify-center group"
          >
            <img
              src={thumbnailUrl}
              alt={label}
              className="absolute top-0 left-0 w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
              onError={(e) => {
                (e.target as HTMLImageElement).style.display = "none";
              }}
            />
            {/* Play Button Overlay */}
            <div className="absolute inset-0 bg-black/30 group-hover:bg-black/10 transition-colors" />
            <div className="relative z-10 w-16 h-16 bg-white/90 rounded-full flex items-center justify-center shadow-xl group-hover:scale-110 transition-transform">
              <svg
                className="w-7 h-7 text-[#C89565] ms-1"
                fill="currentColor"
                viewBox="0 0 24 24"
              >
                <path d="M8 5v14l11-7z" />
              </svg>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
