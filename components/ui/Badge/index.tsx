import { cn } from '@/utils';
import type { ReactNode } from 'react';

interface BadgeProps {
  children: ReactNode;
  className?: string;
  variant?: 'default' | 'outline';
}

export function Badge({ children, className, variant = 'default' }: BadgeProps) {
  return (
    <span
      className={cn(
        'inline-flex items-center gap-1.5 rounded-lg px-2 py-0.5 text-xs font-medium',
        variant === 'default' && 'bg-zinc-800 text-zinc-300',
        variant === 'outline' && 'border border-zinc-700 text-zinc-300',
        className
      )}
    >
      {children}
    </span>
  );
}
