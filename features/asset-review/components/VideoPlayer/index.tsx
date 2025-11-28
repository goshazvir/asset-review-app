'use client';

interface VideoPlayerProps {
  src: string;
  poster?: string;
  className?: string;
}

export function VideoPlayer({ src, poster, className }: VideoPlayerProps) {
  return (
    <video
      src={src}
      poster={poster}
      controls
      playsInline
      className={className}
      preload="metadata"
    >
      <track kind="captions" />
      Your browser does not support the video tag.
    </video>
  );
}
