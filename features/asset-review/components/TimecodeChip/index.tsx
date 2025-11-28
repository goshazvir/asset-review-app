'use client';

interface TimecodeChipProps {
  timecode: string;
  onClick?: () => void;
}

export function TimecodeChip({ timecode, onClick }: TimecodeChipProps) {
  return (
    <button
      onClick={onClick}
      className="inline-flex items-center gap-1.5 text-accent hover:text-accent-hover transition-colors"
    >
      <ClockIcon className="h-4 w-4" />
      <span className="text-sm font-medium">{timecode}</span>
    </button>
  );
}

function ClockIcon({ className }: { className?: string }) {
  return (
    <svg
      className={className}
      fill="none"
      viewBox="0 0 24 24"
      strokeWidth={1.5}
      stroke="currentColor"
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M12 6v6h4.5m4.5 0a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z"
      />
    </svg>
  );
}
