'use client';

import { useState } from 'react';
import Image from 'next/image';

interface AssetThumbnailProps {
  src: string;
  alt: string;
}

export function AssetThumbnail({ src, alt }: AssetThumbnailProps) {
  const [imageError, setImageError] = useState(false);

  if (imageError || !src) {
    return (
      <div className="absolute inset-0 flex items-center justify-center text-zinc-600">
        <VideoIcon className="h-12 w-12" />
      </div>
    );
  }

  return (
    <Image
      src={src}
      alt={alt}
      fill
      className="object-cover"
      onError={() => setImageError(true)}
    />
  );
}

function VideoIcon({ className }: { className?: string }) {
  return (
    <svg className={className} fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
      <path strokeLinecap="round" strokeLinejoin="round" d="m15.75 10.5 4.72-4.72a.75.75 0 0 1 1.28.53v11.38a.75.75 0 0 1-1.28.53l-4.72-4.72M4.5 18.75h9a2.25 2.25 0 0 0 2.25-2.25v-9a2.25 2.25 0 0 0-2.25-2.25h-9A2.25 2.25 0 0 0 2.25 7.5v9a2.25 2.25 0 0 0 2.25 2.25Z" />
    </svg>
  );
}
