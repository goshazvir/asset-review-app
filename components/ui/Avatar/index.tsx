'use client';

import { cn } from '@/utils';
import Image from 'next/image';
import { useState } from 'react';

interface AvatarProps {
  src?: string;
  alt: string;
  size?: 'sm' | 'md' | 'lg';
  className?: string;
}

const sizeClasses = {
  sm: 'h-8 w-8',
  md: 'h-10 w-10',
  lg: 'h-12 w-12',
};

export function Avatar({ src, alt, size = 'md', className }: AvatarProps) {
  const [error, setError] = useState(false);

  const initials = alt
    .split(' ')
    .map((word) => word[0])
    .join('')
    .slice(0, 2)
    .toUpperCase();

  if (error || !src) {
    return (
      <div
        className={cn(
          'flex items-center justify-center rounded-xl bg-zinc-700 text-sm font-medium text-zinc-300',
          sizeClasses[size],
          className
        )}
      >
        {initials}
      </div>
    );
  }

  return (
    <div className={cn('relative overflow-hidden rounded-xl', sizeClasses[size], className)}>
      <Image
        src={src}
        alt={alt}
        fill
        className="object-cover"
        onError={() => setError(true)}
      />
    </div>
  );
}
