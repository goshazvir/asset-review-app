import Link from 'next/link';
import { ROUTES } from '@/config';

interface DetailHeaderProps {
  briefName: string;
}

export function DetailHeader({
  briefName,
}: DetailHeaderProps) {
  return (
    <header className="sticky top-0 z-10 bg-black border-b border-zinc-800">
      <div className="flex items-center justify-center h-14 px-4 relative">
        <Link
          href={ROUTES.ASSETS}
          className="absolute left-4 p-2 text-white hover:bg-zinc-800 rounded-lg transition-colors"
          aria-label="Back to assets"
        >
          <ChevronLeftIcon className="h-6 w-6" />
        </Link>
        <h1 className="text-lg font-semibold text-white">{briefName}</h1>
      </div>
    </header>
  );
}

function ChevronLeftIcon({ className }: { className?: string }) {
  return (
    <svg
      className={className}
      fill="none"
      viewBox="0 0 24 24"
      strokeWidth={2}
      stroke="currentColor"
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M15.75 19.5 8.25 12l7.5-7.5"
      />
    </svg>
  );
}
